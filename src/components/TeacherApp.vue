<template>
  <div>
    <TeacherNavbar />

    <div class="table-responsive" v-if="isAuthenticated">
      <div class="container">
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Quiz Titles</th>
              <th scope="col">Descriptions</th>
              <th scope="col">View Questions</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <!-- Table to display all the quizes to the teacher where quizes and questions can be seen, created, and deleted. Teacher can also see the students and if any issue they can be blocked and unblocked. -->
          <tbody v-for="quizz in quizzes" :key="quizz._id">
            <tr v-for="(q, index) in quizz" :key="q._id">
              <th scope="row">{{ index + 1 }}</th>
              <td>{{ q.quizname }}</td>
              <td>{{ q.quizdescription }}</td>
              <td>
                <button @click="viewQuestion(q._id)" class="btn-show ml-5">
                  <b-icon icon="eye"></b-icon>
                </button>
              </td>

              <td>
                <button
                  variant="success"
                  class="mb-2 btn-danger ml-1"
                  @click="removeQuiz(q._id), makeToast('success')"
                >
                  <b-icon icon="trash-fill"></b-icon>
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
    <div v-else class="container">
        <div class="alert alert-warning" role="alert">
          <strong>This is a warning please—check your email or password is correct or not and click on login to relogin!</strong>
        </div>
    </div>
  </div>
</template>

<script>
import TeacherNavbar from "@/components/TeacherNavbar";
import { getAllQuizzes, deleteQuiz, getQuizzes } from "@/services/teacher";

export default {
  name: "TeacherApp",
  components: {
    TeacherNavbar,
  },
   computed: {
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;
    }
  },
  data() {
    return {
      status: "LOADING",
      quizzes: [],
      questions: [],
      quizId: "",
    };
  },
  methods: {
    async removeQuiz(quizId) {
      try {
        console.log(quizId);
        const quizRemoved = await deleteQuiz(quizId);
        this.quizzes = await getQuizzes();
        this.quizRemoved = quizRemoved;
        console.log(quizRemoved);
      } catch (error) {
        alert(error.message);
      }
    },
    makeToast(variant = null) {
      this.$bvToast.toast("Quizz Successsfully Deleted !", {
        title: `${variant || "default"}`,
        variant: variant,
        solid: true,
      });
    },

    viewQuestion(Id) {
      // console.log(Id)
      this.$router.push({
        name: "ViewQuestionByTeacherApp",
        params: {
          quizid: Id,
        },
        props: true,
      });
    },
  },
  async created() {
    try {
      const quizzesData = await getAllQuizzes();
      this.status = "LOADED";
      console.log(quizzesData);
      this.quizzes = quizzesData;
    } catch (error) {
      this.status = "ERROR";
      console.error(error.message);
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