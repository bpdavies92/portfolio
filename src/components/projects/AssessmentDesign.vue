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
        src="https://images.unsplash.com/photo-1581091877018-dac6a371d50f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
        ></v-img>
        <v-container class="mt-12">
            <Description :d="d" :project="project"/>
            <v-row>
                <v-col cols="12" sm="12">
                    <v-btn href="https://www.utaresources.mmu.ac.uk/assessment_design_toolkit/#/" block color="secondary" size="large" prepend-icon="mdi-link">Assessment design independent study</v-btn>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <div><div style="position:relative;padding-bottom:66.125%"><iframe id="kaltura_player" src="https://cdnapisec.kaltura.com/p/1128062/sp/112806200/embedIframeJs/uiconf_id/27474902/partner_id/1128062?iframeembed=true&playerId=kaltura_player&entry_id=1_ml3m6qkt&flashvars[akamaiHD.loadingPolicy]=preInitialize&amp;flashvars[akamaiHD.asyncInit]=true&amp;flashvars[streamerType]=hdnetwork&amp;flashvars[localizationCode]=en&amp;flashvars[sideBarContainer.plugin]=true&amp;flashvars[sideBarContainer.position]=left&amp;flashvars[sideBarContainer.clickToClose]=true&amp;flashvars[chapters.plugin]=true&amp;flashvars[chapters.layout]=vertical&amp;flashvars[chapters.thumbnailRotator]=false&amp;flashvars[streamSelector.plugin]=true&amp;flashvars[EmbedPlayer.SpinnerTarget]=videoHolder&amp;flashvars[dualScreen.plugin]=true&amp;flashvars[hotspots.plugin]=1&amp;flashvars[Kaltura.addCrossoriginToIframe]=true&amp;&wid=1_2xxcbsfu" width="800" height="529" allowfullscreen webkitallowfullscreen mozAllowFullScreen allow="autoplay *; fullscreen *; encrypted-media *" sandbox="allow-downloads allow-forms allow-same-origin allow-scripts allow-top-navigation allow-pointer-lock allow-popups allow-modals allow-orientation-lock allow-popups-to-escape-sandbox allow-presentation allow-top-navigation-by-user-activation" frameborder="0" title="Assignment size guidance" style="position:absolute;top:0;left:0;width:100%;height:100%"></iframe></div></div>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-img
                    cover
                    alt="Navigation page with hero"
                    src="../../assets/images/assessment-design/design-1.png"
                    ></v-img>
                </v-col>
            </v-row>
            <v-row>
                <v-col >
                    <Quote>
                        <template v-slot:quote>
                            <p>Very informative and well presented course.</p>
                        </template>
                        <template v-slot:person>
                            Anonymous feedback via Microsoft Forms
                        </template>
    
                    </Quote>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" sm="12" md="6">
                    <v-img
                    cover
                    alt="Design considerations with flip card interaction"
                    src="../../assets/images/assessment-design/design-2.png"
                    ></v-img>
                </v-col>
                <v-col cols="12" sm="12" md="6">
                    <v-img
                    cover
                    alt="Marking criteria section with learning outcome interaction, displaying different learning outcomes depending on the level."
                    src="../../assets/images/assessment-design/design-3.png"
                    ></v-img>
                </v-col>
            </v-row>
        </v-container>
    </section>
 
</template>

<script setup>
    import Description from '../Description.vue';
    import Quote from '../Quote.vue'

    const props = defineProps(['project'])

</script>
