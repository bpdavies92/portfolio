import { ref } from "vue";

const projects = () => {
    const works = ref([
        { 
            id: 0,
            slug: "edi",
            location : "Manchester",
            date : "01/02/2023",
            start : "March 2022",
            end : "February 2023",
            title: "Equality, diversity & inclusion",
            shortTitle: "EDI self-study",
            subtitle : "An Equality, Diversity, and Inclusion training module that all staff at Manchester Met must complete every two years. This module was created using Articulate Rise and includes a variety of media types to accommodate different learning preferences.",
            description : "<p class='text-body-1'>At Manchester Metropolitan University, it is mandatory for all staff to complete an Equality, Diversity, and Inclusion (EDI) training module once every two years. With funding from the Inclusive Learning Communities initiative, I was tasked with creating a second version of the EDI training I had developed a year prior. The aim was to make it more interactive and address the feedback provided by staff who had participated in the previous training.</p><p class='text-body-1'>This updated version incorporates more quiz-based summative assessments and includes a longer and more challenging summative quiz at the end. Overall, it offers a more interactive learning experience. I developed this module using Articulate Storyline, which provided me with additional tools to create custom interactions and will make it easier for other staff to update in the future.</p>",
            thumbnail : `${import.meta.env.VITE_BASE}/images/edi-card-img.webp`,
            tags : [ "articulate", "independent study", "quiz", "instructional design" ],
            techUsed : [
                {
                    tech : "Articulate Storyline",
                    icon : "mdi-school"
                },
                {
                    tech : "After Effects",
                    icon : "mdi-movie-star"
                },
                {
                    tech : "Moodle VLE",
                    icon : "mdi-school"
                },
                {
                    tech : "Camera",
                    icon : "mdi-film"
                },
                {
                    tech : "Podcast",
                    icon : "mdi-microphone"
                },
            ],
            skills : [
                {
                    skill : "Video editing",
                    icon : "mdi-movie-open-edit"
                },
                {
                    skill : "Code",
                    icon : "mdi-code-braces"
                },
                {
                    skill : "Design",
                    icon : "mdi-pencil-ruler"
                },
                {
                    skill : "e-learning",
                    icon : "mdi-cast-education"
                }
            ]
        },
        { 
            id: 1,
            slug: "afhea-independent-study",
            date : "01/02/2022",
            start : "",
            end : "February 2022",
            location : "Manchester",
            title: "Associate Fellowship independent study",
            shortTitle: "AFHEA self-study",
            subtitle : "The AF independent study is an Advance HE approved independent study for individuals at Manchester Met who wish to achieve AF Fellowship. This resource was designed for people who need more flexibility and incorporates an innovative learning journal idea that participants use to reflect on a series of activities outlined in an Articulate Storyline resource.",
            description : "<p class='text-body-1'>The AF independent study is an Advance HE approved independent study for individuals at Manchester Met who wish to achieve AF Fellowship. This resource was designed for people who need more flexibility and incorporates an innovative learning journal idea that participants use to reflect on a series of activities outlined in an Articulate Storyline resource.</p>",
            thumbnail : `${import.meta.env.VITE_BASE}/images/header_img_1.webp`,
            tags : [ "articulate", "independent study", "quiz", "instructional design" ],
            techUsed : [
                {
                    tech : "After Effects",
                    icon : "mdi-movie-star"
                },
                
                {
                    tech : "Articulate Storyline",
                    icon : "mdi-school"
                },
                {
                    tech : "Camera",
                    icon : "mdi-film"
                },
                {
                    tech : "Podcast",
                    icon : "mdi-microphone"
                },
                {
                    tech : "Server",
                    icon : "mdi-server"
                }
            ],
            skills : [
                {
                    skill : "Code",
                    icon : "mdi-code-braces"
                },
                {
                    skill : "Design",
                    icon : "mdi-pencil-ruler"
                },
                {
                    skill : "e-learning",
                    icon : "mdi-cast-education"
                }
            ]
        },
        { 
            id : 2,
            slug : "five-year-plan",
            title : "Five Year Plan",
            shortTitle : "Five Year Plan",
            date : "01/05/2021",
            end : "May 2021",
            location : "Manchester",
            subtitle : "My Five Year Plan is a Manchester Met initiative that focuses on program-based activities, providing students with a personal and professional development framework. In support of this key Manchester Met initiative, I created a video and diagram to help staff understand the project.",
            description : "<p class='text-body-1'>'My Five Year Plan' is a Manchester Met initiative that emphasises program-based activities, offering students a personal and professional development framework. In support of this key Manchester Met initiative, I created a video and a diagram to help staff understand the project. The video guides viewers through the five stages of the My Five Year Plan process, offering valuable resource ideas at each stage for easy reference.</p>",
            thumbnail : `${import.meta.env.VITE_BASE}/images/header_img_5.webp`,  
            tags : [ "video", "design", "explainer" ],
            techUsed : [
                {
                    tech : "After Effects",
                    icon : "mdi-movie-star"
                },
                {
                    tech : "Video",
                    icon : "mdi-film"
                },
                {
                    tech : "Premiere Pro",
                    icon : "mdi-movie-star"
                },
                {
                    tech : "Illustrator",
                    icon : "mdi-pencil"
                }
            ],
            skills : [
                {
                    skill : "Video editing",
                    icon : "mdi-film"
                }, 
                {
                    skill : "Design",
                    icon : "mdi-pencil-ruler"
                },
                {
                    skill : "Motion graphics",
                    icon : "mdi-motion"
                },
                {
                    skill : "Filming",
                    icon : "mdi-camera"
                }
            ]
        },
        { 
            id: 3,
            slug: "uta-web-development",
            date : "01/12/2021",
            start : "December 2021",
            end: "on-going",
            location: "Manchester",
            title: "University Teaching Academy website",
            shortTitle: "UTA website",
            subtitle : "The UTA website was a significant development task. I collaborated with academic developers in the University Teaching Academy to create a reference section on the main Manchester Met website. The objective of this project was to establish a reference site for teaching and professional services staff, providing them with independent study support for common learning and teaching issues.",
            description : "<p class='text-body-1'>The UTA website was a significant development task. I collaborated with academic developers from the University Teaching Academy to create a microsite for UTA on the main Manchester Met website. The objective of this project was to establish a reference site for teaching and professional services staff, providing them with independent study support for common learning and teaching issues.</p><p class='text-body-1'>Visited by more than 50,000 people per year, the UTA website serves as an outward-looking reservoir of knowledge for professional service and academic staff from anywhere in the world who want to develop themselves.</p>",
            thumbnail : `${import.meta.env.VITE_BASE}/images/uta-website-1.webp`,
            tags : [ "web development", "design", "padagogy", "droople" ],
            techUsed : [
                {
                    tech : "Droople",
                    icon : "mdi-movie-star"
                },
                {
                    tech : "Video",
                    icon : "mdi-camera"
                }
            ],
            skills : [
                {
                    skill : "Code",
                    icon : "mdi-code-braces"
                },
                {
                    skill : "Design",
                    icon : "mdi-pencil-ruler"
                }
            ]
        },
        { 
            id: 4,
            slug: "a-small-view",
            title: "A Small View",
            shortTitle : "A Small View",
            date : "01/06/2017",
            start : "March 2015",
            end : "June 2017",
            location : "Liverpool",
            subtitle : "I co-coordinated a small gallery in Liverpool city center, where I organised art, photography, and other cultural exhibitions. I was responsible for creating posters and social media content, curating exhibitions, liaising with artists, installing audio visual equipment, and applying for funding. Moreover, I was responsible for completing risk assessments for each of the events.",
            description : "<p class='text-body-1'>I co-coordinated a small gallery in Liverpool city center, where I organised art, photography, and other cultural exhibitions. I was responsible for creating posters and social media content, curating exhibitions, liaising with artists, installing audio visual equipment, and applying for funding. Moreover, I was responsible for completing risk assessments for each of the events.</p>",
            thumbnail : `${import.meta.env.VITE_BASE}/images/a_small_view_1.webp`,
            tags : [ "event", "art", "design", "audio-visual" ],
            techUsed : [
                {
                    tech : "Audio-visual",
                    icon : "mdi-speaker"
                },
                {
                    tech : "Photography",
                    icon : "mdi-camera"
                }   
            ],
            skills : [
                {
                    skill : "Event planning",
                    icon : "mdi-calendar-star"
                },
                {
                    skill : "Curatorial skills",
                    icon : "mdi-floor-plan"
                },
                {
                    skill : "Project Management",
                    icon : "mdi-notebook"
                },
            ]
        },
        { 
            id: 5,
            slug: "degree-classification-calculator",
            title: "Undergraduate degree classification calculator",
            shortTitle: "Degree Calculator",
            organisation : "Manchester Metropolitan University",
            date : "01/07/2022",
            end : "July 2022",
            location : "Manchester",
            subtitle : "A collaboration with the Assessment team at Manchester Met, this undergraduate degree classification calculator was designed to help students calculate the grades they will need to achieve their desired degree classification. This resource was custom-made using the Vue.js JavaScript framework.",
            description : "<p class='text-body-1'>This project was a collaboration with the Assessment team at Manchester Met to create an undergraduate degree classification calculator. This project was in response to the many queries the Assessment team receives from students asking what grades are needed to achieve specific results.</p><p class='text-body-1'>The calculator I developed allows students to input their current grades and credits, and then experiment with what combination of credits and grades they will need to achieve their desired result. The end result achieved the desired goal, and since the creation of the calculator, it has been made available to students.</p><p class='text-body-1'>Since July 2020, the calculator has been used by more than 38,000 students to calculate grades. Additionally, it was nominated for three Manchester Met Staff Awards in 2023.</p>",
            thumbnail : `${import.meta.env.VITE_BASE}/images/degree-calc-card-img.webp`,
            tags : [ "web development", "javascript", "css", "motion graphics", "video" ],
            techUsed : [
                {
                    tech : "After Effects",
                    icon : "mdi-movie-star"
                },
                {
                    tech : "Vue.js",
                    icon : "mdi-vuejs"
                },
                {
                    tech : "Video",
                    icon : "mdi-film"
                },
                {
                    tech : "Premiere Pro",
                    icon : "mdi-movie-star"
                }
            ],
            skills : [
                {
                    skill : "Code",
                    icon : "mdi-code-braces"
                },
                {
                    skill : "Design",
                    icon : "mdi-pencil-ruler"
                }
            ]
        },  
        { 
            id: 6,
            slug: "leed-learning-teaching-conference",
            title: "Manchester Met learning & teaching conference",
            shortTitle : "Teaching conference",
            organisation : "Manchester Metropolitan University",
            date : "01/07/2023",
            end : "July 2023",
            location : "Manchester",
            subtitle : "The LEED 2023 conference focused on Learning and Teaching at Manchester Met. The aim of the conference was to give staff a chance to share good practice and network with other colleagues from across the university. Conference themes revolved around the recently published education strategy and university aims outlined within that document.",
            description : "<p class='text-body-1'>The LEED 2023 conference focused on the theme of Building a Transformational Active Learning Community. The theme draws inspiration from Manchester Met’s new Education Strategy, echoing the strategy’s commitment to delivering a broad-based educational experience linked to graduate, employer, and societal needs. Ultimately, the conference provided a platform for both professional service and academic staff to share best teaching practices and connect with each other.</p><p class='text-body-1'>While I had input at all levels of the conference, my primary contribution was the development of the website and the creation/sourcing of graphics. I also collaborated with the academic team at the University Teaching Academy to develop the conference program. Additionally, I created a video to explain the key details of the conference and how people could get involved, which received over 300 views.</p><p class='text-body-1'>In addition to my main role in supporting the conference, I made a significant contribution by helping staff navigate various pieces of technology. This included applications such as Microsoft Forms, Excel, PDF editing, and the installation of audio-visual equipment on the day of the conference.</p>",
            thumbnail : `${import.meta.env.VITE_BASE}/images/leed-conf-card-img-2.webp`,
            tags : [ "web design", "conference", "event", "pedagogy", "video" ],
            techUsed : [
                {
                    tech : "Audio-visual",
                    icon : "mdi-speaker"
                },
                {
                    tech : "Video",
                    icon : "mdi-film"
                },
                {
                    tech : "server",
                    icon : "mdi-server"
                },
                {
                    tech : "Office 365",
                    icon : "mdi-microsoft-office"
                },
                {
                    tech : "After Effects",
                    icon : "mdi-movie-star"
                },
                {
                    tech : "Video",
                    icon : "mdi-film"
                },
                {
                    tech : "Premiere Pro",
                    icon : "mdi-movie-star"
                },
                {
                    tech : "Illustrator",
                    icon : "mdi-pencil"
                }
            ],
            skills : [
                {
                    skill : "Event planning",
                    icon : "mdi-calendar-star"
                },
                {
                    skill : "Curatorial skills",
                    icon : "mdi-floor-plan"
                },
                {
                    skill : "Project Management",
                    icon : "mdi-notebook"
                },
                {
                    skill : "Video editing",
                    icon : "mdi-film"
                }, 
                {
                    skill : "Design",
                    icon : "mdi-pencil-ruler"
                },
                {
                    skill : "Motion graphics",
                    icon : "mdi-motion"
                },
                {
                    skill : "Filming",
                    icon : "mdi-camera"
                }
            ]
        },
        { 
            id: 7,
            slug: "working-with-international-students",
            title: "Working with international students",
            shortTitle: "International students",
            date : "01/09/2022",
            end : "September 2022",
            location : "Manchester",
            subtitle : "This resource was designed to communicate approaches for welcoming international students to higher education learning. Accompanying this resource is a video featuring Dr. Jon Wright, discussing some of the factors that can interfere with effective communication when teaching an audience of international students.",
            description : "<p class='text-body-1'>This resource was designed to communicate approaches for welcoming international students to higher education learning. Accompanying this resource is a video featuring Dr. Jon Wright, discussing some of the factors that can interfere with effective communication when teaching an audience of international students.</p>",
            thumbnail : `${import.meta.env.VITE_BASE}/images/internationalisation-1.webp`,
            tags : [ "articulate", "quiz",  "video", "web development" ],
            techUsed : [
                {
                    tech : "Articulate Storyline",
                    icon : "mdi-movie-star"
                },
                {
                    tech : "Video",
                    icon : "mdi-film"
                },
                {
                    tech : "Podcast",
                    icon : "mdi-movie-star"
                }
            ],
            skills : [
                {
                    skill : "Video editing",
                    icon : "mdi-film"
                }, 
                {
                    skill : "Design",
                    icon : "mdi-pencil-ruler"
                },
                {
                    skill : "Motion graphics",
                    icon : "mdi-motion"
                },
                {
                    skill : "Filming",
                    icon : "mdi-camera"
                }
            ]
        },
        { 
            id: 8,
            slug: "inclusive-learning-communities",
            title: "Inclusive Learning Communities: Student case studies",
            shortTitle: "ILC case studies",
            start : "July",
            date : "01/08/2022",
            end : "August 2022",
            location : "Manchester",
            subtitle : "These student narratives come from a series of focus groups that aimed to explore students' experiences at the university. Verbatim quotes are narrated by an actor to preserve student anonymity. In this selection of videos, these students share the importance of creating environments that encourage authentic vulnerability and trust.",
            description : "<p class='text-body-1'>The selection of student narrative videos on this page comes from a series of focus groups designed to explore students' experiences at Manchester Metropolitan University. Verbatim quotes are narrated by an actor to protect student anonymity. These students emphasise the importance of creating environments that foster authentic vulnerability and trust.</p><p class='text-body-1'>This work was commissioned and funded by Inclusive Learning Communities (ILC). It is one of several projects I collaborated on with them, with the aim of addressing the awarding gap and identifying ways to reduce it.</p>",
            thumbnail : `${import.meta.env.VITE_BASE}/images/ilc-1.webp`,
            tags : [ "video", "premiere pro", "case study", "actor" ],
            techUsed : [
                {
                    tech : "Articulate Storyline",
                    icon : "mdi-movie-star"
                },
                {
                    tech : "Video",
                    icon : "mdi-film"
                },
                {
                    tech : "Podcast",
                    icon : "mdi-movie-star"
                },
                {
                    tech : "Premiere Pro",
                    icon : "mdi-movie-star"
                },
                {
                    tech : "Photoshop",
                    icon : "mdi-image-edit"
                }
            ],
            skills : [
                {
                    skill : "Video editing",
                    icon : "mdi-box-cutter"
                },
                {
                    skill : "Filming",
                    icon : "mdi-camera"
                }
            ]
        },
        { 
            id: 9,
            slug: "critical-pedagogy-podcast",
            title: "Critical Pedagogy Podcast",
            shortTitle: "Critical pedagogy podcast",
            location : "Manchester",
            date : "01/12/2021",
            start : "December 2021",
            end : "on-going",   
            subtitle : "The aim of the Critical Pedagogy podcast series is to illustrate the range of experimental, innovative, and inclusive pedagogical theories/strategies/activities used across all Faculties at Manchester Met. The series is external-facing and will serve as a digital repository of pedagogical knowledge that benefits staff and students alike.",
            description : "<p class='text-body-1'>The aim of the Critical Pedagogy podcast series is to illustrate the range of experimental, innovative, and inclusive pedagogical theories/strategies/activities used across all Faculties at Manchester Met. The series is external-facing and will serve as a digital repository of pedagogical knowledge that benefits staff and students alike.</p>",
            thumbnail : `${import.meta.env.VITE_BASE}/images/crit-ped-1.webp`,
            tags : [ "audio", "podcast", "adobe audition" ],
            techUsed : [
                {
                    tech : "Articulate Storyline",
                    icon : "mdi-movie-star"
                },
                {
                    tech : "Video",
                    icon : "mdi-film"
                },
                {
                    tech : "Podcast",
                    icon : "mdi-microphone"
                }
            ],
            skills : [
                {
                    skill : "Audio recording",
                    icon : "mdi-waveform"
                },
                {
                    skill : "Web development",
                    icon : "mdi-web"
                },
                {
                    skill : "Audio editing",
                    icon : "mdi-box-cutter"
                }
            ]
        },
        { 
            id: 10,
            slug: "assessment-design",
            title: "Assessment design toolkit",
            shortTitle: "Assessment toolkit",
            location : "Manchester",
            date : "01/11/2021",
            start : "",
            end : "November 2021",   
            subtitle : "The Assessment Design Toolkit is an interactive, independent study resource. It is an externally available tool designed to assist staff in creating assessment tasks for units, reviewing assignment briefs produced by other colleagues, and providing a basic introduction to assessment at Manchester Met. I created this resource using Articulate Rise.",
            description : "<p class='text-body-1'>The Assessment Design Toolkit is an interactive, independent study resource. It is an externally available tool designed to assist staff in creating assessment tasks for units, reviewing assignment briefs produced by other colleagues, and providing a basic introduction to assessment at Manchester Met. I created this resource using Articulate Rise.</p>",
            thumbnail : `${import.meta.env.VITE_BASE}/images/design-1.webp`,
            tags : [ "audio", "motion graphics", "video", "independent study" ],
            techUsed : [
                {
                    tech : "Articulate Rise",
                    icon : "mdi-movie-star"
                },
                {
                    tech : "Video",
                    icon : "mdi-film"
                },
                {
                    tech : "Audio",
                    icon : "mdi-microphone"
                }
            ],
            skills : [
                {
                    skill : "e-learning",
                    icon : "mdi-waveform"
                },
                {
                    skill : "Video editing",
                    icon : "mdi-box-cutter"
                },
                {
                    skill : "Audio editing",
                    icon : "mdi-box-cutter"
                }
            ]
        },
        { 
            id: 11,
            slug: "half-real",
            title: "Half Real",
            shortTitle: "Half real",
            location : "Preston",
            date : "01/02/2016",
            start : "",
            end : "February 2016",   
            subtitle : "Half‐Real was an international exhibition that investigated the meeting of visual art and gaming technology.",
            description : "<p class='text-body-1'>'Half-Real' was an international exhibition that investigated the intersection of visual art and gaming technology. The title 'Half-Real' was derived from Jesper Juul's book of the same name, which referred to the video game as a medium consisting of real rules embedded within fictional worlds. The exhibition 'Half-Real' delved into these qualities within a fine art context, examining how artists are utilising the medium of video games, specifically, and computational media more broadly.</p>",
            thumbnail : `${import.meta.env.VITE_BASE}/images/half-real-8.webp`,
            tags : [ "event", "art", "design", "audio-visual" ],
            techUsed : [
                {
                    tech : "Audio-visual",
                    icon : "mdi-speaker"    
                },
                {
                    tech : "Photography",
                    icon : "mdi-camera"
                }   
            ],
            skills : [
                {
                    skill : "Event planning",
                    icon : "mdi-calendar-star"
                },
                {
                    skill : "Curatorial skills",
                    icon : "mdi-floor-plan"
                },
                {
                    skill : "Project management",
                    icon : "mdi-notebook"
                },
            ]
        },
        { 
            id: 12,
            slug: "as-i-am",
            title: "As I am",
            shortTitle: "As I am",
            location : "Manchester",
            date : "01/09/2022",
            start : "",
            end : "September 2022",   
            subtitle : "The As I am campaign celebrated diversity and inclusion by shedding light on our Black, Asian and Minority Ethnic staff and students’ stories of belonging here at Manchester Met.",
            description : "<p class='text-body-1'>The 'As I am' campaign celebrates diversity and inclusion by shining a light on the stories of belonging from our Black, Asian, and Minority Ethnic staff and students here at Manchester Met. I contributed to the development of a website that featured many of the academics and students showcased during the exhibition.</p>",
            thumbnail : `${import.meta.env.VITE_BASE}/images/as-i-am-1.webp`,
            tags : [ "web development", "javascript", "css", "video" ],
            techUsed : [
                {
                    tech : "Vue.js",
                    icon : "mdi-vuejs"
                }
            ],
            skills : [
                {
                    skill : "Code",
                    icon : "mdi-code-braces"
                },
                {
                    skill : "Design",
                    icon : "mdi-pencil-ruler"
                }
            ]
        },
        {

            id: 13,
            slug: "decolonising-the-curriculum-toolkit",
            title: "Decolonising the curriculum toolkit",
            shortTitle: "Decolonising toolkit",
            end : "March 2022",
            date: "01/03/2022",
            location : "Manchester",
            subtitle : "Decolonising the Curriculum (DtC) is a project aimed at identifying, acknowledging, and challenging the ways in which colonialism has influenced perceived knowledge and learning. The material for this resource was compiled by Dr. Theresa Nicholson at Manchester Metropolitan University, and I developed it into an externally facing resource on the main university website.",
            description : "<p class='text-body-1'>Decolonising the Curriculum (DtC) is a project aimed at identifying, acknowledging, and challenging the ways in which colonialism has influenced perceived knowledge and learning. The material for this resource was compiled by Dr. Theresa Nicholson at Manchester Metropolitan University, and I developed it into an externally facing resource on the main university website.</p>",
            thumbnail : `${import.meta.env.VITE_BASE}/images/decol-2.webp`,
            tags : ["video", "web development", "independent study" ],
            techUsed : [
                {
                    tech : "Video",
                    icon : "mdi-film",
                },
                {
                    tech : "Droople",
                    icon : "mdi-movie-star"
                }
            ],
            skills : [
                {
                    skill : "Video editing",
                    icon : "mdi-film"
                },
                {
                    skill : "Design",
                    icon : "mdi-pencil-ruler"
                },
                {
                    skill : "Motion graphics",
                    icon : "mdi-motion"
                },
                {
                    skill : "Filming",
                    icon : "mdi-camera"
                }
            ]
        },
        {
            id: 14,
            slug: "prosumer-chronicles",
            title: "Prosumer chronicles",
            shortTitle: '',
            end : "January 2018",
            date: "02/02/2018",
            location : "Manchester",
            subtitle : "The Prosumer Chronicles‘ brings together prints, digital and sculptural work by White Wizard founder Dave Evans and London based artist Robin Tarbet. Both artists deal with the residue of technological progress, things such as polystyrene packaging and errant radio waves, using these by-products to explore the implications of perpetual growth.",
            description : "<p class='text-body-1'>The Prosumer Chronicles‘ brings together prints, digital and sculptural work by White Wizard founder Dave Evans and London based artist Robin Tarbet. Both artists deal with the residue of technological progress, things such as polystyrene packaging and errant radio waves, using these by-products to explore the implications of perpetual growth.</p>",
            thumbnail : `${import.meta.env.VITE_BASE}/images/pro-3.webp`,
            tags : [ "event", "art", "design", "audio-visual" ],
            techUsed : [
                {
                    tech : "Audio-visual",
                    icon : "mdi-speaker"    
                },
                {
                    tech : "Photography",
                    icon : "mdi-camera"
                }   
            ],
            skills : [
                {
                    skill : "Event planning",
                    icon : "mdi-calendar-star"
                },
                {
                    skill : "Curatorial skills",
                    icon : "mdi-floor-plan"
                },
                {
                    skill : "Project management",
                    icon : "mdi-notebook"
                },
            ]
        },
        {
            id: 15,
            slug: "the-morning-has-gold-in-its-mouth",
            title: "The morning Has gold in its mouth",
            shortTitle: '',
            end : "January 2018",
            date: "01/01/2018",
            location : "Manchester",
            subtitle : "In (proud) collaboration with SEIZE projects, Leeds UK.A satellite event based on the deformation of the exhibition space, COLLAR uses the vacant unit outside of their own artist-led gallery to subvert the nature of what we better recognise as the event. Using alcohol as social lubricant – and taste as tool of critique – COLLAR practices the guise of curation in order to better facilitate conversation, to experiment a little.",
            description : "<p class='text-body-1'>In (proud) collaboration with SEIZE projects, Leeds UK.</p><p class='text-body-1'>A satellite event based on the deformation of the exhibition space, COLLAR uses the vacant unit outside of their own artist-led gallery to subvert the nature of what we better recognise as the event. Using alcohol as social lubricant – and taste as tool of critique – COLLAR practices the guise of curation in order to better facilitate conversation, to experiment a little.</p>",
            thumbnail : `${import.meta.env.VITE_BASE}/images/gold-7.webp`,
            tags : [ "event", "art", "design", "audio-visual" ],
            techUsed : [
                {
                    tech : "Audio-visual",
                    icon : "mdi-speaker"    
                },
                {
                    tech : "Photography",
                    icon : "mdi-camera"
                }   
            ],
            skills : [
                {
                    skill : "Event planning",
                    icon : "mdi-calendar-star"
                },
                {
                    skill : "Curatorial skills",
                    icon : "mdi-floor-plan"
                },
                {
                    skill : "Project management",
                    icon : "mdi-notebook"
                },
            ]
        },
        {
            id: 16,
            slug: "understanding-the-awarding-gap",
            title: "Understanding the awarding gap",
            shortTitle: '',
            end : "May 2023",
            date: "01/05/2023",
            location : "Manchester",
            subtitle : "This resource is designed to help staff at Manchester Met navigate the Degree and Awards good hours Power BI dashboard. Being able to use this dashboard will provide a more detailed view of what student groups need more support.",
            description : "<p class='text-body-1'>This resource is designed to help staff at Manchester Met navigate the Degree and Awards good hours Power BI dashboard. Being able to use this dashboard will provide a more detailed view of what student groups need more support.</p>",
            thumbnail : `${import.meta.env.VITE_BASE}/images/understanding-1.webp`,  
            tags : [ "articulate", "independent study", "instructional design" ],
            techUsed : [
                {
                    tech : "Articulate Storyline",
                    icon : "mdi-school"
                },
                {
                    tech : "After Effects",
                    icon : "mdi-movie-star"
                },
                {
                    tech : "Moodle VLE",
                    icon : "mdi-school"
                },
                {
                    tech : "Camera",
                    icon : "mdi-film"
                },
                {
                    tech : "Podcast",
                    icon : "mdi-microphone"
                },
            ],
            skills : [
                {
                    skill : "Video editing",
                    icon : "mdi-movie-open-edit"
                },
                {
                    skill : "Code",
                    icon : "mdi-code-braces"
                },
                {
                    skill : "Design",
                    icon : "mdi-pencil-ruler"
                },
                {
                    skill : "e-learning",
                    icon : "mdi-cast-education"
                }
            ]
        },
        {
            id: 17,
            slug: "building-inclusive-learning-communities",
            title: "Building inclusive learning communities",
            shortTitle: '',
            end : "January 2023",
            date: "01/01/2023",
            location : "Manchester",
            subtitle : "The 'Building Inclusive Learning Communities' resource is designed with staff at Manchester Metropolitan University in mind and is intended to offer guidance on discussing inclusion and a sense of belonging with other staff. The resource also includes student case studies, narrated by actors, which shed light on the students' own experiences.",
            description : "<p class='text-body-1'>The 'Building Inclusive Learning Communities' resource is designed with staff at Manchester Metropolitan University in mind and is intended to offer guidance on discussing inclusion and a sense of belonging with other staff. The resource also includes student case studies, narrated by actors, which shed light on the students' own experiences.</p>",
            thumbnail : `${import.meta.env.VITE_BASE}/images/learning-communities.webp`,
            tags : [ "articulate", "independent study", "instructional design" ],
            techUsed : [
                {
                    tech : "Articulate Storyline",
                    icon : "mdi-school"
                },
                {
                    tech : "After Effects",
                    icon : "mdi-movie-star"
                },
                {
                    tech : "Moodle VLE",
                    icon : "mdi-school"
                },
                {
                    tech : "Camera",
                    icon : "mdi-film"
                },
                {
                    tech : "Podcast",
                    icon : "mdi-microphone"
                },
            ],
            skills : [
                {
                    skill : "Video editing",
                    icon : "mdi-movie-open-edit"
                },
                {
                    skill : "Code",
                    icon : "mdi-code-braces"
                },
                {
                    skill : "Design",
                    icon : "mdi-pencil-ruler"
                },
                {
                    skill : "e-learning",
                    icon : "mdi-cast-education"
                }
            ]
        },
        {
            id: 18,
            slug: "fellowship-mentorship",
            title: "Advance HE Fellowship: Mentorship",
            shortTitle: '',
            end : "February 2023",
            date: "01/02/2023",
            location : "Manchester",
            subtitle : "This resource is designed to support current and future mentors for the Manchester Met PSF scheme (Professional Standards Framework, accredited by Advance HE). After an introductory activity and a brief refresher on the PSF Framework and reflective writing in two further sections, the learner is able to select the descriptor level(s) relevant to their mentorship for more self-directed activities and information.",
            description : "<p class='text-body-1'>his resource is designed to support current and future mentors for the Manchester Met PSF scheme (Professional Standards Framework, accredited by Advance HE). After an introductory activity and a brief refresher on the PSF Framework and reflective writing in two further sections, the learner is able to select the descriptor level(s) relevant to their mentorship for more self-directed activities and information.</p>",
            thumbnail : `${import.meta.env.VITE_BASE}/images/mentorship-card-img.webp`,
            tags : [ "articulate", "independent study", "instructional design", "video" ],
            techUsed : [
                {
                    tech : "Articulate Rise",
                    icon : "mdi-school"
                },
                {
                    tech : "After Effects",
                    icon : "mdi-movie-star"
                },
                {
                    tech : "Camera",
                    icon : "mdi-film"
                }
            ],
            skills : [
                {
                    skill : "Video editing",
                    icon : "mdi-movie-open-edit"
                },
                {
                    skill : "Design",
                    icon : "mdi-pencil-ruler"
                },
                {
                    skill : "e-learning",
                    icon : "mdi-cast-education"
                }
            ]
        }
    ])

    return { works }
}
 
export default projects