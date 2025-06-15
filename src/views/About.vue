<template>
  <section class="mt-12 text-body-1 content-container">
      
      <v-row>
          <v-col cols="12" sm="6" md="6">
            <v-img
            alt=""
            cover
            height="500"
            src="@/assets/images/me.jpg"
            >
            </v-img>
          </v-col>
          <v-col>
            <row>
              <v-col>
                <h2 class="mb-3">About me</h2>
                <p>I’m a developer and designer based in Manchester, UK, with nearly five years of experience at Manchester Metropolitan University. My work primarily involves developing resources focused on learning, teaching, and assessment. I hold a Master's degree from the University of Central Lancashire, which I earned in 2016. Over the years, I've had the opportunity to work across various media. Previously, I dabbled in building video game worlds and creating books. Currently, my efforts are centered around video production, web development, and e-learning. I have a strong passion for topics such as art, film, curation, and creativity.</p>
              </v-col>
            </row>
            <v-row>
              <v-col cols="12" sm="12" md="6">
                 <div class="vuechart-example">
                    <apexchart  type="radar" :options="options" :series="series"></apexchart>
                  </div>
              </v-col>
              <v-col cols="12" sm="12" md="6">
                    <div class="vuechart-example">
                    <apexchart  type="radar" :options="options" :series="series"></apexchart>
                  </div>
              </v-col>
            </v-row>
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
                <v-list-item><b>Artist-led Hot 100 (A Small View)</b>, Published by a-n, words by Kevin Hunt, 2017, <a href="https://www.a-n.co.uk/news/new-artist-led-hot-100-launched-assembly-liverpool/">https://www.a- n.co.uk/news/new-artist-led-hot-100-launched-assembly-liverpool/</a></v-list-item>
                <v-list-item><b>Half-Real (review)</b>, published by The Skinny, words by Santini Basra, 2016, <a href="http://www.theskinny.co.uk/art/reviews/half-real-hanover-project-preston">www.theskinny.co.uk/art/reviews/half-real-hanover-project-preston</a></v-list-item>
                <v-list-item><b>The Holodeck (review)</b>, published by Art in Liverpool, Word by Kyle Nathan Brown, 2015, <a href="http://www.artinliverpool.com/?p=57712">http:// www.artinliverpool.com/?p=57712</a></v-list-item>
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
  </section>
  <div>
 
</div>
</template>

<script setup>
import { ref } from "vue";
// import VueApexCharts from 'vue-apexcharts'

const base = ref(import.meta.env.VITE_BASE)

  const options = ref({

  chart: {
    id: 'vuechart-example',
    type: 'radar',  
    toolbar: {
    show: false,
  },
  },
  xaxis: {
    categories: ['Photoshop', 'Illustrator', 'Premiere Pro', 'After Effects', 'InDesign']
  },
  yaxis: {
    stepSize: 20
  }
})

const series = ref([
  {
    name: 'series-1',
    data: [30, 40, 45, 50, 49]
  }
])


</script>

<style>

</style>