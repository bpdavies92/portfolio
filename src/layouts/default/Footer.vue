<template>
    <v-footer class="yellowBackground mt-12 pt-12 pb-12" >
      <v-row justify="center" no-gutters>
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
          {{ new Date().getFullYear() }} — <strong>Benjamin Davies</strong>
        </v-col>
      </v-row>
    </v-footer>
  </template>

<script setup>

    import { ref } from "vue";

    const links = ref([

    ])

</script>