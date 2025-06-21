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
        src="@/assets/images/critical-pedagogy/crit-ped-banner.jpg"
        ></v-img>
        <v-container fluid class="mt-12">

            <div class="content-container">
                <v-row>
                    <v-col class="position-relative" cols="12" sm="12" md="5">
                        <div class="sticky">
                             <Description :d="d" :project="project"/>
                        </div>
                    </v-col>
                    <v-col cols="12" sm="12" md="7">
                        <v-row>
                    <v-col>
                        <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1484814757&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/celtmmu" title="University Teaching Academy | Manchester Met" target="_blank" style="color: #cccccc; text-decoration: none;">University Teaching Academy | Manchester Met</a> · <a href="https://soundcloud.com/celtmmu/critical-pedagogy-emily-crompton-coming-out" title="Critical Pedagogy | Emily Crompton | Coming Out" target="_blank" style="color: #cccccc; text-decoration: none;">Critical Pedagogy | Emily Crompton | Coming Out</a></div>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1233842758&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/celtmmu" title="University Teaching Academy | Manchester Met" target="_blank" style="color: #cccccc; text-decoration: none;">University Teaching Academy | Manchester Met</a> · <a href="https://soundcloud.com/celtmmu/critical-pedagogy-stella-bosun-arije" title="Critical Pedagogy | Stella Bosun-Arije | Combining Academic Rigor With Academic Kindness" target="_blank" style="color: #cccccc; text-decoration: none;">Critical Pedagogy | Stella Bosun-Arije | Combining Academic Rigor With Academic Kindness</a></div>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1484814142&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/celtmmu" title="University Teaching Academy | Manchester Met" target="_blank" style="color: #cccccc; text-decoration: none;">University Teaching Academy | Manchester Met</a> · <a href="https://soundcloud.com/celtmmu/critical-pedagogy-kasia-nawratek-emily-crompton" title="Critical Pedagogy | Kasia Nawratek &amp; Emily Crompton" target="_blank" style="color: #cccccc; text-decoration: none;">Critical Pedagogy | Kasia Nawratek &amp; Emily Crompton</a></div>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1219806469&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/celtmmu" title="University Teaching Academy | Manchester Met" target="_blank" style="color: #cccccc; text-decoration: none;">University Teaching Academy | Manchester Met</a> · <a href="https://soundcloud.com/celtmmu/critical-pedagogy-eileen-pollard" title="Critical Pedagogy | Eileen Pollard | Room-plan-based Icebreaker" target="_blank" style="color: #cccccc; text-decoration: none;">Critical Pedagogy | Eileen Pollard | Room-plan-based Icebreaker</a></div>
                    </v-col>
                </v-row>
                    </v-col>
                </v-row>
                <v-sheet class="d-flex mt-12">
                    <v-btn size="large" variant="text" class="mr-auto" prepend-icon="mdi-arrow-left" @click="previous(project[0])">Previous</v-btn>
                    <v-btn size="large" variant="text" class="ml-auto" append-icon="mdi-arrow-right" @click="next(project[0])">Next</v-btn>
                </v-sheet>
            </div>
            
          
        </v-container>
    </section>
 
</template>

<script setup>
    import Description from '../Description.vue'
    import { useRouter, useRoute } from 'vue-router';
    import nextProject from '@/composables/nextProject'

    const props = defineProps(['project'])
    const {next, previous} = nextProject()
    const router = useRoute()
    const route = useRouter()
</script>
