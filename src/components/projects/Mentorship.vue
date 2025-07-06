<template>
  <section v-for="(d, i) in project" :key="i">
    <v-img
      alt=""
      height="300"
      aspect-ratio="16/9"
      cover
      :lazy-src="heroLazyImg"
      :src="heroImg"
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
              <v-col>
                <v-row>
                  <v-col>
                    <Quote :minHeight="'237px'">
                      <template v-slot:quote>
                        This is a great resource. It's engaging, informative and inspiring. Thanks!
                      </template>
                      <template v-slot:person>
                        Anonymous feedback via Microsoft Forms
                      </template>
                    </Quote>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" sm="12" md="6">
                    <v-img
                      alt="Mentorship program hero image"
                      :lazy-src="img4Lazy"
                      cover
                      aspect-ratio="16/9"
                      :src="img4"
                    ></v-img>
                  </v-col>
                  <v-col cols="12" sm="12" md="6">
                    <v-img
                      alt="Mentorship program image"
                      :lazy-src="img3Lazy"
                      cover
                      aspect-ratio="16/9"
                      :src="img3"
                    ></v-img>
                  </v-col>
                </v-row>
              </v-col>
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

// Responsive width
const { width } = useWindowSize()

const props = defineProps(['project'])
const { next, previous } = nextProject()
const route = useRoute()
const router = useRouter()

// Import images properly
import heroImg from '@/assets/images/mentorship/mentorship-hero.webp'
import heroLazyImg from '@/assets/images/mentorship/mentorship-hero-lazy.webp'
import img3 from '@/assets/images/mentorship/mentorship-3.webp'
import img4 from '@/assets/images/mentorship/mentorship-4.webp'
import img3Lazy from '@/assets/images/mentorship/mentorship-3-lazy.webp'
import img4Lazy from '@/assets/images/mentorship/mentorship-4-lazy.webp'
</script>
