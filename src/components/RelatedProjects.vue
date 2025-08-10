<template>

            <v-lazy
              :min-height="200"
                :options="{'threshold':0.5}"
                transition="scroll-y-reverse-transition"
            >
                <div class="pt-8 mt-12 pb-12 mb-n12 related-projects redBackground ">
                  <v-container fluid>
                        <div class="content-container">
                            <h2 class="mb-md-3 mb-sm-12" >Related projects</h2>
                            <p  class="text-body-1 d-sm-none d-md-none mb-md-3 mb-sm-12 text-white">Swipe right to see more</p>
                                            <v-window
                                            continuous
                                            v-model="window"
                                              class="fixed-window-height"
                                            >
                            <v-window-item   v-for="(chunk, chunkIndex) in projectChunks" :key="chunkIndex" >
                                <v-row>
                                    <v-col v-for="(project, projectIndex) in chunk" :key="projectIndex" cols="12" sm="12" md="4">
                                        <Card :relatedProject="true" :works="works" :project="project" :index="projectIndex"/>
                                    </v-col>
                                </v-row>
                            </v-window-item>
                                            </v-window>
                        </div>
                        </v-container>

                              <v-sheet class="d-flex justify-center align-center mt-6" color="transparent">
                                  <v-btn
                                    v-if="arrows"
                                    class="arrow-button mr-2"
                                    :class="{ 'arrow-left': window > 0, 'arrow-right': window < projectChunks.length - 1 }"
                                    @click="window = Math.max(0, window - 1)"
                                    :disabled="window <= 0"
                                                              >
                                    <v-icon>mdi-chevron-left</v-icon>
                                                              </v-btn>
                                                              
                                  
                                                              <v-btn
                                    v-if="arrows"
                                    class="arrow-button ml-2"
                                    :class="{ 'arrow-left': window > 0, 'arrow-right': window < projectChunks.length - 1 }"
                                    @click="window = Math.min(projectChunks.length - 1, window + 1)"
                                    :disabled="window >= projectChunks.length - 1"
                                                              >
                                    <v-icon>mdi-chevron-right</v-icon>
                                                              </v-btn>
                              </v-sheet>
                   
                </div>
            </v-lazy>


</template>

<script setup>

    import { breakpointsTailwind, useBreakpoints, useElementSize } from '@vueuse/core'
    import { ref, computed } from "vue";
    import Card from "./Card.vue";
    
    const { works, project } = defineProps(['works', 'project'])

    const filteredTags = works.filter((data, index) => {
            return project[0].tags.some((tag) => data.tags.includes(tag));
        })
        .filter(d => d.title != project[0].title)
    
    const breakpoints = useBreakpoints({
        tablet: 960,
        laptop: 1023,
        desktop: 1280,
    })
    
    const tablet = breakpoints.smaller('tablet')
    
    const window = ref(0)
    let arrowLength = ref(0)
        
    console.log(arrowLength.value)
    
    const projectChunks = computed(() => {
        filteredTags
        .sort((a, b) => { 
            const orderA = new Date(a.date)
            const orderB = new Date(b.date)

            if(orderA > orderB) {
                return -1
            } 
            if(orderA < orderB) {
                return  1
            } 
        })

        const chunks = [];

        if(!tablet.value) {
            for (let i = 0; i < filteredTags.length; i += 3) {
                chunks.push(filteredTags.slice(i, i + 3));
            }
        } else {
            for (let i = 0; i < filteredTags.length; i += 1) {
                chunks.push(filteredTags.slice(i, i + 1));
            }
        }   

        return chunks;
    });

    const arrows = computed(() => {
        if(filteredTags.length <= 3) {
            return false
        } else {
            return 'hover'
        }
    })

</script>

<style scoped>
.fixed-window-height {
  min-height: 450px; /* Adjust based on your card size */
}
  </style>