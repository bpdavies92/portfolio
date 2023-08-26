import { ref } from "vue";

const projects = () => {
    const works = ref([
        { 
            id: 1,
            slug: "edi",
            start : "",
            end : "",
            title: "Equality Diversity & Inclusion",
            subtitle : "An Equality, Diversity, and Inclusion training module that all staff at Manchester Met must complete every two years. This module was created using Articulate Rise and features a variety of media types to suit different learning preferences.",
            description : "<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate omnis harum aliquid quos cumque id ipsa iste deserunt excepturi molestiae ullam obcaecati inventore ab error, voluptatum eaque quia odio quibusdam.</p><p>Eveniet voluptate nostrum inventore recusandae sed qui soluta sit, adipisci nihil in. Odit iure suscipit quia, eveniet similique reiciendis vitae! Ipsam ea perspiciatis quo porro officia quia. Quae, harum possimus!</p>",
            thumbnail : "src/assets/images/edi-module/E&D-3.jpg",
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
            ]
        },
        { 
            id: 2,
            slug: "afhea-independent-study",
            title: "Associate Fellowship Independent Study",
            subtitle : "The AF independent study is an Advance HE approved independent study for individuals at Manchester Met who wish to achieve AF Fellowship. This resource was designed for people who need more flexibility and incorporates an innovative learning journal idea that participants use to reflect on a series of activities outlined in an Articulate Storyline resource.",
            description : "<p>The AF independent study is an Advance HE approved independent study for individuals at Manchester Met who wish to achieve AF Fellowship. This resource was designed for people who need more flexibility and incorporates an innovative learning journal idea that participants use to reflect on a series of activities outlined in an Articulate Storyline resource.</p>",
            thumbnail : "src/assets/images/afhea-self-study/header_img_1.jpg",
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
                    tech : "Server",
                    icon : "mdi-globe"
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
                    skill : "Instructional Design",
                    icon : "mdi-pencil"
                }
            ]
        },
        { 
            id: 3,
            slug: "five-year-plan",
            title: "Five Year Plan",
            subtitle : "My Five Year Plan is a Manchester Met initiative that focuses on program-based activities, providing students with a personal and professional development framework. In support of this, I created a video and diagram to help staff understand the project.",
            description : "<p>My Five Year Plan is a Manchester Met initiative that focuses on program-based activities, providing students with a personal and professional development framework. In support of this, I created a video and diagram to help staff understand the project.</p>",
            thumbnail : "src/assets/images/five-year-plan/header_img_5.jpg",
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
            ],
            skills : [
                {
                    skill : "Video editing",
                    icon : "mdi-film"
                }, 
                {
                    skill : "Design",
                    icon : "mdi-pencil"
                },
                {
                    skill : "Motion graphics",
                    icon : "mdi-ball"
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
            thumbnail : "src/assets/images/uta-website/uta-website-1.png",
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
            thumbnail : "src/assets/images/a-small-view/header_img_6.jpg",
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
            dates : "June 2022",
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
            skills : [
                {
                    skill : "Web Development",
                    icon : "mdi-web"
                },
                {
                    skill : "Design",
                    icon : "mdi-pencil"
                }
            ]
        },  
        { 
            id: 8,
            slug: "leed-learning-teaching-conference",
            title: "LEED Learning and Teaching Conference",
            organisation : "Manchester Metropolitan University",
            dates : "July 2023",
            location : "Manchester",
            subtitle : "The LEED 2023 conference focused on Learning and Teaching at Manchester Met. The aim of the conference was to give staff a chance to share good practice and network with other colleagues from across the university. Conference themes revolved around the recently published education strategy and university aims outlined within that document.",
            description : "<p>The LEED 2023 conference focused on Learning and Teaching at Manchester Met. The aim of the conference was to give staff a chance to share good practice and network with other colleagues from across the university. Conference themes revolved around the recently published education strategy and university aims outlined within that document.</p>",
            thumbnail : "src/assets/images/conference/leed-conf-1.png",
            tags : [ "web design", "conference", "event", "pedagogy" ],
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
                    skill : "Event organisation"
                }
            ]
        },
        { 
            id: 9,
            slug: "internationalisation",
            title: "Internationalisation",
            dates : "October 2022",
            location : "Manchester Met, Manchester",
            subtitle : "This resource was designed to communicate approaches for welcoming international students to higher education learning. Accompanying this resource is a video featuring Dr. Jon Wright, discussing some of the factors that can interfere with effective communication when teaching an audience of international students. For additional guidance on teaching international students, please visit the UTA Internationalisation webpage.",
            description : "<p>This resource was designed to communicate approaches for welcoming international students to higher education learning. Accompanying this resource is a video featuring Dr. Jon Wright, discussing some of the factors that can interfere with effective communication when teaching an audience of international students. For additional guidance on teaching international students, please visit the UTA Internationalisation webpage.</p>",
            thumbnail : "src/assets/images/internationalisation/internationalisation-1.png",
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
                    skill : "Event organisation"
                }
            ]
        },
        { 
            id: 10,
            slug: "inclusive-learning-communities",
            title: "Inclusive Learning Communities: Case Studies",
            dates : "June 2022",
            location : "Manchester Met, Manchester",
            subtitle : "These student narratives come from a series of focus groups that aimed to explore students' experiences at the university. Verbatim quotes are narrated by an actor to preserve student anonymity. In this selection of videos, these students share the importance of creating environments that encourage authentic vulnerability and trust.",
            description : "<p>These student narratives come from a series of focus groups that aimed to explore students' experiences at the university. Verbatim quotes are narrated by an actor to preserve student anonymity. In this selection of videos, these students share the importance of creating environments that encourage authentic vulnerability and trust.</p>",
            thumbnail : "src/assets/images/ilc/ilc-1.png",
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
                }
            ],
            skills : [
                {
                    skill : "Video editing"
                }
            ]
        },
        { 
            id: 11,
            slug: "critical-pedagogy-podcast",
            title: "Critical Pedagogy Podcast",
            location : "Manchester",
            start : "",
            end : "",   
            dates : "on-going",
            location : "Manchester Met, Manchester",
            subtitle : "The aim of the Critical Pedagogy podcast series is to illustrate the range of experimental, innovative, and inclusive pedagogical theories/strategies/activities used across all Faculties at Manchester Met. The series is external-facing and will serve as a digital repository of pedagogical knowledge that benefits staff and students alike.",
            description : "<p>The aim of the Critical Pedagogy podcast series is to illustrate the range of experimental, innovative, and inclusive pedagogical theories/strategies/activities used across all Faculties at Manchester Met. The series is external-facing and will serve as a digital repository of pedagogical knowledge that benefits staff and students alike.</p>",
            thumbnail : "src/assets/images/critical-pedagogy/crit-ped-1.png",
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
                    icon : "mdi-movie-star"
                }
            ],
            skills : [
                {
                    skill : "Event organisation"
                }
            ]
        },
        
    ])

    return { works }
}

export default projects