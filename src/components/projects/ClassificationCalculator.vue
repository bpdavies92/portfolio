<template>
  <section v-for="(d, i) in project" :key="i">
    <!-- Banner image with eager loading -->
    <v-img
      eager
      alt=""
      height="300"
      aspect-ratio="16/9"
      cover
      :src="bannerImage"
      :lazy-src="bannerImageLazy"
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
                  <v-col cols="12" sm="12" md="12">
                    <v-btn
                      href="https://utaresources.mmu.ac.uk/classification-calculator/"
                      block
                      color="secondary"
                      size="large"
                      prepend-icon="mdi-link"
                    >
                      Play with the calculator
                    </v-btn>
                  </v-col>
                    <v-col cols="12" sm="12" md="12">
                    <v-lazy                
                    :options="{'threshold':0.5}"
                      transition="scroll-y-reverse-transition">
                      <div class="iframe-wrapper">
                        <iframe
                          id="kaltura_player"
                          src="https://cdnapisec.kaltura.com/p/1128062/sp/112806200/embedIframeJs/uiconf_id/27474902/partner_id/1128062?iframeembed=true&playerId=kaltura_player&entry_id=1_432k1v6a&flashvars[akamaiHD.loadingPolicy]=preInitialize&amp;flashvars[akamaiHD.asyncInit]=true&amp;flashvars[streamerType]=hdnetwork&amp;flashvars[localizationCode]=en&amp;flashvars[sideBarContainer.plugin]=true&amp;flashvars[sideBarContainer.position]=left&amp;flashvars[sideBarContainer.clickToClose]=true&amp;flashvars[chapters.plugin]=true&amp;flashvars[chapters.layout]=vertical&amp;flashvars[chapters.thumbnailRotator]=false&amp;flashvars[streamSelector.plugin]=true&amp;flashvars[EmbedPlayer.SpinnerTarget]=videoHolder&amp;flashvars[dualScreen.plugin]=true&amp;flashvars[hotspots.plugin]=1&amp;flashvars[Kaltura.addCrossoriginToIframe]=true&amp;&wid=1_bdw8aa2w"
                          allowfullscreen
                          webkitallowfullscreen
                          mozAllowFullScreen
                          allow="autoplay *; fullscreen *; encrypted-media *"
                          sandbox="allow-downloads allow-forms allow-same-origin allow-scripts allow-top-navigation allow-pointer-lock allow-popups allow-modals allow-orientation-lock allow-popups-to-escape-sandbox allow-presentation allow-top-navigation-by-user-activation"
                          frameborder="0"
                          title="Undergraduate Degree Classification Calculator: Introduction"
                        ></iframe>
                      </div>
                    </v-lazy>
                  </v-col>
                  <v-col cols="12" sm="12" md="12">
                    <v-img
                      eager
                      alt="Classification calculator"
                      cover
                      :src="calcImage"
                      aspect-ratio="16/9"
                      lazy-src="@/assets/images/placeholder.webp"
                    ></v-img>
                  </v-col>
                    <v-col cols="12" sm="12" md="12">
                    <v-lazy
                      :options="{'threshold':0.5}"
                      transition="scroll-y-reverse-transition"
                    >
                      <Quote minHeight="'743px'">
                        <template v-slot:quote>
                          It was my first time working with [Ben] and he was an absolute
                          joy. [Ben] produced something that was far better than I ever
                          pictured: it looks incredibly professional and he’s given loads
                          of consideration to how to make it was user-friendly as
                          possible for students. He also produced the guidance video —
                          the production values blew me away! The degree classification
                          calculator has had almost 11,000 unique hits so far, which is
                          truly impressive.
                        </template>
                        <template v-slot:person>
                          Victoria Thompson, Head of Assessment Governance,
                        </template>
                        <template v-slot:cite>Manchester Staff Awards statement</template>
                      </Quote>
                    </v-lazy>
                  </v-col>
                </v-row>
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
import { useWindowSize } from '@vueuse/core'
import Description from '../Description.vue'
import projects from '@/composables/projects'
import Quote from '../Quote.vue'
import nextProject from '@/composables/nextProject'
import { useRouter, useRoute } from 'vue-router'

// Import images so Vite processes them correctly
import bannerImage from '@/assets/images/calculator/degree-calc-banner.jpg'
import bannerImageLazy from '@/assets/images/calculator/degree-calc-banner-lazy.webp'
import calcImage from '@/assets/images/calculator/calc-1.jpg'

const { width } = useWindowSize()
const {works} = projects()

const props = defineProps(['project', 'IDNumber'])
const { next, previous } = nextProject()
const router = useRoute()
const route = useRouter()
</script>

<style scoped>
.iframe-wrapper {
  position: relative;
  padding-bottom: 66.125%; /* aspect ratio to match iframe */
  height: 0;
  overflow: hidden;
  max-width: 100%;
  aspect-ratio: 16/9;
}

.iframe-wrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
}
</style>
