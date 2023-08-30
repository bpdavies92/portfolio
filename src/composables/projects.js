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
            title: "University Teaching Academy Website",
            subtitle : "The UTA website was a significant development task. I collaborated with the academic developers from the University Teaching Academy to create a reference section on the main Manchester Met website. The objective of this project was to establish a reference site for teaching and professional services staff, providing them with independent study support for common learning and teaching issues.",
            description : "<p>The UTA website was a significant development task. I collaborated with the academic developers from the University Teaching Academy to create a reference section on the main Manchester Met website. The objective of this project was to establish a reference site for teaching and professional services staff, providing them with independent study support for common learning and teaching issues.</p>",
            thumbnail : `${import.meta.env.VITE_BASE}/images/uta-website-1.png`,
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
            title: "Undergraduate Degree Classification",
            organisation : "Manchester Metropolitan University",
            end : "July 2022",
            location : "Manchester",
            subtitle : "A collaboration with the Assessment team at Manchester Met, this undergraduate degree classification calculator was designed to help students calculate the grades they will need to achieve their desired degree classification. This resource was custom-made using the Vue.js JavaScript framework.",
            description : "<p>A collaboration with the Assessment team at Manchester Met, this undergraduate degree classification calculator was designed to help students calculate the grades they will need to achieve their desired degree classification. This resource was custom-made using the Vue.js JavaScript framework.</p>",
            thumbnail : "https://images.unsplash.com/photo-1564939558297-fc396f18e5c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
            tags : [ "web development", "javascript", "php", "css", "mostion graphics" ],
            techUsed : [
                {
                    tech : "After Effects",
                    icon : "mdi-movie-star"
                },
                {
                    tech : "Vue.js",
                    icon : "mdi-film"
                },
                {
                    tech : "Laravel",
                    icon : "mdi-movie-star"
                }
            ],
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
            description : "<p>The LEED 2023 conference focused on the theme of Building a Transformational Active Learning Community. The theme takes inspiration from Manchester Met’s new Education Strategy, echoing the strategy’s commitment to delivering a broad-based educational experience linked to graduate, employer, and societal needs. Ultimately, the conference provided a platform for both professional service and academic staff to share good teaching practices and connect with one another.</p><p>Although I had input at all levels of the conference, my key contribution was the development of the website and the creation/sourcing of graphics, as well as working with the academic team at the University Teaching Academy to develop the conference program. I also created a video to help explain the key details of the conference and how people could get involved, which garnered 300+ views.</p><p>In addition to my main role in supporting the conference, I made a significant contribution to helping staff figure out how to use various pieces of technology. This included applications such as Microsoft Forms, Excel, PDF editing, and the installation of some other audio-visual equipment on the day of the conference.</p>",
            thumbnail : `${import.meta.env.VITE_BASE}/images/leed-conf-1.png`,
            tags : [ "web design", "conference", "event", "pedagogy" ],
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
            title: "Working With International Students",
            dates : "October 2022",
            location : "Manchester Met, Manchester",
            subtitle : "This resource was designed to communicate approaches for welcoming international students to higher education learning. Accompanying this resource is a video featuring Dr. Jon Wright, discussing some of the factors that can interfere with effective communication when teaching an audience of international students. For additional guidance on teaching international students, please visit the UTA Internationalisation webpage.",
            description : "<p>This resource was designed to communicate approaches for welcoming international students to higher education learning. Accompanying this resource is a video featuring Dr. Jon Wright, discussing some of the factors that can interfere with effective communication when teaching an audience of international students. For additional guidance on teaching international students, please visit the UTA Internationalisation webpage.</p>",
            thumbnail : `${import.meta.env.VITE_BASE}/images/internationalisation-1.png`,
            tags : [ "articulate", "independent study", "quiz", "instructional design" ],
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
            description : "<p>The selection of student narrative videos on this page comes from a series of focus groups designed to explore students' experiences at Manchester Metropolitan University. Verbatim quotes are narrated by an actor to protect student anonymity. These students emphasize the importance of creating environments that foster authentic vulnerability and trust.</p><p>This work was commissioned and funded by the Inclusive Learning Communities (ILC). It is one of several projects I worked on with them. The ILC project aims to address this disparity through our collaborative efforts with both staff and students to enhance the sense of belonging among our BAME students at the University and to transform the way they are included in our teaching practices.</p>",
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
        
    ])

    return { works }
}

export default projects