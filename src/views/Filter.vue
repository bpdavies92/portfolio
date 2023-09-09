<template>
  <v-container class="mt-12" >
    <FilterOptions/>
    <v-row>
      <v-col v-for="(project, index) in filteredProjects" :key="index" cols="12" sm="6" md="4">
          <Card :project="project" :index="index" :works="works"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
    import { useRoute, useRouter } from "vue-router"
    import projects from "@/composables/projects"
    import Card from "@/components/Card"
    import FilterOptions from "@/components/FilterOptions.vue"
    import { computed, ref } from "vue"
    
    const { works } = projects()
    const route = useRoute()
    const router = useRouter()

    const filteredProjects = computed(() => {
  // Use the filter function to filter the works array based on the condition
  const filteredWorks = works.value.filter(e => e.tags.includes(route.query.filter));

  // Use the sort function to sort the filtered array by date
  return filteredWorks.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);

    if (dateA < dateB) {
      return 1;
    } 
    if (dateA > dateB) {
      return -1;
    }
    return 0;
  });
});


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