<template>
    <section  
    v-for="(d,i) in project"
    :key="i"
    >
        <v-img
        max-height="400"
        aspect-ratio="16/9"
        cover
        src="@/assets/images/a-small-view/a_small_view_1.jpg"
        ></v-img>
        <v-container class="mt-12">
            <h2>{{ d.title }}</h2>
            <h3>{{ d.start }} - {{ d.end }}, {{ d.location }}</h3>
            <v-row >
                <v-col cols="12" sm="4" md="6">
                    <h3 class="mt-6">Description</h3>
                    <div v-html="d.description"></div>
                </v-col>
                <v-col class="d-flex justify-end" cols="12" md="6">
                    <v-row >
                        <v-col>
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
                        <v-col>
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
                </v-col>
            </v-row>
            <v-row class="mt-12">
                <v-col>
                    <v-img
                    cover
                    src="@/assets/images/a-small-view/a_small_view_1.JPG"
                    ></v-img>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-img
                    cover
                    src="@/assets/images/a-small-view/a_small_view_2.jpg"
                    ></v-img>
                </v-col>
                <v-col>
                    <v-img
                    max-height="400"
                    cover
                    src="@/assets/images/a-small-view/a_small_view_3.png"
                    ></v-img>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-img
                    cover
                    src="@/assets/images/a-small-view/a_small_view_4.JPG"
                    ></v-img>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-img
                    cover
                    src="@/assets/images/a-small-view/a_small_view_5.JPG"
                    ></v-img>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-img
                    cover
                    src="@/assets/images/a-small-view/a_small_view_6.JPG"
                    ></v-img>
                </v-col>
            </v-row>
        </v-container>
    </section>
 
</template>

<script setup>

    const props = defineProps(['project'])

</script>
