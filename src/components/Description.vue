<template>
    <div class="mb-12">
      <h2>{{ d.title }}</h2>
      <h3 v-if="d.start"><span>{{ d.start }} - </span>{{ d.end }}, {{ d.location }}</h3>
      <v-row>
        <v-col cols="12" md="6">
          <h3 class="mt-6">Description</h3>
          <div v-html="d.description"></div>
        </v-col>
            <v-col :cols="12" sm="12" md="6">
              <div class="d-flex skills">
                <div class="mt-6 mr-6"  v-for="(list, title) in { 'Technology': d.techUsed }" :key="title" >
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
                <div class="mt-6"  v-for="(list, title) in { 'Skills': d.skills }" :key="title" >
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
   
    </div>
  </template>
  
  <script setup>
  import { defineProps } from 'vue'
  
  const props = defineProps(['d', 'project'])
  </script>
