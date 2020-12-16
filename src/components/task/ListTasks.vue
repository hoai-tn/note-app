<template>
  <v-container>
    <v-row>
      <v-col v-for="task in tasks" :key="task.id" cols="6" sm="4" md="2">
        <ItemTask :task="task" />
        <DiagLogTask />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import ItemTask from "@/components/task/ItemTask";
import DiagLogTask from "@/components/task/DiagLogTask";
import { mapGetters } from "vuex";
export default {
  components: {
    ItemTask,
    DiagLogTask
  },
  computed: {
    ...mapGetters({
      tasks: "getTasks"
    })
  },
  methods: {
    showDiagLog() {
      console.log("show");
    }
  }
};
</script>
<style scoped></style>
