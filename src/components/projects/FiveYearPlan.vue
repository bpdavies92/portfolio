<template>
  <section  
    v-for="(d,i) in project"
    :key="i"
  >
    <v-img
    eager
      alt=""
      height="300"
      :lazy-src="bannerLazy"
      aspect-ratio="16/9"
      cover
      :src="banner"
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
               <div style="position: relative; width: 100%; aspect-ratio: 16/9;">
                  <iframe
                   src="https://player.vimeo.com/video/1104874589?h=2e62e0aeaf" 
                    frameborder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    style="position:absolute;top:0;left:0;width:100%;height:100%;"
                    title="Introduction to My Five Year Plan"
                  ></iframe>
            
                </div>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" class="justify-center">
                <v-img
                  alt="My five year plan cycle diagram"
                  cover
                  aspect-ratio="1/1"
                  :src="diagram"
                  lazy-src="@/assets/images/placeholder.webp"
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

// Import your images for proper bundling
import banner from '@/assets/images/five-year-plan/five-year-plan-banner.webp'
import bannerLazy from '@/assets/images/five-year-plan/five-year-plan-banner-lazy.webp'
import diagram from '@/assets/images/five-year-plan/my_5yp_diagram.webp'

const { width } = useWindowSize()

const { works } = projects()

const props = defineProps(['project', 'IDNumber'])
const { next, previous } = nextProject()
const router = useRoute()
const route = useRouter()
</script>
