<template>
  <div>
    <TeacherNavbar />
    
    <div class="container">
      <!-- This is a form to add the question details -->
      <form @submit.prevent="formSubmit()">
        <div class="form-group">
          <label for="questionText">Question Text </label>
          <input
            type="text"
            name="questionText"
            class="form-control"
            autocomplete="off"
            id="questionText"
            v-model="form.questionText"
            required
          />
        </div>

        <div class="form-group">
          <label for="optionA">Option1 </label>
          <input
            type="text"
            class="form-control"
            name="optionA"
            autocomplete="off"
            id="optionA"
            v-model="form.options[0]"
            required
          />
        </div>

        <div class="form-group">
          <label for="optionB">Option2 </label>
          <input
            type="text"
            class="form-control"
            name="optionB"
            autocomplete="off"
            id="optionB"
            v-model="form.options[1]"
            required
          />
        </div>

        <div class="form-group">
          <label for="optionC">Option3 </label>
          <input
            type="text"
            class="form-control"
            name="optionC"
            autocomplete="off"
            id="optionC"
            v-model="form.options[2]"
          />
        </div>

        <div class="form-group">
          <label for="optionD">Option4 </label>
          <input
            type="text"
            class="form-control"
            name="optionD"
            autocomplete="off"
            id="optionD"
            v-model="form.options[3]"
          />
        </div>

        <div class="form-group">
          <label for="answer">Answer </label>
          <input
            type="text"
            name="answer"
            class="form-control"
            autocomplete="off"
            id="answer"
            v-model="form.answer"
            required
          />
        </div>
        <button
          type="submit"
          class="btn btn-primary"
          @click="makeToast('success')"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import TeacherNavbar from "@/components/TeacherNavbar";
import { submitForm } from "@/services/teacher";
export default {
  name: "AddQuestionByTeacher",
  components: {
    TeacherNavbar,
  },
  data() {
    return {
      form: {
        questionText: "",
        options: [],
        answer: "",
        quizid: "",
      },
    };
  },
  methods: {
    //formSubmit is a method to submit the form details and calls the submitForm in the teacher.js file 
    async formSubmit() {
      this.quizId = this.$route.params.quizids;
      const q = this.quizId;
      this.form.quizid = q;
      console.log(this.form);
      await submitForm(this.form);
    },
    makeToast(variant = null) {
      this.$bvToast.toast("Question Added Succesfully !", {
        title: `${variant || "default"}`,
        variant: variant,
        solid: true,
      });
    },
  },
};
</script>

<style scoped>
.container {
  margin-top: 107px;
}
</style>