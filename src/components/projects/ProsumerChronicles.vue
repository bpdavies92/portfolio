<template>
  <section  
    v-for="(d,i) in project"
    :key="i"
  >
    <v-img
      alt="Prosumer chronicles"
     height="300"
     :lazy-src="bannerLazy"
      aspect-ratio="16/9"
      cover
      :src="banner"
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
                <v-img alt="Prosumer chronicles" cover :src="img17" :lazy-src="img17Lazy"></v-img>
              </v-col>
              <v-col cols="12" sm="12" md="12">
                <lazy                   
                  :options="{'threshold':0.5}"
                  transition="scroll-y-reverse-transition">
                  <v-img aspect-ratio="16/9" alt="Prosumer chronicles" :src="img1" :lazy-src="img1Lazy"></v-img>
                </lazy>
              </v-col>
              <v-col cols="12" sm="12" md="12">
                <lazy :options="{'threshold':0.5}"
                  transition="scroll-y-reverse-transition">
                  <v-img aspect-ratio="16/9" alt="Prosumer chronicles" :lazy-src="img7Lazy" cover :src="img7"></v-img>
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
                  <v-img :lazy-src="img14Lazy" aspect-ratio="9/16" alt="Prosumer chronicles" cover :src="img14"></v-img>
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
                  <v-img :lazy-src="img12Lazy" aspect-ratio="16/9" alt="Prosumer chronicles" cover :src="img12"></v-img>
                </lazy>
              </v-col>
              <v-col cols="12" sm="12" md="12">
                <lazy :options="{'threshold':0.5}"
                  transition="scroll-y-reverse-transition">
                  <v-img :lazy-src="img18Lazy" aspect-ratio="16/9" alt="Prosumer chronicles" :src="img18"></v-img>
                </lazy>
              </v-col>
              <v-col cols="12" sm="12" md="12">
                <lazy :options="{'threshold':0.5}"
                  transition="scroll-y-reverse-transition">
                  <v-img :lazy-src="img15Lazy" aspect-ratio="9/16" alt="Prosumer chronicles" cover :src="img15"></v-img>
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
import banner from '@/assets/images/prosumer-chronicles/pro-chron-banner.webp'
import bannerLazy from '@/assets/images/default.webp'
import img1 from '@/assets/images/prosumer-chronicles/pro-1.webp'
import img3 from '@/assets/images/prosumer-chronicles/pro-3.webp'
import img4 from '@/assets/images/prosumer-chronicles/pro-4.webp'
import img7 from '@/assets/images/prosumer-chronicles/pro-7.webp'
import img12 from '@/assets/images/prosumer-chronicles/pro-12.webp'
import img14 from '@/assets/images/prosumer-chronicles/pro-14.webp'
import img15 from '@/assets/images/prosumer-chronicles/pro-15.webp'
import img17 from '@/assets/images/prosumer-chronicles/pro-17.webp'
import img18 from '@/assets/images/prosumer-chronicles/pro-18.webp'
import img1Lazy from '@/assets/images/prosumer-chronicles/pro-1-lazy.webp'
import img3Lazy from '@/assets/images/prosumer-chronicles/pro-3-lazy.webp'
import img4Lazy from '@/assets/images/prosumer-chronicles/pro-4-lazy.webp'
import img7Lazy from '@/assets/images/prosumer-chronicles/pro-7-lazy.webp'
import img12Lazy from '@/assets/images/prosumer-chronicles/pro-12-lazy.webp'
import img14Lazy from '@/assets/images/prosumer-chronicles/pro-14-lazy.webp'
import img15Lazy from '@/assets/images/prosumer-chronicles/pro-15-lazy.webp'
import img17Lazy from '@/assets/images/prosumer-chronicles/pro-17-lazy.webp'
import img18Lazy from '@/assets/images/prosumer-chronicles/pro-18-lazy.webp'

const { width } = useWindowSize()
const { works } = projects()
const props = defineProps(['project', 'IDNumber'])
const { next, previous } = nextProject()
const router = useRoute()
const route = useRouter()
</script>
