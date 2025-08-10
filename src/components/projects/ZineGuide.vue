<template>
  <section v-for="(d, i) in project" :key="i">
    <v-img
      alt=""
     height="300"
      aspect-ratio="16/9"
      cover
      :src="bannerImg"
      :lazy-src="bannerImgLazy"
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
                <v-img
                  alt="Exhibition hero"
                  cover
                  aspect-ratio="16/9"
                  :src="img8"
                  :lazy-src="img8Lazy"
                ></v-img>
              </v-col>
                          <v-col cols="12" sm="12" md="12">
                <v-img
                  alt="Exhibition hero"
                  cover
                  aspect-ratio="16/9"
                  :src="img7"
                  :lazy-src="img7Lazy"
                ></v-img>
              </v-col>
                                                      <v-col cols="12" sm="12" md="12">
                <v-img
                  alt="Exhibition hero"
                  cover
                  aspect-ratio="16/9"
                  :src="img5"
                  :lazy-src="img5Lazy"
                ></v-img>
              </v-col>
            <v-col cols="12" sm="12" md="12">
                <v-img
                  alt="Exhibition hero"
                  cover
                  aspect-ratio="16/9"
                  :src="img1"
                  :lazy-src="img1Lazy"
                ></v-img>
              </v-col>
                                        <v-col cols="12" sm="12" md="12">
                <v-img
                  alt="Exhibition hero"
                  cover
                  aspect-ratio="16/9"
                  :src="img4"
                  :lazy-src="img4Lazy"
                ></v-img>
              </v-col>
            <v-col cols="12" sm="12" md="12">
                <v-img
                  alt="Exhibition hero"
                  cover
                  aspect-ratio="16/9"
                  :src="img2"
                  :lazy-src="img2Lazy"
                ></v-img>
              </v-col>

            <v-col cols="12" sm="12" md="12">
                <v-img
                  alt="Exhibition hero"
                  cover
                  aspect-ratio="16/9"
                  :src="img3"
                  :lazy-src="img3Lazy"
                ></v-img>
              </v-col>



            

            </v-row>
          </v-col>
        </v-row>

        <v-sheet class="d-flex mt-12 align-center">
          <v-btn
            size="large"
            variant="text"
            class="mr-auto"
            prepend-icon="mdi-arrow-left"
            @click="previous(project[0])"
          >
            Previous
          </v-btn>
           <v-sheet class="font-weight-bold">{{ IDNumber }} / {{ works.length }}</v-sheet>
          <v-btn
            size="large"
            variant="text"
            class="ml-auto"
            append-icon="mdi-arrow-right"
            @click="next(project[0])"
          >
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
import projects from '@/composables/projects'

const { width } = useWindowSize()
const props = defineProps(['project', 'IDNumber'])
const { next, previous } = nextProject()
const router = useRoute()
const { works } = projects()
const route = useRouter()

// Import images
import bannerImg from '@/assets/images/zine/zine-banner.webp'
import bannerImgLazy from '@/assets/images/zine/zine-banner-lazy.webp'

import img1 from '@/assets/images/zine/zine-1.webp'
import img1Lazy from '@/assets/images/zine/zine-1-lazy.webp'

import img2 from '@/assets/images/zine/zine-2.webp'
import img2Lazy from '@/assets/images/zine/zine-2-lazy.webp'

import img3 from '@/assets/images/zine/zine-3.webp'
import img3Lazy from '@/assets/images/zine/zine-3-lazy.webp'

import img4 from '@/assets/images/zine/zine-4.webp'
import img4Lazy from '@/assets/images/zine/zine-4-lazy.webp'        

import img5 from '@/assets/images/zine/zine-5.webp'
import img5Lazy from '@/assets/images/zine/zine-5-lazy.webp'

import img6 from '@/assets/images/zine/zine-6.webp'
import img6Lazy from '@/assets/images/zine/zine-6-lazy.webp'    

import img7 from '@/assets/images/zine/zine-7.webp'
import img7Lazy from '@/assets/images/zine/zine-7-lazy.webp'

import img8 from '@/assets/images/zine/zine-8.webp'
import img8Lazy from '@/assets/images/zine/zine-8-lazy.webp'

</script>

<style scoped>
.max-height-400 {
  max-height: 400px;
  width: 100%;
  object-fit: cover;
}
</style>
