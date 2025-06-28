<template>
  <section v-for="(d, i) in project" :key="i">
    <v-img
      alt="LEED conference banner"
      max-height="400"
      aspect-ratio="16/9"
      cover
      eager
      :src="img12"
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
              <v-col>
                <div style="position: relative; width: 100%; padding-top: 66.125%;">
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
            </v-row>

            <!-- Reusable v-img wrapper for layout consistency -->
            <v-row>
              <v-col>
                <v-img alt="LEED conference workshop" cover aspect-ratio="16/9" :lazy-src="img2" :src="img2" />
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="12">
                <v-img alt="Dr Fiona Saunders introducing the LEED conference" cover aspect-ratio="16/9" :lazy-src="img3" :src="img3" />
              </v-col>
              <v-col cols="12">
                <v-img alt="Professor Andy Dainty speaking at the LEED conference" cover aspect-ratio="16/9" :lazy-src="img4" :src="img4" />
              </v-col>
            </v-row>

            <v-row>
              <v-col>
                <v-img alt="Participant looking at posters" cover aspect-ratio="16/9" :lazy-src="img5" :src="img5" />
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="12">
                <v-img alt="Origami at conference check-in" cover aspect-ratio="16/9" :lazy-src="img7" :src="img7" />
              </v-col>

              <v-col>
                <v-row>
                  <v-col cols="12">
                    <v-img alt="Participant playing Jenga" cover aspect-ratio="16/9" :lazy-src="img12" :src="img12" />
                  </v-col>
                </v-row>

                <v-row>
                  <v-col cols="12">
                    <v-img alt="Workshop session" cover aspect-ratio="16/9" :lazy-src="img8" :src="img8" />
                  </v-col>
                </v-row>
              </v-col>
            </v-row>

            <v-row>
              <v-col>
                <v-img alt="Another workshop" cover aspect-ratio="16/9" :lazy-src="img10" :src="img10" />
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
import img2 from '@/assets/images/conference/leed-conf-2.jpg'
import img3 from '@/assets/images/conference/leed-conf-3.jpg'
import img4 from '@/assets/images/conference/leed-conf-4.jpg'
import img5 from '@/assets/images/conference/leed-conf-5.jpg'
import img7 from '@/assets/images/conference/leed-conf-7.jpg'
import img8 from '@/assets/images/conference/leed-conf-8.jpg'
import img10 from '@/assets/images/conference/leed-conf-10.jpg'
import img12 from '@/assets/images/conference/leed-conf-12.jpg'

const props = defineProps(['project'])
const { next, previous } = nextProject()
const router = useRoute()
const route = useRouter()
</script>
