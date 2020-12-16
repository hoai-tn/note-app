<template>
  <v-card
    @click="showDialog"
    id="item-task"
    outlined
    width="238"
    min-height="100"
    @mouseover="hover = true"
    @mouseleave="hover = false"
  >
    <v-list-item>
      <p class="pa-4">{{ task.text }}</p>
    </v-list-item>
    <v-card-actions :class="hover ? 'is_show' : 'is_hidden'">
      <v-list-item v-for="(icon, index) in listIcons" :key="index">
        <v-list-item-icon class="ma-1 p-0">
          <v-icon style="cursor: pointer;">{{ icon.name }}</v-icon>
        </v-list-item-icon>
      </v-list-item>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapActions } from "vuex";
import { SHOW_DIALOG } from "@/store/actions/dialog";
export default {
  props: {
    task: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      hover: false,
      listIcons: [
        {
          name: "mdi-bell "
        },
        {
          name: "mdi-palette "
        },
        {
          name: "mdi-image"
        },
        {
          name: "mdi-briefcase-download "
        },
        {
          name: "mdi-dots-vertical  "
        }
      ]
    };
  },
  methods: {
    ...mapActions([SHOW_DIALOG]),
    showDialog: function() {
      this[SHOW_DIALOG]();
    }
  }
};
</script>

<style>
#item-task .v-list-item {
  padding: 0px !important;
  text-align: center;
  display: block !important;
  min-height: 0;
}
.is_show {
  opacity: 1;
  transition: all 0.5s;
}
.is_hidden {
  opacity: 0;
  transition: all 0.5s;
}
</style>
