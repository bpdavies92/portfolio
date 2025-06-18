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

    

      <v-btn class="mr-3" :variant="route.name === 'Home' ? 'outlined' : 'text'" @click="router.push({ name: 'Home' })" aria-label="Go to Projects" role="link">Projects</v-btn>

      <v-btn :variant="route.name === 'About' ? 'outlined' : 'text'" @click="router.push({ name: 'About' })" aria-label="Go to About" role="link">About</v-btn>

      
    </v-app-bar>

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
import { ref, computed, watchEffect } from 'vue';

  const { works } = projects()

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

</script>



