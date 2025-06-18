<template>
    <v-sheet class="mb-12">
      <h2>{{ d.title }}</h2>
      <h3 class="mt-3"><span v-if="d.start">{{ d.start }} - </span>{{ d.end }}, {{ d.location }}</h3>
      <v-row class="skills">
        <v-col class="description" cols="12" md="12">
          <div class="mt-3">
            <h3>Description</h3>
            <div v-html="d.description"></div>
          </div>
        </v-col>

            <v-col :cols="12" sm="12" md="12" height="100%">
              <div class="d-flex">
                <div class=" mr-12"  v-for="(list, title) in { 'Technology': d.techUsed }" :key="title" >
                  <h3>{{ title }}</h3>
                  <v-list density="compact" lines="0">
                    <v-list-item
                      class="pa-0"
                      v-for="(item, i) in list"
                      :key="i"
                      :prepend-icon="item.icon"
                      :title="item.tech || item.skill"
                    ></v-list-item>
                  </v-list>
                </div>
                <div class="" v-for="(list, title) in { 'Skills': d.skills }" :key="title" >
                  <h3>{{ title }}</h3>
                  <v-list density="compact" lines="0">
                    <v-list-item
                      class="pa-0"
                      v-for="(item, i) in list"
                      :key="i"
                      :prepend-icon="item.icon"
                      :title="item.tech || item.skill"
                    ></v-list-item>
                  </v-list>
                </div>
              </div>
            </v-col>
          </v-row>
   
        </v-sheet>
  </template>
  
  <script setup>
  import { defineProps } from 'vue'
  
  const props = defineProps(['d', 'project'])
  </script>
