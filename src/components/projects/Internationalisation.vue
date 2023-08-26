<template>
    <section  
    v-for="(d,i) in project"
    :key="i"
    >
        <v-img
        max-height="400"
        aspect-ratio="16/9"
        cover
        src="@/assets/images/internationalisation/internationalisation-1.png"
        ></v-img>
        <v-container class="mt-12">
            <h2>{{ d.title }}</h2>
            <v-row>
                <v-col cols="12" sm="4" md="6">
                    <h3 class="mt-6">Description</h3>
                    <div v-html="d.description"></div>
                </v-col>
                <v-row>
                    <v-col class="d-flex justify-end" cols="12" md="6">
                        <div class="mt-6">
                            <h3>Technology used</h3>
                            <v-list
                            density="compact"
                            lines="0">
                                <v-list-item
                                v-for="(d,i) in d.techUsed"
                                :key="i"
                                :prepend-icon="d.icon"
                                :title="d.tech"
                                ></v-list-item>
                            </v-list>
                        </div>
                    </v-col>
                    <v-col class="d-flex justify-end" cols="12" md="6">
                        <div class="mt-6">
                            <h3>Skills</h3>
                            <v-list
                            density="compact"
                            lines="0">
                                <v-list-item
                                v-for="(d,i) in d.skills"
                                :key="i"
                                :prepend-icon="d.icon"
                                :title="d.skill"
                                ></v-list-item>
                            </v-list>
                        </div>
                    </v-col>
                </v-row>
            </v-row>
            <v-row class="mt-12">
                <v-col cols="12">
                    <div><div style="position:relative;padding-bottom:66.125%"><iframe id="kaltura_player" src="https://cdnapisec.kaltura.com/p/1128062/sp/112806200/embedIframeJs/uiconf_id/27474902/partner_id/1128062?iframeembed=true&playerId=kaltura_player&entry_id=1_echdwp9m&flashvars[akamaiHD.loadingPolicy]=preInitialize&amp;flashvars[akamaiHD.asyncInit]=true&amp;flashvars[streamerType]=hdnetwork&amp;flashvars[localizationCode]=en&amp;flashvars[sideBarContainer.plugin]=true&amp;flashvars[sideBarContainer.position]=left&amp;flashvars[sideBarContainer.clickToClose]=true&amp;flashvars[chapters.plugin]=true&amp;flashvars[chapters.layout]=vertical&amp;flashvars[chapters.thumbnailRotator]=false&amp;flashvars[streamSelector.plugin]=true&amp;flashvars[EmbedPlayer.SpinnerTarget]=videoHolder&amp;flashvars[dualScreen.plugin]=true&amp;flashvars[hotspots.plugin]=1&amp;flashvars[Kaltura.addCrossoriginToIframe]=true&amp;&wid=1_s2mgym72" width="800" height="529" allowfullscreen webkitallowfullscreen mozAllowFullScreen allow="autoplay *; fullscreen *; encrypted-media *" sandbox="allow-downloads allow-forms allow-same-origin allow-scripts allow-top-navigation allow-pointer-lock allow-popups allow-modals allow-orientation-lock allow-popups-to-escape-sandbox allow-presentation allow-top-navigation-by-user-activation" frameborder="0" title="Internationalisation" style="position:absolute;top:0;left:0;width:100%;height:100%"></iframe></div></div>
                </v-col>
            </v-row>
        </v-container>
    </section>
 
</template>

<script setup>

    const props = defineProps(['project'])

</script>
