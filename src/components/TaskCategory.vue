<script setup>
import { defineProps, ref } from "vue";
import draggable from "vuedraggable";
import TaskObject from "@/components/TaskObject.vue";

let tasks = ref([
  { title: "Task 1", description: "Some cute description 1" },
  { title: "Task 2", description: "Some cute description 2" },
  { title: "Task 3", description: "Some cute description 3" },
]);

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
      <draggable v-model="tasks" tag="ul" group="tasks">
        <template #item="{ element }">
          <TaskObject
            class="bg-transparent"
            :title="element.title"
            :description="element.description"
          />
        </template>
      </draggable>
    </v-card>
  </v-col>
</template>

<style scoped></style>
