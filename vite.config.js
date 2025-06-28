// Plugins
import vue from '@vitejs/plugin-vue'
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'


// Utilities
import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({ 
      template: { transformAssetUrls }
    }),
    // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
    vuetify({
      autoImport: true,
    }),
  ],
  define: { 
    'process.env': {},
    __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: false, // or true if you need debug info
    __VUE_OPTIONS_API__: true,
    __VUE_PROD_DEVTOOLS__: false  
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
    extensions: [
      '.js',
      '.json',
      '.jsx',
      '.mjs',
      '.ts',
      '.tsx',
      '.vue',
    ],
  },
  server: {
    port: 3000,
  },
})
