<template>
  <section v-for="(d,i) in project" :key="i">
    <v-img
      eager
      alt=""
      height="300"
      aspect-ratio="16/9"
      :lazy-src="headerImgLazy"
      cover
      :src="headerImg"
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
                <v-img
                  alt="EDI training introduction page"
                  cover
                  aspect-ratio="16/9"
                  :src="img1"
                  lazy-src="@/assets/images/placeholder.webp"
                ></v-img>
              </v-col>
                <v-col cols="12" sm="12" md="12">
                <v-lazy :options="{'threshold':0.5}"
                  transition="scroll-y-reverse-transition">
                  <Quote :minHeight="'237px'">
                    <template v-slot:quote>
                      <p>Well put together with clear objectives and learning outcomes.</p>
                    </template>
                    <template v-slot:person>
                      Anonymous feedback via Microsoft Forms
                    </template>
                  </Quote>
                </v-lazy>
              </v-col>
              <v-col cols="12" sm="12" md="12">
                <v-lazy :options="{'threshold':0.5}"
                  transition="scroll-y-reverse-transition">
                  <v-img
                    alt="Dignity at work page"
                    aspect-ratio="16/9"
                    :src="img2"
                    lazy-src="@/assets/images/placeholder.webp"
                  ></v-img>
                </v-lazy>
              </v-col>
              <v-col cols="12" sm="12" md="12">
                <v-lazy :options="{'threshold':0.5}"
                  transition="scroll-y-reverse-transition">
                  <v-img
                    alt="Home page displaying all sections of the module"
                    aspect-ratio="16/9"
                    :src="img3"
                    lazy-src="@/assets/images/placeholder.webp"
                  ></v-img>
                </v-lazy>
              </v-col>
              <v-col cols="12" sm="12" md="12">
                <v-lazy :options="{'threshold':0.5}"
                  transition="scroll-y-reverse-transition">
                  <Quote :min-height="'285px'">
                    <template v-slot:quote>
                      <p>I thought this was a well constructed course - a significant improvement over the previous version.</p>
                    </template>
                    <template v-slot:person>
                      Anonymous feedback via Microsoft Forms
                    </template>
               
                </Quote> 
              </v-lazy>
              </v-col>
              <v-col cols="12" sm="12" md="12">
                <v-lazy :options="{'threshold':0.5}"
                  transition="scroll-y-reverse-transition">
                  <v-img
                    alt="Talking head video in the course."
                    cover
                    aspect-ratio="16/9"
                    :src="img4"
                    lazy-src="@/assets/images/placeholder.webp"
                  ></v-img>
                </v-lazy>
              </v-col>
            </v-row>
  


        
            <v-row>

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
import Quote from '../Quote.vue'
import { useRouter, useRoute } from 'vue-router'
import nextProject from '@/composables/nextProject'
import { useWindowSize } from '@vueuse/core'

// Responsive window width
const { width } = useWindowSize()

// Props and navigation
const props = defineProps(['project'])
const { next, previous } = nextProject()
const router = useRoute()
const route = useRouter()

// Import images for use in :src
import headerImg from '@/assets/images/edi-module/header_img_2.webp'
import headerImgLazy from '@/assets/images/edi-module/header_img_2_lazy.webp'
import img1 from '@/assets/images/edi-module/E&D-1.webp'
import img2 from '@/assets/images/edi-module/E&D-2.webp'
import img3 from '@/assets/images/edi-module/E&D-3.webp'
import img4 from '@/assets/images/edi-module/E&D-5.webp'
</script>
