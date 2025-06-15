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
        src="https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1778&q=80"
        ></v-img>
        <v-container class="mt-12">

            <v-row>
                <v-col class="position-relative" cols="12" sm="12" md="5">
                    <div class="sticky">
                         <Description :d="d" :project="project"/>
                    </div>
                </v-col>
                <v-col cols="12" sm="12" md="7">
    <v-row>
                    <v-col cols="12" sm="12">
                        <v-btn href="https://www.mmu.ac.uk/about-us/professional-services/uta" block color="secondary" size="large" prepend-icon="mdi-link">Dive into the UTA webite</v-btn>
                    </v-col>
                </v-row>

                <v-row >
                    <v-col>
                        <v-img
                        alt="Assessment lifecycle webpage"
                        cover
                        src="@/assets/images/uta-website/website-1.png"
                        ></v-img>
                    </v-col>
                </v-row>
                <v-row class="mt-12">
                    <v-col>
                        <v-img
                        alt="Active learning webpage"
                        cover
                        src="@/assets/images/uta-website/website-2.png"
                        ></v-img>
                    </v-col>
                </v-row>
                <v-row class="mt-12">
                    <v-col>
                        <v-img
                        alt="Peer observation webpage"
                        cover
                        src="@/assets/images/uta-website/website-3.png"
                        ></v-img>
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

    const props = defineProps(['project'])
    const {next, previous} = nextProject()
    const router = useRoute()
    const route = useRouter()
</script>
