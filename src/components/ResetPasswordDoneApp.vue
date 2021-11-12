<template>
  <div>
    <NavbarHomeApp />

    <b-card
      overlay
      img-src="../assets/image/quiz-app.jpg"
      img-alt="Card Image"
      text-variant="Black"
      class="img-fluid"
      alt="Responsive image"
    >
      <b-card
        class="contain"
        img-src="../assets/image/FYND.png"
        img-alt="Card image"
        img-right
      >
        <br /><br />
        <h3>Please Enter email to reset Password</h3>
        <br />
        <br />
        <!-- Form details is shared for reseting the password  -->
        <form @submit.prevent>
          <input
            type="text"
            id="Email"
            class="fadeIn second"
            name="Email"
            placeholder="Email"
            v-model="form.email"
          />
          <br />
          <br />

          <input
            type="number"
            id="OTP"
            class="fadeIn third"
            name="OTP"
            placeholder="OTP"
            v-model="form.otp"
          />
          <br />
          <br />
          <input
            type="password"
            id="enterPassword"
            class="fadeIn third"
            name="enterPassword"
            placeholder="Enter Password"
            v-model="form.p1"
          />
          <br />
          <br />
          <input
            type="password"
            id="renter"
            class="fadeIn third"
            name="renter"
            placeholder="Reenter Password"
          />
          <br />
          <br />
          <input
            variant="success"
            @click="forgotPassword, makeToast('success')"
            type="submit"
            class="fadeIn fourth"
            value="Reset"
          />
          <!-- <router-link to="/resetpassworddone"></router-link> -->
        </form>
      </b-card>
    </b-card>

    <footer>
      <p class="link-img-by">
        Powered by Bikash<br />
        <a href="bikashkumar01293@gmail.com" class="link-img"
          >bikashkumar01293@gmail.com</a
        >
      </p>
    </footer>
  </div>
</template>

<script>
import NavbarHomeApp from "@/components/NavbarHomeApp";
import { resetPasswordDone } from "@/services/reset";
export default {
  name: "ResetPasswordDoneApp",
  components: {
    NavbarHomeApp,
  },
  data() {
    return {
      form: {
        email: "",
        otp: "",
        p1: "",
      },
      p2: "",
    };
  },
  methods: {
    async resetPassword() {
      try {
        console.log(this.form);
        await resetPasswordDone(this.form);
      } catch (error) {
        alert(error.message);
      }
    },
    makeToast(variant = null) {
      this.$bvToast.toast("Please go to the login page !", {
        title: `${variant || "default"}`,
        variant: variant,
        solid: true,
      });
    },
  },
};
</script>

<style scoped>
.contain {
  margin-top: 325px;
}
footer {
  text-align: center;
  padding: 3px;
  background-color: #b9b9b9;
  color: white;
}
.img-fluid {
  max-width: 100%;
  height: auto;
}
.link-img {
  color: black;
  text-decoration: none;
  font-family: "Times New Roman", Times, serif;
}
.column {
  float: left;
  width: 33%;
  padding: 10px;
  height: 600px;
  text-align: center;
  margin-top: 15vw;
}
.row {
  font-family: Georgia, "Times New Roman", Times, serif;
  font-weight: bold;
}

/* Float four columns side by side */
.column {
  float: left;
  width: 33.33%;
  padding: 0 10px;
}

/* Remove extra left and right margins, due to padding */
.row {
  margin: 0 -5px;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

/* Responsive columns */
@media screen and (max-width: 600px) {
  .column {
    float: left;
    width: 33.33%;
    padding: 0 10px;
  }
}

/* Style the counter cards */
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  text-align: center;
  background-color: #f1f1f1;
}

/*Login - Css */

a {
  color: #92badd;
  display: inline-block;
  text-decoration: none;
  font-weight: 400;
}

h2 {
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  display: inline-block;
  margin: 40px 8px 10px 8px;
  color: #cccccc;
}

/* STRUCTURE */

.wrapper {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  min-height: 100%;
  padding: 20px;
}

#formContent {
  -webkit-border-radius: 10px 10px 10px 10px;
  border-radius: 10px 10px 10px 10px;
  background: #fff;
  padding: 30px;
  width: 90%;
  max-width: 450px;
  position: relative;
  padding: 0px;
  -webkit-box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.3);
  box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.3);
  text-align: center;
}

#formFooter {
  background-color: #f6f6f6;
  border-top: 1px solid #dce8f1;
  padding: 25px;
  text-align: center;
  -webkit-border-radius: 0 0 10px 10px;
  border-radius: 0 0 10px 10px;
}

/* TABS */

h2.inactive {
  color: #cccccc;
}

h2.active {
  color: #0d0d0d;
  border-bottom: 2px solid #5fbae9;
}

/* FORM TYPOGRAPHY*/

