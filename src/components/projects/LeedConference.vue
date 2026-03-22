<template>
  <section v-for="(d, i) in project" :key="i">
    <v-img
      alt="LEED conference banner"
      height="300"
      aspect-ratio="16/9"
      cover
      eager
      :src="img12"
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
        
            </div>
          </v-col>

          <v-col cols="12" md="7">
            <v-row>
              <v-col cols="12" md="12" sm="12">
                    <v-btn
                href="https://www.utaresources.mmu.ac.uk/leed-conference-23/"
                block
                color="secondary"
                target="blank"
                size="large"
                prepend-icon="mdi-link"
              >
                Explore the conference website
              </v-btn>
              </v-col>
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
                <v-img  alt="Dr Fiona Saunders introducing the LEED conference" cover aspect-ratio="16/9" :src="img13" />
              </v-col>
              <v-col cols="12" sm="12" md="12">
                <v-img  alt="Dr Fiona Saunders introducing the LEED conference" cover aspect-ratio="16/9" :src="imgWeb1" />
              </v-col>
              <v-col cols="12" sm="12" md="12">
                <v-img  alt="Dr Fiona Saunders introducing the LEED conference" cover aspect-ratio="16/9" :src="imgWeb2" />
              </v-col>
              <v-col cols="12" sm="12" md="12">
                <v-img  alt="Dr Fiona Saunders introducing the LEED conference" cover aspect-ratio="16/9" :src="imgWeb3" />
              </v-col>
              <v-col cols="12" sm="12" md="12">
                <v-img  alt="Dr Fiona Saunders introducing the LEED conference" cover aspect-ratio="16/9" :src="imgWeb4" />
              </v-col>
              <v-col cols="12" sm="12" md="12">
                <v-img  alt="Dr Fiona Saunders introducing the LEED conference" cover aspect-ratio="16/9" :src="imgWeb5" />
              </v-col>
              <v-col cols="12" sm="12" md="12">
                <v-img  alt="Dr Fiona Saunders introducing the LEED conference" cover aspect-ratio="16/9" :src="img3" />
              </v-col>
              <v-col cols="12" sm="12" md="12">
                <v-img  alt="Participant looking at posters" cover aspect-ratio="16/9" :src="img5" />
              </v-col>
            </v-row>





    
          </v-col>
        </v-row>

        <v-sheet class="d-flex mt-12 align-center">
          <v-btn
            size="large"
            variant="text"
            class="mr-auto"
            prepend-icon="mdi-arrow-left"
            @click="previous(project[0])"
          >
            Previous
          </v-btn>
          <v-sheet class="font-weight-bold">{{ IDNumber }} / {{ works.length }}</v-sheet>
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
import projects from '@/composables/projects'

// Image imports
import img5 from '@/assets/images/conference/leed-conf-5.webp'
import img12 from '@/assets/images/conference/leed-conf-12.webp'

import img13 from '@/assets/images/conference/conf-web-13.webp'
import imgWeb1 from '@/assets/images/conference/conf-web-1.webp'
import imgWeb2 from '@/assets/images/conference/conf-web-2.webp'
import imgWeb3 from '@/assets/images/conference/conf-web-3.webp'
import imgWeb4 from '@/assets/images/conference/conf-web-4.webp'
import imgWeb5 from '@/assets/images/conference/conf-web-5.webp'

const props = defineProps(['project', 'IDNumber'])
const { works } = projects()
const { next, previous } = nextProject()
const router = useRoute()
const route = useRouter()
</script>
