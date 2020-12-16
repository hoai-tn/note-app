<template>
  <v-row justify="center">
    <v-dialog v-model="getDialog" max-width="490">
      <AddItem />
    </v-dialog>
  </v-row>
</template>
<script>
import { mapGetters } from "vuex";
import AddItem from "./AddItem";
export default {
  components: {
    AddItem
  },
  data() {
    return {
      dialog: false
    };
  },
  computed: {
    ...mapGetters(["getDialog"])
  }
};
</script>
