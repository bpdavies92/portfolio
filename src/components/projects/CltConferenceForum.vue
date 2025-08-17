<template>
  <section v-for="(d, i) in project" :key="i">
    <v-img
      alt=""
      height="300"
      :lazy-src="bannerLazy"
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
               <v-col cols="12" sm="12">
                
                  <div class="iframe-wrapper">
                 <iframe src="https://leedsbeckettreplay.cloud.panopto.eu/Panopto/Pages/Embed.aspx?id=76f4c4d2-0e56-4d80-87bc-b30d00d6be7a&autoplay=false&offerviewer=false&showtitle=true&showbrand=false&captions=false&interactivity=all" height="169" width="300" style="border: 1px solid #464646;" allowfullscreen allow="autoplay" aria-label="Panopto Embedded Video Player" aria-description="Confidence &amp; community through experiential learning | Carl Flattery | Conference DEAP25" ></iframe>
                  </div>
               
              </v-col>
              <v-col cols="12" sm="12">
                <!-- iframe wrapper with aspect ratio 16:9 to reserve space -->
                <v-lazy
                  :options="{'threshold':0.5}"
                  transition="scroll-y-reverse-transition"
                >
                  <div class="iframe-wrapper">
                   <iframe src="https://leedsbeckettreplay.cloud.panopto.eu/Panopto/Pages/Embed.aspx?id=036269cf-ed64-4762-970a-b26b00e5d41a&autoplay=false&offerviewer=false&showtitle=false&showbrand=false&captions=false&interactivity=all" height="169" width="300" style="border: 1px solid #464646;" allowfullscreen allow="autoplay" aria-label="Panopto Embedded Video Player" aria-description="Creative professional portfolio: An example of authentic assessment | Dr Alison Taft | Winter DEAP25" ></iframe>
                  </div>
                </v-lazy>
              </v-col>
                 <v-col cols="12" sm="12">
                <v-lazy
                  :options="{'threshold':0.5}"
                  transition="scroll-y-reverse-transition">
                  <div class="iframe-wrapper">
                   <iframe src="https://leedsbeckettreplay.cloud.panopto.eu/Panopto/Pages/Embed.aspx?id=8eab404b-92e8-4638-b96d-b2b500fe7294&autoplay=false&offerviewer=false&showtitle=true&showbrand=false&captions=false&interactivity=all" height="169" width="300" style="border: 1px solid #464646;" allowfullscreen allow="autoplay" aria-label="Panopto Embedded Video Player" aria-description="Scaling pedagogical enquiry | Professor Samuel Elkington | Spring DEAP25" ></iframe>
                  </div>
                </v-lazy>
              </v-col>
               <v-col cols="12" sm="12">
                <v-lazy
                  :options="{'threshold':0.5}"
                  transition="scroll-y-reverse-transition">
                  <div class="iframe-wrapper">
                  <iframe src="https://leedsbeckettreplay.cloud.panopto.eu/Panopto/Pages/Embed.aspx?id=88ddaf07-6832-4c37-b31f-b199006fcd50&autoplay=false&offerviewer=true&showtitle=true&showbrand=false&captions=false&interactivity=all" height="169" width="300" style="border: 1px solid #464646;" allowfullscreen allow="autoplay" aria-label="Panopto Embedded Video Player" aria-description="Oxfam pop-up shop | Marketing Management | DEAP conference" ></iframe>
                  </div>
                </v-lazy>
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

import banner from '@/assets/images/deap/deap-banner.webp'
import bannerLazy from '@/assets/images/deap/deap-banner-lazy.webp'  

const { width } = useWindowSize()
const props = defineProps(['project', 'IDNumber'])
const { works } = projects()
const { next, previous } = nextProject()
const router = useRoute()
const route = useRouter()
</script>

<style scoped>
.iframe-wrapper {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; /* 16:9 Aspect Ratio */
  height: 0;
  overflow: hidden;
  aspect-ratio: 16/9 ;
}

.iframe-wrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
}
</style>
