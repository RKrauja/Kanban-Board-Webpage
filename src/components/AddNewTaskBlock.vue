<script setup>
import { defineEmits, ref } from "vue";

const emits = defineEmits(["taskButtonVisibility", "NewTask"]);
const taskName = ref("");
const taskDescription = ref("");

const taskSubmitted = () => {
  emits("taskButtonVisibility", true);
  if (taskName.value !== "") {
    emits("NewTask", {
      title: taskName.value,
      description: taskDescription.value,
    });
    taskName.value = "";
  }
  taskDescription.value = "";
};

const taskCancelled = () => {
  emits("taskButtonVisibility", true);
  taskName.value = "";
  taskDescription.value = "";
};
</script>

<template>
  <v-card class="mx-5 mb-3 w-100" color="white" rounded="lg">
    <v-card-text class="pa-4">
      <v-text-field
        v-model="taskName"
        bg-color="white"
        class="mb-2"
        density="comfortable"
        hide-details
        placeholder="Enter a title..."
        variant="outlined"
      />

      <v-text-field
        v-model="taskDescription"
        bg-color="white"
        density="compact"
        hide-details
        placeholder="Enter a description..."
        variant="outlined"
      />

      <div class="d-flex mt-3 gap-2">
        <v-btn color="success" variant="flat" @click="taskSubmitted">
          ADD CARD
        </v-btn>
        <v-btn color="error" variant="text" @click="taskCancelled">
          CANCEL
        </v-btn>
      </div>
    </v-card-text>
  </v-card>
</template>
