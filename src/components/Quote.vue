<template>
    <div :min-height="minHeight ? minHeight : '0'">
        <div class="pa-md-12 pa-6 purpleBackground quote">
            <v-icon icon="mdi-format-quote-open mr-3" size="x-large"></v-icon>
            <blockquote cite="https://www.huxley.net/bnw/four.html">
                    <slot name="quote"></slot>
                <footer class="mt-3">
                    — <slot name="person"></slot><cite><slot name="cite"></slot></cite>
                </footer> 
            </blockquote>
        </div>
    </div>  
</template>

<script setup>
import { ref } from "vue"


    const props = defineProps(['marginBottom', 'minHeight'])

    const marginBottom = ref(props.marginBottom ? props.marginBottom : false)

</script>