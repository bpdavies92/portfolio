<template>
   <v-card
      class="mx-auto"
      max-width="600"
      flat
      rounded="1"
      elevation="3"
    >
      <v-img
        alt=""
        class="align-end text-white"
        height="250"
        :src="project.thumbnail"
        cover 
      >
        <div class="title-banner">
            <v-card-title>
                <v-tooltip 
                    aria-label="tooltip"
                    activator="parent"
                    location="top">
                    {{ project.title }}
                </v-tooltip>  
                {{ project.title }}
            </v-card-title>
        </div>
      </v-img>
      <v-card-subtitle class="pt-4">
        <span v-if="project.start">{{ project.start }} - </span>{{ project.end }}, {{ project.location }}
      </v-card-subtitle>
      <v-card-text class="text-body-1" :class="{'card-description' : relatedProject}">

        {{ description[index] }}

        <v-chip-group class="mt-6">
            <v-chip v-for="(tag, i) in project.tags.sort()" :key="i" @click="router.push({name: 'Filter', query:{filter: tag.toLowerCase()}})">{{ tag }}</v-chip>
        </v-chip-group>
      </v-card-text>

      <v-card-actions class="actions">
        <v-btn @click="router.push({ name: 'Project', params: { id: project.slug } })" variant="elevated" prepend-icon="mdi-book" block color="secondary">
          See more
        </v-btn>
      </v-card-actions>
    </v-card>
</template>

<script setup>
    import { computed, ref } from 'vue';
    import { useRouter } from 'vue-router';

    const {project, works, index, relatedProject} = defineProps(['project', 'works', 'index', 'relatedProject'])
    
    const router = useRouter()

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
