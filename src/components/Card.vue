<template>
   <v-card
      class="mx-auto"
      max-width="600"
      flat
      rounded="1"
      elevation="3"
      @click="moveToProject"
      @keydown.enter="moveToProject"
      tabindex="0" 
      hover
      role="button"
      :aria-label="`Go to project: ${project.title}`"
    >
      <v-img
        eager
        alt=""
        class="align-end text-white"
        height="250"
        :src="project.thumbnail"
        cover 
      >
      </v-img>
                  <v-card-title>
                <v-tooltip 
                    aria-label="tooltip"
                    activator="parent"
                    location="top">
                    {{ project.title }}
                </v-tooltip>  
                {{ project.shortTitle ? project.shortTitle : project.title }}
            </v-card-title>
      <v-card-subtitle class="pt-0">
        <span v-if="project.start">{{ project.start }} - </span>{{ project.end }}, {{ project.location }}
      </v-card-subtitle>
      <v-card-text class="text-body-1" :class="{'card-description' : relatedProject}">

        {{ description[index] }}

        <v-divider class="mt-6 mb-6" v-if="!relatedProject"></v-divider>

        <v-chip-group v-if="!relatedProject" >
            <v-chip tabindex="-1" v-for="(tag, i) in project.tags.sort()" :key="i" @click="router.push({name: 'Filter', query:{filter: tag.toLowerCase()}})">{{ tag }}</v-chip>
        </v-chip-group>
      </v-card-text>
    </v-card>
</template>

<script setup>

    import { computed, ref } from 'vue';
    import { useRouter } from 'vue-router';
    

    const {project, works, index, relatedProject} = defineProps(['project', 'works', 'index', 'relatedProject'])

    const router = useRouter()

    const chips = ref(document.querySelector('.chip'))

    console.log(chips.value)

    const moveToProject = () => {
    router.push({ name: 'Project', params: { id: project.slug } }) 
    
    }

    const description = computed(() => {
        return works.map((i, d) => {
            if (i.subtitle.length < 200) return i.subtitle;
                const truncatedSubtitle = i.subtitle.slice(0, 200);
                const lastSpaceIndex = truncatedSubtitle.lastIndexOf(' ');
            if (lastSpaceIndex !== -1) {
                return truncatedSubtitle.slice(0, lastSpaceIndex) + '...';
            } else {
                return truncatedSubtitle + '...';
            }
        });
    });

</script>

