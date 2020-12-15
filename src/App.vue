<template>
  <v-app id="app">
    <Navbar />
    <div id="content" class="d-flex">
      <Sidebar />
      <router-view />
    </div>
  </v-app>
</template>
<script>
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";

export default {
  name: "App",
  components: { Sidebar, Navbar }
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#content {
  display: flex;
}
</style>
