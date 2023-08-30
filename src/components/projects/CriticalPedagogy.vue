<template>
    <section  
    v-for="(d,i) in project"
    :key="i"
    >
        <v-img
        max-height="400"
        aspect-ratio="16/9"
        cover
        src="https://images.unsplash.com/photo-1617994452722-4145e196248b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        ></v-img>
        <v-container class="mt-12">
            <h2>{{ d.title }}</h2>
            <h3><span v-if="d.start">{{ d.start }} - </span>{{ d.end }}, {{ d.location }}</h3>
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
            <v-row class="mt-12">
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

        </v-container>
    </section>
 
</template>

<script setup>

    const props = defineProps(['project'])

</script>
