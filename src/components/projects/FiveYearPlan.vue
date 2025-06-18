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
        src="../../assets/images/five-year-plan/five-year-plan-banner.jpg"
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
                    <div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/853811077?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="The_Five_Stages_of_the_My_5YP_(Source)"></iframe></div>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" class=" justify-center">
                    <v-img
                    alt="My five year plan cycle diagram"
                    cover
                    aspect-ratio="1/1"
                    src="@/assets/images/five-year-plan/my_5yp_diagram.png"
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
