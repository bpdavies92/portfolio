<template>
  <v-container class="mt-12" >
    <FilterOptions/>
    <v-row>
      <v-col v-for="(project, i) in filteredProjects" :key="i" cols="12" sm="6" md="4">
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
       
      </v-card-subtitle>
      <v-card-text>

        {{ description[i] }}

        <v-chip-group class="mt-6">
            <v-chip v-for="(tag, i) in project.tags" :key="i">{{ tag }}</v-chip>
        </v-chip-group>
      </v-card-text>

      <v-card-actions>
        <v-btn @click="router.push({ name: 'Project', params: { id: project.slug } })" variant="elevated" prepend-icon="mdi-book" block color="secondary">
          See more
        </v-btn>
      </v-card-actions>
    </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
    import { useRoute, useRouter } from "vue-router";
    import projects from "@/composables/projects";
    import FilterOptions from "@/components/FilterOptions.vue";
    import { computed, ref } from "vue";
    
    const { works } = projects()
    const route = useRoute()
    const router = useRouter()

    const filteredProjects = computed(() => {
        return works.value.filter((e, i) => {
          return e.tags.includes(route.query.filter)
        })
    })

    const description = computed(() => {
    return works.value.map((i, d) => {
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

<style>

</style>