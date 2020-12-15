<template>
  <v-card
    id="item-task"
    outlined
    width="238"
    min-height="100"
    @mouseover="hover = true"
    @mouseleave="hover = false"
  >
    <v-list-item>
      <p class="pa-4">today i'm feel everything..</p>
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
export default {
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
  }
};
</script>

<style>
#item-task .v-list-item {
  padding: 0px !important;
  text-align: center;
  display: block !important;
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
