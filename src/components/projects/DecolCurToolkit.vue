<template>
  <section  
    v-for="(d, i) in project"
    :key="i"
  >
    <v-img
    eager
      alt=""
      height="300"
      aspect-ratio="16/9"
      cover
      :lazy-src="bannerImgLazy"
      :src="bannerImg"
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
              <v-col cols="12" sm="12">
                <v-lazy
                  :options="{'threshold':0.5}"
                  transition="scroll-y-reverse-transition"
                >
                  <div style="position:relative;padding-bottom:66.125%">
                    <iframe
                      id="kaltura_player"
                      src="https://cdnapisec.kaltura.com/p/1128062/sp/112806200/embedIframeJs/uiconf_id/27474902/partner_id/1128062?iframeembed=true&playerId=kaltura_player&entry_id=1_lw3tl494&flashvars[akamaiHD.loadingPolicy]=preInitialize&amp;flashvars[akamaiHD.asyncInit]=true&amp;flashvars[streamerType]=hdnetwork&amp;flashvars[localizationCode]=en&amp;flashvars[sideBarContainer.plugin]=true&amp;flashvars[sideBarContainer.position]=left&amp;flashvars[sideBarContainer.clickToClose]=true&amp;flashvars[chapters.plugin]=true&amp;flashvars[chapters.layout]=vertical&amp;flashvars[chapters.thumbnailRotator]=false&amp;flashvars[streamSelector.plugin]=true&amp;flashvars[EmbedPlayer.SpinnerTarget]=videoHolder&amp;flashvars[dualScreen.plugin]=true&amp;flashvars[hotspots.plugin]=1&amp;flashvars[Kaltura.addCrossoriginToIframe]=true&amp;&wid=1_e9d6a206"
                      width="800"
                      height="529"
                      allowfullscreen
                      webkitallowfullscreen
                      mozAllowFullScreen
                      allow="autoplay *; fullscreen *; encrypted-media *"
                      sandbox="allow-downloads allow-forms allow-same-origin allow-scripts allow-top-navigation allow-pointer-lock allow-popups allow-modals allow-orientation-lock allow-popups-to-escape-sandbox allow-presentation allow-top-navigation-by-user-activation"
                      frameborder="0"
                      title="Decolonising the Curriculum Toolkit: Introduction (external)"
                      style="position:absolute;top:0;left:0;width:100%;height:100%"
                    ></iframe>
                  </div>
                </v-lazy>
              </v-col>
              <v-col cols="12" sm="12" md="12">
                <v-img
                  alt="Decolonising the curriculum toolkit webpage"
                  :src="decolCurrImg"
                  aspect-ratio="16/9"
                />
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
import { useWindowSize } from '@vueuse/core'
import projects from '@/composables/projects'

// Import images here
import bannerImg from '@/assets/images/decol-curr/decol-curr-banner.jpg'
import bannerImgLazy from '@/assets/images/decol-curr/decol-curr-banner-lazy.webp'
import decolCurrImg from '@/assets/images/decol-curr/decol-1.jpg'

const { width } = useWindowSize()
const props = defineProps(['project', 'IDNumber'])
const { next, previous } = nextProject()
const router = useRoute()
const route = useRouter()
const { works } = projects()
</script>
