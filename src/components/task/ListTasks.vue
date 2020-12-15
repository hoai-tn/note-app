<template>
  <v-container>
    <v-row>
      <v-col>
        <ItemTask />
      </v-col>
      <v-col>
        <ItemTask />
      </v-col>
      <v-col>
        <ItemTask />
      </v-col>
      <v-col>
        <ItemTask />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import ItemTask from "@/components/task/ItemTask";
export default {
  components: {
    ItemTask
  }
};
</script>
<style scoped></style>
