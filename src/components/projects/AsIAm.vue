<template>
  <section v-for="(d, i) in project" :key="i">
    <v-img
      alt=""
     height="300"
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
                  alt="Exhibition hero"
                  cover
                  aspect-ratio="16/9"
                  :src="img1"
                ></v-img>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" sm="12" md="12">
                <v-img
                  alt="As I am menu displaying all people"
                  cover
                  aspect-ratio="16/9"
                  :src="img2"
                ></v-img>
              </v-col>
              <v-col cols="12" sm="12" md="12">
                <v-img
                  alt="As I am infinity menu in hero"
                  cover
                  aspect-ratio="16/9"
                  class="max-height-400"
                  :src="img3"
                ></v-img>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" sm="12" md="12">
                <v-img
                  alt="Example of staff member statement"
                  cover
                  aspect-ratio="16/9"
                  :src="img4"
                ></v-img>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" sm="12" md="12">
                <v-img
                  alt="Example of a quote section on the As I am website."
                  cover
                  aspect-ratio="16/9"
                  :src="img5"
                ></v-img>
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

const { width } = useWindowSize()
const props = defineProps(['project'])
const { next, previous } = nextProject()
const router = useRoute()
const route = useRouter()

// Import images
import bannerImg from '@/assets/images/as-i-am/as-i-am-banner.webp'
import img1 from '@/assets/images/as-i-am/as-i-am-1.webp'
import img2 from '@/assets/images/as-i-am/as-i-am-2.webp'
import img3 from '@/assets/images/as-i-am/as-i-am-3.webp'
import img4 from '@/assets/images/as-i-am/as-i-am-4.webp'
import img5 from '@/assets/images/as-i-am/as-i-am-5.webp'
</script>

<style scoped>
.max-height-400 {
  max-height: 400px;
  width: 100%;
  object-fit: cover;
}
</style>
