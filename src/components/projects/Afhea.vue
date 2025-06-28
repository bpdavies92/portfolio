<template>
  <section  
    v-for="(d, i) in project"
    :key="i"
  >
    <v-img
      alt=""
      :height="width >= 960 ? 'auto' : 300"
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
                <v-img
                  cover
                  aspect-ratio="16/9"
                  alt="Knowledge check quiz"
                  :src="af1"
                />
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="12" sm="12" md="12">
                <v-img
                  cover
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
                  :src="af3"
                />
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="12" sm="12" md="12">
                <v-img
                  alt="Example of staff member statement"
                  cover
                  :src="af4"
                />
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="12" sm="12" md="12">
                <v-img
                  alt="Example of a quote section on the As I am website."
                  cover
                  :src="af5"
                />
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

// Import all images
import bannerImg from '@/assets/images/afhea-self-study/afhe-banner.jpg'
import af1 from '@/assets/images/afhea-self-study/af1.jpg'
import af2 from '@/assets/images/afhea-self-study/af2.jpg'
import af3 from '@/assets/images/afhea-self-study/af3.jpg'
import af4 from '@/assets/images/afhea-self-study/af4.jpg'
import af5 from '@/assets/images/afhea-self-study/af5.jpg'

const { width } = useWindowSize()
const props = defineProps(['project'])
const { next, previous } = nextProject()
const router = useRoute()
const route = useRouter()
</script>
