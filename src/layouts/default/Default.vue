<template>
  <v-app>
    <!-- Top App Bar -->
    <v-app-bar aria-label="Navigation Bar" role="banner" :elevation="0">
      <!-- Mobile Hamburger Icon -->
      <template v-slot:prepend v-if="width <= 960">
        <v-app-bar-nav-icon @click="menuOptions = true" class="menu-hamburger" />
      </template>

      <v-app-bar-title
        class="ml-6 flex-sm-fill flex-1-1"
        :class="flex-grow"
      >
        Benjamin Davies
      </v-app-bar-title>



      <!-- Desktop Search -->
      <v-responsive v-if="width >= 960">
        <v-text-field
          ref="target"
          v-model="input"
          @focus="handleFocus"
          @blur="handleBlur"
          prepend-inner-icon="mdi-magnify"
          single-line
          class="position-relative"
          label="Search"
          variant="underlined"
          updadeFocused="showResults"
        />
      </v-responsive>

      <v-spacer />

      <!-- Navigation Buttons -->
      <v-btn
        v-if="width >= 960"
        class="mr-3"
        :variant="route.name === 'Home' ? 'outlined' : 'text'"
        @click="router.push({ name: 'Home' })"
        aria-label="Go to Projects"
        role="link"
      >
        Projects
      </v-btn>

      <v-btn
        v-if="width >= 960"
        :variant="route.name === 'About' ? 'outlined' : 'text'"
        @click="router.push({ name: 'About' })"
        aria-label="Go to About"
        role="link"
        class="mr-6"
      >
        About
      </v-btn>
    </v-app-bar>

    <!-- Desktop Search Results -->
    <transition name="grow" v-if="width >= 960">
      <v-sheet
        v-show="showResults && input.length > 0"
        class="overflow-auto search-sheet elevation-3"
        max-width="700"
        max-height="600"
        height="min-content"
      >
        <v-list lines="two">
          <v-list-item
            v-for="(project, index) in results"
            :key="index"
            link
            height="min-content"
            density="comfortable"
            @mousedown.prevent="handleResultClick(project)"
            class="pt-3 pb-3"
          >
            <div class="mb-1 font-weight-bold">{{ project.title }}</div>
            <div class="">


            <v-chip-group class="">
                <v-chip variant="outlined"  v-for="(tag, i) in project.tags.sort()" :key="i" @click="router.push({name: 'Filter', query:{filter: tag.toLowerCase()}})">{{ tag }}</v-chip>
            </v-chip-group>
            </div>
          </v-list-item>


        </v-list>
        

      </v-sheet>
    </transition>

    <default-view />

    <!-- Mobile Menu Overlay -->
    <v-overlay v-model="menuOptions" width="100%">
      <v-sheet
        color="white"
        height="100vh"
        width="100%"
        class="d-flex align-start justify-center"
      >
        <v-list color="transparent">
          <v-list-item density="comfortable" class="pa-6 overflow-visible">
            <h1 class="text-h3 text-center">Benjamin Davies</h1>
          </v-list-item>

          <!-- Mobile Search -->
          <v-list-item class="mb-n6">
            <v-responsive v-if="width <= 960">
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
          </v-list-item>

          <!-- Mobile Search Results -->
          <v-list-item lines="3">
            <transition name="grow" v-if="width <= 960">
              <v-sheet
                v-show="showResults && input.length > 0"
                class="overflow-auto search-sheet elevation-3"
                height="100vh"
              >
                <v-list lines="3">
                  <v-list-item
                    v-for="(project, index) in results"
                    :key="index"
                    link
                    density="comfortable"
                    @mousedown.prevent="handleResultClick(project); menuOptions = false"
                    class="pt-3 pb-3"
                  >
                    {{ project.title }}
                  </v-list-item>
                </v-list>
              </v-sheet>
            </transition>
          </v-list-item>

          <!-- Mobile Navigation Buttons -->
          <v-list-item>
            <v-btn
              block
              class="mr-3"
              :variant="route.name === 'Home' ? 'outlined' : 'text'"
              @click="router.push({ name: 'Home' }); menuOptions = false"
              aria-label="Go to Projects"
              role="link"
            >
              Projects
            </v-btn>
          </v-list-item>

          <v-list-item>
            <v-btn
              block
              :variant="route.name === 'About' ? 'outlined' : 'text'"
              @click="router.push({ name: 'About' }); menuOptions = false"
              aria-label="Go to About"
              role="link"
            >
              About
            </v-btn>
          </v-list-item>

          <v-list-item>
            <v-btn
              block
              variant="text"
              @click="menuOptions = false"
              aria-label="Close menu"
              role="link"
            >
              Close menu
            </v-btn>
          </v-list-item>
        </v-list>
      </v-sheet>
    </v-overlay>
  </v-app>
</template>





<script setup>
import DefaultView from './View.vue'
import { useRouter, useRoute } from 'vue-router'
import { ref, computed, watchEffect, shallowRef } from 'vue'
import Fuse from 'fuse.js'
import projects from '@/composables/projects'
import { useWindowSize } from '@vueuse/core'

const { width, height } = useWindowSize()



const input = ref('')
const showResults = ref(false)
let blurTimeout

const target = shallowRef()

const menuOptions = ref(false)

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

.menu-hamburger {
  z-index: 999999 !important;
}

.top {
  z-index: 99999 !important;
  overflow: visible;
  display: block;
}




/* Grow animation */
.grow-enter-active, .grow-leave-active {
  /* transition: transform 0.2s ease, opacity 0.2s ease; */
  transform-origin: top;
}
.grow-enter-from {
  opacity: 0;
  /* transform: scaleY(0.8); */
}
.grow-enter-to {
  opacity: 1;
  /* transform: scaleY(1); */
}
.grow-leave-from {
  opacity: 1;
  /* transform: scaleY(1); */
}
.grow-leave-to {
  opacity: 0;
  /* transform: scaleY(0.8); */
}
</style>