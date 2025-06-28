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
        src="@/assets/images/understanding-awarding-gap/understanding-1.jpg"
        ></v-img>
        <v-container fluid class="mt-12">
    
            <div class="content-container">
                <v-row >
                    <v-col class=" position-relative" cols="12" sm="12" md="5">
                        <div class="sticky">
                            <Description :d="d" :project="project"/>
                        </div>
                    </v-col>
                    <v-col cols="12" sm="12" md="7">
                        <v-row>
                    <v-col cols="12" sm="12">
                            <v-img
                            alt="Home page"
                            cover
                            src="@/assets/images/understanding-awarding-gap/understanding-the-awarding-gap-1.jpg"
                            ></v-img>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12" sm="12">
                            <v-img
                            alt="Introduction slide with introduction video by Rosie Bryce"
                            cover
                            src="@/assets/images/understanding-awarding-gap/understanding-the-awarding-gap-2.jpg"
                            ></v-img>
                    </v-col>
                    <v-col cols="12" sm="12">
                            <v-img
                            alt="learning outcomes slide"
                            cover
                            src="@/assets/images/understanding-awarding-gap/understanding-the-awarding-gap-3.jpg"
                            ></v-img>
                    </v-col>
                </v-row>
                <v-row>

                </v-row>
                <v-row>
                    <v-col cols="12" sm="12">
                        <v-img
                        alt="creating change from data with interactive grphic that lets a user pick between different sections."
                        cover
                        src="@/assets/images/understanding-awarding-gap/understanding-2.gif"
                        ></v-img>
                    </v-col>
                    <v-col cols="12" sm="12" >
                        <v-img
                        alt="A slide of a selected section of  the creating change from data slide"
                        cover
                        src="@/assets/images/understanding-awarding-gap/understanding-the-awarding-gap-8.jpg"
                        ></v-img>
                    </v-col>
                </v-row>
                <row>
                    <v-col cols="12" sm="12">
                            <v-img
                            alt="A better qulity still of the collecting data from change section"
                            cover
                            src="@/assets/images/understanding-awarding-gap/understanding-the-awarding-gap-7.jpg"
                            ></v-img>
                    </v-col>
                </row>
                <row>
                    <v-col cols="12" sm="12">
                            <v-img
                            alt="Exploring the dashboard section"
                            cover
                            src="@/assets/images/understanding-awarding-gap/understanding-the-awarding-gap-5.jpg"
                            ></v-img>
                    </v-col>
                </row>
                <row>
                    <v-col cols="12" sm="12">
                            <v-img
                            alt="Case study page with  two extracts from the case study page I made."
                            cover
                            src="@/assets/images/understanding-awarding-gap/understanding-the-awarding-gap-9.jpg"
                            ></v-img>
                    </v-col>
                </row>
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
    import { useIntersectionObserver } from '@vueuse/core'
    import {computed, ref} from 'vue'
    import { useWindowSize } from '@vueuse/core'

    const { width, height } = useWindowSize()
    const target = ref(null)
    const targetIsVisible = ref(true)
    const props = defineProps(['project'])
    const {next, previous} = nextProject()
    const router = useRoute()
    const route = useRouter()    

    const { stop } = useIntersectionObserver(
      target,
      ([{ isIntersecting }], observerElement) => {
        targetIsVisible.value = isIntersecting
      },
    )

 

</script>




   
