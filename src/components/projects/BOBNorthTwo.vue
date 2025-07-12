<template>
  <section  
    v-for="(d,i) in project"
    :key="i"
  >
    <v-img
      alt=""
      height="300"
      aspect-ratio="16/9"
      :lazy-src="Img1Lazy"
      cover
      :src="Img1"
      eager
    ></v-img>
    <v-container fluid class="mt-12">

      <div class="content-container">
        <v-row>
          <v-col class="position-relative" cols="12" sm="12" md="5">
            <div class="sticky">
              <Description :d="d" :project="project"/>
            </div>
          </v-col>
          <v-col cols="12" sm="12" md="7">
            <v-row>
              <v-col cols="12">
                <v-lazy 
                  :options="{'threshold':0.5}"
                  transition="scroll-y-reverse-transition">
                  <v-img
                    alt="My five year plan cycle diagram"
                    cover
                    aspect-ratio="16/9"
                    :src="Img1"
                    :lazy-src="Img1Lazy"
                  ></v-img>
                </v-lazy>
              </v-col>
            <v-col cols="12" sm="12" md="12">
                <v-lazy
                  :options="{'threshold':0.5}"
                  transition="scroll-y-reverse-transition">
                  <v-img cover  aspect-ratio="16/9" :src="Img5" :lazy-src="Img5Lazy"></v-img>
                </v-lazy>
              </v-col>
              <v-col cols="12" sm="12" md="12">
                <v-lazy
                  :options="{'threshold':0.5}"
                  transition="scroll-y-reverse-transition">
                  <v-img cover lazy-src="@/assets/images/placeholder.webp" aspect-ratio="16/9" :src="Img6"></v-img>
                </v-lazy>
              </v-col>
              <v-col cols="12">
                <v-lazy
                  :options="{'threshold':0.5}"
                  transition="scroll-y-reverse-transition">
                  <v-img
                    alt="My five year plan cycle diagram"
                    cover
                    lazy-src="@/assets/images/placeholder.webp"
                    aspect-ratio="16/9"
                    :src="Img2"
                  ></v-img>
                </v-lazy>
              </v-col>
                <v-col cols="12" sm="12" md="12">
                <v-lazy
                  :options="{'threshold':0.5}"
                  transition="scroll-y-reverse-transition">
                  <v-img
                    alt="My five year plan cycle diagram"
                    cover
                    aspect-ratio="16/9"
                    :src="Img3"
                    lazy-src="@/assets/images/placeholder.webp"
                  ></v-img>
                </v-lazy>
              </v-col>
              <v-col cols="12" sm="12" md="12">
                <v-lazy
                  :options="{'threshold':0.5}"
                  transition="scroll-y-reverse-transition">
                  <v-img
                    alt="My five year plan cycle diagram"
                    cover
                    aspect-ratio="16/9"
                    :src="Img4"
                    lazy-src="@/assets/images/placeholder.webp"
                  ></v-img>
                </v-lazy>
              </v-col>
            </v-row>
  

          </v-col>
        </v-row>
        <v-sheet class="d-flex mt-12 align-center">
          <v-btn size="large" variant="text" class="mr-auto" prepend-icon="mdi-arrow-left" @click="previous(project[0])">
            Previous
          </v-btn>
          <v-sheet class="font-weight-bold">{{ IDNumber }} / {{ works.length }}</v-sheet>
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
import projects from '@/composables/projects' 

// Import images for proper bundling
import Img1 from '@/assets/images/bob-north-two/img-1.webp'
import Img1Lazy from '@/assets/images/bob-north-two/img-1-lazy.webp'
import Img2 from '@/assets/images/bob-north-two/img-2.webp'
import Img2Lazy from '@/assets/images/bob-north-two/img-2-lazy.webp'
import Img3 from '@/assets/images/bob-north-two/img-3.webp'
import Img3Lazy from '@/assets/images/bob-north-two/img-3-lazy.webp'
import Img4 from '@/assets/images/bob-north-two/img-4.webp'
import Img4Lazy from '@/assets/images/bob-north-two/img-4-lazy.webp'
import Img5 from '@/assets/images/bob-north-two/img-5.webp'
import Img5Lazy from '@/assets/images/bob-north-two/img-5-lazy.webp'
import Img6 from '@/assets/images/bob-north-two/img-6.webp'
import Img6Lazy from '@/assets/images/bob-north-two/img-6-lazy.webp'
import Img7 from '@/assets/images/bob-north-two/img-7.webp'
import Img7Lazy from '@/assets/images/bob-north-two/img-7-lazy.webp'





const props = defineProps(['project', 'IDNumber'])
const { works } = projects()
const { next, previous } = nextProject()
const router = useRoute()
const route = useRouter()
</script>
