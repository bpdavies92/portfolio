<template>
    <section  
    v-for="(d,i) in project"
    :key="i"
    >
        <v-img
        alt=""
        max-height="400"
        aspect-ratio="16/9"
        cover
        src="@/assets/images/calculator/degree-calc-banner.jpg"
        ></v-img>
        <v-container class="mt-12">

            <v-row>
                <v-col class="position-relative" cols="12" sm="12" md="5">
                    <div class="sticky">
                          <Description :d="d" :project="project"/>
                    </div>
                </v-col>
                <v-col cols="12" sm="12" md="7">
         <v-row >

                        <v-col >
                            <v-row>
                        <v-col>
                            <v-btn href="https://utaresources.mmu.ac.uk/classification-calculator/" block color="secondary" size="large" prepend-icon="mdi-link">Play with the calculator</v-btn>
                        </v-col>
                    </v-row>

                    

                    <v-row>
                        <v-col>
                            <div><div style="position:relative;padding-bottom:66.125%"><iframe id="kaltura_player" src="https://cdnapisec.kaltura.com/p/1128062/sp/112806200/embedIframeJs/uiconf_id/27474902/partner_id/1128062?iframeembed=true&playerId=kaltura_player&entry_id=1_432k1v6a&flashvars[akamaiHD.loadingPolicy]=preInitialize&amp;flashvars[akamaiHD.asyncInit]=true&amp;flashvars[streamerType]=hdnetwork&amp;flashvars[localizationCode]=en&amp;flashvars[sideBarContainer.plugin]=true&amp;flashvars[sideBarContainer.position]=left&amp;flashvars[sideBarContainer.clickToClose]=true&amp;flashvars[chapters.plugin]=true&amp;flashvars[chapters.layout]=vertical&amp;flashvars[chapters.thumbnailRotator]=false&amp;flashvars[streamSelector.plugin]=true&amp;flashvars[EmbedPlayer.SpinnerTarget]=videoHolder&amp;flashvars[dualScreen.plugin]=true&amp;flashvars[hotspots.plugin]=1&amp;flashvars[Kaltura.addCrossoriginToIframe]=true&amp;&wid=1_bdw8aa2w" width="800" height="529" allowfullscreen webkitallowfullscreen mozAllowFullScreen allow="autoplay *; fullscreen *; encrypted-media *" sandbox="allow-downloads allow-forms allow-same-origin allow-scripts allow-top-navigation allow-pointer-lock allow-popups allow-modals allow-orientation-lock allow-popups-to-escape-sandbox allow-presentation allow-top-navigation-by-user-activation" frameborder="0" title="Undergraduate Degree Classification Calculator: Introduction" style="position:absolute;top:0;left:0;width:100%;height:100%"></iframe></div></div>
                        </v-col>
                    </v-row>
                                        <v-row>
                        <v-col >
                            <v-img
                            alt="Classification calculator"
                            cover
                            src="@/assets/images/calculator/calc-1.jpg"
                            ></v-img>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <Quote>
                                <template v-slot:quote>
                                    It was my first time working with [Ben] and he was an absolute joy. [Ben] produced something that was far better than I ever pictured: it looks incredibly professional and he’s given loads of consideration to how to make it was user-friendly as possible for students. He also produced the guidance video — the production values blew me away! The degree classification calculator has had almost 11,000 unique hits so far, which is truly impressive.
                                </template>
                                <template v-slot:person>
                                    Victoria Thompson, Head of Assessment Governance, 
                                </template>
                                <template v-slot:cite>
                                    Manchester Staff Awards statement
                                </template>
                            </Quote>
                        </v-col>
                    </v-row>

                        </v-col>
                    </v-row>
                </v-col>
            </v-row>

            <v-sheet class="d-flex mt-12">
                <v-btn size="large" variant="text" class="mr-auto" prepend-icon="mdi-arrow-left" @click="previous(project[0])">Previous</v-btn>
                <v-btn size="large" variant="text" class="ml-auto" append-icon="mdi-arrow-right" @click="next(project[0])">Next</v-btn>
            </v-sheet>
            
          
        </v-container>
    </section>
 
</template>

<script setup>
    import Description from '../Description.vue'
    import { useRouter, useRoute } from 'vue-router';
    import nextProject from '@/composables/nextProject'
    import Quote from '../Quote.vue';

    const props = defineProps(['project'])
    const {next, previous} = nextProject()
    const router = useRoute()
    const route = useRouter()

</script>

