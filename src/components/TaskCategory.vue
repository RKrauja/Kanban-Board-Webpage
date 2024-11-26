<script setup>
import { defineProps, ref } from "vue";
import draggable from "vuedraggable";
import TaskObject from "@/components/TaskObject.vue";
import AddNewTaskWindow from "@/components/AddNewTaskWindow.vue";

let tasks = ref([
  { id: 1, title: "Task 1", description: "Some cute description 1" },
  { id: 2, title: "Task 2", description: "Some cute description 2" },
  { id: 3, title: "Task 3", description: "Some cute description 3" },
]);

defineProps({
  title: String,
  headerColor: String,
});

const taskButtonVisibility = ref(true);
</script>

<template>
  <v-col align="center" justify="center" class="my-4">
    <v-card :class="[headerColor, 'rounded-t-lg']" flat rounded="0">
      <v-card-title class="text-black">
        <strong>{{ title }}</strong>
      </v-card-title>
    </v-card>

    <v-card
      class="bg-grey-lighten-2 rounded-b-lg"
      flat
      rounded="0"
      style="max-height: 85vh; overflow-y: auto"
    >
      <draggable
        v-model="tasks"
        tag="ul"
        group="tasks"
        item-key="id"
        class="pb-2"
      >
        <template #item="{ element }">
          <TaskObject
            class="bg-transparent"
            :title="element.title"
            :description="element.description"
          />
        </template>
      </draggable>
      <v-card-item flat class="ma-0 pa-0">
        <div class="d-flex justify-center align-center">
          <AddNewTaskWindow
            id="add-task-window"
            :class="{ 'd-none': !taskButtonVisibility }"
          />
        </div>
      </v-card-item>
      <v-card-item
        flat
        class="ma-0 pa-0"
        :class="{ 'd-none': !taskButtonVisibility }"
      >
        <div class="d-flex justify-center py-4">
          <v-btn
            class="bg-transparent"
            border="0"
            flat
            @click="taskButtonVisibility = false"
          >
            <div class="d-flex align-center justify-center">
              <v-icon class="mx-1">mdi-plus</v-icon>
              <span>Add new Task</span>
            </div>
          </v-btn>
        </div>
      </v-card-item>
    </v-card>
  </v-col>
</template>

<style scoped></style>
