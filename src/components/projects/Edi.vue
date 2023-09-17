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
        src="@/assets/images/edi-module/header_img_2.jpg"
        ></v-img>
        <v-container class="mt-12">
            <Description :d="d" :project="project"/>
            <v-row>
                <v-col cols="12">
                    <v-img
                    alt="EDI training introduction page"
                    cover
                    aspect-ratio="16/9"
                    src="@/assets/images/edi-module/E&D-1.jpg"
                    ></v-img>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-img
                    alt="Dignity at work page"
                    aspect-ratio="16/9"
                    src="@/assets/images/edi-module/E&D-2.jpg"
                    ></v-img>
                </v-col>
                <v-col>
                    <v-img
                    alt="Home page displaying all sections of the module"
                    aspect-ratio="16/9"
                    src="@/assets/images/edi-module/E&D-3.jpg"
                    ></v-img>
                </v-col>
            </v-row>
            <Quote>
                <template v-slot:quote>
                    <p>Very informative and well presented course.</p>
                </template>
                <template v-slot:person>
                    Anonymous feedback via Microsoft Forms
                </template>
            </Quote>
            <v-row>
                <v-col cols="12">
                    <v-img
                    alt="Talking head video in the course."
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
    import Description from '../Description.vue';
    import Quote from '../Quote.vue';
    
    const props = defineProps(['project'])

</script>
