<template>
      <v-list class="d-flex filter mb-12">
        <v-list-item>
            <v-btn @click="router.push({ name: 'Home' })" variant="flat">All</v-btn>
        </v-list-item>
        <v-list-item v-for="(d, i) in filters.sort()" :key="i">
            <v-btn  variant="flat" @click="router.push({name: 'Filter', query: {filter: d.toLowerCase()}})">{{ d }}</v-btn>
        </v-list-item>
    </v-list>
</template>

<script setup>

    import { ref } from "vue"
    import { useRouter } from "vue-router"

    const router = useRouter()

    const filters = ref([
            "Video",
            "Web Development",
            "Independent study"
    ])

</script>

