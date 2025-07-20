<template>
      <v-container fluid>
        <section class="content-container ml-auto mr-auto placeholder">
          <FilterOptions/>
          <v-row no-gutters>
          <v-col v-for="(project, index) in worksOrdered" :key="index" cols="12" sm="6" md="6" lg="4">
  <template v-if="index < 3">
    <v-sheet class="card-grid-spacing">
      <Card :project="project" :index="index" :works="works" />
    </v-sheet>
  </template>
  <template v-else>
    <v-lazy :options="{ threshold: 0.1, rootMargin: ['10px 20px 30px 40px'] }" transition="scroll-y-reverse-transition">
      <v-sheet class="card-grid-spacing" v-show="index < showMoreBtn">
        <Card :project="project" :index="index" :works="works" />
      </v-sheet>
    </v-lazy>
  </template>
</v-col>

          </v-row>
          <!-- {{ worksOrdered.length }} -->
        </section>
      </v-container>
      
      <v-sheet color="transparent" width="100%" class="d-flex align-center content-container">
        <v-btn  class="mr-auto ml-auto mt-6 mb-6 yellowBackground" @click="showMoreBtn += 6 ; cookies.set('see-more', showMoreBtn)" v-show="showMoreBtn <= worksOrdered.length" prepend-icon="mdi-eye-circle-outline">See more</v-btn>
      </v-sheet>
      
</template>

<script setup>
import projects from '@/composables/projects';
import { computed, proxyRefs, ref } from 'vue';
import { useRouter } from 'vue-router';
import FilterOptions from '@/components/FilterOptions.vue';
import Card from '@/components/Card.vue'
import { useCookies } from '@vueuse/integrations/useCookies'

const { works } = projects()  
const dataLoaded = ref(false)
const isIntersecting = ref(false)
const cookies = useCookies(['see-more'])


 const onIntersect = (isIntersecting, entries, observer) =>  {

        isIntersecting.value = isIntersecting.value
 }

const showMoreBtn = ref(cookies.get('see-more') ? cookies.get('see-more') : 6);


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
