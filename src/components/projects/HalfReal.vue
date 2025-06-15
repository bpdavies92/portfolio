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
        src="@/assets/images/half-real/half-real-6.jpg"
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
                    <v-img
                    alt=""
                    cover
                    src="@/assets/images/half-real/half-real-1.jpg"
                    ></v-img>
                </v-col>
                <v-col cols="12"  sm="12">
                    <v-img
                    alt=""
                    height="100%"
                    cover
                    src="@/assets/images/half-real/half-real-3.jpg"
                    ></v-img>
                </v-col>
                <v-col cols="12"  sm="12">
                    <v-img
                    alt=""
                    height="100%"
                    cover
                    src="@/assets/images/half-real/half-real-4.jpg"
                    ></v-img>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" sm="12">
                    <v-img
                    alt="half real exhibition opening talk by "
                    cover
                    src="@/assets/images/half-real/half-real-5.jpg"
                    ></v-img>
                </v-col>
                <v-col cols="12" sm="12">
                    <v-img
                    alt="half real exhibition space"
                    cover
                    src="@/assets/images/half-real/half-real-6.jpg"
                    ></v-img>
                </v-col>
            </v-row>
            <v-row>
                <v-img
                alt="Half real poster"
                cover
                src="@/assets/images/half-real/half-real-10.jpg"
                ></v-img>
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
