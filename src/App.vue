<template>
  <div id="app">
    <div style="margin: 30px; font-size: larger;">To-Do App</div>
    <nav>
      <div style="margin: 10px;" v-if="$store.state.loggedIn == true">Welcome {{ $store.state.username }}</div>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">Archive</router-link> |
      <router-link to="/albo">Albo</router-link> |
      <router-link to="/login" v-if="$store.state.loggedIn == false">Login</router-link>
      <span v-if="$store.state.loggedIn == true" @click="logout" class="logout">Logout</span>
    </nav>
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: "App",
    methods: {
      logout() {
        this.$store.commit?.("loggedInState", false);
      }
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.logout {
  cursor: pointer;
  text-decoration: underline;
  color: rgb(92,74,168);
}
</style>
