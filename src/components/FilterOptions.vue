<template>
      <section class="filter-container">
          <v-list class="d-flex justify-center filter mb-12">
            <v-list-item>
                <v-btn :class="{backgroundColour : currentRoute === undefined}" @click="router.push({ name: 'Home' })" variant="flat">All</v-btn>
            </v-list-item>
            <v-list-item v-for="(d, i) in filters.sort()" :key="i">
                <v-btn :prepend-icon='d[1]' :aria-label="d[0]" :class="{backgroundColour : currentRoute === d[0].toLowerCase()}" variant="flat" @click="router.push({name: 'Filter', query: {filter: d[0].toLowerCase()}})">{{ d[0] }}</v-btn>
            </v-list-item>
              </v-list>
      </section>
</template>

<script setup>

    import { ref, watchEffect } from "vue"
    import { useRouter, useRoute } from "vue-router"

    const router = useRouter()
    const route = useRoute()

    const currentRoute = ref('')

    console.log(route.query.filter)

    watchEffect(() => {
        currentRoute.value = route.query.filter
    })

    const filters = ref([
            ["Video", "mdi-video-vintage"],
            ["Web Development", "mdi-web"],
           [ "Independent study", "mdi-book-open"],
            ["Event", "mdi-calendar"]
    ])

</script>

<style>
    .backgroundColour {
        background-color: #f6f6f6;
    }
</style>