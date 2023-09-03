<template>
    <div class="mb-12">
      <h2>{{ d.title }}</h2>
      <h3 v-if="d.start"><span>{{ d.start }} - </span>{{ d.end }}, {{ d.location }}</h3>
      <v-row>
        <v-col cols="12" md="6">
          <h3 class="mt-6">Description</h3>
          <div v-html="d.description"></div>
        </v-col>
        <v-col class="d-flex justify-end" cols="12" md="6">
          <v-row>
            <v-col v-for="(list, title, index) in { 'Technology': d.techUsed, 'Skills': d.skills }" :cols="12" :xs="index % 2 === 0 ? 'auto' : 'auto'" :sm="index % 2 === 0 ? '6' : '6'" :md="index % 2 === 0 ? '6' : '6'" :key="title">
              <div class="mt-6">
                <h3>{{ title }}</h3>
                <v-list density="compact" lines="0">
                  <v-list-item
                    v-for="(item, i) in list"
                    :key="i"
                    :prepend-icon="item.icon"
                    :title="item.tech || item.skill"
                  ></v-list-item>
                </v-list>
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </div>
  </template>
  
  <script setup>
  import { defineProps } from 'vue'
  
  const props = defineProps(['d', 'project'])
  </script>
