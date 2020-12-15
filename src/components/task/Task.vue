<template>
  <v-container>
    <v-row>
      <v-col>
        <AddItem />
      </v-col>
    </v-row>
    <ListTasks />
  </v-container>
</template>

<script>
import ListTasks from "@/components/task/ListTasks";
import AddItem from "@/components/task/AddItem";
export default {
  components: { ListTasks, AddItem }
};
</script>

<style></style>
