<template>
  <v-app>
    <v-app-bar
      aria-label="Navigation Bar"
      role="banner"
      :elevation="0"
    >
      <v-app-bar-title class="ml-6">Benjamin Davies</v-app-bar-title>

      <v-spacer />

      <v-responsive>
        <v-text-field
          ref="target"
          v-model="input"
          @focus="handleFocus"
          @blur="handleBlur"
          prepend-inner-icon="mdi-magnify"
          single-line
          class="mr-3 position-relative"
          max-height="34"
          label="Search"
          variant="underlined"
          updadeFocused="showResults"
        />
      </v-responsive>

      <v-spacer />

      <v-btn
        class="mr-3"
        :variant="route.name === 'Home' ? 'outlined' : 'text'"
        @click="router.push({ name: 'Home' })"
        aria-label="Go to Projects"
        role="link"
      >
        Projects
      </v-btn>

      <v-btn
        :variant="route.name === 'About' ? 'outlined' : 'text'"
        @click="router.push({ name: 'About' })"
        aria-label="Go to About"
        role="link"
      >
        About
      </v-btn>
    </v-app-bar>

    <transition name="grow">
      <v-sheet
        v-show="showResults && input.length > 0"
        class="overflow-auto search-sheet elevation-3"
        max-width="700"
        max-height="600"
        height="min-content"
      >
        <v-list lines='3' >
          <v-list-item  v-for="(project, index) in results" :key="index" link height="min-contentt" density="comfortable" @mousedown.prevent="handleResultClick(project)" class="pt-3 pb-3">
            {{ project.title }}
          </v-list-item>
        </v-list>
      </v-sheet>
    </transition>

    <default-view />
  </v-app>
</template>




<script setup>
import DefaultView from './View.vue'
import { useRouter, useRoute } from 'vue-router'
import { ref, computed, watchEffect, shallowRef } from 'vue'
import Fuse from 'fuse.js'
import projects from '@/composables/projects'

const input = ref('')
const showResults = ref(false)
let blurTimeout

const target = shallowRef()

const router = useRouter()
const route = useRoute()

const { works } = projects()

// Fuse.js search
let fuse = new Fuse(works.value, {
  keys: ['title'],
  threshold: 0.3,
})

// Update Fuse if data changes
watchEffect(() => {
  fuse = new Fuse(works.value, {
    keys: ['title', 'shortTitle'],
    threshold: 0.3,
  })
})

// Search results
const results = computed(() => {
  if (!input.value) return ''
  return fuse.search(input.value).map(result => result.item)
})

// Focus / Blur behavior
function handleFocus() {
  showResults.value = true
  clearTimeout(blurTimeout)
}

function handleBlur() {
  blurTimeout = setTimeout(() => {
    showResults.value = false
    input.value = ''
  }, 150)
}

function handleResultClick(project) {
  showResults.value = false
  input.value = ''
  target.value?.blur() // <- this removes focus
  router.push({ name: 'Project', params: { id: project.slug } })
}
</script>




<style>

.top {
  z-index: 99999 !important;
  overflow: visible;
  display: block;
}

.search-sheet {
  position: fixed;
  top: 80px; /* Adjust based on navbar height */
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 700px;
  background: white;
  z-index: 9999;
  overflow-y: auto;
  max-height: 400px;
  border: 1px solid #e0e0e0;
}


/* Grow animation */
.grow-enter-active, .grow-leave-active {
  /* transition: transform 0.2s ease, opacity 0.2s ease; */
  transform-origin: top;
}
.grow-enter-from {
  opacity: 0;
  transform: scaleY(0.8);
}
.grow-enter-to {
  opacity: 1;
  transform: scaleY(1);
}
.grow-leave-from {
  opacity: 1;
  transform: scaleY(1);
}
.grow-leave-to {
  opacity: 0;
  transform: scaleY(0.8);
}
</style>