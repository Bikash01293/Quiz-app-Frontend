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
        <div class="navbar-nav mr-auto" v-if="isAuthenticated">
          <router-link
            class="nav-link text-light font-weight-bold px-3"
            :to="{ name: 'TeacherApp' }"
            >HOME</router-link
          >

          <router-link
            class="nav-link text-light font-weight-bold px-3"
            :to="{ name: 'CreateQuizApp' }"
            >CREATE QUIZ</router-link
          >
          <router-link
            class="nav-link text-light font-weight-bold px-3"
            :to="{ name: 'UploadQuizApp' }"
            >UPLOAD QUIZ</router-link
          >

          <router-link
            class="nav-link text-light font-weight-bold px-3"
            :to="{ name: 'ViewStudentByTeacherApp' }"
            >VIEW STUDENTS</router-link
          >
        </div>

        <router-view />

        <router-link
        v-if="isAuthenticated"
          @click="logout()"
          class="nav-link text-light font-weight-bold px-3"
          to="/login/teacher"
          >LOGOUT</router-link
        >
        <router-link
          v-if="!isAuthenticated"
          class="nav-link text-light font-weight-bold px-3"
          to="/login/teacher"
          >LOGIN</router-link
        >
      </div>
    </nav>

    <!-- <transition name="moveInUp">
         <router-view/>
    </transition> -->
  </div>
</template>

<script>
export default {
  name: "TeacherNavbar",
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
/* .moveInUp-enter-active{
  animation: fadeIn 1s ease-in;
}
@keyframes fadeIn{
  0%{
    opacity: 0;
  }
  50%{
    opacity: 0.5;
  }
  100%{
    opacity: 1;
  }
} */
</style>