<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Syntax Highlighter</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <router-link to="/" class="nav-link" active-class="active" exact
          ><a>Home</a></router-link
        >
        <router-link
          v-if="!isAuth"
          to="/Login"
          class="nav-link"
          active-class="active"
          exact
          ><a>Login</a></router-link
        >
        <router-link
          v-if="!isAuth"
          to="/SignUp"
          class="nav-link"
          active-class="active"
          exact
          ><a>Sign Up</a></router-link
        >
        <router-link
          v-if="isAuth"
          to="/SavedData"
          class="nav-link"
          active-class="active"
          exact
          ><a>Saved Data</a></router-link
        >
        <a
          v-if="isAuth"
          class="nav-link"
          style="cursor: pointer"
          active-class="active"
          @click="logout"
          >LogOut</a
        >
        
      </div>
    </div>
    <form class="form-inline"  v-if="isAuth">
      {{ "Welcome "+name }}
    </form>
  </nav>
</template>
<script>
export default {
  computed: {
    name() {
      return this.$store.getters.getName;
    },
    isAuth() {
      return this.$store.getters.isAuth;
    },
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
      this.$router.push('/Login');
    },
  },
};
</script>
