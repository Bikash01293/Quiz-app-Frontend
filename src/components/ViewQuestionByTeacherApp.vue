<template>
  <div>
    <TeacherNavbar />
    <!-- Teacher can see questions over here -->
    <div class="container" v-for="question in questions" :key="question._id">
      <div class="box" v-for="(q, index) in question" :key="q._id">
        Question{{ index + 1 }}: {{ q.questionText }}<br /><br />
        <div v-for="option in q.options" :key="option._id">
          <input type="checkbox" value="studio_apartment" />
          {{ option }}<br /><br />
        </div>
        Answer: {{ q.answer }}<br /><br />
        <b-button @click="removeQuiz(q._id)" variant="danger">Delete</b-button>
      </div>
    </div>
    <AppSpinner
      v-if="status === 'LOADING'"
      size="large"
      theme="primary"
    />
    <AppAlert v-else-if="status === 'ERROR'" theme="danger">
      <template v-slot:heading>
        <span>Error</span>
        <hr />
      </template>
      <template v-slot:body>
        {{ error.message }}
      </template>
    </AppAlert>
  </div>
</template>

<script>
import TeacherNavbar from "@/components/TeacherNavbar";
import {
  getAllQuestions,
  deleteQuestion,
  getQuestions,
} from "@/services/teacher";
// getQuestions
export default {
  name: "ViewQuestionByTeacherApp",
  components: {
    TeacherNavbar,
  },
  data() {
    return {
      questions: [],
      quizId: "",
      status: 'LOADING'
    };
  },
  methods: {
    async removeQuiz(questionId) {
      try {
        // console.log(questionId)
        const questionRemoved = await deleteQuestion(questionId);
        const q = localStorage.getItem("quizId");
        const QuestionData = await getQuestions(q);
        // console.log(QuestionData)
        this.questions = QuestionData;

        this.questionRemoved = questionRemoved;
        console.log(questionRemoved);
      } catch (error) {
        alert(error.message);
      }
    },
  },
  async created() {
    const q = localStorage.getItem("quizId");
    // console.log(q)
    try {
      const QuestionData = await getAllQuestions(q);
      this.status = 'LOADED'
      // console.log(QuestionData)
      this.questions = QuestionData;
    } catch (error) {
      this.error =  'ERROR'
      console.error(error.message);
    }
  },
};
</script>

<style scoped>
.container {
  margin-top: 107px;
}
.cursor {
  cursor: pointer;
}
.box {
  display: block;
  padding: 30px;
  margin-bottom: 30px;
  text-align: justify;
  border: 1px solid lightgray;
  background: lightgray;
  border-radius: 10px;
}
</style>