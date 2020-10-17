<template>
  <div id="app">
    <app-navigation-bar></app-navigation-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import NavigationBar from './components/NavigationBar.vue';

export default {
  name: 'App',
  components: {
    AppNavigationBar:NavigationBar
  },
  created(){
    this.$store.commit('loginMutation',localStorage.getItem('token'));
    this.$store.commit('setname',localStorage.getItem('name'));
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

</style>
