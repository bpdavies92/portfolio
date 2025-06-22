<template>
    <section  
    v-for="(d,i) in project"
    :key="i"
    >
        <v-img
        alt=""
        :height="width >= 960 ? 'auto' : 300"
        aspect-ratio="16/9"
        cover
        src="@/assets/images/edi-module/header_img_2.jpg"
        ></v-img>
        <v-container fluid class="mt-12">



            <div class="content-container">
                <v-row>
                    <v-col class=" position-relative" cols="12" sm="12" md="5">
                        <div class="sticky">
                            <Description :d="d" :project="project"/>
                        </div>
                    </v-col>
                    <v-col cols="12" sm="12" md="7">
                        <v-row>
                    <v-col cols="12">
                        <v-img
                        alt="EDI training introduction page"
                        cover
                        aspect-ratio="16/9"
                        src="@/assets/images/edi-module/E&D-1.jpg"
                        ></v-img>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <Quote>
                            <template v-slot:quote>
                                <p>Well put together with clear objectives and learning outcomes.</p>
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
                        alt="Dignity at work page"
                        aspect-ratio="16/9"
                        src="@/assets/images/edi-module/E&D-2.jpg"
                        ></v-img>
                    </v-col>
                    <v-col cols="12" sm="12" md="6">
                        <v-img
                        alt="Home page displaying all sections of the module"
                        aspect-ratio="16/9"
                        src="@/assets/images/edi-module/E&D-3.jpg"
                        ></v-img>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <Quote>
                            <template v-slot:quote>
                                <p>I thought this was a well constructed course - a significant improvement over the previous version.</p>
                            </template>
                            <template v-slot:person>
                                Anonymous feedback via Microsoft Forms
                            </template>
                        </Quote>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12">
                        <v-img
                        alt="Talking head video in the course."
                        cover
                        aspect-ratio="16/9"
                        src="@/assets/images/edi-module/E&D-5.jpg"
                        ></v-img>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <Quote>
                            <template v-slot:quote>
                                <p>Liked the variety of training resources which helped to cement the learning.</p>
                            </template>
                            <template v-slot:person>
                                Anonymous feedback via Microsoft Forms
                            </template>
                        </Quote>
                    </v-col>
                </v-row>
            </v-col>
                </v-row>
                <v-sheet class="d-flex mt-12">
                    <v-btn size="large" variant="text" class="mr-auto" prepend-icon="mdi-arrow-left" @click="previous(project[0])">Previous</v-btn>
                    <v-btn size="large" variant="text" class="ml-auto" append-icon="mdi-arrow-right" @click="next(project[0])">Next</v-btn>
                </v-sheet>
            </div>
            
          
        </v-container>
    </section>
 
</template>

<script setup>
    import Description from '../Description.vue'
    import { useRouter, useRoute } from 'vue-router';
    import nextProject from '@/composables/nextProject' 
    import Quote from '../Quote.vue';
    import { useWindowSize } from '@vueuse/core'

    const { width, height } = useWindowSize()
    const props = defineProps(['project'])
    const {next, previous} = nextProject()
    const router = useRoute()
    const route = useRouter()
</script>

