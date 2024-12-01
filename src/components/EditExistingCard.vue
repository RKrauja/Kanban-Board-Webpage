<script lang="ts" setup>
import { defineEmits, defineProps, ref } from "vue";

const props = defineProps({
  title: String,
  description: String,
});

const emits = defineEmits(["EditedTask", "editBlockVisibility"]);
const editedTitle = ref(props.title);
const editedDescription = ref(props.description);

const taskSaved = () => {
  emits("EditedTask", {
    title: editedTitle.value || "",
    description: editedDescription.value,
  });
  emits("editBlockVisibility", false);
};

const taskCancelled = () => {
  emits("EditedTask", {
    title: props.title,
    description: props.description,
  });
  emits("editBlockVisibility", false);
};
</script>

<template>
  <div class="pa-4">
    <v-text-field
      v-model="editedTitle"
      bg-color="white"
      class="mb-2"
      density="comfortable"
      hide-details
      placeholder="Enter a title..."
      variant="outlined"
    />

    <v-text-field
      v-model="editedDescription"
      bg-color="white"
      class="mb-3"
      density="compact"
      hide-details
      placeholder="Enter a description..."
      variant="outlined"
    />

    <div class="d-flex gap-2">
      <v-btn color="success" variant="flat" @click="taskSaved">SAVE</v-btn>
      <v-btn color="error" variant="text" @click="taskCancelled">CANCEL</v-btn>
    </div>
  </div>
</template>
