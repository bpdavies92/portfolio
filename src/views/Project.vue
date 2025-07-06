<template> 
    <component :is="selectedComponent" :IDNumber="projectPageId" :project="project"></component> 
    <RelatedProjects :works="works" :project="project" :key="route.params.id"/>
</template>

<script setup>

    import { computed, ref } from "vue"
    import { useRouter, useRoute } from "vue-router" 
    import projects from '@/composables/projects'
    import Edi from '@/components/projects/Edi'
    import CoursePrinciples from "@/components/projects/CoursePrinciples.vue"
    import Afhea from '@/components/projects/Afhea'
    import FiveYearPlan from '@/components/projects/FiveYearPlan'
    import ASmallView from "@/components/projects/ASmallView.vue"
    import LeedConference from "@/components/projects/LeedConference.vue"
    import ClassificationCalculator from "@/components/projects/ClassificationCalculator.vue"
    import Internationalisation from "@/components/projects/Internationalisation.vue"
    import CriticalPedagogy from "@/components/projects/CriticalPedagogy.vue"
    import ILC from "@/components/projects/ILC.vue"
    import UTAWebsite from "@/components/projects/UTAWebsite.vue"
    import AssessmentDesign from "@/components/projects/AssessmentDesign.vue"
    import HalfReal from "@/components/projects/HalfReal.vue"
    import AsIAm from "@/components/projects/AsIAm.vue"
    import RelatedProjects from "@/components/RelatedProjects.vue"
    import DecolCurToolkit from "@/components/projects/DecolCurToolkit.vue"
    import ProsumerChronicles from "@/components/projects/ProsumerChronicles.vue"
    import GoldInTheMouth from "@/components/projects/GoldInTheMouth.vue"
    import LearningCommunities from "@/components/projects/LearningCommunities.vue"
    import UnderstandingAwardingGap from "@/components/projects/UnderstandingAwardingGap.vue"
    import Mentorship from "@/components/projects/Mentorship.vue"


    const { works } = projects()  
    const router = useRouter()
    const route = useRoute()

    const selectedComponent = computed(() => {

        const componentId = route.params.id

        switch (componentId) {
            case "edi":
            return Edi
            case "afhea-independent-study":
            return Afhea
            case "five-year-plan":
            return FiveYearPlan
            case "a-small-view":
            return ASmallView
            case "leed-learning-teaching-conference":
            return LeedConference
            case "degree-classification-calculator":
            return ClassificationCalculator
            case "working-with-international-students":
            return Internationalisation
            case "critical-pedagogy-podcast":
            return CriticalPedagogy
            case "inclusive-learning-communities":
            return ILC
            case "uta-web-development":
            return UTAWebsite
            case "assessment-design":
            return AssessmentDesign
            case "half-real":
            return HalfReal
            case "as-i-am":
            return AsIAm
            case "decolonising-the-curriculum-toolkit":
            return DecolCurToolkit
            case "prosumer-chronicles":
            return ProsumerChronicles
            case "the-morning-has-gold-in-its-mouth":
            return GoldInTheMouth
            case "building-inclusive-learning-communities":
            return LearningCommunities
            case "understanding-the-awarding-gap":
            return UnderstandingAwardingGap
            case "fellowship-mentorship":
            return Mentorship
            case "course-principles":
            return CoursePrinciples
            // Add more cases as needed for other components
            // Ensure the component names match the ones you have imported
            // If you have a default component, you can return it here
            // or handle it as a fallback
            // For example, you can return a default component like this:
            // return DefaultComponent
            // or return null if no match is found
            // return DefaultComponent
            // or return null if no match is found
            // return null
            default:
            return null
        }
    })

    const project = computed(() => {
        return works.value.filter((d,i) => {
            return d.slug === route.params.id
        })
    })

        const projectPageId = computed(() => {

            const sortedWorks = works.value.sort((a, b) => {
      
                const titleA = new Date(a.date)
                const titleB = new Date(b.date)

                if(titleA < titleB) {
                return 1
                } 
                if(titleA > titleB) {
                return -1
                } 
                return 0
            })

        const IDNumber = works.value.find((d,i) => {
            return d.slug === route.params.id
        })
        
        console.log(IDNumber)
            const outOffNumber = sortedWorks.indexOf(IDNumber)
            return outOffNumber + 1
        })


    

</script>
