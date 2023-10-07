<template>
    <section  
    v-for="(d,i) in project"
    :key="i"
    >
        <v-img
        alt="Prosumer chronicles"
        max-height="400"
        aspect-ratio="16/9"
        cover
        src="@/assets/images/prosumer-chronicles/pro-3.jpg"
        ></v-img>
        <v-container class="mt-12">
            <Description :d="d" :project="project"/>
            <v-row>
                <v-col>
                    <v-img
                    alt="Prosumer chronicles"
                    cover
                    src="@/assets/images/prosumer-chronicles/pro-17.jpg"
                    ></v-img>
                </v-col>
            </v-row>    
            <v-row>
                <v-col>
                    <v-img
                    alt="Prosumer chronicles"
                    src="@/assets/images/prosumer-chronicles/pro-1.jpg"
                    ></v-img>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12"  sm="12" md="6">
                    <v-img
                    alt="Prosumer chronicles"
                    max-height="400"
                    cover
                    src="@/assets/images/prosumer-chronicles/pro-7.jpg"
                    ></v-img>
                </v-col>
                <v-col cols="12"  sm="12" md="6">
                    <v-img
                    alt="Prosumer chronicles"
                    max-height="400"
                    cover
                    src="@/assets/images/prosumer-chronicles/pro-3.jpg"
                    ></v-img>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-img
                    alt="Prosumer chronicles"
                    cover
                    src="@/assets/images/prosumer-chronicles/pro-14.jpg"
                    ></v-img>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" sm="12"  md="6">
                    <v-img
                    alt="Prosumer chronicles"
                    cover
                    src="@/assets/images/prosumer-chronicles/pro-4.jpg"
                    ></v-img>
                </v-col>
                <v-col cols="12" sm="12"  md="6">
                    <v-img
                    alt="Prosumer chronicles"
                    cover
                    src="@/assets/images/prosumer-chronicles/pro-12.jpg"
                    ></v-img>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-img
                    alt="Prosumer chronicles"
                    src="@/assets/images/prosumer-chronicles/pro-18.jpg"
                    ></v-img>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-img
                    alt="Prosumer chronicles"
                    cover
                    src="@/assets/images/prosumer-chronicles/pro-15.jpg"
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
