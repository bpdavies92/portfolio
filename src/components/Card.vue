<template>
   <v-card
      class="mx-auto"
      max-width="600"
      flat
      rounded="1"
      elevation="3"
    >
      <v-img
        class="align-end text-white"
        height="250"
        :src="project.thumbnail"
        cover 
      >
        <div class="title-banner">
          <v-card-title>{{ project.title }}</v-card-title>
        </div>
      </v-img>
      <v-card-subtitle class="pt-4">
        <span v-if="project.start">{{ project.start }} - </span>{{ project.end }}, {{ project.location }}
      </v-card-subtitle>
      <v-card-text>

        {{ description[index] }}

        <v-chip-group class="mt-6">
            <v-chip v-for="(tag, i) in project.tags.sort()" :key="i">{{ tag }}</v-chip>
        </v-chip-group>
      </v-card-text>

      <v-card-actions>
        <v-btn @click="router.push({ name: 'Project', params: { id: project.slug } })" variant="elevated" prepend-icon="mdi-book" block color="secondary">
          See more
        </v-btn>
      </v-card-actions>
    </v-card>
</template>

<script setup>
    import { computed, ref } from 'vue';
    import { useRouter } from 'vue-router';

    const {project, works, index} = defineProps(['project', 'works', 'index'])
    
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
