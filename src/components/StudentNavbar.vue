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
        <div class="navbar-nav mr-auto"  v-if="isAuthenticated">
          <router-link
            class="nav-link text-light font-weight-bold px-3"
            to="/student/home"
            >HOME</router-link
          >
        </div>

        <router-view />

        <router-link
          v-if="isAuthenticated"
          @click="logout()"
          class="nav-link text-light font-weight-bold px-3"
          to="/login/student"
          >LOGOUT</router-link
        >

        <router-link
          v-if="!isAuthenticated"
          class="nav-link text-light font-weight-bold px-3"
          to="/login/student"
          >LOGIN</router-link
        >
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "StudentNavbar",
  computed: {
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;
    },
  },
  methods: {
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