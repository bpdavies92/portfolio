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
        src="@/assets/images/learning-communities/learning-communities-hero.jpg"
        ></v-img>
        <v-container class="mt-12">

            <Description :d="d" :project="project"/>

            <v-row>
                <v-col cols="12">
                    <v-img
                    alt="Building inclusive learning communities home page"
                    cover
                    src="../../assets/images/learning-communities/learning-communities-4.jpg"
                    ></v-img>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" sm="12" md="6">
                    <v-img
                    alt="Introduction with learning outcomes"
                    cover
                    src="../../assets/images/learning-communities/learning-communities-5.jpg"
                    ></v-img>
                </v-col>
                <v-col cols="12" sm="12" md="6">
                    <v-img
                    alt="Introduction with welcome video by Shuab Gamote"
                    cover
                    src="../../assets/images/learning-communities/learning-communities-11.jpg"
                    ></v-img>
                </v-col>
            </v-row>

            <v-row>
                <v-col cols="12">
                    <v-img
                    alt="A still of the welcome video featuring Shuab Gamote"
                    cover
                    src="../../assets/images/learning-communities/learning-communities-13.jpg"
                    ></v-img>
                </v-col>
            </v-row>

            <v-row>
                <v-col cols="12" sm="12" md="4">
                    <v-img
                    alt="framing our responses slide"
                    cover
                    src="../../assets/images/learning-communities/learning-communities-17.jpg"
                    ></v-img>
                </v-col>
                <v-col cols="12" sm="12" md="4">
                    <v-img
                    alt="Still of Framing our responses video"
                    cover
                    src="../../assets/images/learning-communities/learning-communities-16.jpg"
                    ></v-img>
                </v-col>
                <v-col cols="12" sm="12" md="4">
                    <v-img
                    alt="Still of Framing our responses video"
                    cover
                    src="../../assets/images/learning-communities/learning-communities-15.jpg"
                    ></v-img>
                </v-col>
            </v-row>

            <v-row>
                <v-col cols="12">
                    <v-img
                    alt="Micro-aggressions slide home  page"
                    cover
                    src="../../assets/images/learning-communities/learning-communities-1.jpg"
                    ></v-img>
                </v-col>
            </v-row>

            <v-row>
                <v-col cols="12">
                    <v-img
                    alt="Still of Micro-aggressions video"
                    cover
                    src="../../assets/images/learning-communities/learning-communities-8.jpg"
                    ></v-img>
                </v-col>
            </v-row>
            
            <v-row>
                <v-col cols="12">
                    <v-img
                    alt="Further micro-aggressions resources, including student actor  video narrating student experience"
                    cover
                    src="../../assets/images/learning-communities/learning-communities-7.jpg"
                    ></v-img>
                </v-col>
            </v-row>

            <v-row>
                <v-col cols="12" sm="12" md="6">
                    <v-img
                    alt="Microaggressions slide home"
                    cover
                    src="../../assets/images/learning-communities/learning-communities-10.jpg"
                    ></v-img>
                </v-col>
                <v-col cols="12" sm="12" md="6">
                    <v-img
                    alt="Building inclusive learning communities home page"
                    cover
                    src="../../assets/images/learning-communities/learning-communities-9.jpg"
                    ></v-img>
                </v-col>
            </v-row>

            <v-row>
                <v-col cols="12">
                    <v-img
                    alt="Microaggressions slide home"
                    cover
                    src="../../assets/images/learning-communities/learning-communities-6.jpg"
                    ></v-img>
                </v-col>
            </v-row>

            <v-row>
                <v-col cols="12" sm="12" md="6">
                    <v-img
                    alt="Starting to take action slide"
                    cover
                    src="../../assets/images/learning-communities/learning-communities-2.jpg"
                    ></v-img>
                </v-col>
                <v-col cols="12" sm="12" md="6">
                    <v-img
                    alt="starting to take action slide"
                    cover
                    src="../../assets/images/learning-communities/learning-communities-3.jpg"
                    ></v-img>
                </v-col>
            </v-row>
            
        </v-container>
    </section>
 
</template>

<script setup>
    import Description from '../Description.vue';
    const props = defineProps(['project'])

</script>
