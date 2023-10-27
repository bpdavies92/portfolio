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
        src="@/assets/images/understanding-awarding-gap/understanding-hero.jpg"
        ></v-img>
        <v-container class="mt-12">
            <Description :d="d" :project="project"/>

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
                <v-col cols="12" sm="12" md="6">
                        <v-img
                        alt="Introduction slide with introduction video by Rosie Bryce"
                        cover
                        src="@/assets/images/understanding-awarding-gap/understanding-the-awarding-gap-2.jpg"
                        ></v-img>
                </v-col>
                <v-col cols="12" sm="12" md="6">
                        <v-img
                        alt="learning outcomes slide"
                        cover
                        src="@/assets/images/understanding-awarding-gap/understanding-the-awarding-gap-3.jpg"
                        ></v-img>
                </v-col>
            </v-row>

            <v-row>
                <v-col>
                    <v-img
                    alt="Navigation slide with 3 section cards to click"
                    cover
                    src="@/assets/images/understanding-awarding-gap/understanding-1.jpg"
                    ></v-img>
                </v-col>
            </v-row>            
            <v-row>
                <v-col cols="12" sm="12" md="6">
                    <v-img
                    alt="creating change from data with interactive grphic that lets a user pick between different sections."
                    cover
                    src="@/assets/images/understanding-awarding-gap/understanding-2.gif"
                    ></v-img>
                </v-col>
 
                <v-col cols="12" sm="12" md="6">
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
        </v-container>
    </section>
 
</template>

<script setup>
    import { ref } from 'vue';
    import Description from '../Description.vue'
    import { useIntersectionObserver } from '@vueuse/core'

    const props = defineProps(['project'])

    const target = ref(null)

    const targetIsVisible = ref(true)

    const { stop } = useIntersectionObserver(
      target,
      ([{ isIntersecting }], observerElement) => {
        targetIsVisible.value = isIntersecting
      },
    )

</script>
