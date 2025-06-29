<template>
  <section v-for="(d, i) in project" :key="i">
    <v-img
      alt=""
      height="300"
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
              <Description :d="d" :project="project" />
            </div>
          </v-col>
          <v-col cols="12" sm="12" md="7">
            <v-row>
              <v-col>
                <!-- iframe wrapper with aspect ratio 16:9 to reserve space -->
                <div class="iframe-wrapper">
                  <iframe
                    :id="`kaltura_player_${i}_1`"
                    src="https://cdnapisec.kaltura.com/p/1128062/sp/112806200/embedIframeJs/uiconf_id/27474902/partner_id/1128062?iframeembed=true&playerId=kaltura_player&entry_id=1_esf6pwvv"
                    allowfullscreen
                    sandbox="allow-downloads allow-forms allow-same-origin allow-scripts allow-top-navigation allow-pointer-lock allow-popups allow-modals allow-orientation-lock allow-popups-to-escape-sandbox allow-presentation allow-top-navigation-by-user-activation"
                    allow="autoplay *; fullscreen *; encrypted-media *"
                    frameborder="0"
                    title="There were times when I felt uncomfortable"
                  ></iframe>
                </div>
              </v-col>
                 <v-col cols="12" sm="12">
                <div class="iframe-wrapper">
                  <iframe
                    :id="`kaltura_player_${i}_2`"
                    src="https://cdnapisec.kaltura.com/p/1128062/sp/112806200/embedIframeJs/uiconf_id/27474902/partner_id/1128062?iframeembed=true&playerId=kaltura_player&entry_id=1_fai8s8na"
                    allowfullscreen
                    sandbox="allow-downloads allow-forms allow-same-origin allow-scripts allow-top-navigation allow-pointer-lock allow-popups allow-modals allow-orientation-lock allow-popups-to-escape-sandbox allow-presentation allow-top-navigation-by-user-activation"
                    allow="autoplay *; fullscreen *; encrypted-media *"
                    frameborder="0"
                    title="Small acts of kindness"
                  ></iframe>
                </div>
              </v-col>
               <v-col cols="12" sm="12">
                <div class="iframe-wrapper">
                  <iframe
                    :id="`kaltura_player_${i}_3`"
                    src="https://cdnapisec.kaltura.com/p/1128062/sp/112806200/embedIframeJs/uiconf_id/27474902/partner_id/1128062?iframeembed=true&playerId=kaltura_player&entry_id=1_2xpcsra6"
                    allowfullscreen
                    sandbox="allow-downloads allow-forms allow-same-origin allow-scripts allow-top-navigation allow-pointer-lock allow-popups allow-modals allow-orientation-lock allow-popups-to-escape-sandbox allow-presentation allow-top-navigation-by-user-activation"
                    allow="autoplay *; fullscreen *; encrypted-media *"
                    frameborder="0"
                    title="Safe spaces"
                  ></iframe>
                </div>
              </v-col>
                <v-col>
                <div class="iframe-wrapper">
                  <iframe
                    :id="`kaltura_player_${i}_4`"
                    src="https://cdnapisec.kaltura.com/p/1128062/sp/112806200/embedIframeJs/uiconf_id/27474902/partner_id/1128062?iframeembed=true&playerId=kaltura_player&entry_id=1_rkebt5pb"
                    allowfullscreen
                    sandbox="allow-downloads allow-forms allow-same-origin allow-scripts allow-top-navigation allow-pointer-lock allow-popups allow-modals allow-orientation-lock allow-popups-to-escape-sandbox allow-presentation allow-top-navigation-by-user-activation"
                    allow="autoplay *; fullscreen *; encrypted-media *"
                    frameborder="0"
                    title="I felt invisible"
                  ></iframe>
                </div>
              </v-col>
            </v-row>

     

            <v-row>
            
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
import { useWindowSize } from '@vueuse/core'
import banner from '@/assets/images/ilc/ilc-banner.jpg'

const { width } = useWindowSize()
const props = defineProps(['project'])
const { next, previous } = nextProject()
const router = useRoute()
const route = useRouter()
</script>

<style scoped>
.iframe-wrapper {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; /* 16:9 Aspect Ratio */
  height: 0;
  overflow: hidden;
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
