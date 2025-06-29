<template>
  <section
    v-for="(d,i) in project"
    :key="i"
  >
    <v-img
      alt=""
      height="300"
      aspect-ratio="16/9"
      cover
      :src="banner"
      :lazy-src="bannerLazy"
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
              <v-col cols="12" sm="12" md="12">
                <v-btn href="https://www.mmu.ac.uk/about-us/professional-services/uta" block color="secondary" size="large" prepend-icon="mdi-link">
                  Dive into the UTA website
                </v-btn>
              </v-col>
              <v-col cols="12" sm="12" md="12">
                <v-img
                  aspect-ratio="16/9"
                  alt="Assessment lifecycle webpage"
                  cover
                  :src="website1"
                />
              </v-col>
              
              <v-col cols="12" sm="12" md="12">
                <v-img
                  aspect-ratio="16/9"
                  alt="Active learning webpage"
                  cover
                  :src="website2"
                />
              </v-col>
              <v-col cols="12" sm="12" md="12">
                <v-img
                  aspect-ratio="16/9"
                  alt="Peer observation webpage"
                  cover
                  :src="website3"
                />
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <v-sheet class="d-flex mt-12">
          <v-btn size="large" variant="text" class="mr-auto" prepend-icon="mdi-arrow-left" @click="previous(project[0])">Previous</v-btn>
          <v-btn size="large" variant="text" class="ml-auto" append-icon="mdi-arrow-right" @click="next(project[0])">Next</v-btn>
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

// Import images
import banner from '@/assets/images/uta-website/uta-website-banner.jpg'
import bannerLazy from '@/assets/images/uta-website/uta-website-banner-lazy.webp'
import website1 from '@/assets/images/uta-website/website-1.png'
import website2 from '@/assets/images/uta-website/website-2.png'
import website3 from '@/assets/images/uta-website/website-3.png'

const { width } = useWindowSize()
const props = defineProps(['project'])
const { next, previous } = nextProject()
const router = useRoute()
const route = useRouter()
</script>
