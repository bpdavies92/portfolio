<template>
    <div class="mt-12">
        <v-container>
            <h2>Related projects</h2>
        </v-container>
        <v-window
        continuous
        :class="{'ml-12 mr-12' : tablet === false, 'ml-3 mr-3' : tablet === true}"
        v-model="window"
        show-arrows
        >
            <v-window-item class="pa-1" v-for="(chunk, chunkIndex) in projectChunks" :key="chunkIndex" >
                <v-row>
                    <v-col v-for="(project, projectIndex) in chunk" :key="projectIndex" cols="12" sm="12" md="4">
                        <Card :works="works" :project="project" :index="projectIndex"/>
                    </v-col>
                </v-row>
            </v-window-item>
        </v-window>
    </div>
</template>

<script setup>

    import { breakpointsTailwind, useBreakpoints, useElementSize } from '@vueuse/core'
    import { ref, computed } from "vue";
    import Card from "./Card.vue";

    const { works, project } = defineProps(['works', 'project'])

        const breakpoints = useBreakpoints({
                tablet: 960,
                laptop: 1023,
                desktop: 1280,
        })

        const tablet = breakpoints.smaller('tablet')

        console.log(project[0].title, )
    
    const window = ref(0)

    const test = ['video']
    
    const projectChunks = computed(() => {
        const tagFilter = project[0].tags.forEach(d => d)
        const filteredTags = works.filter((data, index) => {
            return project[0].tags.some((tag) => data.tags.includes(tag));
        }).filter(d => d.title != project[0].title)



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

</script>