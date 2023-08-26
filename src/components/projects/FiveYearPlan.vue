<template>
    <section  
    v-for="(d,i) in project"
    :key="i"
    >
        <v-img
        max-height="600"
        aspect-ratio="16/9"
        cover
        src="../../assets/images/five-year-plan/header_img_5.jpg"
        ></v-img>
        <v-container class="mt-12">
            <h2>{{ d.title }}</h2>
            <v-row>
                <v-col cols="12" sm="4" md="6">
                    <h3 class="mt-6">Description</h3>
                    <div v-html="d.description"></div>
                </v-col>
                <v-row>
                    <v-col class="d-flex justify-end" cols="12" md="6">
                        <div class="mt-6">
                            <h3>Technology used</h3>
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
                    <v-col class="d-flex justify-end" cols="12" md="6">
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
            <v-row class="mt-12">
                <v-col cols="12">
                    <div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/853811077?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="The_Five_Stages_of_the_My_5YP_(Source)"></iframe></div>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" class=" justify-center">
                    <v-img
                    cover
                    aspect-ratio="1/1"
                    src="@/assets/images/five-year-plan/my_5yp_diagram.png"
                    ></v-img>
                </v-col>
            </v-row>
        </v-container>
    </section>
 
</template>

<script setup>

    const props = defineProps(['project'])

</script>
