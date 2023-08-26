<template>
    <section  
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
            <v-row>
                <v-col cols="12" sm="4" md="6">
                    <h3 class="mt-6">Description</h3>
                    <div v-html="d.description"></div>
                </v-col>
                <v-row>
                    <v-col class="d-flex justify-end" cols="12" md="6">
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
            <v-row>
                <v-col cols="12">
                    <v-img
                    cover
                    aspect-ratio="16/9"
                    src="@/assets/images/edi-module/E&D-1.jpg"
                    ></v-img>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" sm="4" md="6">
                    <v-img
                    aspect-ratio="16/9"
                    src="@/assets/images/edi-module/E&D-2.jpg"
                    ></v-img>
                </v-col>
                <v-col cols="12" sm="4" md="6">
                    <v-img
                    aspect-ratio="16/9"
                    src="@/assets/images/edi-module/E&D-3.jpg"
                    ></v-img>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12">
                    <v-img
                    cover
                    aspect-ratio="16/9"
                    src="@/assets/images/edi-module/E&D-5.jpg"
                    ></v-img>
                </v-col>
            </v-row>
        </v-container>
    </section>
 
</template>

<script setup>

    const props = defineProps(['project'])

</script>
