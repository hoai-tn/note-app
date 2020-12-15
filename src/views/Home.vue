<template>
  <v-container class="home">
    <Task />
  </v-container>
</template>

<script>
// @ is an alias to /src
import Task from "@/components/task/Task";
export default {
  name: "Home",
  components: {
    Task
  }
};
</script>
