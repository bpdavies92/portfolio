<template>
  <section  
    v-for="(d,i) in project"
    :key="i"
  >
    <v-img
      alt=""
      :height="width >= 960 ? 'auto' : 300"
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
              <v-col>
                <v-img
                  alt="A hole, a mountain exhibition"
                  cover
                  aspect-ratio="16/9"
                  :src="img1"
                ></v-img>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" sm="12" md="6">
                <v-img
                  ref="target"
                  :class="{'float-up' : target === true}"
                  alt="The white pube exhibition during Liverpool Bienial 2016"
                  cover
                  aspect-ratio="16/9"
                  :src="img2"
                ></v-img>
              </v-col>
              <v-col cols="12" sm="12" md="6">
                <v-img
                  alt="A small view"
                  max-height="400"
                  cover
                  aspect-ratio="16/9"
                  :src="img3"
                ></v-img>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-img
                  alt="The white pube reading / performance"
                  cover
                  aspect-ratio="16/9"
                  :src="img4"
                ></v-img>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-img
                  alt="Symbiosis exhibition"
                  cover
                  :src="img5"
                  aspect-ratio="16/9"
                ></v-img>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-img
                  alt="Got worms exhibition"
                  cover
                  :src="img6"
                  aspect-ratio="16/9"
                ></v-img>
              </v-col>
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

// Import images for bundling
import banner from '@/assets/images/a-small-view/a-small-view-banner.jpg'
import img1 from '@/assets/images/a-small-view/a_small_view_1.jpg'
import img2 from '@/assets/images/a-small-view/a_small_view_2.jpg'
import img3 from '@/assets/images/a-small-view/a_small_view_3.png'
import img4 from '@/assets/images/a-small-view/a_small_view_4.jpg'
import img5 from '@/assets/images/a-small-view/a_small_view_5.jpg'
import img6 from '@/assets/images/a-small-view/a_small_view_6.jpg'

const props = defineProps(['project'])
const { next, previous } = nextProject()
const router = useRoute()
const route = useRouter()

// Example reactive for target (if you want to handle that state)
import { ref } from 'vue'
const target = ref(false)
</script>
