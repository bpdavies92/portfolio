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
      :src="img5"
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
                    alt="A hole, a mountain exhibition"
                    cover
                    aspect-ratio="16/9"
                    :src="img1"
                  >
                
                </v-img>
                
              </v-col>
              <v-col cols="12" sm="12">
                <v-lazy
                :options="{'threshold':0.5}"
                  transition="scroll-y-reverse-transition"
                >
                  <v-img
                    alt="The white pube exhibition during Liverpool Bienial 2016"
                    cover
                    aspect-ratio="16/9"
                    :src="img2"
                  ></v-img>
                 
                </v-lazy>
                
              </v-col>
               <v-col cols="12" sm="12">
                <v-lazy
                :options="{'threshold':0.5}"
                  transition="scroll-y-reverse-transition"
                >
                  <v-img
                    alt="The white pube reading / performance"
                    cover
                    aspect-ratio="9/16"
                    :src="img4"
                  ></v-img>
                </v-lazy>
                 
                 
              </v-col>
              <v-col cols="12" sm="12">
                <v-lazy
                :options="{'threshold':0.5}"
                  transition="scroll-y-reverse-transition"
                >
                  <v-img
                    alt="A small view"
                    cover
                    aspect-ratio="16/9"
                    :src="img3"
                  ></v-img>
                </v-lazy>
          
              </v-col>
               
              <v-col cols="12" sm="12">
                <v-lazy
                :options="{'threshold':0.5}"
                  transition="scroll-y-reverse-transition"
                >
                  <v-img
                    alt="Symbiosis exhibition"
                    cover
                    :src="img5"
                    aspect-ratio="16/9"
                  ></v-img>
                </v-lazy>
               
              </v-col>
                            <v-col cols="12" sm="12">
                <v-lazy
                :options="{'threshold':0.5}"
                  transition="scroll-y-reverse-transition"
                >
                  <v-img
                    alt="Got worms exhibition"
                    cover
                    :src="img6"
                    aspect-ratio="16/9"
                  ></v-img>
                </v-lazy>
                
              </v-col>
                       
                                          <v-col cols="12" sm="12">
                <v-lazy
                :options="{'threshold':0.5}"
                  transition="scroll-y-reverse-transition"
                >
                  <v-img
                    alt="Got worms exhibition"
                    cover
                    :src="img7"
                    aspect-ratio="16/9"
                  ></v-img>
                </v-lazy>
               
              </v-col>
                                          <v-col cols="12" sm="12">
                <v-lazy
                :options="{'threshold':0.5}"
                  transition="scroll-y-reverse-transition"
                >
                  <v-img
                    alt="Got worms exhibition"
                    cover
                    :src="img8"
                    aspect-ratio="16/9"
                  ></v-img>
                </v-lazy>
              
              </v-col>
              

              
                                          <v-col cols="12" sm="12">
                <v-lazy
                :options="{'threshold':0.5}"
                  transition="scroll-y-reverse-transition"
                >
                  <v-img
                    alt="Got worms exhibition"
                    cover
                    :src="img10"
                    aspect-ratio="16/9"
                  ></v-img>
                </v-lazy>
              
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

const { width } = useWindowSize()

// Import images for bundling
import img1 from '@/assets/images/the-nuffield-theatre/theatre-1.webp'
import img2 from '@/assets/images/the-nuffield-theatre/theatre-2.webp'
import img3 from '@/assets/images/the-nuffield-theatre/theatre-3.webp'
import img4 from '@/assets/images/the-nuffield-theatre/theatre-4.webp'
import img5 from '@/assets/images/the-nuffield-theatre/theatre-5.webp'
import img6 from '@/assets/images/the-nuffield-theatre/theatre-6.webp'
import img7 from '@/assets/images/the-nuffield-theatre/theatre-7.webp'
import img8 from '@/assets/images/the-nuffield-theatre/theatre-8.webp'

import img10 from '@/assets/images/the-nuffield-theatre/theatre-10.webp'
import img11 from '@/assets/images/the-nuffield-theatre/theatre-12.webp'
import img12 from '@/assets/images/the-nuffield-theatre/theatre-13.webp'


const props = defineProps(['project', 'IDNumber'])
const { next, previous } = nextProject()
const router = useRoute()
const route = useRouter()
const { works } = projects()

// Example reactive for target (if you want to handle that state)
import { ref } from 'vue'
const target = ref(false)
</script>
