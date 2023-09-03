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
        src="@/assets/images/a-small-view/a_small_view_1.jpg"
        ></v-img>
        <v-container class="mt-12">
            <Description :d="d" :project="project"/>
            <v-row>
                <v-col>
                    <v-img
                    alt="A hole, a mountain exhibition"
                    cover
                    src="@/assets/images/a-small-view/a_small_view_1.jpg"
                    ></v-img>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-img
                    alt="The white pube exhibition during Liverpool Bienial 2016"
                    cover
                    src="@/assets/images/a-small-view/a_small_view_2.jpg"
                    ></v-img>
                </v-col>
                <v-col>
                    <v-img
                    alt="A small view"
                    max-height="400"
                    cover
                    src="@/assets/images/a-small-view/a_small_view_3.png"
                    ></v-img>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-img
                    alt="The white pube reading / performance"
                    cover
                    src="@/assets/images/a-small-view/a_small_view_4.jpg"
                    ></v-img>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-img
                    alt="Symbiosis exhibition"
                    cover
                    src="@/assets/images/a-small-view/a_small_view_5.jpg"
                    ></v-img>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-img
                    alt="Got worms exhibition"
                    cover
                    src="@/assets/images/a-small-view/a_small_view_6.jpg"
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
