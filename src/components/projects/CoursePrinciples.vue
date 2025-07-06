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
                    <iframe src="https://leedsbeckettreplay.cloud.panopto.eu/Panopto/Pages/Embed.aspx?id=91458545-acea-4549-b3f8-b24a00e3bce7&autoplay=false&offerviewer=true&showtitle=true&showbrand=false&captions=false&interactivity=all" height="169" width="300" style="border: 1px solid #464646;" allowfullscreen allow="autoplay" aria-label="Panopto Embedded Video Player" aria-description="Course Principles: Introduction" ></iframe>
                  </div>
                </v-lazy>
              </v-col>
                 <v-col cols="12" sm="12">
                <v-lazy
                  :options="{'threshold':0.5}"
                  transition="scroll-y-reverse-transition">
                  <div class="iframe-wrapper">
                    <iframe src="https://leedsbeckettreplay.cloud.panopto.eu/Panopto/Pages/Embed.aspx?id=5ab603a0-a6b9-439f-8f6f-b24a015f30fd&autoplay=false&offerviewer=true&showtitle=true&showbrand=false&captions=false&interactivity=all" height="169" width="300" style="border: 1px solid #464646;" allowfullscreen allow="autoplay" aria-label="Panopto Embedded Video Player" aria-description="Course Principles: Course Identity" ></iframe>
                  </div>
                </v-lazy>
              </v-col>
               <v-col cols="12" sm="12">
                <v-lazy
                  :options="{'threshold':0.5}"
                  transition="scroll-y-reverse-transition">
                  <div class="iframe-wrapper">
                   <iframe src="https://leedsbeckettreplay.cloud.panopto.eu/Panopto/Pages/Embed.aspx?id=a2cafddb-4382-4fa8-88b8-b24a0177f728&autoplay=false&offerviewer=true&showtitle=true&showbrand=false&captions=false&interactivity=all" height="169" width="300" style="border: 1px solid #464646;" allowfullscreen allow="autoplay" aria-label="Panopto Embedded Video Player" aria-description="Course Principles: Course Coherence" ></iframe>
                  </div>
                </v-lazy>
              </v-col>
                <v-col>
                <v-lazy
                  :options="{'threshold':0.5}"
                  transition="scroll-y-reverse-transition">
                  <div class="iframe-wrapper">
                  <iframe src="https://leedsbeckettreplay.cloud.panopto.eu/Panopto/Pages/Embed.aspx?id=a69a2542-9c26-4320-a1ca-b24a00e3a939&autoplay=false&offerviewer=true&showtitle=true&showbrand=false&captions=false&interactivity=all" height="169" width="300" style="border: 1px solid #464646;" allowfullscreen allow="autoplay" aria-label="Panopto Embedded Video Player" aria-description="Course Principles: Student Agency" ></iframe>
                  </div>
                </v-lazy>
              </v-col>
            </v-row>
          </v-col>
        </v-row>

        <v-sheet class="d-flex mt-12">
          <v-btn
            size="large"
            variant="text"
            class="mr-auto"
            prepend-icon="mdi-arrow-left"
            @click="previous(project[0])"
          >
            Previous
          </v-btn>
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
import banner from '@/assets/images/course-principles/course-principles-banner.webp'
import bannerLazy from '@/assets/images/course-principles/course-principles-banner-lazy.webp'  

const { width } = useWindowSize()
const props = defineProps(['project'])
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
