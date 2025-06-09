<template>

      <section class="content-container ml-auto mr-auto">
        <FilterOptions/>
        <v-row>
          <v-col v-for="(project, index) in worksOrdered" :key="index" cols="12" xs="12" sm="6" md="6" lg="4" >
            <Card :project="project" :index="index" :works="works" />
          </v-col>
        </v-row>
      </section>
 
</template>

<script setup>
import projects from '@/composables/projects';
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';
import FilterOptions from '@/components/FilterOptions.vue';
import Card from '@/components/Card.vue'

const { works } = projects()  

const worksOrdered = computed(() => {
    return works.value.sort((a, b) => {
      
        const titleA = new Date(a.date)
        const titleB = new Date(b.date)

        if(titleA < titleB) {
          return 1
        } 
        if(titleA > titleB) {
          return -1
        }
        return 0
    })
})
</script>
