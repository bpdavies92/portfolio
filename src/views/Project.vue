<template> 
    <component :is="selectedComponent" :project="project"></component> 
    <RelatedProjects :works="works" :project="project"/>
</template>

<script setup>

    import { computed, ref } from "vue"
    import { useRouter, useRoute } from "vue-router"
    import projects from '@/composables/projects'
    import Edi from '@/components/projects/Edi'
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
            default:
            return null
        }
    })

    const project = computed(() => {
        return works.value.filter((d,i) => {
            return d.slug === route.params.id
        })
    })


</script>
