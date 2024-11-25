<script setup>
import TaskObject from "@/components/TaskObject.vue";
import { defineProps } from "vue";

defineProps({
  title: String,
  headerColor: String,
});
</script>

<template>
  <v-col align="center" justify="center">
    <v-card :class="[headerColor, 'rounded-t-lg']" flat rounded="0">
      <v-card-title class="text-black">
        <strong>{{ title }}</strong>
      </v-card-title>
    </v-card>
    <v-card class="bg-grey-lighten-2 rounded-b-lg" flat rounded="0">
      <TaskObject class="bg-transparent" />
      <TaskObject class="bg-transparent" />
      <TaskObject class="bg-transparent" />
    </v-card>
  </v-col>
</template>

<style scoped></style>