input[type="button"],
input[type="submit"],
input[type="reset"] {
  background-color: #56baed;
  border: none;
  color: white;
  padding: 15px 80px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  text-transform: uppercase;
  font-size: 13px;
  -webkit-box-shadow: 0 10px 30px 0 rgba(95, 186, 233, 0.4);
  box-shadow: 0 10px 30px 0 rgba(95, 186, 233, 0.4);
  -webkit-border-radius: 5px 5px 5px 5px;
  border-radius: 5px 5px 5px 5px;
  margin: 5px 20px 40px 20px;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}

input[type="button"]:hover,
input[type="submit"]:hover,
input[type="reset"]:hover {
  background-color: #39ace7;
}

input[type="button"]:active,
input[type="submit"]:active,
input[type="reset"]:active {
  -moz-transform: scale(0.95);
  -webkit-transform: scale(0.95);
  -o-transform: scale(0.95);
  -ms-transform: scale(0.95);
  transform: scale(0.95);
}

input[type="text"] {
  background-color: #f6f6f6;
  border: none;
  color: #0d0d0d;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 5px;
  width: 85%;
  border: 2px solid #f6f6f6;
  -webkit-transition: all 0.5s ease-in-out;
  -moz-transition: all 0.5s ease-in-out;
  -ms-transition: all 0.5s ease-in-out;
  -o-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
  -webkit-border-radius: 5px 5px 5px 5px;
  border-radius: 5px 5px 5px 5px;
}

input[type="text"]:focus {
  background-color: #fff;
  border-bottom: 2px solid #5fbae9;
}

input[type="text"]:placeholder {
  color: #cccccc;
}

input[type="password"] {
  background-color: #f6f6f6;
  border: none;
  color: #0d0d0d;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 5px;
  width: 85%;
  border: 2px solid #f6f6f6;
  -webkit-transition: all 0.5s ease-in-out;
  -moz-transition: all 0.5s ease-in-out;
  -ms-transition: all 0.5s ease-in-out;
  -o-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
  -webkit-border-radius: 5px 5px 5px 5px;
  border-radius: 5px 5px 5px 5px;
}
input[type="password"]:focus {
  background-color: #fff;
  border-bottom: 2px solid #5fbae9;
}

input[type="password"]:placeholder {
  color: #cccccc;
}


input[type="number"] {
  background-color: #f6f6f6;
  border: none;
  color: #0d0d0d;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 5px;
  width: 85%;
  border: 2px solid #f6f6f6;
  -webkit-transition: all 0.5s ease-in-out;
  -moz-transition: all 0.5s ease-in-out;
  -ms-transition: all 0.5s ease-in-out;
  -o-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
  -webkit-border-radius: 5px 5px 5px 5px;
  border-radius: 5px 5px 5px 5px;
}
input[type="number"]:focus {
  background-color: #fff;
  border-bottom: 2px solid #5fbae9;
}

input[type="number"]:placeholder {
  color: #cccccc;
}




.fadeInDown {
  -webkit-animation-name: fadeInDown;
  animation-name: fadeInDown;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

@-webkit-keyframes fadeInDown {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }
  100% {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}

@keyframes fadeInDown {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }
  100% {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}


@-webkit-keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@-moz-keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.fadeIn {
  opacity: 0;
  -webkit-animation: fadeIn ease-in 1;
  -moz-animation: fadeIn ease-in 1;
  animation: fadeIn ease-in 1;

  -webkit-animation-fill-mode: forwards;
  -moz-animation-fill-mode: forwards;
  animation-fill-mode: forwards;

  -webkit-animation-duration: 1s;
  -moz-animation-duration: 1s;
  animation-duration: 1s;
}

.fadeIn.first {
  -webkit-animation-delay: 0.4s;
  -moz-animation-delay: 0.4s;
  animation-delay: 0.4s;
}

.fadeIn.second {
  -webkit-animation-delay: 0.6s;
  -moz-animation-delay: 0.6s;
  animation-delay: 0.6s;
}

.fadeIn.third {
  -webkit-animation-delay: 0.8s;
  -moz-animation-delay: 0.8s;
  animation-delay: 0.8s;
}

.fadeIn.fourth {
  -webkit-animation-delay: 1s;
  -moz-animation-delay: 1s;
  animation-delay: 1s;
}


.underlineHover:after {
  display: block;
  left: 0;
  bottom: -10px;
  width: 0;
  height: 2px;
  background-color: #56baed;
  content: "";
  transition: width 0.2s;
}

.underlineHover:hover {
  color: #0d0d0d;
}

.underlineHover:hover:after {
  width: 100%;
}


*:focus {
  outline: none;
}

#icon {
  width: 60%;
}

#formHeader {
  background-color: #f6f6f6;
  border-top: 1px solid #dce8f1;
  padding: 25px;
  text-align: center;
  -webkit-border-radius: 0 0 10px 10px;
  border-radius: 0 0 10px 10px;
}
</style>