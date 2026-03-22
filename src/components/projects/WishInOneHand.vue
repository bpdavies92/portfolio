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
                  ></v-img>
               
              </v-col>
            <v-col cols="12" sm="12" md="12">
                <v-img aspect-ratio="16/9" cover :src="wish5"></v-img>
              </v-col>
              <v-col cols="12" sm="12" md="12">
                <v-img cover aspect-ratio="16/9" :src="wish6"></v-img>
              </v-col>
              <v-col cols="12">
                <v-img
                  alt="My five year plan cycle diagram"
                  cover
                  aspect-ratio="16/9"
                  :src="wish2"
                ></v-img>
              </v-col>
                <v-col cols="12" sm="12" md="12">
                  <v-img
                    alt="My five year plan cycle diagram"
                    cover
                    aspect-ratio="16/9"
                    :src="wish3"
                  ></v-img>
                </v-col>
              <v-col cols="12" sm="12" md="12">
                  <v-img
                    alt="My five year plan cycle diagram"
                    cover
                    aspect-ratio="16/9"
                    :src="wish4"
                  ></v-img>
                </v-col>
                            <v-col cols="12" sm="12" md="12">
                  <v-img
                    alt="My five year plan cycle diagram"
                    cover
                    aspect-ratio="16/9"
                    :src="wish7"
                  ></v-img>
                </v-col>
                            <v-col cols="12" sm="12" md="12">
                  <v-img
                    alt="My five year plan cycle diagram"
                    cover
                    aspect-ratio="16/9"
                    :src="wish8"
                  ></v-img>
                </v-col>
                            <v-col cols="12" sm="12" md="12">
                  <v-img
                    alt="My five year plan cycle diagram"
                    cover
                    aspect-ratio="16/9"
                    :src="wish9"
                  ></v-img>
                </v-col>
                            <v-col cols="12" sm="12" md="12">
                  <v-img
                    alt="My five year plan cycle diagram"
                    cover
                    aspect-ratio="16/9"
                    :src="wish10"
                  ></v-img>
                </v-col>
                            <v-col cols="12" sm="12" md="12">
                  <v-img
                    alt="My five year plan cycle diagram"
                    cover
                    aspect-ratio="16/9"
                    :src="wish11"
                  ></v-img>
                </v-col>
                            <v-col cols="12" sm="12" md="12">
                  <v-img
                    alt="My five year plan cycle diagram"
                    cover
                    aspect-ratio="16/9"
                    :src="wish12"
                  ></v-img>
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
import wish2 from '@/assets/images/wish-in-one-hand/wish-2.webp'
import wish3 from '@/assets/images/wish-in-one-hand/wish-3.webp'
import wish4 from '@/assets/images/wish-in-one-hand/wish-4.webp'
import wish5 from '@/assets/images/wish-in-one-hand/wish-5.webp'
import wish6 from '@/assets/images/wish-in-one-hand/wish-6.webp'
import wish7 from '@/assets/images/wish-in-one-hand/wish-7.webp'
import wish8 from '@/assets/images/wish-in-one-hand/wish-8.webp'
import wish9 from '@/assets/images/wish-in-one-hand/wish-9.webp'
import wish10 from '@/assets/images/wish-in-one-hand/wish-10.webp'
import wish11 from '@/assets/images/wish-in-one-hand/wish-11.webp'
import wish12 from '@/assets/images/wish-in-one-hand/wish-12.webp'

const props = defineProps(['project', 'IDNumber'])
const { works } = projects()
const { next, previous } = nextProject()
const router = useRoute()
const route = useRouter()
</script>
