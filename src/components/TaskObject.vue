<script setup>
// import draggable from "vuedraggable";
import { defineProps } from "vue";

defineProps({
  title: String,
  description: String,
  styleClass: String,
});
</script>
<template>
  <v-card flat>
    <VHover v-slot:default="{ isHovering, props }">
      <v-card
        :elevation="isHovering ? 12 : 2"
        class="rounded-lg ma-2"
        v-bind="props"
      >
        <v-card-title class="font-size:14px"> {{ title }}</v-card-title>
        <v-card-text>
          {{ description }}
        </v-card-text>
      </v-card>
    </VHover>
  </v-card>
</template>

<style scoped></style>
