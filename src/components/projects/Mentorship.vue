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


        <v-row >
            <v-col class="position-relative" cols="12" sm="12" md="5">
                        <div class="sticky">
                            <Description :d="d" :project="project"/>
                        </div>
            </v-col>
            <v-col cols="12" sm="12" md="7">
                
            <v-row>
                <v-col>
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
                    <v-row>

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

 


