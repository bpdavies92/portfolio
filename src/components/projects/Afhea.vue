<template>
  <section  
    v-for="(d, i) in project"
    :key="i"
  >
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
              <v-col>
                <v-img
                  cover
                  aspect-ratio="16/9"
                  alt="Knowledge check quiz"
                  :src="af1"
                  lazy-src="@/assets/images/placeholder.webp"
                />
              </v-col>
              <v-col cols="12" sm="12" md="12">
                <v-img
                  cover
                  lazy-src="@/assets/images/placeholder.webp"
                  aspect-ratio="16/9"
                  alt="Knowledge check quiz"
                  :src="af2"
                />
              </v-col>
              
              <v-col cols="12" sm="12" md="12">
                <v-img
                  alt="As I am infinity menu in hero"
                  max-height="400"
                  cover
                  lazy-src="@/assets/images/placeholder.webp"
                  aspect-ratio="16/9"
                  :src="af3"
                />
              </v-col>
              <v-col cols="12" sm="12" md="12">
                <v-img
                  aspect-ratio="16/9"
                  alt="Example of staff member statement"
                  cover
                  lazy-src="@/assets/images/placeholder.webp"
                  :src="af4"
                />
              </v-col>
              <v-col cols="12" sm="12" md="12">
                <v-img
                  aspect-ratio="16/9"
                  alt="Example of a quote section on the As I am website."
                  cover
                  :src="af5"
                  lazy-src="@/assets/images/placeholder.webp"
                />
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

// Import all images
import bannerImg from '@/assets/images/afhea-self-study/afhe-banner.webp'
import bannerImgLazy from '@/assets/images/afhea-self-study/afhe-banner-lazy.webp'
import af1 from '@/assets/images/afhea-self-study/af1.webp'
import af2 from '@/assets/images/afhea-self-study/af2.webp'
import af3 from '@/assets/images/afhea-self-study/af3.webp'
import af4 from '@/assets/images/afhea-self-study/af4.webp'
import af5 from '@/assets/images/afhea-self-study/af5.webp'

const { width } = useWindowSize()
const { works } = projects()
const props = defineProps(['project', 'IDNumber'])
const { next, previous } = nextProject()
const router = useRoute()
const route = useRouter()
</script>
