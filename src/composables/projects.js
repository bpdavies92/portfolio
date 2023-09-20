import { ref } from "vue";

const projects = () => {
    const works = ref([
        { 
            id: 1,
            slug: "edi",
            location : "Manchester",
            start : "March 2022",
            end : "November 2023",
            title: "Equality Diversity & Inclusion",
            subtitle : "An Equality, Diversity, and Inclusion training module that all staff at Manchester Met must complete every two years. This module was created using Articulate Rise and includes a variety of media types to accommodate different learning preferences.",
            description : "<p>At Manchester Metropolitan University, it is mandatory for all staff to complete an Equality, Diversity, and Inclusion (EDI) training module once every two years. With funding from the Inclusive Learning Communities initiative, I was tasked with creating a second version of the EDI training I had developed a year prior. The aim was to make it more interactive and address the feedback provided by staff who had participated in the previous training.</p><p>This updated version incorporates more quiz-based summative assessments and includes a longer and more challenging summative quiz at the end. Overall, it offers a more interactive learning experience. I developed this module using Articulate Storyline, which provided me with additional tools to create custom interactions and will make it easier for other staff to update in the future.</p>",
            thumbnail : `${import.meta.env.VITE_BASE}/images/E&D-3.jpg`,
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
            id: 2,
            slug: "afhea-independent-study",
            start : "",
            end : "February 2022",
            location : "Manchester",
            title: "Associate Fellowship Independent Study",
            subtitle : "The AF independent study is an Advance HE approved independent study for individuals at Manchester Met who wish to achieve AF Fellowship. This resource was designed for people who need more flexibility and incorporates an innovative learning journal idea that participants use to reflect on a series of activities outlined in an Articulate Storyline resource.",
            description : "<p>The AF independent study is an Advance HE approved independent study for individuals at Manchester Met who wish to achieve AF Fellowship. This resource was designed for people who need more flexibility and incorporates an innovative learning journal idea that participants use to reflect on a series of activities outlined in an Articulate Storyline resource.</p>",
            thumbnail : `${import.meta.env.VITE_BASE}/images/header_img_1.jpg`,
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
            id : 3,
            slug : "five-year-plan",
            title : "Five Year Plan",
            end : "May 2021",
            location : "Manchester",
            subtitle : "My Five Year Plan is a Manchester Met initiative that focuses on program-based activities, providing students with a personal and professional development framework. In support of this key Manchester Met initiative, I created a video and diagram to help staff understand the project.",
            description : "<p>'My Five Year Plan' is a Manchester Met initiative that emphasises program-based activities, offering students a personal and professional development framework. In support of this key Manchester Met initiative, I created a video and a diagram to help staff understand the project. The video guides viewers through the five stages of the My Five Year Plan process, offering valuable resource ideas at each stage for easy reference.</p>",
            thumbnail : `${import.meta.env.VITE_BASE}/images/header_img_5.jpg`,  
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
            id: 4,
            slug: "uta-web-development",
            start : "December 2021",
            end: "on-going",
            location: "Manchester",
            title: "University Teaching Academy Website",
            subtitle : "The UTA website was a significant development task. I collaborated with academic developers in the University Teaching Academy to create a reference section on the main Manchester Met website. The objective of this project was to establish a reference site for teaching and professional services staff, providing them with independent study support for common learning and teaching issues.",
            description : "<p>The UTA website was a significant development task. I collaborated with academic developers from the University Teaching Academy to create a microsite for UTA on the main Manchester Met website. The objective of this project was to establish a reference site for teaching and professional services staff, providing them with independent study support for common learning and teaching issues.</p><p>Visited by more than 50,000 people per year, the UTA website serves as an outward-looking reservoir of knowledge for professional service and academic staff from anywhere in the world who want to develop themselves.</p>",
            thumbnail : `${import.meta.env.VITE_BASE}/images/uta-website-1.png`,
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
            id: 5,
            slug: "a-small-view",
            title: "A Small View",
            start : "March 2015",
            end : "June 2017",
            location : "Liverpool",
            subtitle : "I co-coordinated a small gallery in Liverpool city center, where I organised art, photography, and other cultural exhibitions. I was responsible for creating posters and social media content, curating exhibitions, liaising with artists, installing audio visual equipment, and applying for funding. Moreover, I was responsible for completing risk assessments for each of the events.",
            description : "<p>I co-coordinated a small gallery in Liverpool city center, where I organised art, photography, and other cultural exhibitions. I was responsible for creating posters and social media content, curating exhibitions, liaising with artists, installing audio visual equipment, and applying for funding. Moreover, I was responsible for completing risk assessments for each of the events.</p>",
            thumbnail : `${import.meta.env.VITE_BASE}/images/a_small_view_1.jpg`,
            tags : [ "event planning", "art", "design", "audio-visual" ],
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
            id: 6,
            slug: "degree-classification-calculator",
            title: "Undergraduate Degree Classification Calculator",
            organisation : "Manchester Metropolitan University",
            end : "July 2022",
            location : "Manchester",
            subtitle : "A collaboration with the Assessment team at Manchester Met, this undergraduate degree classification calculator was designed to help students calculate the grades they will need to achieve their desired degree classification. This resource was custom-made using the Vue.js JavaScript framework.",
            description : "<p>This project was a collaboration with the Assessment team at Manchester Met to create an undergraduate degree classification calculator. This project was in response to the many queries the Assessment team receives from students asking what grades are needed to achieve specific results.</p><p>The calculator I developed allows students to input their current grades and credits, and then experiment with what combination of credits and grades they will need to achieve their desired result. The end result achieved the desired goal, and since the creation of the calculator, it has been made available to students.</p><p>Since July 2020, the calculator has been used by more than 38,000 students to calculate grades. Additionally, it was nominated for three Manchester Met Staff Awards in 2023.</p>",
            thumbnail : "https://images.unsplash.com/photo-1564939558297-fc396f18e5c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
            tags : [ "web development", "javascript", "php", "css", "motion graphics", "video" ],
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
                    tech : "Laravel",
                    icon : "mdi-laravel"
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
                },
                {
                    skill : "Team skills",
                    icon : "mdi-cast-education"
                }
            ]
        },  
        { 
            id: 8,
            slug: "leed-learning-teaching-conference",
            title: "LEED Manchester Met Learning & Teaching Conference",
            organisation : "Manchester Metropolitan University",
            end : "July 2023",
            location : "Manchester",
            subtitle : "The LEED 2023 conference focused on Learning and Teaching at Manchester Met. The aim of the conference was to give staff a chance to share good practice and network with other colleagues from across the university. Conference themes revolved around the recently published education strategy and university aims outlined within that document.",
            description : "<p>The LEED 2023 conference focused on the theme of Building a Transformational Active Learning Community. The theme draws inspiration from Manchester Met’s new Education Strategy, echoing the strategy’s commitment to delivering a broad-based educational experience linked to graduate, employer, and societal needs. Ultimately, the conference provided a platform for both professional service and academic staff to share best teaching practices and connect with each other.</p><p>While I had input at all levels of the conference, my primary contribution was the development of the website and the creation/sourcing of graphics. I also collaborated with the academic team at the University Teaching Academy to develop the conference program. Additionally, I created a video to explain the key details of the conference and how people could get involved, which received over 300 views.</p><p>In addition to my main role in supporting the conference, I made a significant contribution by helping staff navigate various pieces of technology. This included applications such as Microsoft Forms, Excel, PDF editing, and the installation of audio-visual equipment on the day of the conference.</p>",
            thumbnail : `${import.meta.env.VITE_BASE}/images/leed-conf-1.png`,
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
            id: 9,
            slug: "working-with-international-students",
            title: "Working with International Students",
            end : "September 2022",
            location : "Manchester",
            subtitle : "This resource was designed to communicate approaches for welcoming international students to higher education learning. Accompanying this resource is a video featuring Dr. Jon Wright, discussing some of the factors that can interfere with effective communication when teaching an audience of international students.",
            description : "<p>This resource was designed to communicate approaches for welcoming international students to higher education learning. Accompanying this resource is a video featuring Dr. Jon Wright, discussing some of the factors that can interfere with effective communication when teaching an audience of international students.</p>",
            thumbnail : `${import.meta.env.VITE_BASE}/images/internationalisation-1.png`,
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
            id: 10,
            slug: "inclusive-learning-communities",
            title: "Inclusive Learning Communities: Case Studies",
            start : "July",
            end : "August 2022",
            location : "Manchester",
            subtitle : "These student narratives come from a series of focus groups that aimed to explore students' experiences at the university. Verbatim quotes are narrated by an actor to preserve student anonymity. In this selection of videos, these students share the importance of creating environments that encourage authentic vulnerability and trust.",
            description : "<p>The selection of student narrative videos on this page comes from a series of focus groups designed to explore students' experiences at Manchester Metropolitan University. Verbatim quotes are narrated by an actor to protect student anonymity. These students emphasise the importance of creating environments that foster authentic vulnerability and trust.</p><p>This work was commissioned and funded by Inclusive Learning Communities (ILC). It is one of several projects I collaborated on with them, with the aim of addressing the awarding gap and identifying ways to reduce it.</p>",
            thumbnail : `${import.meta.env.VITE_BASE}/images/ilc-1.png`,
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
            id: 11,
            slug: "critical-pedagogy-podcast",
            title: "Critical Pedagogy Podcast",
            location : "Manchester",
            start : "December 2021",
            end : "on-going",   
            subtitle : "The aim of the Critical Pedagogy podcast series is to illustrate the range of experimental, innovative, and inclusive pedagogical theories/strategies/activities used across all Faculties at Manchester Met. The series is external-facing and will serve as a digital repository of pedagogical knowledge that benefits staff and students alike.",
            description : "<p>The aim of the Critical Pedagogy podcast series is to illustrate the range of experimental, innovative, and inclusive pedagogical theories/strategies/activities used across all Faculties at Manchester Met. The series is external-facing and will serve as a digital repository of pedagogical knowledge that benefits staff and students alike.</p>",
            thumbnail : `${import.meta.env.VITE_BASE}/images/crit-ped-1.png`,
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
            id: 12,
            slug: "assessment-design",
            title: "Assessment Design Toolkit",
            location : "Manchester",
            start : "",
            end : "December 2020",   
            subtitle : "The Assessment Design Toolkit is an interactive, independent study resource. It is an externally available tool designed to assist staff in creating assessment tasks for units, reviewing assignment briefs produced by other colleagues, and providing a basic introduction to assessment at Manchester Met. I created this resource using Articulate Rise.",
            description : "<p>The Assessment Design Toolkit is an interactive, independent study resource. It is an externally available tool designed to assist staff in creating assessment tasks for units, reviewing assignment briefs produced by other colleagues, and providing a basic introduction to assessment at Manchester Met. I created this resource using Articulate Rise.</p>",
            thumbnail : `${import.meta.env.VITE_BASE}/images/crit-ped-1.png`,
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
                    icon : "mdi-web"
                },
                {
                    skill : "Audio editing",
                    icon : "mdi-box-cutter"
                }
            ]
        },
        { 
            id: 13,
            slug: "decolonising-the-curriculum-toolkit",
            title: "Decolonising the Curriculum Toolkit",
            end : "March 2022",
            location : "Manchester",
            subtitle : "Decolonising the Curriculum (DtC) is about identifying, acknowledging and challenging the ways in which colonialism has impacted upon perceived knowledge and learning. The material for this resource was pulled together by Dr Theresa Nicholson at Manchester Met University, which I developed into an externally facing resource on the main University website.",
            description : "<p>Decolonising the Curriculum (DtC) is about identifying, acknowledging and challenging the ways in which colonialism has impacted upon perceived knowledge and learning. The material for this resource was pulled together by Dr Theresa Nicholson at Manchester Met University, which I developed into an externally facing resource on the main University website.</p>",
            thumbnail : `https://images.unsplash.com/photo-1511174511562-5f7f18b874f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80`,
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
        
    ])

    return { works }
}

export default projects