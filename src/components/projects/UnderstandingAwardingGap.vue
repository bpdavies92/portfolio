<template>
  <section v-for="(d, i) in project" :key="i">
    <v-img
      alt="Understanding the awarding gap banner"
      height="300"
      :lazy-src="lazyBannerImg"
      cover
      :src="bannerImg"
      eager
    />

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
              <v-col cols="12">
                <v-img
                  alt="Home page"
                  cover
                  aspect-ratio="16/9"
                  :src="img1"
                />
              </v-col>
                         <v-col cols="12">
                <v-img
                  alt="Introduction slide with introduction video by Rosie Bryce"
                  cover
                  aspect-ratio="16/9"
                  lazy-src="@/assets/images/placeholder.webp"
                  :src="img2"
                />
              </v-col>
               <v-col cols="12">
                <v-img
                  alt="Learning outcomes slide"
                  cover
                  aspect-ratio="16/9"
                  lazy-src="@/assets/images/placeholder.webp"
                  :src="img3"
                />
              </v-col>
                            <v-col cols="12">
                <v-img
                  alt="Creating change from data"
                  cover
                  aspect-ratio="16/9"
                  lazy-src="@/assets/images/placeholder.webp"
                  :src="img4"
                />
              </v-col>
                            <v-col cols="12">
                <v-img
                  alt="A slide of a selected section of the data slide"
                  cover
                  aspect-ratio="16/9"
                  lazy-src="@/assets/images/placeholder.webp"
                  :src="img5"
                />
              </v-col>
                            <v-col cols="12">
                <v-img
                  alt="Better quality still from collecting data section"
                  cover
                  aspect-ratio="16/9"
                  lazy-src="@/assets/images/placeholder.webp"
                  :src="img6"
                />
              </v-col>
                           <v-col cols="12">
                <v-img
                  alt="Exploring the dashboard section"
                  cover
                  aspect-ratio="16/9"
                  lazy-src="@/assets/images/placeholder.webp"
                  :src="img7"
                />
              </v-col>
                          <v-col cols="12">
                <v-img
                  alt="Case study page"
                  cover
                  aspect-ratio="9/16"
                  :lazy-src="img8Lazy"
                  :src="img8"
                />
              </v-col>
            </v-row>


        
          </v-col>
        </v-row>

        <v-sheet class="d-flex mt-12 align-center">
          <v-btn size="large" variant="text" class="mr-auto" prepend-icon="mdi-arrow-left" @click="previous(project[0])">Previous</v-btn>
          <v-sheet class="font-weight-bold">{{ IDNumber }} / {{ works.length }}</v-sheet>
          <v-btn size="large" variant="text" class="ml-auto" append-icon="mdi-arrow-right" @click="next(project[0])">Next</v-btn>
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

// Image imports
import bannerImg from '@/assets/images/understanding-awarding-gap/understanding-1.webp'
import lazyBannerImg from '@/assets/images/understanding-awarding-gap/understanding-banner-lazy.webp'
import img1 from '@/assets/images/understanding-awarding-gap/understanding-the-awarding-gap-1.webp'
import img2 from '@/assets/images/understanding-awarding-gap/understanding-the-awarding-gap-2.webp'
import img3 from '@/assets/images/understanding-awarding-gap/understanding-the-awarding-gap-3.webp'
import img4 from '@/assets/images/understanding-awarding-gap/understanding-2.gif'
import img5 from '@/assets/images/understanding-awarding-gap/understanding-the-awarding-gap-8.webp'
import img6 from '@/assets/images/understanding-awarding-gap/understanding-the-awarding-gap-7.webp'
import img7 from '@/assets/images/understanding-awarding-gap/understanding-the-awarding-gap-5.webp'
import img8 from '@/assets/images/understanding-awarding-gap/understanding-the-awarding-gap-9.webp'
import img8Lazy from '@/assets/images/understanding-awarding-gap/understanding-the-awarding-gap-9-lazy.webp'

const { width } = useWindowSize()

const { works } = projects()
const props = defineProps(['project', 'IDNumber'])
const { next, previous } = nextProject()
const router = useRoute()
const route = useRouter()


</script>
