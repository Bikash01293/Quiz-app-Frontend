<template>
  <div>
    <TeacherNavbar />

    <div class="table-responsive">
      <div class="container">
        <!-- This table shows the teacher to see, create and delete quizes altough they can add, view, and delete questions. -->
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Quiz Titles</th>
              <th scope="col">Descriptions</th>
              <th scope="col">View Questions</th>
              <th scope="col">Add Question</th>
              <th scope="col">Upload</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody v-for="quizz in quizzes" :key="quizz._id">
            <tr v-for="(q, index) in quizz" :key="q._id">
              <th scope="row">{{ index + 1 }}</th>

              <td>
                {{ q.quizname }}
              </td>

              <td>
                {{ q.quizdescription }}
              </td>

              <td>
                <button @click="viewQuestion(q._id)" class="btn-show ml-5">
                  <b-icon icon="eye"> </b-icon>
                </button>
              </td>

              <td>
                <b-button
                  @click="addQuestion(q._id)"
                  variant="outline-primary"
                  class="ml-4"
                  >Add
                </b-button>
              </td>

              <td>
                <b-button variant="success" @click="uploadQuiz(q._id)"
                  >Upload
                </b-button>
              </td>

              <td>
                <button
                  variant="success"
                  class="mb-2 btn-danger ml-1"
                  @click="removeQuiz(q._id), makeToast('success')"
                >
                  <b-icon icon="trash-fill"> </b-icon>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
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
    </div>
  </div>
</template>

<script>
import TeacherNavbar from "@/components/TeacherNavbar";
import {
  getAllQuizzes,
  deleteQuiz,
  getQuizzes,
  quizUpload,
  getAllQuestionsByQuizId,
} from "@/services/teacher";

export default {
  name: "UploadQuiz",
  components: {
    TeacherNavbar,
  },
  data() {
    return {
      status: "LOADING",
      error: null,
      quizzes: [],
      quizId: "",
      questions: [],
    };
  },
  methods: {
    async removeQuiz(quizId) {
      try {
        // console.log(quizId)
        const quizRemoved = await deleteQuiz(quizId);
        this.quizzes = await getQuizzes();
        this.quizRemoved = quizRemoved;
        // console.log(quizRemoved);
      } catch (error) {
        alert(error.message);
      }
    },
    makeToast(variant = null) {
      this.$bvToast.toast("Please hold on the quizz will be Successsfully Deleted !", {
        title: `${variant || "default"}`,
        variant: variant,
        solid: true,
      });
    },
    makeToastUpload(variant = null) {
      this.$bvToast.toast("Quizz Uploaded Successfully !", {
        title: `${variant || "default"}`,
        variant: variant,
        solid: true,
      });
    },
    addQuestion(Ids) {
      this.$router.push({
        name: "AddQuestionByTeacher",
        params: {
          quizids: Ids,
        },
        props: true,
      });
    },
    viewQuestion(Id) {
      this.$store.commit("setQuizId", Id);
      // console.log('vuex store check',this.$store.state.auth.quizId)
      this.$router.push({
        name: "ViewQuestionByTeacherApp",
        params: {
          quizid: Id,
        },
        props: true,
      });
    },
    async uploadQuiz(quizId) {
      const questionData = await getAllQuestionsByQuizId(quizId);
      // console.log(questionData.questions)
      this.questions = questionData.questions;
      if (this.questions.length >= 5) {
        await quizUpload(quizId);
        this.makeToastUpload("success");
      } else {
        this.uploadRequest("warning");
      }
    },
    uploadRequest(variant = null) {
      this.$bvToast.toast(
        "You must have 5 question in the quiz for upload quiz!!",
        {
          title: `${variant || "default"}`,
          variant: variant,
          solid: true,
        }
      );
    },
  },
  async created() {
    try {
      const quizzesData = await getAllQuizzes();
      // console.log(quizzesData)
      this.status = "LOADED";
      this.quizzes = quizzesData;
    } catch (error) {
      // console.error(error.message)
      this.status = "ERROR";
      this.error = error;
    }
  },
};
</script>

<style scoped>
.container {
  margin-top: 107px;
}
.btn-show {
  background: none;
  border: none;
}
.btn-danger {
  background: none;
  border: none;
  color: red;
}
</style>