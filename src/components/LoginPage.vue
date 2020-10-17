<template>
  <form>
    <div class="row p-5">
      <div class="offset-lg-4"></div>
      <div class="col-lg-4">
        <div class="form-group">
          <label for="exampleInputEmail1">Name</label>
          <input type="text" class="form-control" v-model="user.name" />
        </div>
        {{errMsg}}
        <button
          type="submit"
          class="btn btn-primary mx-auto"
          @click.prevent="loginProcess"
        >
          Login
        </button>
      </div>
    </div>
  </form>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      user: {name:''},
    };
  },
  computed:{
    errMsg(){
      return this.$store.getters.getErrMsg;
    }
  },
  methods: {
    ...mapActions({
      login:'login'
    }),
    loginProcess() {
      this.$store.dispatch('login',this.user);
    },
  },
};
</script>