<template>
    <section  
    class="project-container"
    v-for="(d,i) in project"
    :key="i"
    >
        <v-img
        alt=""
        max-height="400"
        aspect-ratio="16/9"
        cover
        src="@/assets/images/afhea-self-study/header_img_1.jpg"
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
                <v-col cols="12">
                    <v-img
                    cover
                    aspect-ratio="16/9"
                    alt="Knowledge check quiz"
                    src="@/assets/images/afhea-self-study/af1.jpg"
                    ></v-img>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-img
                    alt="Tip card showing how to use the resource"
                    aspect-ratio="16/9"
                    src="@/assets/images/afhea-self-study/af2.jpg"
                    ></v-img>
                </v-col>
                <v-col>
                    <v-img
                    alt="Home page of resource showing staff members alongside titles and section numbers"
                    aspect-ratio="16/9"
                    src="@/assets/images/afhea-self-study/af3.jpg"
                    ></v-img>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-img
                    alt="Activity page provides information about activities that need to be completed and then reflected upon in the participants' learning journal."
                    cover
                    aspect-ratio="16/9"
                    src="@/assets/images/afhea-self-study/af5.jpg"
                    ></v-img>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-img
                    alt="Hero page for each section of the independent study, featuring a staff member and AFHEA descriptor."
                    aspect-ratio="16/9"
                    src="@/assets/images/afhea-self-study/af7.jpg"
                    ></v-img>
                </v-col>
                <v-col>
                    <v-img
                    alt="Interactive page with hotspot pointers that users can hover over to reveal information about inclusive teaching."
                    aspect-ratio="16/9"
                    src="@/assets/images/afhea-self-study/af8.jpg"
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
