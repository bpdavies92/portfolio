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
        src="@/assets/images/as-i-am/as-i-am-1.jpg"
        ></v-img>
        <v-container class="mt-12">

                      <v-row >
                <v-col class=" position-relative" cols="12" sm="12" md="5">
                    <div class="sticky">
                         <Description :d="d" :project="project"/>
                    </div>
                </v-col>
                <v-col cols="12" sm="12" md="7">
                         <v-row>
                <v-col>
                    <v-img
                    alt="Exhibition hero"
                    cover
                    src="@/assets/images/as-i-am/as-i-am-1.jpg"
                    ></v-img>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" sm="12" md="6">
                    <v-img
                    alt="As I am menu displaying all people"
                    cover
                    src="@/assets/images/as-i-am/as-i-am-2.jpg"
                    ></v-img>
                </v-col>
                <v-col cols="12" sm="12" md="6">
                    <v-img
                    alt="As I am infinity menu in hero"
                    max-height="400"
                    cover
                    src="@/assets/images/as-i-am/as-i-am-3.jpg"
                    ></v-img>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-img
                    alt="Example of staff member statement"
                    cover
                    src="@/assets/images/as-i-am/as-i-am-4.jpg"
                    ></v-img>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-img
                    alt="Example of a quote section on the As I am website."
                    cover
                    src="@/assets/images/as-i-am/as-i-am-5.jpg"
                    ></v-img>
                </v-col>
            </v-row>
                </v-col>
            </v-row>

            
            
           
        </v-container>
    </section>
 
</template>

<script setup>
    import Description from '../Description.vue';

    const props = defineProps(['project'])

</script>
