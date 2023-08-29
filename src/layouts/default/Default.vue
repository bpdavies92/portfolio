<template>
  <v-app>
    <v-app-bar density="compact" image="https://images.unsplash.com/photo-1604079628040-94301bb21b91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" :elevation="2">


      <v-list>
        <v-list-item class="pa-0">
          <v-btn variant="text" @click="drawer = !drawer" stacked prepend-icon="mdi-menu">Menu</v-btn>
        </v-list-item>
      </v-list>

      <v-app-bar-title class="ml-12">Benjamin Davies</v-app-bar-title>

      <template v-slot:image>
          <v-img
            gradient="to top right, rgba(242, 230, 196, .8), rgba(242, 230, 196, .8)"
          ></v-img>
        </template>

      <v-spacer></v-spacer>

      <v-btn @click="router.push({ name: 'Home' })">
          Projects
      </v-btn>

      <v-btn @click="router.push({ name: 'About' })">
          About
      </v-btn>   
      
    </v-app-bar>

    <default-view />  
    <v-navigation-drawer
        color="#f6f6f6"
        theme="light"
        v-model="drawer"
      >
        <v-list color="transparent">
          <v-list-item  v-for="(d, i) in drawerTitles" @click="router.push({ name: 'Project', params: { id: d.slug }})" :key="i" :title="d.title" > 
            <v-tooltip
        activator="parent"
        location="end"
      >{{ d.title }}</v-tooltip>
          </v-list-item>
        </v-list>

        <!-- <template v-slot:append>
          <div class="pa-2">
            <v-btn block>
              Logout
            </v-btn>
          </div>
        </template> -->
      </v-navigation-drawer>
    </v-app>
</template>

<script setup>

import DefaultView from './View.vue'
import Footer from './Footer.vue'
import projects from '@/composables/projects';
import { useRouter, useRoute } from 'vue-router'
import { ref, computed } from 'vue';

  const { works } = projects()

  const router = useRouter()
  const route = useRoute()

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

<style>

</style>
