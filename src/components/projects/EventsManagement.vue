<template>
  <section v-for="(d, i) in project" :key="i">
    <v-img
      alt=""
      height="300"
      :lazy-src="bannerImgLazy"
      aspect-ratio="16/9"
      cover
      :src="bannerImg"
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
                  <iframe src="https://leedsbeckettreplay.cloud.panopto.eu/Panopto/Pages/Embed.aspx?id=f7a649e5-6e9d-47d8-8761-b13400c413f3&autoplay=false&offerviewer=false&showtitle=true&showbrand=true&captions=false&interactivity=all" height="405" width="720" style="border: 1px solid #464646;" allowfullscreen allow="autoplay" aria-label="Panopto Embedded Video Player" aria-description="Elliott Moores | Sparq | Events Production" ></iframe>
                  </div>
                </v-lazy>
              </v-col>
               <v-col cols="12" sm="12">
                <v-lazy
                  :options="{'threshold':0.5}"
                  transition="scroll-y-reverse-transition">
                  <div class="iframe-wrapper">
                 <iframe src="https://leedsbeckettreplay.cloud.panopto.eu/Panopto/Pages/Embed.aspx?id=fbb6aff3-db97-4798-bbf9-b1f6007a7194&autoplay=false&offerviewer=true&showtitle=true&showbrand=false&captions=false&interactivity=all" height="169" width="300" style="border: 1px solid #464646;" allowfullscreen allow="autoplay" aria-label="Panopto Embedded Video Player" aria-description="Sparq setup timelapse | Interactive 360 Video" ></iframe>
                  </div>
                </v-lazy>
              </v-col>
                <v-col cols="12" sm="12" md="12">
                  <v-img
                    alt="Exhibition hero"
                    cover
                    aspect-ratio="16/9"
                    :src="img8"
                    :lazy-src="img8Lazy"
                  ></v-img>
                <v-lazy
                  :options="{'threshold':0.5}"
                  transition="scroll-y-reverse-transition">
                  <div class="iframe-wrapper">
                    <iframe src="https://leedsbeckettreplay.cloud.panopto.eu/Panopto/Pages/Embed.aspx?id=450c2ace-f214-4f5d-8663-b12c0102cc6b&autoplay=false&offerviewer=true&showtitle=true&showbrand=true&captions=false&interactivity=all" height="405" width="720" style="border: 1px solid #464646;" allowfullscreen allow="autoplay" aria-label="Panopto Embedded Video Player" aria-description="Sparq setup timelapse | Facing the stage" ></iframe>
                  </div>
                </v-lazy>
              </v-col>
                              <v-col cols="12" sm="12" md="12">
                <v-lazy
                  :options="{'threshold':0.5}"
                  transition="scroll-y-reverse-transition">
                  <div class="iframe-wrapper">
<iframe src="https://leedsbeckettreplay.cloud.panopto.eu/Panopto/Pages/Embed.aspx?id=ffc388c7-97ae-4a54-aa16-b162016e1141&autoplay=false&offerviewer=true&showtitle=true&showbrand=true&captions=false&interactivity=all" height="405" width="720" style="border: 1px solid #464646;" allowfullscreen allow="autoplay" aria-label="Panopto Embedded Video Player" aria-description="Group 4 Showcase" ></iframe>
                  </div>
                </v-lazy>
              </v-col>
                                            <v-col cols="12" sm="12" md="12">
                <v-lazy
                  :options="{'threshold':0.5}"
                  transition="scroll-y-reverse-transition">
                  <div class="iframe-wrapper">
<iframe src="https://leedsbeckettreplay.cloud.panopto.eu/Panopto/Pages/Embed.aspx?id=7d641eab-fb1c-4129-9f1a-b1470100e702&autoplay=false&offerviewer=true&showtitle=true&showbrand=false&captions=false&interactivity=all" height="169" width="300" style="border: 1px solid #464646;" allowfullscreen allow="autoplay" aria-label="Panopto Embedded Video Player" aria-description="Abbey &amp; Imogen | Student reflections" ></iframe>
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
import banner from '@/assets/images/ilc/ilc-banner.webp'
import bannerLazy from '@/assets/images/ilc/ilc-banner-lazy.webp'  
import projects from '@/composables/projects'

import bannerImg from '@/assets/images/events-man/events-man-banner.webp'
import bannerImgLazy from '@/assets/images/events-man/events-man-banner-lazy.webp'

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
