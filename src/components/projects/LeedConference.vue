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
        src="../../assets/images/conference/leed-conf-12.jpg"
        ></v-img>
        
        <v-container class="mt-12 projects">

            <v-row>
                <v-col class=" position-relative" cols="12" sm="12" md="5">
                    <div class="sticky">
                        <div>
                            <Description  :d="d" :project="project"/>
                            <v-btn href="https://www.utaresources.mmu.ac.uk/leed-conference-23/" block color="secondary" size="large" prepend-icon="mdi-link">Explore the conference website</v-btn>
                        </div>
                    </div>
                </v-col>
                <v-col cols="12" sm="12" md="7">
                         <v-row>
                <v-col>
                    <div><div style="position:relative;padding-bottom:66.125%"><iframe id="kaltura_player" src="https://cdnapisec.kaltura.com/p/1128062/sp/112806200/embedIframeJs/uiconf_id/27474902/partner_id/1128062?iframeembed=true&playerId=kaltura_player&entry_id=1_1wuvpsgv&flashvars[akamaiHD.loadingPolicy]=preInitialize&amp;flashvars[akamaiHD.asyncInit]=true&amp;flashvars[streamerType]=hdnetwork&amp;flashvars[localizationCode]=en&amp;flashvars[sideBarContainer.plugin]=true&amp;flashvars[sideBarContainer.position]=left&amp;flashvars[sideBarContainer.clickToClose]=true&amp;flashvars[chapters.plugin]=true&amp;flashvars[chapters.layout]=vertical&amp;flashvars[chapters.thumbnailRotator]=false&amp;flashvars[streamSelector.plugin]=true&amp;flashvars[EmbedPlayer.SpinnerTarget]=videoHolder&amp;flashvars[dualScreen.plugin]=true&amp;flashvars[hotspots.plugin]=1&amp;flashvars[Kaltura.addCrossoriginToIframe]=true&amp;&wid=1_jy8o0wwr" width="800" height="529" allowfullscreen webkitallowfullscreen mozAllowFullScreen allow="autoplay *; fullscreen *; encrypted-media *" sandbox="allow-downloads allow-forms allow-same-origin allow-scripts allow-top-navigation allow-pointer-lock allow-popups allow-modals allow-orientation-lock allow-popups-to-escape-sandbox allow-presentation allow-top-navigation-by-user-activation" frameborder="0" title="LEED Learning and Teaching Conference 2023:  How to get involved" style="position:absolute;top:0;left:0;width:100%;height:100%"></iframe></div></div>
                    <p class="text-caption mt-3">Video introduction by Professor Fiona Saunders</p>
                </v-col>
            </v-row>

            <v-row>
                <v-col>
                    <v-img
                    alt="LEED conference workshop"
                    cover
                    src="../../assets/images/conference/leed-conf-2.jpg"
                    ></v-img>
                </v-col>
            </v-row>
            
            <v-row>
                <v-col cols="12" sm="12" md="12">
                    <v-img
                    alt="LEED conference introduction by Dr Fiona Saunders, talking through the events of the day."
                    cover
                    src="../../assets/images/conference/leed-conf-3.jpg"
                    ></v-img>
                </v-col>
                <v-col cols="12" sm="12" md="12">
                    <v-img
                    alt="Introduction to the LEED conference by Professor Andy Dainty, discussing how the conference aligns with the Manchester Met Education Strategy."
                    cover
                    src="../../assets/images/conference/leed-conf-4.jpg"
                    ></v-img>
                </v-col>
            </v-row>

            <v-row>
                <v-col>
                    <v-img
                    alt="Participant looking at posters of workshop times and rooms."
                    cover
                    src="../../assets/images/conference/leed-conf-5.jpg"
                    ></v-img>
                </v-col>
            </v-row>

            <v-row>
                <v-col cols="12" sm="12">
                    <v-img
                    alt="Participant focusing on origami given out when people signed in to the conference."
                    height="100%"
                    cover
                    src="../../assets/images/conference/leed-conf-7.jpg"
                    ></v-img>
                </v-col>
                <v-col>
                    <v-row >
                        <v-col cols="12">
                            <v-img
                            alt="Participant playing with giant Jenga game."
                            cover
                            src="../../assets/images/conference/leed-conf-12.jpg"
                            ></v-img>
                        </v-col>
                    </v-row>
                    
                    <v-row >
                        <v-col cols="12">
                            <v-img
                            alt="Workshop"
                            cover
                            src="../../assets/images/conference/leed-conf-8.jpg"
                            ></v-img>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>

            <v-row>
                <v-col>
                    <v-img
                    alt="workshop"
                    cover
                    src="../../assets/images/conference/leed-conf-10.jpg"
                    ></v-img>
                </v-col>
            </v-row> 
                </v-col>
            </v-row>


           
            <v-row>
                <v-col cols="12" sm="12">
                   
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

    const props = defineProps(['project'])
    const {next, previous} = nextProject()
    const router = useRoute()
    const route = useRouter()
</script>

