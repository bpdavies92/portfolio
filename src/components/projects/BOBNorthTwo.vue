<template>
  <section  
    v-for="(d,i) in project"
    :key="i"
  >
    <v-img
      alt=""
      height="300"
      aspect-ratio="16/9"
      cover
      :src="img9"
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
             
                  <v-img

                    cover
                    alt=""
                    aspect-ratio="16/9"
                    :src="img1"
                  ></v-img>
           
              </v-col>
            <v-col cols="12" sm="12" md="12">
                  <v-img cover alt="" aspect-ratio="16/9" :src="img2"></v-img>
              </v-col>
              <v-col cols="12" sm="12" md="12">
                  <v-img alt="" aspect-ratio="16/9" :src="img3"></v-img>
              </v-col>
                <v-col cols="12" sm="12" md="12">
                  <v-img
                    alt=""
                    cover
                    aspect-ratio="16/9"
                    :src="img5"
                  ></v-img>
              </v-col>
                <v-col cols="12" sm="12" md="12">
                  <v-img cover alt="" aspect-ratio="16/9" :src="img6"></v-img>
              </v-col>
                              <v-col cols="12" sm="12" md="12">
                  <v-img cover alt=""  aspect-ratio="16/9" :src="img7"></v-img>
              </v-col>
                              <v-col cols="12" sm="12" md="12">
                  <v-img cover alt=""  aspect-ratio="16/9" :src="img8"></v-img>
              </v-col>
                <v-col cols="12" sm="12" md="12">
                  <v-img cover alt="" aspect-ratio="16/9" :src="img9"></v-img>
              </v-col>

                              <v-col cols="12" sm="12" md="12">
                  <v-img cover alt="" aspect-ratio="16/9" :src="img10"></v-img>
              </v-col>

                              <v-col cols="12" sm="12" md="12">
                  <v-img alt="" cover aspect-ratio="16/9" :src="img11"></v-img>
              </v-col>
                              <v-col cols="12" sm="12" md="12">
                  <v-img alt="" cover  aspect-ratio="16/9" :src="img12"></v-img>
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
import img1 from '@/assets/images/bob-north-two/img-1.webp'
import img2 from '@/assets/images/bob-north-two/img-2.webp'
import img3 from '@/assets/images/bob-north-two/img-3.webp'
import img5 from '@/assets/images/bob-north-two/img-5.webp'
import img6 from '@/assets/images/bob-north-two/img-6.webp'
import img7 from '@/assets/images/bob-north-two/img-7.webp'
import img8 from '@/assets/images/bob-north-two/img-8.webp'
import img9 from '@/assets/images/bob-north-two/img-9.webp'
import img10 from '@/assets/images/bob-north-two/img-10.webp'
import img11 from '@/assets/images/bob-north-two/img-11.webp'
import img12 from '@/assets/images/bob-north-two/img-12.webp'





const props = defineProps(['project', 'IDNumber'])
const { works } = projects()
const { next, previous } = nextProject()
const router = useRoute()
const route = useRouter()
</script>
