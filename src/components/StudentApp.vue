<template>
  <div>
    <StudentNavbar />

    <div class="table-responsive" v-if="isAuthenticated">
      <div class="container">
        <!-- Displaying all the quiz to play -->
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Quiz Titles</th>
              <th scope="col">Descriptions</th>
              <th scope="col">Quiz Creater's emails</th>
              <th scope="col">Play Quiz</th>
            </tr>
          </thead>
          <tbody v-for="quizz in quizzes" :key="quizz._id">
            <tr v-for="(q, index) in quizz" :key="q._id">
              <th scope="row">{{ index + 1 }}</th>
              <td>{{ q.quizname }}</td>
              <td>{{ q.quizdescription }}</td>
              <td>{{ q.owneremail }}</td>
              <td>
                <button @click="playQuestions(q._id)" class="btn-show ml-4">
                  <b-icon icon="play-btn"></b-icon>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <!-- Used appspinner if the question is not loaded -->
        <AppSpinner
            v-if="status === 'LOADING'"
            size="large"
            theme="primary"
          />
          <!-- Further the alert will be shown if there is some error in loading quiz -->
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
import StudentNavbar from "@/components/StudentNavbar";
import { getAllQuizzes } from "@/services/student";

export default {
  name: "StudentApp",
  components: {
    StudentNavbar,
  },
  computed: {
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;
    }
  },
  data() {
    return {
      status: "LOADING",
      error: null,
      quizzes: [],
    };
  },
  methods: {
    playQuestions(Id) {
      this.$router.push({
        name: "PlayQuestionByStudent",
        params: {
          quizid: Id,
        },
        props: true,
      });
    },
  },
  async created() {
    try {
      const quizzes = await getAllQuizzes();
      this.status = "LOADED";
      this.quizzes = quizzes;
      console.log(quizzes);
    } catch (error) {
      this.error = "ERROR";
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
</style>