<template>
  <v-container fluid>
    <section class="mt-12 text-body-1 content-container">
    
        <v-row  class="achievements">
            <v-col cols="12" sm="12" md="6">
              <v-img
              alt=""
              cover
              height="500"
              :src="aboutImg"
              eager
              :lazy-src="aboutImgLazy"
              >
              </v-img>
            </v-col>
            <v-col cols="12" sm="12" md="6" >
             
              
                  <h2 class="mb-3">About me</h2>
                  <p>I’m a developer and designer based in Manchester, UK, with nearly five years of experience at Manchester Metropolitan University. My work primarily involves developing resources focused on learning, teaching, and assessment. I hold a Master's degree from the University of Central Lancashire, which I earned in 2016. Over the years, I've had the opportunity to work across various media. Previously, I dabbled in building video game worlds and creating books. Currently, my efforts are centered around video production, web development, and e-learning. I have a strong passion for topics such as art, film, curation, and creativity.</p>
              
             
            </v-col>
        </v-row>
        <hr class="mt-12 mb-12">
        <v-row class="achievements">
            <v-col cols="12" sm="12" md="4">
              <h2>Layout design</h2>
              <v-list lines density="compact">
                  <v-list-item>
                    <b>Artist-Led Interviews: North</b>, book, self-published, October – November 2017
                  </v-list-item>
                  <v-list-item><b>The Archive of Gwyneth Davis</b>, book, published by Typ-ooo North, August – September 2017</v-list-item>
                  <v-list-item><b>Works for Air</b>, catalogue, published by CRISAP, November 2016</v-list-item>
                  <v-list-item><b>Of Carbonization</b>, artists book, self-published, August 2016</v-list-item>
                  <v-list-item><b>A Guide To Living and Working in the Museum</b>, artists book, self-published, August 2016</v-list-item>
                  <v-list-item><b>Twenty Fourteen</b>, catalogue, published by University of Central Lancashire, May 2014</v-list-item>
              </v-list>
            </v-col>
            <v-col cols="12" sm="12" md="4">
              <h2>Awards/nominations</h2>
              <v-list lines density="compact">
                <v-list-item ><b>Manchester Met Staff Awards nomination for Student Experience Initiative of the Year Award</b>, Manchester Metropolitan University, 2024</v-list-item>
                <v-list-item ><b>Manchester Met Staff Awards nomination for Service Excellence Award</b>, Manchester Metropolitan University, 2023</v-list-item>
                <v-list-item ><b>Manchester Met Staff Awards nomination for University Citizenship Award</b>, Manchester Metropolitan University, 2023</v-list-item>
                <v-list-item ><b>Staff Bonus Scheme</b>, Manchester Metropolitan University, 2023</v-list-item>
                <v-list-item ><b>Think Big Level 2 (funding)</b>, O2, 2016</v-list-item>
                <v-list-item ><b>The Awesome Foundation (funding)</b>, 2015</v-list-item>
                <v-list-item ><b>Think Big Level 1 (funding)</b>, O2, 2015</v-list-item>
                <v-list-item ><b>Creative Focus Award nomination</b>, University of Central Lancashire,
     2014</v-list-item>
              </v-list>
            </v-col>
            <v-col cols="12" sm="12" md="4">
                <h2>Press</h2>
                <v-list>
                  <v-list-item><b><a target="blank" href="https://corridor8.co.uk/article/sound-adult-children-determined-not-afraid/">The Sound of Adult Children Determined Not To Be Afraid (review)</a></b>, published by Corridor8, 2017</v-list-item>
                  <v-list-item><b><a target="blank" href="https://www.a-n.co.uk/news/new-artist-led-hot-100-launched-assembly-liverpool/">Artist-led Hot 100 (A Small View)</a></b>, Published by a-n, words by Kevin Hunt, 2017</v-list-item>
                  <v-list-item><b><a target="blank" href="http://www.theskinny.co.uk/art/reviews/half-real-hanover-project-preston">Half-Real (review)</a></b>, published by The Skinny, words by Santini Basra, 2016</v-list-item>
                  <v-list-item><b><a target="blank" href="http://www.artinliverpool.com/?p=57712">The Holodeck (review)</a></b>, published by Art in Liverpool, Word by Kyle Nathan Brown, 2015</v-list-item>
  
                </v-list>
            </v-col>
        </v-row>
        <v-row class="achievements">
          <v-col cols="12" sm="12" md="4">
            <h2>Education</h2>
            <v-list lines density="compact">
              <v-list-item><b>MA Fine Art Studio Practice</b>, University of Central Lancashire, 2014 – 2016, Distinction </v-list-item>
    
              <v-list-item><b>BA (Hons) Fine Art, University of Central Lancashire</b>, 2011 – 2014, First Class Honours</v-list-item>
    
              <v-list-item><b>Foundation Degree</b>, City of Liverpool College, 2010 – 2011, Distinction</v-list-item>
            </v-list>
          </v-col>
        </v-row>
        <hr class="mt-12 mb-12">
        <v-lazy
            :options="{'threshold':0.5}"
            transition="fade-transition"
        >
          <v-row>
            <v-col cols="12" sm="12" md="12" >
                <h2>Software skills</h2>
                  <div class="software-skills text-center">
                    <apexchart height="500" type="radar" :options="skillsOptions" :series="skillsSeries"></apexchart>
                  </div>
            </v-col>
            <!-- <v-col cols="12" sm="12" md="6" >
                <h2>Design</h2>
                  <div class="software-skills">
                    <apexchart type="radar" :options="skillsOptions" :series="skillsSeries"></apexchart>
                  </div>
            </v-col> -->
          </v-row>
        </v-lazy>
    
    </section>
  </v-container>
  <div>
 
</div>
</template>

<script setup>
import { ref } from "vue";
// import VueApexCharts from 'vue-apexcharts'
import aboutImg from '@/assets/images/me.webp'
import aboutImgLazy from '@/assets/images/me-lazy.webp'

const base = ref(import.meta.env.VITE_BASE)

  const skillsOptions = ref({
  
  chart: {
    id: 'software-skills',
    type: 'radar', 
      sparkline: {
    // enabled: true
    },
    offsetX: 0,
    offsetY: -50,
     height: 500,  // or 100%, or smaller
  width: 500,
    toolbar: {
    show: false,
  },
  },
  xaxis: {
    categories: ['After Effects', 'Illustrator', 'InDesign', 'Photoshop', 'Premiere Pro', 'Vue.js'],
    labels: {
      style: {
        colors: ['#303030', '#303030', '#303030', '#303030', '#303030', '#303030'],  // Apply color to category labels
        fontSize: '12px',
        fontFamily: 'inherit',
      },
    },
  },
  yaxis: {
    stepSize: 20,
    labels: {
      style: {
        colors: '#303030',  // Color for radial axis numbers
      },
    },
  },
  stroke: {
    colors: ['#303030',],
  },
    fill: {
     colors: ['#303030',],
  },
         plotOptions: {
          radar: {
            polygons: {
              
              strokeColors: '#999999', // White radial lines
              connectorColors: '#999999', // White connecting lines
              fill: {
                colors: ['#F2E7C4'], // Background fill of radar area (black)
              },
            },
          }
        }
  
})

const skillsSeries = ref([
  {
    name: '',
    data: [85, 70, 50, 70, 90, 70],
    colors: ['#303030', '#303030', '#303030', '#303030', '#303030'],
    fill: ['#303030'],
        labels: {
    style: {
      fontColor: '#303030', // Black color for category labels
    },
  },
  }
])


</script>

<style>

</style>