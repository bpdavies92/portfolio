<template>
    <div class="mb-12 mt-12">
        <div class="pa-12 purpleBackground quote">
            <v-icon icon="mdi-format-quote-open mr-3" size="x-large"></v-icon>
            <blockquote cite="https://www.huxley.net/bnw/four.html">
                    <slot name="quote">
                        
                    </slot>
                <footer>
                    — <slot name="person"></slot><cite><slot name="cite"></slot></cite>
                </footer> 
            </blockquote>
        </div>
    </div>  
</template>