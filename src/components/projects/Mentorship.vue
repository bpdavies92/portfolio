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
        src="@/assets/images/mentorship/mentorship-hero.jpg"
        ></v-img>
        <v-container class="mt-12">
            <Description :d="d" :project="project"/>
            <v-row>
                <v-col>
                    <div style="position:relative;padding-bottom:66.125%"><iframe id="kaltura_player" src="https://cdnapisec.kaltura.com/p/1128062/sp/112806200/embedIframeJs/uiconf_id/27474902/partner_id/1128062?iframeembed=true&playerId=kaltura_player&entry_id=1_tanjn9vh&flashvars[akamaiHD.loadingPolicy]=preInitialize&amp;flashvars[akamaiHD.asyncInit]=true&amp;flashvars[streamerType]=hdnetwork&amp;flashvars[localizationCode]=en&amp;flashvars[sideBarContainer.plugin]=true&amp;flashvars[sideBarContainer.position]=left&amp;flashvars[sideBarContainer.clickToClose]=true&amp;flashvars[chapters.plugin]=true&amp;flashvars[chapters.layout]=vertical&amp;flashvars[chapters.thumbnailRotator]=false&amp;flashvars[streamSelector.plugin]=true&amp;flashvars[EmbedPlayer.SpinnerTarget]=videoHolder&amp;flashvars[dualScreen.plugin]=true&amp;flashvars[hotspots.plugin]=1&amp;flashvars[Kaltura.addCrossoriginToIframe]=true&amp;&wid=1_zi524sw9" width="800" height="529" allowfullscreen webkitallowfullscreen mozAllowFullScreen allow="autoplay *; fullscreen *; encrypted-media *" sandbox="allow-downloads allow-forms allow-same-origin allow-scripts allow-top-navigation allow-pointer-lock allow-popups allow-modals allow-orientation-lock allow-popups-to-escape-sandbox allow-presentation allow-top-navigation-by-user-activation" frameborder="0" title="The Professional Standards Framework (PSF) at Manchester Met" style="position:absolute;top:0;left:0;width:100%;height:100%;border:0"></iframe></div>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <Quote>
                        <template v-slot:quote>
                            This is a great resource. It's engaging, informative and inspiring. Thanks!
                        </template>
                        <template v-slot:person>
                            Anonymous feedback via Microsoft Forms
                        </template>
                    </Quote> 
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-img
                    src="../../assets/images/mentorship/mentorship-6.jpg"
                    ></v-img>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-img
                    src="../../assets/images/mentorship/mentorship-4.jpg"
                    ></v-img>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-img
                    src="../../assets/images/mentorship/mentorship-3.jpg"
                    ></v-img>
                </v-col>
            </v-row>
        </v-container>
    </section>
 
</template>

<script setup>
    import Description from '../Description.vue';
    import Quote from '../Quote.vue';


    const props = defineProps(['project'])

</script>
