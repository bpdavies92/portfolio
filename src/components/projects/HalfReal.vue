<template>
    <section  
    v-for="(d,i) in project"
    :key="i"
    >
        <v-img
        gradient="rgba(30, 43,80, .8), rgba(30, 43,80, .8)"
        alt=""
        max-height="400"
        aspect-ratio="16/9"
        cover
        src="@/assets/images/half-real/half-real-6.jpg"
        ></v-img>
        <v-container class="mt-12">
            <Description :d="d" :project="project"/>
            <v-row>
                <v-col cols="12" sm="12" md="4">
                    <v-img
                    alt=""
                    cover
                    src="@/assets/images/half-real/half-real-1.jpg"
                    ></v-img>
                </v-col>
                <v-col cols="12"  sm="12" md="4">
                    <v-img
                    alt=""
                    height="100%"
                    cover
                    src="@/assets/images/half-real/half-real-3.jpg"
                    ></v-img>
                </v-col>
                <v-col cols="12"  sm="12" md="4">
                    <v-img
                    alt=""
                    height="100%"
                    cover
                    src="@/assets/images/half-real/half-real-4.jpg"
                    ></v-img>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" sm="12" md="6">
                    <v-img
                    alt="half real exhibition opening talk by "
                    cover
                    src="@/assets/images/half-real/half-real-5.jpg"
                    ></v-img>
                </v-col>
                <v-col cols="12" sm="12" md="6">
                    <v-img
                    alt="half real exhibition space"
                    cover
                    src="@/assets/images/half-real/half-real-6.jpg"
                    ></v-img>
                </v-col>
            </v-row>
            <v-row>
                <v-img
                alt="Half real poster"
                cover
                src="@/assets/images/half-real/half-real-10.jpg"
                ></v-img>
            </v-row>
        </v-container>
    </section>
 
</template>

<script setup>
    import Description from '../Description.vue';

    const props = defineProps(['project'])

</script>
