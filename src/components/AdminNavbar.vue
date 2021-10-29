<template>
  <div>
    <nav class="navbar navbar-expand-md navbar-light bg-dark fixed-top">
      <button
        type="button"
        class="navbar-toggler bg-light"
        data-toggle="collapse"
        data-target="#nav"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse justify-content-between" id="nav">
        <!-- Adding router link for Teachers and Students -->
        <div class="navbar-nav mr-auto" v-if="isAuthenticated">
          <router-link
            
            class="nav-link text-light font-weight-bold px-3"
            :to="{ name: 'ViewTeacherByAdminApp' }"
            >TEACHERS</router-link
          >
          <router-link
            
            class="nav-link text-light font-weight-bold px-3"
            :to="{ name: 'ViewStudentByAdminApp' }"
            >STUDENTS</router-link
          >
        </div>
        <router-view />
        <router-link
          v-if="isAuthenticated"
          @click="logout()"
          class="nav-link text-light font-weight-bold px-3"
          to="/login/admin"
          >LOGOUT</router-link
        >
        <!-- If the user is not Authenticated then this router link will appear -->
        <router-link
          v-if="!isAuthenticated"
          class="nav-link text-light font-weight-bold px-3"
          to="/login/admin"
          >LOGIN</router-link
        >
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "AdminNavbar",
  computed: {

    // we are isAuthenticated getting the state from the store to restrict the router link
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;
    },
  },
  methods: {
    // logout method is dispathed to the action of the store to remove the data from the local storage
    logout() {
      this.$store
        .dispatch("logout")
        .then(() => this.$router.push({ name: "LoginByAdminApp" }));
    },
  },
};
</script>

<style scoped>
</style>