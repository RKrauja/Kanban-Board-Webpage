<script setup>
import { defineEmits, defineProps, ref } from "vue";
import EditExistingCard from "@/components/EditExistingCard.vue";

const props = defineProps({
  id: Number,
  title: String,
  description: String,
});
const emits = defineEmits(["UpdatedTask"]);
const editBlockVisibility = ref(false);

const handleEditBlockVisibility = (isVisible) => {
  editBlockVisibility.value = isVisible;
};

const handleEditedTask = (UpdatedTask) => {
  UpdatedTask.id = props.id;
  emits("UpdatedTask", UpdatedTask);
};
</script>

<template>
  <v-card class="truncate-container" flat>
    <VHover v-slot:default="{ isHovering, props }">
      <v-card
        :elevation="isHovering ? 12 : 2"
        class="rounded-lg ma-2"
        v-bind="props"
      >
        <div v-if="!editBlockVisibility">
          <v-card-title class="text-center pa-2 title-container">
            <div class="truncate-text">
              {{ title }}
            </div>
            <v-btn
              class="edit-btn"
              density="compact"
              flat
              icon="mdi-pencil"
              @click="editBlockVisibility = true"
            >
            </v-btn>
          </v-card-title>
          <v-card-text class="truncate-text text-center">
            {{ description }}
          </v-card-text>
        </div>
        <edit-existing-card
          v-if="editBlockVisibility"
          :id="id"
          :description="description"
          :title="title"
          @EditedTask="handleEditedTask"
          @editBlockVisibility="handleEditBlockVisibility"
        />
      </v-card>
    </VHover>
  </v-card>
</template>

<style scoped>
.truncate-container {
  max-width: 400px;
}

.truncate-text {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 100%;
}

.title-container {
  position: relative;
}

.edit-btn {
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
}
</style>
