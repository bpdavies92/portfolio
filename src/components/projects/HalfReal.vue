<template>
  <section  
    v-for="(d,i) in project"
    :key="i"
  >
    <v-img  
      alt=""
      height="300"
      aspect-ratio="16/9"
      :lazy-src="bannerLazy"
      cover
      :src="banner"
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
              <v-col cols="12" sm="12">
                <v-img
                  alt=""
                  cover
                  :src="img1"
                  lazy-src="@/assets/images/placeholder.webp"
                  aspect-ratio="16/9"
                ></v-img>
              </v-col>
              <v-col cols="12" sm="12">
                <v-lazy :options="{'threshold':0.5}"
                  transition="scroll-y-reverse-transition">
                  <v-img
                    alt=""
                    height="100%"
                    lazy-src="@/assets/images/placeholder.webp"
                    cover
                    :src="img3"
                    aspect-ratio="16/9"
                  ></v-img>
                </v-lazy>
              </v-col>
              <v-col cols="12" sm="12">
                <v-lazy :options="{'threshold':0.5}"
                  transition="scroll-y-reverse-transition">
                  <v-img
                    alt=""
                    height="100%"
                    cover
                    lazy-src="@/assets/images/placeholder.webp"
                    :src="img4"
                    aspect-ratio="16/9"
                  ></v-img>
                </v-lazy>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" sm="12">
                <v-lazy :options="{'threshold':0.5}"
                  transition="scroll-y-reverse-transition">
                  <v-img
                    alt="half real exhibition opening talk"
                    cover
                    :src="img5"
                    aspect-ratio="16/9"
                    lazy-src="@/assets/images/placeholder.webp"
                  ></v-img>
                </v-lazy>
              </v-col>
              <v-col cols="12" sm="12">
                <v-lazy :options="{'threshold':0.5}"
                  transition="scroll-y-reverse-transition">
                  <v-img
                    alt="half real exhibition space"
                    cover
                    :src="img6"
                    lazy-src="@/assets/images/placeholder.webp"
                    aspect-ratio="16/9"
                  ></v-img>
                </v-lazy>
              </v-col>
            </v-row>
            <v-row>
              <v-lazy :options="{'threshold':0.5}"
                transition="scroll-y-reverse-transition">
                <v-img
                  alt="Half real poster"
                  aspect-ratio="16/9"
                  cover
                  lazy-src="@/assets/images/placeholder.webp"
                  :src="img10"
                ></v-img>
              </v-lazy>
            </v-row>
          </v-col>
        </v-row>

        <v-sheet class="d-flex mt-12">
          <v-btn size="large" variant="text" class="mr-auto" prepend-icon="mdi-arrow-left" @click="previous(project[0])">Previous</v-btn>
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

const { width } = useWindowSize()

// Import all images
import banner from '@/assets/images/half-real/half-real-banner.webp'
import bannerLazy from '@/assets/images/half-real/half-real-banner-lazy.webp'
import img1 from '@/assets/images/half-real/half-real-1.webp'
import img3 from '@/assets/images/half-real/half-real-3.webp'
import img4 from '@/assets/images/half-real/half-real-4.webp'
import img5 from '@/assets/images/half-real/half-real-5.webp'
import img6 from '@/assets/images/half-real/half-real-6.webp'
import img10 from '@/assets/images/half-real/half-real-10.webp'

const props = defineProps(['project'])
const { next, previous } = nextProject()
const router = useRoute()
const route = useRouter()
</script>
