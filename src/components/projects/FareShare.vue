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
              <v-col>
                <!-- iframe wrapper with aspect ratio 16:9 to reserve space -->
                <v-lazy
                  :options="{'threshold':0.5}"
                  transition="scroll-y-reverse-transition"
                >
                  <div class="iframe-wrapper">
                 <iframe src="https://leedsbeckettreplay.cloud.panopto.eu/Panopto/Pages/Embed.aspx?id=ae10cafd-477f-4daa-88f0-b20500f7404d&autoplay=false&offerviewer=true&showtitle=true&showbrand=false&captions=false&interactivity=all" height="169" width="300" style="border: 1px solid #464646;" allowfullscreen allow="autoplay" aria-label="Panopto Embedded Video Player" aria-description="Overview of FareShare" ></iframe>
                  </div>
                </v-lazy>
              </v-col>
                 <v-col cols="12" sm="12">
                <v-lazy
                  :options="{'threshold':0.5}"
                  transition="scroll-y-reverse-transition">
                  <div class="iframe-wrapper">
                    <iframe src="https://leedsbeckettreplay.cloud.panopto.eu/Panopto/Pages/Embed.aspx?id=fe791f0f-8ea7-491d-b627-b20500f74d7c&autoplay=false&offerviewer=true&showtitle=true&showbrand=false&captions=false&interactivity=all" height="169" width="300" style="border: 1px solid #464646;" allowfullscreen allow="autoplay" aria-label="Panopto Embedded Video Player" aria-description="Role at FareShare" ></iframe>
                  </div>
                </v-lazy>
              </v-col>
               <v-col cols="12" sm="12">
                <v-lazy
                  :options="{'threshold':0.5}"
                  transition="scroll-y-reverse-transition">
                  <div class="iframe-wrapper">
                  <iframe src="https://leedsbeckettreplay.cloud.panopto.eu/Panopto/Pages/Embed.aspx?id=7e5007e4-9292-4446-bb45-b20500f76d28&autoplay=false&offerviewer=true&showtitle=true&showbrand=false&captions=false&interactivity=all" height="169" width="300" style="border: 1px solid #464646;" allowfullscreen allow="autoplay" aria-label="Panopto Embedded Video Player" aria-description="What have been the benefits of your placement at FareShare?" ></iframe>
                  </div>
                </v-lazy>
              </v-col>
                <v-col>
                <v-lazy
                  :options="{'threshold':0.5}"
                  transition="scroll-y-reverse-transition">
                  <div class="iframe-wrapper">
                 <iframe src="https://leedsbeckettreplay.cloud.panopto.eu/Panopto/Pages/Embed.aspx?id=239b6bd0-a0b7-4f1c-968a-b20500f7539f&autoplay=false&offerviewer=true&showtitle=true&showbrand=true&captions=false&interactivity=all" height="405" width="720" style="border: 1px solid #464646;" allowfullscreen allow="autoplay" aria-label="Panopto Embedded Video Player" aria-description="What did you do to apply for your placement at FareShare?" ></iframe>
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
import banner from '@/assets/images/fareshare/fareshare-banner.webp'
import bannerLazy from '@/assets/images/fareshare/fareshare-banner-lazy.webp'  
import projects from '@/composables/projects'

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
