<template>
  <section v-for="(d, i) in project" :key="i">
    <v-img
      alt="LEED conference banner"
      height="300"
      aspect-ratio="16/9"
      cover
      eager
      :src="img1"
      :lazy-src="img1Lazy"
      loading="eager"
      preload
      class="mb-4"
    />

    <v-container fluid class="mt-12 projects">
      <div class="content-container">
        <v-row>
          <v-col class="position-relative" cols="12" md="5">
            <div class="sticky">
              <Description :d="d" :project="project" />
        
            </div>
          </v-col>

          <v-col cols="12" md="7">
            <v-row>
            <v-col cols="12" sm="12" md="4">
                <v-img  alt="Dr Fiona Saunders introducing the LEED conference" :lazy-src="img2Lazy" :src="img2" />
              </v-col>

              <v-col cols="12" sm="12" md="4">
                <v-img  alt="Dr Fiona Saunders introducing the LEED conference" :lazy-src="img3Lazy" :src="img3" />
              </v-col>

              <v-col cols="12" sm="12" md="4">
                <v-img  alt="Dr Fiona Saunders introducing the LEED conference" :lazy-src="img4Lazy" :src="img4" />
              </v-col>

              <v-col cols="12" sm="12" md="4">
                <v-img  alt="Dr Fiona Saunders introducing the LEED conference" :lazy-src="img5Lazy" :src="img5" />
              </v-col>

              <v-col cols="12" sm="12" md="4">
                <v-img  alt="Dr Fiona Saunders introducing the LEED conference" :lazy-src="img6Lazy" :src="img6" />
              </v-col>

                <v-col cols="12" sm="12" md="4">
                    <v-img  alt="Dr Fiona Saunders introducing the LEED conference" :lazy-src="img7Lazy" :src="img7" />
                </v-col>
                
                <v-col cols="12" sm="12" md="4">
                    <v-img  alt="Dr Fiona Saunders introducing the LEED conference" :lazy-src="img8Lazy" :src="img8" />
                </v-col>

                <v-col cols="12" sm="12" md="4">
                    <v-img  alt="Dr Fiona Saunders introducing the LEED conference" :lazy-src="img9Lazy" :src="img9" />
                </v-col>

                <v-col cols="12" sm="12" md="4">            
                    <v-img  alt="Dr Fiona Saunders introducing the LEED conference" :lazy-src="img10Lazy" :src="img10" />
                </v-col>
                                <v-col cols="12" sm="12" md="12">            
                    <v-img  alt="Dr Fiona Saunders introducing the LEED conference" :lazy-src="img12Lazy" :src="img12" />
                </v-col>
                <v-col cols="12" sm="12" md="12">            
                    <v-img  alt="Dr Fiona Saunders introducing the LEED conference" :lazy-src="img1Lazy" :src="img1" />
                </v-col>
                <v-col cols="12" sm="12" md="12">            
                    <v-img  alt="Dr Fiona Saunders introducing the LEED conference" :lazy-src="img11Lazy" :src="img11" />
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
import projects from '@/composables/projects'

// Image imports
import img1 from '@/assets/images/ba-acting/ba-acting-banner.webp'
import img1Lazy from '@/assets/images/ba-acting/ba-acting-banner-lazy.webp'

import img2 from '@/assets/images/ba-acting/ba-acting-2.webp'
import img2Lazy from '@/assets/images/ba-acting/ba-acting-2-lazy.webp'

import img3 from '@/assets/images/ba-acting/ba-acting-3.webp'
import img4 from '@/assets/images/ba-acting/ba-acting-4.webp'
import img5 from '@/assets/images/ba-acting/ba-acting-5.webp'
import img6 from '@/assets/images/ba-acting/ba-acting-6.webp'
import img7 from '@/assets/images/ba-acting/ba-acting-7.webp'
import img8 from '@/assets/images/ba-acting/ba-acting-8.webp'
import img9 from '@/assets/images/ba-acting/ba-acting-9.webp'
import img10 from '@/assets/images/ba-acting/ba-acting-10.webp'
import img11 from '@/assets/images/ba-acting/ba-acting-11.webp'
import img12 from '@/assets/images/ba-acting/ba-acting-12.webp'

import img3Lazy from '@/assets/images/ba-acting/ba-acting-3-lazy.webp'
import img4Lazy from '@/assets/images/ba-acting/ba-acting-4-lazy.webp'
import img5Lazy from '@/assets/images/ba-acting/ba-acting-5-lazy.webp'
import img6Lazy from '@/assets/images/ba-acting/ba-acting-6-lazy.webp'
import img7Lazy from '@/assets/images/ba-acting/ba-acting-7-lazy.webp'
import img8Lazy from '@/assets/images/ba-acting/ba-acting-8-lazy.webp'
import img9Lazy from '@/assets/images/ba-acting/ba-acting-9-lazy.webp'  
import img10Lazy from '@/assets/images/ba-acting/ba-acting-10-lazy.webp'
import img11Lazy from '@/assets/images/ba-acting/ba-acting-11-lazy.webp'
import img12Lazy from '@/assets/images/ba-acting/ba-acting-12-lazy.webp'

const props = defineProps(['project', 'IDNumber'])
const { works } = projects()
const { next, previous } = nextProject()
const router = useRoute()
const route = useRouter()
</script>
