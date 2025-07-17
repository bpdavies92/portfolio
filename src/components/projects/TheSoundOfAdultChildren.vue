<template>
  <section  
    v-for="(d,i) in project"
    :key="i"
  >
    <v-img
      alt="Prosumer chronicles"
     height="300"
     :lazy-src="img6Lazy"
      aspect-ratio="16/9"
      cover
      :src="img6"
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
            <v-col cols="12" sm="12">
                <v-img alt="Prosumer chronicles" aspect-ratio="16/9"  cover :src="img6" :lazy-src="img6Lazy"></v-img>
              </v-col>
              <v-col cols="12" sm="12" md="12">
                <lazy                   
                  :options="{'threshold':0.5}"
                  transition="scroll-y-reverse-transition">
                  <v-img aspect-ratio="16/9" alt="Prosumer chronicles" :src="img1" :lazy-src="img1Lazy"></v-img>
                </lazy>
              </v-col>
        <v-col cols="12" sm="12" md="12">
                <lazy                   
                  :options="{'threshold':0.5}"
                  transition="scroll-y-reverse-transition">
                  <v-img aspect-ratio="16/9" alt="Prosumer chronicles" :src="img2" :lazy-src="img2Lazy"></v-img>
                </lazy>
              </v-col>
              <v-col cols="12" sm="12" md="12">
                <lazy :options="{'threshold':0.5}"
                  transition="scroll-y-reverse-transition">
                  <v-img :lazy-src="img3Lazy" aspect-ratio="16/9" alt="Prosumer chronicles" cover :src="img3"></v-img>
                </lazy>
              </v-col>
              <v-col cols="12" sm="12" md="12">
                <lazy :options="{'threshold':0.5}"
                  transition="scroll-y-reverse-transition">
                  <v-img :lazy-src="img4Lazy" aspect-ratio="16/9" alt="Prosumer chronicles" cover :src="img4"></v-img>
                </lazy>
              </v-col>
              <v-col cols="12" sm="12" md="12">
                <lazy :options="{'threshold':0.5}"
                  transition="scroll-y-reverse-transition">
                  <v-img :lazy-src="img5Lazy" aspect-ratio="16/9" alt="Prosumer chronicles" cover :src="img5"></v-img>
                </lazy>
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
import { useWindowSize } from '@vueuse/core'
import projects from '@/composables/projects'

// Import images so bundler includes them and paths resolve

import img1 from '@/assets/images/adult-children/adult-children-1.webp'
import img1Lazy from '@/assets/images/adult-children/adult-children-1-lazy.webp'

import img2 from '@/assets/images/adult-children/adult-children-2.webp'
import img2Lazy from '@/assets/images/adult-children/adult-children-2-lazy.webp'

import img3 from '@/assets/images/adult-children/adult-children-3.webp'
import img3Lazy from '@/assets/images/adult-children/adult-children-3-lazy.webp'

import img4 from '@/assets/images/adult-children/adult-children-4.webp'
import img4Lazy from '@/assets/images/adult-children/adult-children-4-lazy.webp'

import img5 from '@/assets/images/adult-children/adult-children-5.webp'
import img5Lazy from '@/assets/images/adult-children/adult-children-5-lazy.webp'


import img6 from '@/assets/images/adult-children/adult-children-6.webp'
import img6Lazy from '@/assets/images/adult-children/adult-children-6-lazy.webp'

const { width } = useWindowSize()
const { works } = projects()
const props = defineProps(['project', 'IDNumber'])
const { next, previous } = nextProject()
const router = useRoute()
const route = useRouter()
</script>
