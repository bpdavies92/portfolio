<template>
  <section v-for="(d,i) in project" :key="i">
    <v-img
      alt=""
      height="300"
      aspect-ratio="16/9"
      cover
      :lazy-src="heroLazyImg"
      eager
      :src="heroImg"
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
                <v-img
                  alt="Building inclusive learning communities home page"
                  cover
                  aspect-ratio="16/9"
                  :src="img4"
                  lazy-src="@/assets/images/placeholder.webp"
                ></v-img>
              </v-col>

              <v-col cols="12" sm="12" md="12">
                <v-img
                  alt="Introduction with welcome video by Shuab Gamote"
                  cover
                  aspect-ratio="16/9"
                  :src="img11"
                  lazy-src="@/assets/images/placeholder.webp"
                ></v-img>
              </v-col>
              <v-col cols="12">
                <v-img
                  alt="A still of the welcome video featuring Shuab Gamote"
                  cover
                  aspect-ratio="16/9"
                  lazy-src="@/assets/images/placeholder.webp"
                  :src="img13"
                ></v-img>
              </v-col>
                <v-col cols="12" sm="12" md="12">
                <v-img
                  alt="framing our responses slide"
                  cover
                  aspect-ratio="16/9"
                  :src="img17"
                  lazy-src="@/assets/images/placeholder.webp"
                ></v-img>
              </v-col>
                  <v-col cols="12" sm="12" md="12">
                <v-img
                  alt="Still of Framing our responses video"
                  cover
                  aspect-ratio="16/9"
                  lazy-src="@/assets/images/placeholder.webp"
                  :src="img16"
                ></v-img>
              </v-col>
                 <v-col cols="12" sm="12" md="12">
                <v-img
                  alt="Still of Framing our responses video"
                  cover
                  aspect-ratio="16/9"
                  lazy-src="@/assets/images/placeholder.webp"
                  :src="img15"
                ></v-img>
              </v-col>
                            <v-col cols="12">
                <v-img
                  alt="Micro-aggressions slide home page"
                  cover
                  aspect-ratio="16/9"
                  lazy-src="@/assets/images/placeholder.webp"
                  :src="img1"
                ></v-img>
              </v-col>
                            <v-col cols="12">
                <v-img
                  alt="Still of Micro-aggressions video"
                  cover
                  aspect-ratio="16/9"
                  :src="img8"
                  lazy-src="@/assets/images/placeholder.webp"
                ></v-img>
              </v-col>
               <v-col cols="12">
                <v-img
                  alt="Further micro-aggressions resources, including student actor video narrating student experience"
                  cover
                  aspect-ratio="16/9"
                  :src="img7"
                  lazy-src="@/assets/images/placeholder.webp"
                ></v-img>
              </v-col>
               <v-col cols="12" sm="12" md="12">
                <v-img
                  alt="Microaggressions slide home"
                  cover
                  aspect-ratio="16/9"
                  lazy-src="@/assets/images/placeholder.webp"
                  :src="img10"
                ></v-img>
              </v-col>
              <v-col cols="12" sm="12" md="12">
                <v-img
                  alt="Building inclusive learning communities home page"
                  cover
                  lazy-src="@/assets/images/placeholder.webp"
                  aspect-ratio="16/9"
                  :src="img9"
                ></v-img>
              </v-col>
               <v-col cols="12">
                <v-img
                  alt="Microaggressions slide home"
                  cover
                  aspect-ratio="16/9"
                  lazy-src="@/assets/images/placeholder.webp"
                  :src="img6"
                ></v-img>
              </v-col>
<v-col cols="12" sm="12" md="12">
                <v-img
                  alt="starting to take action slide"
                  cover
                  aspect-ratio="16/9"
                  lazy-src="@/assets/images/placeholder.webp"
                  :src="img3"
                ></v-img>
      
              </v-col>
            </v-row>

      
    
            <v-row>
              
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

// Import all images
import heroImg from '@/assets/images/learning-communities/learning-communities-hero.webp'
import heroLazyImg from '@/assets/images/learning-communities/learning-communities-hero-lazy.webp'
import img1 from '@/assets/images/learning-communities/learning-communities-1.webp'
import img3 from '@/assets/images/learning-communities/learning-communities-3.webp'
import img4 from '@/assets/images/learning-communities/learning-communities-4.webp'
import img5 from '@/assets/images/learning-communities/learning-communities-5.webp'
import img6 from '@/assets/images/learning-communities/learning-communities-6.webp'
import img7 from '@/assets/images/learning-communities/learning-communities-7.webp'
import img8 from '@/assets/images/learning-communities/learning-communities-8.webp'
import img9 from '@/assets/images/learning-communities/learning-communities-9.webp'
import img10 from '@/assets/images/learning-communities/learning-communities-10.webp'
import img11 from '@/assets/images/learning-communities/learning-communities-11.webp'
import img13 from '@/assets/images/learning-communities/learning-communities-13.webp'
import img15 from '@/assets/images/learning-communities/learning-communities-15.webp'
import img16 from '@/assets/images/learning-communities/learning-communities-16.webp'
import img17 from '@/assets/images/learning-communities/learning-communities-17.webp'
</script>
