<template>
      <v-list class="d-flex justify-center filter mb-12">
        <v-list-item>
            <v-btn :class="{backgroundColour : currentRoute === undefined}" @click="router.push({ name: 'Home' })" variant="flat">All</v-btn>
        </v-list-item>
        <v-list-item v-for="(d, i) in filters.sort()" :key="i">
            <v-btn :class="{backgroundColour : currentRoute === d.toLowerCase()}" variant="flat" @click="router.push({name: 'Filter', query: {filter: d.toLowerCase()}})">{{ d }}</v-btn>
        </v-list-item>
    </v-list>
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
            "Video",
            "Web Development",
            "Independent study"
    ])

</script>

<style>
    .backgroundColour {
        background-color: #f6f6f6;
    }
</style>