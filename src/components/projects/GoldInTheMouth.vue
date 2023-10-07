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
        src="../../assets/images/gold-in-the-mouth/gold-7.jpg"
        ></v-img>
        <v-container class="mt-12">

            <Description :d="d" :project="project"/>
            
            <v-row>
                <v-col cols="12" class=" justify-center">
                    <v-img
                    alt="My five year plan cycle diagram"
                    cover
                    aspect-ratio="1/1"
                    src="@/assets/images/gold-in-the-mouth/gold-1.jpg"
                    ></v-img>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" sm="12" md="6">
                    <v-img
                    src="../../assets/images/gold-in-the-mouth/gold-5.jpg"
                    ></v-img>
                </v-col>
                <v-col cols="12" sm="12" md="6">
                    <v-img
                    src="../../assets/images/gold-in-the-mouth/gold-6.jpg"
                    ></v-img>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" class=" justify-center">
                    <v-img
                    alt="My five year plan cycle diagram"
                    cover
                    aspect-ratio="1/1"
                    src="@/assets/images/gold-in-the-mouth/gold-2.jpg"
                    ></v-img>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" sm="12" md="6" class=" justify-center">
                    <v-img
                    alt="My five year plan cycle diagram"
                    cover
                    aspect-ratio="1/1"
                    src="@/assets/images/gold-in-the-mouth/gold-3.jpg"
                    ></v-img>
                </v-col>
                <v-col cols="12" sm="12" md="6" class=" justify-center">
                    <v-img
                    alt="My five year plan cycle diagram"
                    cover
                    aspect-ratio="1/1"
                    src="@/assets/images/gold-in-the-mouth/gold-4.jpg"
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
