<template>
  <div>
    <StudentNavbar />
   
    <div class="d-flex justify-content-center container">
      <!-- If the show score is true then displaying the result of the quiz attended by the attendee. -->
      <div v-if="showScore">
        <div class="modal">
            <button @click="showModal = true" class="button">Show Results</button>
            <transition name="fade" appear>
              <div class="modal-overlay" 
                  v-if="showModal" 
                  @click="showModal = false"></div>
            </transition>
            <transition name="pop" appear>
              <div class="modal" 
                  role="dialog" 
                  v-if="showModal"
                  >
                <h1 class="score">Score</h1>
                <p> <strong>Thankyou !</strong> for attending this test your scores is below please check it out and if you want to play again please close the score board and click on Home. </p>
                <p>
                   You Scored <strong>{{ score }}</strong> of <strong>{{ questions.length }}</strong>
                </p>
                <button @click="showModal = false" class="button">Close</button>

              </div>
            </transition>
          </div>
      </div>
      <!-- If the showScore is false then displaying the button to play quiz. -->
      <div class="card-q" v-else>
        <!--If the startQuiz is not false i.e true then displaying the instructions and button to start the quiz. -->
        <div v-if="!startQuiz">
        <span >
          <b-card
            img-src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
            img-alt="Image"
            img-top
            title="Are you ready to Play Quiz"
            style="max-width: 300vw"
            class="mb-2"
          >
            <b-card-text>powered by Bikash. </b-card-text>
            <b-button @click="startQuizFunc()">Start Quiz</b-button>
          </b-card>
        </span>
        <br /><br />
        <div class="alert alert-warning" role="alert">
          <h4 class="alert-heading">Instructions</h4>
          <p><ul>
            <li>
              Make sure there would be only 10 seconds for each questions.
            </li>
            <li>
              And if you didn't mark at the given time  alloted it would skip to the next question.
            </li>
          </ul></p>
          <hr>
          <p class="mb-0">Please wait for the result at the the end <strong>Best of Lunk !</strong></p>
        </div>
        </div>
         <!-- Displaying question at a interval of 10 seconds for each questions . -->
        <span v-else>
          <b-card
            title="Simple Quiz Application"
            style="max-width: 20rem"
            class="mb-2"
          >
            <b-card-text>
              Question No.{{ currentQuestion + 1 }} of {{ questions.length }}
            </b-card-text>
            <br />
            <b-progress
              variant="warning"
              :max="10"
              :value="countDown"
              height="4px"
            ></b-progress>

            <b-card-text>
              <span style="font-size: 40px">
                <strong>{{ countDown }} </strong>
              </span>
            </b-card-text>
            <b-card-text>
              {{ questions[currentQuestion].questionText }}
            </b-card-text>
            <div class="answer-section">
              <b-button
                :key="index"
                v-for="(option, index) in questions[currentQuestion].options"
                @click="
                  handleAnswerClick(option, questions[currentQuestion].answer)
                "
                class="ans-option-btn"
                variant="primary"
              >
                {{ option }}
              </b-button>
            </div>
          </b-card>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import StudentNavbar from "@/components/StudentNavbar";
import { getAllQuestions, getQuestions } from "@/services/student";

export default {
  name: "PlayQuestionByStudent",
  components: {
    StudentNavbar,
  },
  data() {
    return {
      questions: [],
      currentQuestion: 0,
      showScore: false,
      score: 0,
      countDown: 10,
      timer: null,
      startQuiz: false,
      showModal: true
    };
  },
  methods: {
    async getAllQuestions() {
      try {
        const questionsData = await getQuestions(this.quizId);
        console.log(questionsData.quiz);
        this.questions = questionsData.quiz;
      } catch (error) {
        alert(error.message);
      }
    },

    startQuizFunc() {
      this.startQuiz = true;
      this.countDownTimer();
    },
    handleAnswerClick(option, answer) {
      console.log(answer);
      clearTimeout(this.timer);
      let nextQuestion = this.currentQuestion + 1;
      if (option === answer) {
        this.score = this.score + 1;
      }
      if (nextQuestion < this.questions.length) {
        this.currentQuestion = nextQuestion;
        this.countDown = 10;
        this.countDownTimer();
      } else {
        this.showScore = true;
      }
    },
    countDownTimer() {
      if (this.countDown > 0) {
        this.timer = setTimeout(() => {
          this.countDown -= 1;
          this.countDownTimer();
        }, 1000);
      } else {
        this.handleAnswerClick(false);
      }
    },
  },
  async created() {
    this.quizId = this.$route.params.quizid;
    const q = this.quizId;
    try {
      const QuestionData = await getAllQuestions(q);
      console.log(QuestionData);
      this.questions = QuestionData.msg;
    } catch (error) {
      console.error(error.message);
    }
  },
};
</script>

<style scoped>
.container {
  margin-top: 107px;
}
.box {
  display: block;
  padding: 30px;
  margin-bottom: 30px;
  text-align: justify;
  border: 1px solid lightgray;
  border-radius: 10px;
}

.card {
  min-width: 100%;
  border-radius: 15px;
  padding: 20px;
  box-shadow: 10px 10px 42px 0px rgba(0, 0, 0, 0.75);
}
.card-q {
  min-width: 60%;
}
.ans-option-btn {
  min-width: 50%;
  font-size: 16px;
  color: #ffffff;
  align-items: center;
  cursor: pointer;
  margin-bottom: 5px;
}
.answer-section {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.timer-text {
  background: rgb(230, 153, 12);
  padding: 15px;
  margin-top: 20px;
  margin-right: 20px;
  border: 5px solid rgb(255, 189, 67);
  border-radius: 15px;
  text-align: center;
}
.card-img,
.card-img-top {
  border-top-left-radius: calc(0.25rem - 1px);
  border-top-right-radius: calc(0.25rem - 1px);
  height: 350px;
}
.modal {
  min-height: 65%;
  margin: 0;
  display: grid;
  place-items: center;
  font-size: 1.4rem;
}
.button {
  border: none;
  color: #FFF;
  background: #42b983;
  appearance: none;
  font: inherit;
  font-size: 1.8rem;
  padding: .5em 1em;
  border-radius: .3em;
  cursor: pointer;
}

.modal {
  position: absolute;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  text-align: center;
  width: fit-content;
  height: fit-content;
  padding: 2rem;
  border-radius: 1rem;
  
  background: #FFF;
  z-index: 999;
  transform: none;
}
.modal h1 {
  margin: 0 0 1rem;
}

.modal-overlay {
  content: '';
  position: absolute;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 998;
  background: #2c3e50;
  opacity: 0.6;
  cursor: pointer;
}

/* ---------------------------------- */
.fade-enter-active,
.fade-leave-active {
  transition: opacity .4s linear;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.pop-enter-active,
.pop-leave-active {
  transition: transform 0.4s cubic-bezier(0.5, 0, 0.5, 1), opacity 0.4s linear;
}

.pop-enter,
.pop-leave-to {
  opacity: 0;
  transform: scale(0.3) translateY(-50%);
}

.score {
  color: blue;
}
</style>