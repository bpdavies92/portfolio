<template>
      <div class="d-flex justify-center mb-12">
        <v-btn @click="router.push({ name: 'Home' })" variant="flat">All</v-btn>
        <v-btn v-for="(d, i) in filters.sort()" :key="i" variant="flat" @click="router.push({name: 'Filter', query: {filter: d.toLowerCase()}})">{{ d }}</v-btn>
    </div>
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

