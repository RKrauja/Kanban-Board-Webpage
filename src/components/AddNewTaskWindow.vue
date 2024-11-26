<script setup></script>

<template>
  <v-card class="w-100 bg-transparent mx-2" flat>
    <v-card-item flat class="ma-0 pa-0">
      <v-textarea
        class="w-100 ma-0 pa-0"
        variant="outlined"
        placeholder="Enter a title for this card..."
        rows="1"
      >
      </v-textarea>
    </v-card-item>
    <v-card-item flat class="ma-0 pa-0 justify-start mt-n3">
      <v-btn class="bg-green mb-1" rounded="lg" flat>Add Card</v-btn>
    </v-card-item>
  </v-card>
</template>

<style scoped></style>
