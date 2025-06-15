<template>
    <v-footer color="#303030" class="mt-12 pt-12 pb-12" >
      <v-row justify="center" no-gutters >
        <v-btn
          v-for="link in links"
          :key="link"
          color="white"
          variant="text"
          class="mx-2"
          rounded="xl"
        >
          {{ link }}
        </v-btn>
        <v-col class="text-center mt-4" cols="12">
          <v-sheet color="transparent" class="text-white" >{{ new Date().getFullYear() }} — <strong>Benjamin Davies</strong></v-sheet>
        </v-col>
      </v-row>
    </v-footer>
  </template>

<script setup>

    import { ref } from "vue";


</script>