<script setup>
import TaskCategory from "@/components/TaskCategory.vue";
</script>

<template>
  <v-container>
    <v-row>
      <TaskCategory header-color="bg-red-accent-1" title="Backlog" />
      <TaskCategory header-color="bg-yellow-accent-1" title="Doing" />
      <TaskCategory header-color="bg-green-accent-2" title="Review" />
      <TaskCategory header-color="bg-blue-accent-1" title="Done" />
    </v-row>
  </v-container>
</template>

<style scoped></style>
