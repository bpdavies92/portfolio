<template>
  <section v-for="(d, i) in project" :key="i">
    <v-img
      alt="LEED conference banner"
      height="300"
      aspect-ratio="16/9"
      cover
      eager
      :src="img12"
      :lazy-src="img12Lazy"
      loading="eager"
      preload
      class="mb-4"
    />

    <v-container fluid class="mt-12 projects">
      <div class="content-container">
        <v-row>
          <v-col class="position-relative" cols="12" md="5">
            <div class="sticky">
              <Description :d="d" :project="project" />
              <v-btn
                href="https://www.utaresources.mmu.ac.uk/leed-conference-23/"
                block
                color="secondary"
                size="large"
                prepend-icon="mdi-link"
              >
                Explore the conference website
              </v-btn>
            </div>
          </v-col>

          <v-col cols="12" md="7">
            <v-row>
              <v-col cols="12" sm="12" md="12">
                <div style="position: relative; width: 100%; padding-top: 66.125%; aspect-ratio: 16/9;">
                  <iframe
                    id="kaltura_player"
                    src="https://cdnapisec.kaltura.com/p/1128062/sp/112806200/embedIframeJs/uiconf_id/27474902/partner_id/1128062?iframeembed=true&playerId=kaltura_player&entry_id=1_1wuvpsgv"
                    title="LEED Learning and Teaching Conference 2023"
                    allowfullscreen
                    loading="lazy"
                    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;"
                  ></iframe>
                </div>
                <p class="text-caption mt-3">Video introduction by Professor Fiona Saunders</p>
              </v-col>
              <v-col cols="12" sm="12" md="12">
                <v-img height="500" alt="LEED conference workshop" cover aspect-ratio="16/9" :lazy-src="img2Lazy" :src="img2" />
              </v-col>
              <v-col cols="12" sm="12" md="12">
                <v-img height="500" alt="Dr Fiona Saunders introducing the LEED conference" cover aspect-ratio="16/9" :lazy-src="img3Lazy" :src="img3" />
              </v-col>
              <v-col cols="12" sm="12" md="12">
                <v-img height="500" alt="Professor Andy Dainty speaking at the LEED conference" cover aspect-ratio="16/9" :lazy-src="img4Lazy" :src="img4" />
              </v-col>
              <v-col cols="12" sm="12" md="12">
                <v-img height="500" alt="Participant looking at posters" cover aspect-ratio="16/9" :lazy-src="img5Lazy" :src="img5" />
              </v-col>
              <v-col cols="12" sm="12" md="12">
                <v-img height="500" alt="Origami at conference check-in" cover aspect-ratio="16/9" :lazy-src="img7Lazy" :src="img7" />
              </v-col>
              <v-col cols="12" sm="12" md="12">
                  <v-img height="500" alt="Participant playing Jenga" cover aspect-ratio="16/9" :lazy-src="img12Lazy" :src="img12" />
              </v-col>
              <v-col cols="12" sm="12" md="12">
                  <v-img height="500" alt="Workshop session" cover aspect-ratio="16/9" :lazy-src="img8Lazy" :src="img8" />
              </v-col>
              <v-col cols="12" sm="12" md="12">
                <v-img height="500" alt="Another workshop" cover aspect-ratio="16/9" :lazy-src="img10Lazy" :src="img10" />
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
import { useRouter, useRoute } from 'vue-router'
import nextProject from '@/composables/nextProject'

// Image imports
import img2 from '@/assets/images/conference/leed-conf-2.webp'
import img3 from '@/assets/images/conference/leed-conf-3.webp'
import img4 from '@/assets/images/conference/leed-conf-4.webp'
import img5 from '@/assets/images/conference/leed-conf-5.webp'
import img7 from '@/assets/images/conference/leed-conf-7.webp'
import img8 from '@/assets/images/conference/leed-conf-8.webp'
import img10 from '@/assets/images/conference/leed-conf-10.webp'
import img12 from '@/assets/images/conference/leed-conf-12.webp'
import img2Lazy from '@/assets/images/conference/leed-conf-2-lazy.webp'
import img3Lazy from '@/assets/images/conference/leed-conf-3-lazy.webp'
import img4Lazy from '@/assets/images/conference/leed-conf-4-lazy.webp'
import img5Lazy from '@/assets/images/conference/leed-conf-5-lazy.webp'
import img7Lazy from '@/assets/images/conference/leed-conf-7-lazy.webp'
import img8Lazy from '@/assets/images/conference/leed-conf-8-lazy.webp'
import img10Lazy from '@/assets/images/conference/leed-conf-10-lazy.webp'
import img12Lazy from '@/assets/images/conference/leed-conf-12-lazy.webp'

const props = defineProps(['project'])
const { next, previous } = nextProject()
const router = useRoute()
const route = useRouter()
</script>
