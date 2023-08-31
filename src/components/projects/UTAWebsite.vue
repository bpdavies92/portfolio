<template>
    <section  
    v-for="(d,i) in project"
    :key="i"
    >
        <v-img
        max-height="400"
        aspect-ratio="16/9"
        cover
        src="https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1778&q=80"
        ></v-img>
        <v-container class="mt-12">
            <h2>{{ d.title }}</h2>
            <h3><span v-if="d.start">{{ d.start }} - {{ d.end }},</span> {{ d.location }}</h3>
            
            <v-row>
                
                <v-col cols="12" sm="4" md="6">
                    <h3 class="mt-6">Description</h3>
                    <div v-html="d.description"></div>
                </v-col>

                <v-col class="d-flex justify-end" cols="12" md="6">
                    <v-row>
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

            <v-row>
                <v-col cols="12" sm="12" class="mt-12">
                    <v-btn href="https://www.mmu.ac.uk/about-us/professional-services/uta" block color="secondary" size="large" prepend-icon="mdi-link">Dive into the UTA webite</v-btn>
                </v-col>
            </v-row>

            <v-row >
                <v-col>
                    <v-img
                    cover
                    src="@/assets/images/uta-website/website-1.png"
                    ></v-img>
                </v-col>
            </v-row>
            <v-row class="mt-12">
                <v-col>
                    <v-img
                    cover
                    src="@/assets/images/uta-website/website-2.png"
                    ></v-img>
                </v-col>
            </v-row>
            <v-row class="mt-12">
                <v-col>
                    <v-img
                    cover
                    src="@/assets/images/uta-website/website-3.png"
                    ></v-img>
                </v-col>
            </v-row>
        </v-container>
    </section>
 
</template>

<script setup>

    const props = defineProps(['project'])

</script>
