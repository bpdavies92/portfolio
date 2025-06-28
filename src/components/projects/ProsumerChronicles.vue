<template>
  <section  
    v-for="(d,i) in project"
    :key="i"
  >
    <v-img
      alt="Prosumer chronicles"
      :height="width >= 960 ? 'auto' : 300"
      aspect-ratio="16/9"
      cover
      :src="banner"
      eager
    ></v-img>
    <v-container fluid class="mt-12">
      <div class="content-container">
        <v-row>
          <v-col class="position-relative" cols="12" sm="12" md="5">
            <div class="sticky">
              <Description :d="d" :project="project" />
            </div>
          </v-col>
          <v-col cols="12" sm="12" md="7">
            <v-row>
              <v-col>
                <v-img alt="Prosumer chronicles" cover :src="img17"></v-img>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-img aspect-ratio="16/9" alt="Prosumer chronicles" :src="img1"></v-img>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" sm="12" md="6">
                <v-img aspect-ratio="16/9" alt="Prosumer chronicles" max-height="400" cover :src="img7"></v-img>
              </v-col>
              <v-col cols="12" sm="12" md="6">
                <v-img aspect-ratio="16/9" alt="Prosumer chronicles" max-height="400" cover :src="img3"></v-img>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-img aspect-ratio="16/9" alt="Prosumer chronicles" cover :src="img14"></v-img>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" sm="12" md="6">
                <v-img aspect-ratio="16/9" alt="Prosumer chronicles" cover :src="img4"></v-img>
              </v-col>
              <v-col cols="12" sm="12" md="6">
                <v-img aspect-ratio="16/9" alt="Prosumer chronicles" cover :src="img12"></v-img>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-img aspect-ratio="16/9" alt="Prosumer chronicles" :src="img18"></v-img>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-img aspect-ratio="16/9" alt="Prosumer chronicles" cover :src="img15"></v-img>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <v-sheet class="d-flex mt-12">
          <v-btn size="large" variant="text" class="mr-auto" prepend-icon="mdi-arrow-left" @click="previous(project[0])">
            Previous
          </v-btn>
          <v-btn size="large" variant="text" class="ml-auto" append-icon="mdi-arrow-right" @click="next(project[0])">
            Next
          </v-btn>
        </v-sheet>
      </div>
    </v-container>
  </section>
</template>

<script setup>
import Description from '../Description.vue'
import { useRouter, useRoute } from 'vue-router'
import nextProject from '@/composables/nextProject'
import { useWindowSize } from '@vueuse/core'

// Import images so bundler includes them and paths resolve
import banner from '@/assets/images/prosumer-chronicles/pro-chron-banner.jpg'
import img1 from '@/assets/images/prosumer-chronicles/pro-1.jpg'
import img3 from '@/assets/images/prosumer-chronicles/pro-3.jpg'
import img4 from '@/assets/images/prosumer-chronicles/pro-4.jpg'
import img7 from '@/assets/images/prosumer-chronicles/pro-7.jpg'
import img12 from '@/assets/images/prosumer-chronicles/pro-12.jpg'
import img14 from '@/assets/images/prosumer-chronicles/pro-14.jpg'
import img15 from '@/assets/images/prosumer-chronicles/pro-15.jpg'
import img17 from '@/assets/images/prosumer-chronicles/pro-17.jpg'
import img18 from '@/assets/images/prosumer-chronicles/pro-18.jpg'

const { width } = useWindowSize()

const props = defineProps(['project'])
const { next, previous } = nextProject()
const router = useRoute()
const route = useRouter()
</script>
