<template>
  <v-card class="mx-auto" width="30%" outlined>
    <v-list-item three-line>
      <v-list-item-content>
        <div class="overline">
          Title
        </div>
        <v-list-item-title class="headline mb-1">
          <v-text-field
            class="border-0"
            placeholder="Enter note..."
          ></v-text-field>
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-card-actions>
      <v-list-item v-for="(icon, index) in listIcons" :key="index">
        <v-list-item-icon class="mr-1 p-1">
          <v-icon style="cursor: pointer;">{{ icon.name }}</v-icon>
        </v-list-item-icon>
      </v-list-item>
      <v-btn outlined rounded text>
        Enter
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
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

<style></style>
