<template>
  <section v-for="(d,i) in project" :key="i">
    <v-img
      alt=""
      height="300"
      aspect-ratio="16/9"
      :lazy-src="bannerImgLazy"
      cover
      :src="bannerImg"
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
              <div style="position: relative; width: 100%; padding-top: 66.125%; aspect-ratio: 16/9;">
                  <iframe
                    id="kaltura_player"
                    src="https://cdnapisec.kaltura.com/p/1128062/sp/112806200/embedIframeJs/uiconf_id/27474902/partner_id/1128062?iframeembed=true&playerId=kaltura_player&entry_id=1_echdwp9m&flashvars[akamaiHD.loadingPolicy]=preInitialize&amp;flashvars[akamaiHD.asyncInit]=true&amp;flashvars[streamerType]=hdnetwork&amp;flashvars[localizationCode]=en&amp;flashvars[sideBarContainer.plugin]=true&amp;flashvars[sideBarContainer.position]=left&amp;flashvars[sideBarContainer.clickToClose]=true&amp;flashvars[chapters.plugin]=true&amp;flashvars[chapters.layout]=vertical&amp;flashvars[chapters.thumbnailRotator]=false&amp;flashvars[streamSelector.plugin]=true&amp;flashvars[EmbedPlayer.SpinnerTarget]=videoHolder&amp;flashvars[dualScreen.plugin]=true&amp;flashvars[hotspots.plugin]=1&amp;flashvars[Kaltura.addCrossoriginToIframe]=true&amp;&wid=1_s2mgym72"
                    width="800"
                    height="529"
                    allowfullscreen
                    webkitallowfullscreen
                    mozAllowFullScreen
                    allow="autoplay *; fullscreen *; encrypted-media *"
                    sandbox="allow-downloads allow-forms allow-same-origin allow-scripts allow-top-navigation allow-pointer-lock allow-popups allow-modals allow-orientation-lock allow-popups-to-escape-sandbox allow-presentation allow-top-navigation-by-user-activation"
                    frameborder="0"
                    title="Internationalisation"
                    style="position:absolute;top:0;left:0;width:100%;height:100%;"
                  ></iframe>
                </div>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" sm="12" md="6">
                <v-img
                  alt="Internationalisation quiz options"
                  cover
                  aspect-ratio="16/9"
                  :src="img2"
                  lazy-src="@/assets/images/placeholder.webp"
                ></v-img>
              </v-col>
              <v-col cols="12" sm="12" md="6">
                <v-img
                  alt="Internationalisation success page"
                  cover
                  lazy-src="@/assets/images/placeholder.webp"
                  aspect-ratio="16/9"
                  :src="img3"
                ></v-img>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-img
                  alt="Internationalisation video motion graphics frame showing what to do and what not to do in terms of idioms"
                  cover
                  lazy-src="@/assets/images/placeholder.webp"
                  aspect-ratio="16/9"
                  :src="img1"
                ></v-img>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-img
                  alt="Working with international students webpage"
                  cover
                  :lazy-src="img4Lazy"
                  aspect-ratio="16/9"
                  :src="img4"
                ></v-img>
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
import { useWindowSize } from '@vueuse/core'

const { works } = projects()
const { width } = useWindowSize()
const props = defineProps(['project', 'IDNumber'])
const { next, previous } = nextProject()
const router = useRoute()
const route = useRouter()

// Import images
import bannerImg from '@/assets/images/internationalisation/Internationalisation-banner.webp'
import bannerImgLazy from '@/assets/images/internationalisation/Internationalisation-banner-lazy.webp'
import img1 from '@/assets/images/internationalisation/internationalisation-1.webp'
import img2 from '@/assets/images/internationalisation/international-2.webp'
import img3 from '@/assets/images/internationalisation/international-3.webp'
import img4 from '@/assets/images/internationalisation/international-4.webp'
import img4Lazy from '@/assets/images/internationalisation/international-4-lazy.webp'
</script>
