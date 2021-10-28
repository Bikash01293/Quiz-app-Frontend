<template>
  <div>
    <NavbarHomeApp />

    <b-card
      overlay
      img-src="assets/image/quiz-app.jpg"
      img-alt="Card Image"
      text-variant="Black"
      class="contain img-fluid"
      alt="Responsive image"
    >
      <div class="row">
        <div class="column">
          <div class="card">
            <br /><br />
            <h3>Admin Login</h3>
            <br />
            <br />
            <form>
              <input
                type="text"
                id="login"
                class="fadeIn second"
                name="login"
                placeholder="login"
              />
              <br />
              <br />
              <input
                type="text"
                id="password"
                class="fadeIn third"
                name="login"
                placeholder="password"
              />
              <br />
              <br />

              <input type="submit" class="fadeIn fourth" value="Log In" />
            </form>

            <!-- Remind Passowrd -->
            <div id="formFooter">
              <a class="underlineHover" href="#">Forgot Password?</a>
              <br /><b>Don't have account please&nbsp;</b>
              <a class="underlineHover" href="#">Signup</a>
            </div>
          </div>
        </div>

        <div class="column">
          <div class="card">
            <br />
            <br />
            <h3>Teacher Login</h3>
            <br />
            <br />
            <form>
              <input
                type="text"
                id="login"
                class="fadeIn second"
                name="login"
                placeholder="login"
              />
              <br />
              <br />
              <input
                type="text"
                id="password"
                class="fadeIn third"
                name="login"
                placeholder="password"
              />
              <br />
              <br />
              <input type="submit" class="fadeIn fourth" value="Log In" />
            </form>

            <!-- Remind Passowrd -->
            <div id="formFooter">
              <a class="underlineHover" href="#">Forgot Password?</a>
              <br /><b>Don't have account please&nbsp;</b>
              <a class="underlineHover" href="#">Signup</a>
            </div>
          </div>
        </div>

        <div class="column">
          <div class="card">
            <br />
            <br />
            <h3>Student Login</h3>
            <br />
            <br />
            <form>
              <input
                type="text"
                id="login"
                class="fadeIn second"
                name="login"
                placeholder="login"
              />
              <br />
              <br />
              <input
                type="text"
                id="password"
                class="fadeIn third"
                name="login"
                placeholder="password"
              />
              <br />
              <br />
              <input type="submit" class="fadeIn fourth" value="Log In" />
            </form>

            <!-- Remind Passowrd -->
            <div id="formFooter">
              <a class="underlineHover" href="#">Forgot Password?</a>
              <br /><b>Don't have account please&nbsp;</b>
              <a class="underlineHover" href="#">Signup</a>
            </div>
          </div>
        </div>
      </div>
      >
    </b-card>

    <footer>
      <p>
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
export default {
  name: "HomeApp",
  components: {
    NavbarHomeApp,
  },
};
</script>

<style scoped>
.contain {
  margin-top: 55px;
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

.column {
  float: left;
  width: 33.33%;
  padding: 0 10px;
}

.row {
  margin: 0 -5px;
}

.row:after {
  content: "";
  display: table;
  clear: both;
}

@media screen and (max-width: 600px) {
  .column {
    float: left;
    width: 33.33%;
    padding: 0 10px;
  }
}

.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  text-align: center;
  background-color: #f1f1f1;
}

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

h2.inactive {
  color: #cccccc;
}

h2.active {
  color: #0d0d0d;
  border-bottom: 2px solid #5fbae9;
}

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