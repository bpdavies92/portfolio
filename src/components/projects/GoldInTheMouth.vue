<template>
  <section  
    v-for="(d,i) in project"
    :key="i"
  >
    <v-img
      alt=""
      height="300"
      aspect-ratio="16/9"
      :lazy-src="gold7Lazy"
      cover
      :src="gold7"
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
                <v-lazy 
                  :options="{'threshold':0.5}"
                  transition="scroll-y-reverse-transition">
                  <v-img
                    alt="My five year plan cycle diagram"
                    cover
                    aspect-ratio="16/9"
                    :src="gold1"
                    lazy-src="@/assets/images/placeholder.webp"
                  ></v-img>
                </v-lazy>
              </v-col>
            <v-col cols="12" sm="12" md="12">
                <v-lazy
                  :options="{'threshold':0.5}"
                  transition="scroll-y-reverse-transition">
                  <v-img aspect-ratio="16/9" :src="gold5" lazy-src="@/assets/images/placeholder.webp"></v-img>
                </v-lazy>
              </v-col>
              <v-col cols="12" sm="12" md="12">
                <v-lazy
                  :options="{'threshold':0.5}"
                  transition="scroll-y-reverse-transition">
                  <v-img lazy-src="@/assets/images/placeholder.webp" aspect-ratio="16/9" :src="gold6"></v-img>
                </v-lazy>
              </v-col>
              <v-col cols="12">
                <v-lazy
                  :options="{'threshold':0.5}"
                  transition="scroll-y-reverse-transition">
                  <v-img
                    alt="My five year plan cycle diagram"
                    cover
                    lazy-src="@/assets/images/placeholder.webp"
                    aspect-ratio="16/9"
                    :src="gold2"
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
                    :src="gold3"
                    lazy-src="@/assets/images/placeholder.webp"
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
                    :src="gold4"
                    lazy-src="@/assets/images/placeholder.webp"
                  ></v-img>
                </v-lazy>
              </v-col>
            </v-row>
  

          </v-col>
        </v-row>
        <v-sheet class="d-flex mt-12">
          <v-btn size="large" variant="text" class="mr-auto" prepend-icon="mdi-arrow-left" @click="previous(project[0])">
            Previous
          </v-btn>
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

// Import images for proper bundling
import gold1 from '@/assets/images/gold-in-the-mouth/gold-1.webp'
import gold2 from '@/assets/images/gold-in-the-mouth/gold-2.webp'
import gold3 from '@/assets/images/gold-in-the-mouth/gold-3.webp'
import gold4 from '@/assets/images/gold-in-the-mouth/gold-4.webp'
import gold5 from '@/assets/images/gold-in-the-mouth/gold-5.webp'
import gold6 from '@/assets/images/gold-in-the-mouth/gold-6.webp'
import gold7 from '@/assets/images/gold-in-the-mouth/gold-7.webp'
import gold7Lazy from '@/assets/images/gold-in-the-mouth/gold-7-lazy.webp'

const props = defineProps(['project'])
const { next, previous } = nextProject()
const router = useRoute()
const route = useRouter()
</script>
