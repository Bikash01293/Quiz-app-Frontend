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

      <div class="collapse navbar-collapse justify-content-between" id="nav" >
        <!-- Adding router link for Home -->
        <div class="navbar-nav mr-auto"  v-if="isAuthenticated">
          <router-link
            class="nav-link text-light font-weight-bold px-3"
            to="/student/home"
            >HOME</router-link
          >
        </div>
        <router-link
          v-if="isAuthenticated"
          @click="logout()"
          class="nav-link text-light font-weight-bold px-3"
          to="/login/student"
          >LOGOUT</router-link
        >
        <!-- If the user is not Authenticated then this router link will appear -->
        <router-link
          v-if="!isAuthenticated"
          class="nav-link text-light font-weight-bold px-3"
          to="/login/student"
          >LOGIN</router-link
        >
      </div>
      <router-view />
    </nav>
  </div>
</template>

<script>
export default {
  name: "StudentNavbar",
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
        .then(() => this.$router.push({ name: "LoginApp" }));
    },
  },
};
</script>

<style scoped>
</style>