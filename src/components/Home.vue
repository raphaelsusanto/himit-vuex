<template>
  <form>
    <div class="row p-5">
      <div class="offset-lg-4"></div>
      <div class="col-lg-4">
        <div class="form-group">
          <label for="exampleInputEmail1">Programming language</label>
          <select
            class="custom-select mr-sm-2"
            id="inlineFormCustomSelect"
            v-model="formData.selectedLanguage"
          >
            <option v-for="(language, index) in languages" :key="index">
              {{ language }}
            </option>
          </select>
        </div>
        <div class="form-group">
          <label for="taCode">FileName</label>
          <input type="text" class="form-control" v-model="formData.filename" />
        </div>
        <div class="form-group">
          <label for="taCode">Your Code</label>
          <textarea
            class="form-control"
            id="taCode"
            rows="3"
            v-model="formData.code"
          ></textarea>
        </div>
        <button
          type="submit"
          class="btn btn-primary text-center"
          @click.prevent="generate"
        >
          Generate
        </button>
        <formated-code><div v-html="formatedcode"></div></formated-code>
      </div>
    </div>
  </form>
</template>

<script>
import { mapActions } from "vuex";
import FormatedCode from "../components/FormatedCode.vue";
export default {
  data() {
    return {
      formData: {
        selectedLanguage: "",
        filename: "",
        code: "",
      },
    };
  },
  computed: {
    languages() {
      return this.$store.getters.getAvailableLanguage;
    },
    formatedcode() {
      return this.$store.getters.getStringFormated;
    },
  },
  methods: {
    ...mapActions({
      populateAvailableLanguage: "populateAvailableLanguage",
      generateFormated: "generateFormated",
    }),
    generate() {
      this.$store.dispatch("generateFormated", this.formData);
    },
  },
  created: function () {
    this.$store.dispatch("populateAvailableLanguage");
  },
  components:{
    FormatedCode
  }
};
</script>