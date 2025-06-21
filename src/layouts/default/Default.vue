<template>
  <v-app>
    <v-app-bar aria-label="Navigation Bar" role="banner"  image="https://images.unsplash.com/photo-1604079628040-94301bb21b91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" :elevation="0">


<!--      <v-list bg-color="transparent" >
        <v-list-item  class="pa-0">
          <v-btn color="#303030" prepend-icon='mdi-menu'  aria-label="Menu" @click="drawer = !drawer" stacked role="button"></v-btn>
        </v-list-item>
      </v-list> -->

      <v-app-bar-title class="ml-6">Benjamin Davies</v-app-bar-title>

      <template v-slot:image>

        </template>

      <v-spacer></v-spacer>

          <v-responsive >
        <v-text-field  v-model="input" prepend-inner-icon="mdi-magnify" single-line class="mr-3 position-relative" max-height="34" label="Search" variant="underlined">
      </v-text-field>


        
      </v-responsive>
 
      <v-sheet class="elevation-1">
        
      </v-sheet>
    
    

      <v-spacer></v-spacer>

    
  
      <v-btn class="mr-3" :variant="route.name === 'Home' ? 'outlined' : 'text'" @click="router.push({ name: 'Home' })" aria-label="Go to Projects" role="link">Projects</v-btn>

      <v-btn :variant="route.name === 'About' ? 'outlined' : 'text'" @click="router.push({ name: 'About' })" aria-label="Go to About" role="link">About</v-btn>

      
    </v-app-bar>

          <v-sheet class="overflow-auto search-sheet elevation-3" max-width="700" max-height="600" >
            <v-list v-for="(project, index) in results" :key="index">
              <v-list-item @click="router.push({ name: 'Project', params: { id: project.slug } })">
                {{ project.title }}
              </v-list-item>
            </v-list>
            <!-- {{ result }} -->
          </v-sheet>

    <default-view />  
    <!-- <v-navigation-drawer color="#f6f6f6" theme="light" v-model="drawer" aria-label="Navigation Drawer" role="navigation">

        <v-list nav >
          
          <v-list-item
            color="transparent"
            v-for="(d, i) in drawerTitles"
            @click="router.push({ name: 'Project', params: { id: d.slug }})"
            :key="i"
            :title="d.title"
            :class="{ 'activeMenuItem': currentRouteName === d.slug, '': currentRouteName !== d.slug }"
            aria-label="Go to Project: {{ d.title }}"
            role="link"
            :aria-current="currentRouteName === d.slug ? 'page' : null"
          >
            <v-tooltip  
        activator="parent"
        location="end"
      >{{ d.title }}</v-tooltip>
          </v-list-item>

        </v-list>

      </v-navigation-drawer> -->
      
   
    </v-app>

     


</template>

<script setup>

import DefaultView from './View.vue'
import Footer from './Footer.vue'
import projects from '@/composables/projects';
import { useRouter, useRoute } from 'vue-router'
import { ref, computed, watchEffect, watch } from 'vue';
import { useFuse } from '@vueuse/integrations/useFuse'
import { shallowRef } from 'vue'
import Fuse from 'fuse.js';

const overlay = ref(true)


  const { works } = projects()

  // let theOne = ref(null)

  const searchStuff = Object.values(works.value)

  // const title = () => {
  //    const theTwo = works.value.map(i => i.title && i.location)

  //    theOne.value = Object.values(theTwo)

  //    return theOne.value
  
  // }

  // title()

  //      console.log(theOne.value)

  

  const router = useRouter()
  const route = useRoute()

  console.log('nav name', route.name)

  const currentRouteName = ref('')

  console.log(route.params.id)

  watchEffect(() => {
    currentRouteName.value = route.params.id
  })

  const drawerTitles = computed(() => {
    return works.value.sort((a, b) => {

        const letterA = a.title
        const letterB = b.title

        if(letterA > letterB) return 1
        if(letterA < letterB) return -1
        return 0
      
    })
  })

  const drawer = ref(false)


// 2. Reactive search query
const input = ref('');

// 3. Create Fuse instance
let fuse = new Fuse(works.value, {
  keys: ['title'], // fields to search
  threshold: 0.3, // lower = stricter match
});

// 4. Watch data updates to re-initialize Fuse
watch(input.value, (newData) => {
  console.log('Data updated, re-initializing Fuse...');
  fuse = new Fuse(newData, {
    keys: ['name'],
    threshold: 0.3,
  });
});

// 5. Watch the query to debug input
watch(input.value, (query) => {
  console.log('Search query changed:', query);
});

// 6. Compute search results and log them
const results = computed(() => {
  if (!input.value) {
    console.log('No search query. Returning full dataset.');
    return works.value;
  }

  const rawResults = fuse.search(input.value);
  console.log('Raw Fuse results:', rawResults);

  const mappedResults = rawResults.map(result => result.item);
  console.log('Mapped results:', mappedResults);

  return mappedResults;
});









</script>



<style>

.top {
  z-index: 99999 !important;
  overflow: visible;
  display: block;
}

.search-sheet {
  position: fixed;
  z-index: 9999; /* higher than v-app-bar */
  background: white;
  width: 100%;
  top: 23%;
  left: 50%;
  right: 50%;
  bottom: 50%;
  transform: translate(-50%, -50%);
}

</style>