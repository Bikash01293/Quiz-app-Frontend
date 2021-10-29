<template>
  <div>
    <AdminNavbar />
    <!-- Admin can block and ublock students for any mischevious activities if found. -->
    <div class="table-responsive" v-if="isAuthenticated">
      <div class="container">
        <div class="alert alert-warning" role="alert">
          <h4 class="alert-heading">Instructions</h4>
          <p><ul>
            <li>
              The tick in green colour means the student is unblocked make sure if you click on the green tick box the student will be blocked and its state would be changed.
            </li>
            <li>
              Simillary the cross in red color means the student is blocked if you want to unblock the student click on the red cross circle.
            </li>
          </ul></p>
          <hr>
          <p class="mb-0">Please go a head to make changes if you wish <strong>Thank you !</strong></p>
        </div>
        <br />
        <br />
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Email</th>
              <th scope="col">State</th>
            </tr>
          </thead>
          
          <tbody v-for="student in students" :key="student._id">
            <tr v-for="(s, index) in student" :key="s._id">
              <th scope="row">{{ index + 1 }}</th>
              <td>{{ s.email }}</td>
              <td v-if="s.blocked === true">
                <button
                  class="button"
                  @click="unblock(s._id), makeToastUnblock('success')"
                >
                  <b-icon
                    icon="x-circle"
                    scale="2"
                    variant="danger"
                    class="ml-1"
                  ></b-icon>
                </button>
              </td>
              <td v-else-if="s.blocked === false">
                <button
                  class="button"
                  @click="block(s._id), makeToastBlock('danger')"
                >
                  <b-icon
                    icon="check-square"
                    scale="2"
                    variant="success"
                    class="ml-1"
                  ></b-icon>
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
import AdminNavbar from "@/components/AdminNavbar";
import {
  seeStudents,
  blockStudent,
  unblockStudent,
  viewStudents,
} from "@/services/admin";
export default {
  name: "ViewStudentByAdminApp",
  components: {
    AdminNavbar,
  },
  computed: {
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;
    }
  },
  data() {
    return {
      status: "LOADING",
      students: [],
    };
  },
  methods: {
    async block(blockId) {
      try {
        console.log(blockId);
        const studentBlocked = await blockStudent(blockId);
        console.log(studentBlocked);
        const studentData = await viewStudents();
        this.students = studentData;
      } catch (error) {
        alert(error.message);
      }
    },
    async unblock(unblockId) {
      try {
        console.log(unblockId);
        const studentBlocked = await unblockStudent(unblockId);
        console.log(studentBlocked);
        const studentData = await viewStudents();
        this.students = studentData;
      } catch (error) {
        alert(error.message);
      }
    },
    makeToastBlock(variant = null) {
      this.$bvToast.toast(" Please hold on the student will be Successfully Blocked !", {
        title: `${variant || "default"}`,
        variant: variant,
        solid: true,
      });
    },
    makeToastUnblock(variant = null) {
      this.$bvToast.toast(" Please hold on the student will be Successfully Blocked !", {
        title: `${variant || "default"}`,
        variant: variant,
        solid: true,
      });
    },
  },
  async created() {
    try {
      const studentsData = await seeStudents();
      this.status = "LOADED";
      console.log(studentsData);
      this.students = studentsData;
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
.button {
  background: none;
  border: none;
}
</style>