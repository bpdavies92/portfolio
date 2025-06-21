<template>
      <v-container>
        <section class="content-container ml-auto mr-auto placeholder">
          <FilterOptions/>
          <v-row no-gutters>
            <v-col   v-for="(project, index) in worksOrdered" :key="index" cols="12" xs="12" sm="6" md="6" lg="4" >
              <v-lazy
              :options="{'threshold':0.5}"
              transition="fade-transition"
              >
                <v-sheet class="card-grid-spacing" v-show="index < showMoreBtn">    
                  <Card  :project="project" :index="index" :works="works" />
                </v-sheet>
              </v-lazy>
            </v-col>      
          </v-row>
          <!-- {{ worksOrdered.length }} -->
        </section>
      </v-container>
      
      <v-sheet color="transparent" width="100%" class="d-flex align-center content-container">
        <v-btn  class="mr-auto ml-auto mt-6 mb-6 yellowBackground" @click="showMoreBtn += 6" v-show="showMoreBtn <= worksOrdered.length" prepend-icon="mdi-eye-circle-outline">See more</v-btn>
      </v-sheet>
      
</template>

<script setup>
import projects from '@/composables/projects';
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';
import FilterOptions from '@/components/FilterOptions.vue';
import Card from '@/components/Card.vue'

const { works } = projects()  
const dataLoaded = ref(false)

const showMoreBtn = ref(6)

const worksOrdered = computed(() => {

    dataLoaded.value = true

    return works.value.sort((a, b) => {
      
        const titleA = new Date(a.date)
        const titleB = new Date(b.date)

        if(titleA < titleB) {
          return 1
        } 
        if(titleA > titleB) {
          return -1
        } 
        dataLoaded.value = false
        return 0
    })
    
})
</script>
