<template>
  <div>
    <TeacherNavbar />

    <div class="container">
      <!-- Form is being created to add the quiz details -->
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <b-form-group id="input-group-2" label="Quiz name:" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="form.quizname"
            placeholder="Enter name"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-2"
          label="Description:"
          label-for="input-2"
        >
          <b-form-input
            id="input-2"
            v-model="form.description"
            placeholder="Enter Description"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-4" v-slot="{ ariaDescribedby }">
          <b-form-checkbox-group
            v-model="checked"
            id="checkboxes-4"
            :aria-describedby="ariaDescribedby"
          >
          </b-form-checkbox-group>
        </b-form-group>

        <b-button variant="success" type="submit" @click="makeToast('success')"
          >Submit</b-button
        >
        <b-button type="reset" variant="danger" class="mx-3">Reset</b-button>
      </b-form>
    </div>
  </div>
</template>

<script>
import TeacherNavbar from "@/components/TeacherNavbar";
import { createQuiz } from "@/services/teacher";

export default {
  name: "CreateQuizApp",
  components: {
    TeacherNavbar,
  },
  data() {
    return {
      form: {
        whoid: "616a9a0792327923446031b1",
        email: "rajesh@gmail.com",
        quizname: "",
        description: "",
      },
      checked: [],
      show: true,
    };
  },
  methods: {
    async onSubmit(event) {
      try {
        event.preventDefault();
        // alert(JSON.stringify(this.form))
        await createQuiz(this.form);
      } catch (error) {
        alert(error.message);
      }
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.quizname = "";
      this.form.description = "";
      this.checked = [];
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
    makeToast(variant = null) {
      this.$bvToast.toast("Quizz Added Succesfully !", {
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