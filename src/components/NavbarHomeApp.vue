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
        <!-- Adding router link for Students, Teachers, Admin -->
        <div class="navbar-nav mr-auto">
          <router-link
            class="nav-link text-light font-weight-bold px-3"
            to="/login/admin"
            >FYND QUIZ</router-link
          >

          <router-link
            class="nav-link text-light font-weight-bold px-3"
            to="/login/student"
            >STUDENT</router-link
          >

          <router-link
            class="nav-link text-light font-weight-bold px-3"
            to="/login/teacher"
            >TEACHER</router-link
          >

          <router-link
            class="nav-link text-light font-weight-bold px-3"
            to="/login/admin"
            >ADMIN</router-link
          >
          
        </div>

        <router-view />
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavbarHomeApp",
};
</script>

<style scoped>
</style>