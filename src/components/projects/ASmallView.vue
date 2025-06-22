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
        src="@/assets/images/a-small-view/a-small-view-banner.jpg"
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
                    <v-col>
                        <v-img
                        alt="A hole, a mountain exhibition"
                        cover
                        src="@/assets/images/a-small-view/a_small_view_1.jpg"
                        ></v-img>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12" sm="12" md="6">
                        <v-img
                        ref="target"
                        :class="{'float-up' : target === true}"
                        alt="The white pube exhibition during Liverpool Bienial 2016"
                        cover
                        src="@/assets/images/a-small-view/a_small_view_2.jpg"
                        ></v-img>
                    </v-col>
                    <v-col cols="12" sm="12" md="6">
                        <v-img
                        alt="A small view"
                        max-height="400"
                        cover
                        src="@/assets/images/a-small-view/a_small_view_3.png"
                        ></v-img>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <v-img
                        alt="The white pube reading / performance"
                        cover
                        src="@/assets/images/a-small-view/a_small_view_4.jpg"
                        ></v-img>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <v-img
                        alt="Symbiosis exhibition"
                        cover
                        src="@/assets/images/a-small-view/a_small_view_5.jpg"
                        ></v-img>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <v-img
                        alt="Got worms exhibition"
                        cover
                        src="@/assets/images/a-small-view/a_small_view_6.jpg"
                        ></v-img>
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
        import { useWindowSize } from '@vueuse/core'

    const { width, height } = useWindowSize()

    const props = defineProps(['project'])
    const {next, previous} = nextProject()
    const router = useRoute()
    const route = useRouter()
</script>