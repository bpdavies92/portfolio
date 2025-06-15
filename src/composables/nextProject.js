import {ref} from 'vue';
import project from './projects.js'
import {useRouter} from 'vue-router'

const nextProject = () => {

    const {works} = project()
    const sortedWorks = ref(works.value.sort((a, b) => {
      
        const titleA = new Date(a.date)
        const titleB = new Date(b.date)

        if(titleA < titleB) {
          return 1
        } 
        if(titleA > titleB) {
          return -1
        }
        return 0
    }))

    console.log(sortedWorks.value, 'sorted ordered')

    const route = useRouter()

    console.log('did it')


    const next = (currentProject) => {

        const currentIndex = sortedWorks.value.filter((i) => i.id === currentProject.id)
        // console.log(sortedWorks.value.indexOf(currentIndex[0]), 'slug')

         const nextProjectIndex = sortedWorks.value.indexOf(currentIndex[0]) + 1

        // if(nextProjectIndex >= sortedWorks.value.length) return

       nextProjectIndex >= sortedWorks.value.length ? route.push({path: sortedWorks.value[0].slug}) : route.push({path: sortedWorks.value[nextProjectIndex].slug})
    }

        const previous = (currentProject) => {

        const currentIndex = sortedWorks.value.filter((i) => i.id === currentProject.id)
        console.log(sortedWorks.value.length, 'slug')

         const previousProjectIndex = sortedWorks.value.indexOf(currentIndex[0]) - 1

        // if(previousProjectIndex >= sortedWorks.value.length) return

       previousProjectIndex <= 0 ? route.push({path: sortedWorks.value[sortedWorks.value.length - 1].slug}) : route.push({path: sortedWorks.value[previousProjectIndex].slug})
    }

    return {next, previous}
}

export default nextProject