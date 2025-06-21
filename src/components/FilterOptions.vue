<template>
      <section class="filter-container">
          <v-list role="list" class="filter-large mb-12 mt-12 d-none d-md-flex justify-center">
            <v-list-item >
                <v-btn role="list item" :class="{backgroundColour : currentRoute === undefined}" @click="router.push({ name: 'Home' })" variant="flat" size="large">All</v-btn>
            </v-list-item>
            <v-list-item v-for="(d, i) in filters.sort()" :key="i" role="list item" size="large">
                <v-btn :prepend-icon='d[1]' :aria-label="d[0]" :class="{backgroundColour : currentRoute === d[0].toLowerCase()}" variant="flat" @click="router.push({name: 'Filter', query: {filter: d[0].toLowerCase()}})">{{ d[0] }}</v-btn>
            </v-list-item>
              </v-list>
      
      </section>


        <v-sheet color="transparent" class="d-md-none d-flex justify-center mt-12 mb-12">
            <v-menu location="bottom center"  transition="slide-y-transition">
              <template v-slot:activator="{ props }">
                <v-btn
                  prepend-icon="mdi-filter"
                  class=" mb-6 text-white"
                  color="#303030"
                  v-bind="props"
                > 
                  Filter options
                </v-btn>
              </template>
              <v-list class="text-left" selectable>
            <v-list-item >
                <v-btn class="text-left" block role="list item" :class="{backgroundColour : currentRoute === undefined}" @click="router.push({ name: 'Home' })" variant="flat" size="large">All</v-btn>
            </v-list-item>
            <v-list-item v-for="(d, i) in filters.sort()" :key="i" role="list item" size="large">
                <v-btn block :prepend-icon='d[1]' :aria-label="d[0]" :class="{backgroundColour : currentRoute === d[0].toLowerCase()}" variant="flat" @click="router.push({name: 'Filter', query: {filter: d[0].toLowerCase()}})">{{ d[0] }}</v-btn>
            </v-list-item>
              </v-list>
            </v-menu>
        </v-sheet>

  
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