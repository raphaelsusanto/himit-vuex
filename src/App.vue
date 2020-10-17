<template>
  <div id="app">
    <app-navigation-bar></app-navigation-bar>
    <transition name="slide" mode="out-in">
    <router-view></router-view>
    </transition>
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

    .slide-leave-active {
        transition: opacity 0.2s ease;
        opacity: 0;
        animation: slide-out 0.2s ease-out forwards;
    }

    .slide-leave {
        opacity: 1;
        transform: translateX(0);
    }

    .slide-enter-active {
        animation: slide-in 0.2s ease-out forwards;
    }

    @keyframes slide-out {
        0% {
            transform: translateY(0);
        }
        100% {
            transform: translateY(-30px);
        }
    }

    @keyframes slide-in {
        0% {
            transform: translateY(-30px);
        }
        100% {
            transform: translateY(0);
        }
    }
</style>