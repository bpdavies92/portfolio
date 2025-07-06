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
                  :lazy-src="website1Lazy"
                />
              </v-col>
              
              <v-col cols="12" sm="12" md="12">
                <v-img
                  aspect-ratio="16/9"
                  alt="Active learning webpage"
                  cover
                  :src="website2"
                  :lazy-src="website2Lazy"
                />
              </v-col>
              <v-col cols="12" sm="12" md="12">
                <v-img
                  aspect-ratio="16/9"
                  alt="Peer observation webpage"
                  cover
                  :src="website3"
                  :lazy-src="website3Lazy"
                />
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <v-sheet class="d-flex mt-12 align-center">
          <v-btn size="large" variant="text" class="mr-auto" prepend-icon="mdi-arrow-left" @click="previous(project[0])">Previous</v-btn>
          <v-sheet class="font-weight-bold">{{ IDNumber }} / {{ works.length }}</v-sheet>
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
import projects from '@/composables/projects'
// Import images
import banner from '@/assets/images/uta-website/uta-website-banner.webp'
import bannerLazy from '@/assets/images/uta-website/uta-website-banner-lazy.webp'
import website1 from '@/assets/images/uta-website/website-1.webp'
import website2 from '@/assets/images/uta-website/website-2.webp'
import website3 from '@/assets/images/uta-website/website-3.webp'
import website3Lazy from '@/assets/images/uta-website/website-3-lazy.webp'
import website2Lazy from '@/assets/images/uta-website/website-2-lazy.webp'
import website1Lazy from '@/assets/images/uta-website/website-1-lazy.webp'

const { width } = useWindowSize()
const { works } = projects()
const props = defineProps(['project', 'IDNumber'])
const { next, previous } = nextProject()
const router = useRoute()
const route = useRouter()
</script>
