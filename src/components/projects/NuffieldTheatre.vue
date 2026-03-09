<template>
  <section  
    v-for="(d,i) in project"
    :key="i"
  >
    <v-img
      alt=""
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
                    :lazy-src="img1Lazy"
                  >
                
                </v-img>
                <p class="text-caption mt-3">Exhibition: Michael Lacey | A Hole, a Mountain | January 2017</p>
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
                    :lazy-src="img2Lazy"
                  ></v-img>
                 
                </v-lazy>
                 <p class="text-caption mt-3">Gabrielle de la Puente and Zarina Muhammad (The White Pube) | 💧🌚👼🏿 | August 2016 </p>
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
                    :lazy-src="img4Lazy"
                  ></v-img>
                </v-lazy>
                 <p class="text-caption mt-3">Gabrielle de la Puente (The White Pube) artist talk during the 💧🌚👼🏿 exhibition | August 2016</p>
                 
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
                    :lazy-src="img3Lazy"
                  ></v-img>
                </v-lazy>
                <p class="text-caption mt-3">A Small View logo</p>
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
                    :lazy-src="img5Lazy"
                  ></v-img>
                </v-lazy>
                <p class="text-caption mt-3">Exhibition: Kit Brown | Symbiosis | October 2015</p>
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
                    :lazy-src="img6Lazy"
                  ></v-img>
                </v-lazy>
                <p class="text-caption mt-3">Exhibition: Roxy Topia and Paddy Gould | Got Worms? | May 2016</p>
              </v-col>
                         <v-col cols="12" sm="12" md="12">
                <div class="mt-n7" style="position: relative; width: 100%; padding-top: 66.125%; aspect-ratio: 16/9;">
                  <iframe
                    id="kaltura_player"
                   src="https://player.vimeo.com/video/165095890?h=c69021822f"
                    title="LEED Learning and Teaching Conference 2023"
                    allowfullscreen
                    loading="lazy"
                    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;"
                  ></iframe>
                  
                </div>
                <p class="text-caption mt-n6">Exhibition: Alex Pearl, Radamés Ajna, Sam Skinner, Thiago Hersan | Ob_ject and Ob_serve | March 2016</p>
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
                    :lazy-src="img7Lazy"
                  ></v-img>
                </v-lazy>
                <p class="text-caption mt-3">Exhibition: Alex Pearl, Radamés Ajna, Sam Skinner, Thiago Hersan | Ob_ject and Ob_serve | March 2016</p>
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
                    :lazy-src="img8Lazy"
                  ></v-img>
                </v-lazy>
                <p class="text-caption mt-3">Exhibition: Alex Pearl, Radamés Ajna, Sam Skinner, Thiago Hersan | Ob_ject and Ob_serve | March 2016</p>
              </v-col>
              
                                          <v-col cols="12" sm="12">
                <v-lazy
                :options="{'threshold':0.5}"
                  transition="scroll-y-reverse-transition"
                >
                  <v-img
                    alt="Got worms exhibition"
                    cover
                    :src="img9"
                    aspect-ratio="16/9"
                    :lazy-src="img9Lazy"
                  ></v-img>
                </v-lazy>
                <p class="text-caption mt-3">Exhibition: Alex Pearl, Radamés Ajna, Sam Skinner, Thiago Hersan | Ob_ject and Ob_serve | March 2016</p>
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
                    :lazy-src="img10Lazy"
                  ></v-img>
                </v-lazy>
                <p class="text-caption mt-3">Exhibition: Alex Pearl, Radamés Ajna, Sam Skinner, Thiago Hersan | Ob_ject and Ob_serve | March 2016</p>
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
import banner from '@/assets/images/a-small-view/a-small-view-banner.webp'
import bannerLazy from '@/assets/images/a-small-view/a-small-view-banner-lazy.webp'
import img1 from '@/assets/images/a-small-view/a_small_view_1.webp'
import img2 from '@/assets/images/a-small-view/a_small_view_2.webp'
import img3 from '@/assets/images/a-small-view/a_small_view_3.webp'
import img4 from '@/assets/images/a-small-view/a_small_view_4.webp'
import img4Lazy from '@/assets/images/a-small-view/a_small_view_4_lazy.webp'
import img5 from '@/assets/images/a-small-view/a_small_view_5.webp'
import img6 from '@/assets/images/a-small-view/a_small_view_6.webp'
import img1Lazy from '@/assets/images/a-small-view/a_small_view_1_lazy.webp'
import img2Lazy from '@/assets/images/a-small-view/a_small_view_2_lazy.webp'
import img3Lazy from '@/assets/images/a-small-view/a_small_view_3_lazy.webp'
import img5Lazy from '@/assets/images/a-small-view/a_small_view_5_lazy.webp'
import img6Lazy from '@/assets/images/a-small-view/a_small_view_6_lazy.webp'  
import img7 from '@/assets/images/a-small-view/a_small_view_7.webp'
import img7Lazy from '@/assets/images/a-small-view/a_small_view_7_lazy.webp'
import img8 from '@/assets/images/a-small-view/a_small_view_8.webp'
import img8Lazy from '@/assets/images/a-small-view/a_small_view_8_lazy.webp'
import img9 from '@/assets/images/a-small-view/a_small_view_9.webp'
import img9Lazy from '@/assets/images/a-small-view/a_small_view_9_lazy.webp'  
import img10 from '@/assets/images/a-small-view/a_small_view_10.webp'
import img10Lazy from '@/assets/images/a-small-view/a_small_view_10_lazy.webp'


const props = defineProps(['project', 'IDNumber'])
const { next, previous } = nextProject()
const router = useRoute()
const route = useRouter()
const { works } = projects()

// Example reactive for target (if you want to handle that state)
import { ref } from 'vue'
const target = ref(false)
</script>
