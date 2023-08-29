<template>
    <section  
    class="project-container"
    v-for="(d,i) in project"
    :key="i"
    >
        <v-img
        max-height="600"
        aspect-ratio="16/9"
        cover
        src="@/assets/images/afhea-self-study/header_img_1.jpg"
        ></v-img>
        <v-container class="mt-12">
            <h2>{{ d.title }}</h2>
            <h3><span v-if="d.start">{{ d.start }} - </span>{{ d.end }}, {{ d.location }}</h3>
            <v-container>
                <v-row>
                    <v-col class="pa-0" cols="12" md="6">
                        <h3 class="mt-6">Description</h3>
                        <div v-html="d.description"></div>
                    </v-col>
                    <v-row>
                        <v-col class="d-flex justify-end" cols="12" md="6" >
                            <div class="mt-6">
                                <h3>Technology</h3>
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
                        <v-col class="d-flex justify-start" cols="12" md="6">
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
            </v-container>  
            <v-row>
                <v-col cols="12">
                    <v-img
                    cover
                    aspect-ratio="16/9"
                    src="@/assets/images/afhea-self-study/af1.jpg"
                    ></v-img>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" sm="4" md="6">
                    <v-img
                    aspect-ratio="16/9"
                    src="@/assets/images/afhea-self-study/af2.jpg"
                    ></v-img>
                </v-col>
                <v-col cols="12" sm="4" md="6">
                    <v-img
                    aspect-ratio="16/9"
                    src="@/assets/images/afhea-self-study/af3.jpg"
                    ></v-img>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12">
                    <v-img
                    cover
                    aspect-ratio="16/9"
                    src="@/assets/images/afhea-self-study/af5.jpg"
                    ></v-img>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" sm="4" md="6">
                    <v-img
                    aspect-ratio="16/9"
                    src="@/assets/images/afhea-self-study/af7.jpg"
                    ></v-img>
                </v-col>
                <v-col cols="12" sm="4" md="6">
                    <v-img
                    aspect-ratio="16/9"
                    src="@/assets/images/afhea-self-study/af8.jpg"
                    ></v-img>
                </v-col>
            </v-row>
        </v-container>
    </section>
 
</template>

<script setup>
    import { computed } from "vue"
    
    const props = defineProps(['project'])


</script>
