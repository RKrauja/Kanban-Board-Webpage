<script lang="ts" setup>
import { defineEmits, defineProps, ref } from "vue";
import draggable from "vuedraggable";
import TaskObject from "@/components/TaskObject.vue";
import AddNewTaskBlock from "@/components/AddNewTaskBlock.vue";
import type { NewTask, Task } from "@/types/task";

defineProps<{
  title: string;
  headerColor: string;
  tasks: Task[];
}>();

const emits = defineEmits<{
  "new-task": [task: NewTask];
  "update-task": [task: Task];
  "update:tasks": [tasks: Task[]];
}>();

const taskButtonVisibility = ref(true);

const handleTaskButtonVisibility = (isVisible: boolean): void => {
  taskButtonVisibility.value = isVisible;
};

const handleUpdateTasks = (newTasks: Task[]): void => {
  emits("update:tasks", newTasks);
};

const handleUpdateTask = (updatedTask: Task): void => {
  emits("update-task", updatedTask);
};

const handleNewTask = (newTask: NewTask): void => {
  emits("new-task", newTask);
};
</script>

<template>
  <v-col align="center" class="my-4" justify="center">
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
        :class="{ 'pb-12 ': tasks.length === 0, 'pb-6': tasks.length !== 0 }"
        :model-value="tasks"
        group="tasks"
        item-key="id"
        tag="ul"
        @update:model-value="handleUpdateTasks"
      >
        <template #item="{ element }">
          <TaskObject
            :id="element.id"
            :description="element.description"
            :title="element.title"
            class="bg-transparent"
            @UpdatedTask="handleUpdateTask"
          />
        </template>
      </draggable>
      <v-card-item class="ma-0 pa-0" flat>
        <div class="d-flex justify-center align-center">
          <AddNewTaskBlock
            v-if="!taskButtonVisibility"
            id="add-task-window"
            @NewTask="handleNewTask"
            @taskButtonVisibility="handleTaskButtonVisibility"
          />
        </div>
      </v-card-item>
      <v-card-item v-if="taskButtonVisibility" class="ma-0 pa-0" flat>
        <div class="d-flex justify-center py-4">
          <v-btn
            border="0"
            class="bg-transparent"
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
