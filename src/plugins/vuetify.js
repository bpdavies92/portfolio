/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    themes: {
      light: {
        colors: {
          primary: '#614BF2',
          secondary: '#F28080',
          blueShade: '#1E0B99',
          yellowShade: '#D6B447',
          yellow: '#F2E7C4',
        },  
      },
    },
  },
})
