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


        <v-row class="">
            <v-col height="100%" class="position-relative">
                <div class="position-sticky top-0 left-0 ">
                    <Description  :d="d" :project="project"/>
                </div>

            </v-col>
            <v-col>
                
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





           

   


        </v-container>
    </section>
 
</template>

<script setup>
    import Description from '../Description.vue';
    import Quote from '../Quote.vue';

    const props = defineProps(['project'])
</script>
