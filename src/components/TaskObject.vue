<script setup>
// import draggable from "vuedraggable";
</script>

<template>
  <v-card flat>
    <VHover v-slot:default="{ isHovering, props }">
      <v-card
        :elevation="isHovering ? 12 : 2"
        class="rounded-lg ma-2"
        v-bind="props"
      >
        <v-card-title class="font-size:14px"> Task Name</v-card-title>
        <v-card-text
          >This is a description of the particular task :)
        </v-card-text>
      </v-card>
    </VHover>
  </v-card>
</template>

<style scoped></style>
