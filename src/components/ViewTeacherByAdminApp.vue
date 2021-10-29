<template>
  <div>
    <AdminNavbar />
    <!-- Admin can make teacher inactive if the teacher is not present or active if present. -->
    <div class="table-responsive" v-if="isAuthenticated">
      <div class="container">
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Email</th>

              <th scope="col">State</th>
            </tr>
          </thead>
          <tbody v-for="teacher in teachers" :key="teacher._id">
            <tr v-for="(t, index) in teacher" :key="t._id">
              <th scope="row">{{ index + 1 }}</th>
              <td>{{ t.email }}</td>

              <td v-if="t.blocked === true">
                <button
                  class="button"
                  @click="inactive(t._id), makeToastActive('success')"
                >
                  <b-icon
                    icon="x-circle"
                    scale="2"
                    variant="danger"
                    class="ml-1"
                  ></b-icon>
                </button>
              </td>
              <td v-else-if="t.blocked === false">
                <button
                  class="button"
                  @click="active(t._id), makeToastInActive('danger')"
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
    <div v-else class="container">
        <div class="alert alert-warning" role="alert">
          <strong>This is a warning please—check your email or password is correct or not and click on login to relogin!</strong>
        </div>
    </div>
  </div>
</template>

<script>
import AdminNavbar from "@/components/AdminNavbar";
import {
  seeTeachers,
  activeTeacher,
  inactiveTeacher,
  viewTeachers,
} from "@/services/admin";

export default {
  name: "ViewTeacherByAdminApp",
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
      teachers: [],
    };
  },
  methods: {
    async active(activeId) {
      try {
        console.log(activeId);
        const studentBlocked = await activeTeacher(activeId);
        console.log(studentBlocked);
        const teachersData = await viewTeachers();
        this.teachers = teachersData;
      } catch (error) {
        alert(error.message);
      }
    },
    async inactive(inactiveId) {
      try {
        console.log(inactiveId);
        const studentBlocked = await inactiveTeacher(inactiveId);
        console.log(studentBlocked);
        const teachersData = await viewTeachers();
        this.teachers = teachersData;
      } catch (error) {
        alert(error.message);
      }
    },
    makeToastActive(variant = null) {
      this.$bvToast.toast("Please hold on the mode of the teacher will be Active soon !", {
        title: `${variant || "default"}`,
        variant: variant,
        solid: true,
      });
    },
    makeToastInActive(variant = null) {
      this.$bvToast.toast("Please hold on the mode of the teacher will be InActive soon !", {
        title: `${variant || "default"}`,
        variant: variant,
        solid: true,
      });
    },
    
  },
  async created() {
    try {
      const teachersData = await seeTeachers();
      this.status = "LOADED";
      console.log(teachersData);
      this.teachers = teachersData;
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