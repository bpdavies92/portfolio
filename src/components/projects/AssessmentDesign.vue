<template>
  <section  
    v-for="(d,i) in project"
    :key="i"
  >
    <v-img
      eager
      alt=""
      height="300"
      aspect-ratio="16/9"
      cover
      src="https://images.unsplash.com/photo-1581091877018-dac6a371d50f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
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
                <v-lazy   
                  :options="{'threshold':0.5}"
                  transition="scroll-y-reverse-transition"
                >
                 <div style="position: relative; width: 100%; padding-top: 66.125%; aspect-ratio: 16/9;">
                    <iframe
                      id="kaltura_player"
                      src="https://cdnapisec.kaltura.com/p/1128062/sp/112806200/embedIframeJs/uiconf_id/27474902/partner_id/1128062?iframeembed=true&playerId=kaltura_player&entry_id=1_ml3m6qkt&flashvars[akamaiHD.loadingPolicy]=preInitialize&amp;flashvars[akamaiHD.asyncInit]=true&amp;flashvars[streamerType]=hdnetwork&amp;flashvars[localizationCode]=en&amp;flashvars[sideBarContainer.plugin]=true&amp;flashvars[sideBarContainer.position]=left&amp;flashvars[sideBarContainer.clickToClose]=true&amp;flashvars[chapters.plugin]=true&amp;flashvars[chapters.layout]=vertical&amp;flashvars[chapters.thumbnailRotator]=false&amp;flashvars[streamSelector.plugin]=true&amp;flashvars[EmbedPlayer.SpinnerTarget]=videoHolder&amp;flashvars[dualScreen.plugin]=true&amp;flashvars[hotspots.plugin]=1&amp;flashvars[Kaltura.addCrossoriginToIframe]=true&amp;&wid=1_2xxcbsfu"
                      width="800"
                      height="529"
                      allowfullscreen
                      webkitallowfullscreen
                      mozAllowFullScreen
                      allow="autoplay *; fullscreen *; encrypted-media *"
                      sandbox="allow-downloads allow-forms allow-same-origin allow-scripts allow-top-navigation allow-pointer-lock allow-popups allow-modals allow-orientation-lock allow-popups-to-escape-sandbox allow-presentation allow-top-navigation-by-user-activation"
                      frameborder="0"
                      title="Assignment size guidance"
                      style="position:absolute; top:0; left:0; width:100%; height:100%"
                    ></iframe>
                  </div>
                </v-lazy>
              </v-col>
            <v-col cols="12" sm="12">
                <v-img
                  cover
                  alt="Navigation page with hero"
                  :src="design1"
                  aspect-ratio="16/9"
                  lazy-src="@/assets/images/placeholder.webp"
                ></v-img>
              </v-col>
              <v-col cols="12" sm="12" md="12">
                <v-lazy 
                  :min-height="200"
                  :options="{'threshold':0.5}"
                  transition="fade-transition"
                >
                  <Quote>
                    <template v-slot:quote>
                      <p>Very informative and well presented course.</p>
                    </template>
                    <template v-slot:person>
                      Anonymous feedback via Microsoft Forms
                    </template>
                  </Quote>
                </v-lazy>
              </v-col>
              <v-col cols="12" sm="12">
                <v-img
                  lazy-src="@/assets/images/placeholder.webp"
                  cover
                  alt="Design considerations with flip card interaction"
                  :src="design2"
                  aspect-ratio="16/9"
                ></v-img>
              </v-col>
              <v-col cols="12" sm="12">
                <v-img
                  lazy-src="@/assets/images/placeholder.webp"
                  cover
                  alt="Marking criteria section with learning outcome interaction, displaying different learning outcomes depending on the level."
                  :src="design3"
                  aspect-ratio="16/9"
                ></v-img>
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
import Quote from '../Quote.vue'
import { useRouter, useRoute } from 'vue-router'
import nextProject from '@/composables/nextProject'
import projects from '@/composables/projects'

// Import your images so the bundler processes them correctly
import design1 from '@/assets/images/assessment-design/design-1.png'
import design2 from '@/assets/images/assessment-design/design-2.png'
import design3 from '@/assets/images/assessment-design/design-3.png'

const props = defineProps(['project', 'IDNumber'])
const {works} = projects()
const { next, previous } = nextProject()
const router = useRoute()
const route = useRouter()
</script>
