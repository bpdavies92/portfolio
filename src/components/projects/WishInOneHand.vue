<template>
  <section  
    v-for="(d,i) in project"
    :key="i"
  >
    <v-img
      alt=""
      height="300"
      aspect-ratio="16/9"
      :lazy-src="wish12Lazy"
      cover
      :src="wish12"
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
                    alt="My five year plan cycle diagram"
                    cover
                    aspect-ratio="16/9"
                    :src="wish1"
                    :lazy-src="wish1Lazy"
                  ></v-img>
               
              </v-col>
            <v-col cols="12" sm="12" md="12">
                <v-lazy
                  :options="{'threshold':0.5}"
                  transition="scroll-y-reverse-transition">
                  <v-img aspect-ratio="16/9" cover :src="wish5" :lazy-src="wish5Lazy"></v-img>
                </v-lazy>
              </v-col>
              <v-col cols="12" sm="12" md="12">
                <v-lazy
                  :options="{'threshold':0.5}"
                  transition="scroll-y-reverse-transition">
                  <v-img cover :lazy-src="wish6Lazy" aspect-ratio="16/9" :src="wish6"></v-img>
                </v-lazy>
              </v-col>
              <v-col cols="12">
                <v-lazy
                  :options="{'threshold':0.5}"
                  transition="scroll-y-reverse-transition">
                  <v-img
                    alt="My five year plan cycle diagram"
                    cover
                    :lazy-src="wish2Lazy"
                    aspect-ratio="16/9"
                    :src="wish2"

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
                    :src="wish3"
                    :lazy-src="wish3Lazy"
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
                    :src="wish4"
                    :lazy-src="wish4Lazy"
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
                    :src="wish5"
                    :lazy-src="wish5Lazy"
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
                    :src="wish6"
                    :lazy-src="wish6Lazy"
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
                    :src="wish7"
                    :lazy-src="wish7Lazy"
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
                    :src="wish8"
                    :lazy-src="wish8Lazy"
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
                    :src="wish9"
                    :lazy-src="wish9Lazy"
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
                    :src="wish10"
                    :lazy-src="wish10Lazy"
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
                    :src="wish11"
                    :lazy-src="wish11Lazy"
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
                    :src="wish12"
                    :lazy-src="wish12Lazy"
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
import wish1 from '@/assets/images/wish-in-one-hand/wish-1.webp'
import wish1Lazy from '@/assets/images/wish-in-one-hand/wish-1-lazy.webp'
import wish2 from '@/assets/images/wish-in-one-hand/wish-2.webp'
import wish2Lazy from '@/assets/images/wish-in-one-hand/wish-2-lazy.webp'
import wish3 from '@/assets/images/wish-in-one-hand/wish-3.webp'
import wish3Lazy from '@/assets/images/wish-in-one-hand/wish-3-lazy.webp'
import wish4 from '@/assets/images/wish-in-one-hand/wish-4.webp'
import wish4Lazy from '@/assets/images/wish-in-one-hand/wish-4-lazy.webp'
import wish5 from '@/assets/images/wish-in-one-hand/wish-5.webp'
import wish5Lazy from '@/assets/images/wish-in-one-hand/wish-5-lazy.webp'
import wish6 from '@/assets/images/wish-in-one-hand/wish-6.webp'
import wish6Lazy from '@/assets/images/wish-in-one-hand/wish-6-lazy.webp'
import wish7 from '@/assets/images/wish-in-one-hand/wish-7.webp'
import wish7Lazy from '@/assets/images/wish-in-one-hand/wish-7-lazy.webp'

import wish8 from '@/assets/images/wish-in-one-hand/wish-8.webp'
import wish8Lazy from '@/assets/images/wish-in-one-hand/wish-8-lazy.webp'

import wish9 from '@/assets/images/wish-in-one-hand/wish-9.webp'
import wish9Lazy from '@/assets/images/wish-in-one-hand/wish-9-lazy.webp'

import wish10 from '@/assets/images/wish-in-one-hand/wish-10.webp'
import wish10Lazy from '@/assets/images/wish-in-one-hand/wish-10-lazy.webp'

import wish11 from '@/assets/images/wish-in-one-hand/wish-11.webp'
import wish11Lazy from '@/assets/images/wish-in-one-hand/wish-11-lazy.webp'

import wish12 from '@/assets/images/wish-in-one-hand/wish-12.webp'
import wish12Lazy from '@/assets/images/wish-in-one-hand/wish-12-lazy.webp'

const props = defineProps(['project', 'IDNumber'])
const { works } = projects()
const { next, previous } = nextProject()
const router = useRoute()
const route = useRouter()
</script>
