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
            subtitle : "Updated Manchester Met’s mandatory Equality, Diversity, and Inclusion (EDI) training module with funding from the Inclusive Learning Communities initiative.",
            description : "Updated Manchester Met’s mandatory Equality, Diversity, and Inclusion (EDI) training module with funding from the Inclusive Learning Communities initiative. Building on the previous version I created, the update introduced more interactive elements, quiz-based assessments, and a longer final quiz. Developed in Articulate Storyline to enable custom interactions and easier future updates.",
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
            subtitle : "The AdvanceHE Associate Fellowship independent study is an approved program for individuals at Manchester Met seeking AF Fellowship.",
            description : "The AdvanceHE Associate Fellowship independent study is an approved program for individuals at Manchester Met seeking AF Fellowship. This resource offers flexibility and features an innovative learning journal that participants use to reflect on a series of activities outlined in an Articulate Storyline module.",
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
            subtitle : "My Five Year Plan is a Manchester Met initiative focusing on program-based activities that provide students with a personal and professional development framework.",
            description : "My Five Year Plan is a Manchester Met initiative focusing on program-based activities that provide students with a personal and professional development framework. To support this, I created a video and diagram to help staff understand the project. The video walks viewers through the five stages of the plan, offering resource ideas at each stage for easy reference.",
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
            end: "October 2023",
            location: "Manchester",
            title: "University Teaching Academy website",
            shortTitle: "UTA website",
            subtitle : "Web development for the University Teaching Academy (UTA) at Manchester Metropolitan University.",
            description : "Web development for the University Teaching Academy (UTA) at Manchester Metropolitan University. Collaborating with Academic Developer staff in UTA, I designed a number of pages aimed at professional services and academic staff, providing support on topics ranging from assessment and peer observation to Advance HE Fellowship and learning outcomes. Webpages were created and edited using the CMS Drupal and were visited by more than 50,000 people per year.",
            thumbnail : `${import.meta.env.VITE_BASE}/images/uta-website-1.webp`,
            tags : [ "web development", "design",  "Drupal",  "graphic design" ],
            techUsed : [
                {
                    tech : "Drupal",
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
            subtitle : "A Small View is a gallery I co-founded and co-coordinated in Liverpool City Centre, showcasing art, photography, and cultural exhibitions.",
            description : "A Small View is a gallery I co-founded and co-coordinated in Liverpool City Centre, showcasing art, photography, and cultural exhibitions. I was responsible for creating posters and social media content, curating exhibitions, liaising with artists, installing audiovisual equipment, applying for funding, and completing risk assessments for each event.",
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
            subtitle : "Collaborating with Manchester Met’s Assessment team, I developed an undergraduate degree classification calculator that has helped over 38,000 students explore grade requirements.",
            description : "This project, in collaboration with Manchester Met’s Assessment team, developed an undergraduate degree classification calculator to address common student queries about required grades. The calculator lets students input their current grades and credits to explore what they need to achieve their desired classification. Since its launch, over 38,000 students have used the tool, and it was nominated for three Manchester Met Staff Awards in 2023.",
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
            subtitle : "Web development and audio/visual support for the Learning Enhancement and Educational Development (LEED) 2023 conference at Manchester Metropolitan University.",
            description : "Web development and audio/visual support for the Learning Enhancement and Educational Development (LEED) 2023 conference at Manchester Metropolitan University. On the day of the conference, the website was used by more than 300 Manchester Met staff. I also created much of the event’s graphic design.",
            thumbnail : `${import.meta.env.VITE_BASE}/images/leed-conf-card-img-2.webp`,
            tags : [ "web design", "conference", "event", "video", "graphic design" ],
            techUsed : [
                {
                    tech : "Video",
                    icon : "mdi-film"
                },
                {
                    tech : "Office 365",
                    icon : "mdi-microsoft-office"
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
            subtitle : "Webpage and video designed to communicate approaches for welcoming international students to higher education. ",
            description : "Webpage designed to communicate approaches for welcoming international students to higher education. Accompanying the webpage is a video featuring Dr. Jon Wright, discussing factors that can interfere with effective communication when teaching international students.",
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
            subtitle : "student narratives come from a series of focus groups that aimed to explore students' experiences at the university.",
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
            end: "October 2023", 
            subtitle : "Critical Pedagogy podcast series showcasing a range of experimental, innovative, and inclusive pedagogical theories, strategies, and activities used across all faculties at Manchester Met.",
            description : "Critical Pedagogy podcast series showcasing a range of experimental, innovative, and inclusive pedagogical theories, strategies, and activities used across all faculties at Manchester Met. I was responsible for audio recording, editing, and publishing the episodes.",
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
            subtitle : "Interactive resource designed to assist staff in creating assessment tasks, reviewing assignment briefs from colleagues, and providing a basic introduction to assessment at Manchester Met.",
            description : "The Assessment Design Toolkit is an interactive independent study resource designed to assist staff in creating assessment tasks, reviewing assignment briefs from colleagues, and providing a basic introduction to assessment at Manchester Met. I developed this resource using Articulate Rise.",
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
            subtitle : "Curatorial project examining how artists are utilising the medium of video games specifically, and computational media more broadly.",
            description : "<p>Curatorial project examining how artists are utilising the medium of video games specifically, and computational media more broadly. The exhibition showcased an international group of artists, including talks by Barcelona-based artist Serafín Álvarez and American/Belgian artists Auriea Harvey & Michaël Samyn. The exhibition was hosted at the <a target='blank' href='https://hanoverproject.wordpress.com/2015/12/15/half-real-28-01-16-24-02-16/'>Hanover Project</a>, Preston.</p><p>Artists: Serafín Álvarez | Paolo Pedercini | Auriea Harvey & Michaël Samyn | Rod Humble | Mike Treanor</p>",
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
            subtitle : "The As I am campaign celebrated diversity and inclusion by shedding light on our Black, Asian and Minority Ethnic staff and students’ stories of belonging at Manchester Met.",
            description : "The ‘As I Am’ campaign celebrates diversity and inclusion by highlighting stories of belonging from Black, Asian, and Minority Ethnic staff and students at Manchester Met. I contributed to developing the website that featured many of the academics and students showcased during the exhibition.",
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
            subtitle : "Webpage providing support and motivation for Manchester Met staff on Decolonising the Curriculum (DtC).",
            description : "Webpage providing support and motivation for Manchester Met staff on Decolonising the Curriculum (DtC). The resources and guidance aim to identify, acknowledge, and challenge the ways colonialism has influenced knowledge and learning. Materials were compiled by Dr. Theresa Nicholson, and I developed the page using the Drupal CMS.",
            thumbnail : `${import.meta.env.VITE_BASE}/images/decol-2.webp`,
            tags : ["video", "web development", "independent study" ],
            techUsed : [
                {
                    tech : "Video",
                    icon : "mdi-film",
                },
                {
                    tech : "Drupal",
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
            subtitle : "This curatorial project at The Great Medical Disaster project space bringing together prints, digital, and sculptural works by Dave Evans and London-based artist Robin Tarbet.",
            description : "This curatorial project at The Great Medical Disaster project space, The Prosumer Chronicles, brings together prints, digital, and sculptural works by White Wizard founder Dave Evans and London-based artist Robin Tarbet. Both artists explore the residue of technological progress—such as polystyrene packaging and errant radio waves—using these by-products to investigate the implications of perpetual growth.",
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
            subtitle : "Co-curatorial project with SEIZE Projects in The Great Medical Disaster project space, Manchester.",
            description : "Co-curatorial project with SEIZE Projects in The Great Medical Disaster project space, Manchester. The Morning Has Gold in Its Mouth examines the alteration of exhibition space. The event uses alcohol to facilitate social interaction and employs taste as a means of critical engagement. Through this approach, the show aims to foster discussion and encourage experimental practices.",
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
            subtitle : "Staff-facing resource created in Articulate Storyline to help Manchester Met staff navigate the Degree and Awards Good Honours Power BI dashboard.",
            description : "Staff-facing resource created in Articulate Storyline to help Manchester Met staff navigate the Degree and Awards Good Honours Power BI dashboard. Using this dashboard provides a more detailed view of which student groups may need additional support.",
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
            subtitle : "Building Inclusive Learning Communities is a resource designed for staff at Manchester Metropolitan University.",
            description : "Building Inclusive Learning Communities is a resource designed for staff at Manchester Metropolitan University. It offers guidance on discussing inclusion and fostering a sense of belonging among colleagues. The resource also includes student case studies, narrated by actors, which highlight the students’ own experiences.",
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
            subtitle : "Designed an Articulate Rise resource to support current and future mentors for Manchester Met’s PSF (Professional Standards Framework) scheme, accredited by Advance HE.",
            description : "Designed an Articulate Rise resource to support current and future mentors for Manchester Met’s PSF (Professional Standards Framework) scheme, accredited by Advance HE. Features an introductory activity, PSF framework refresher, and guidance on reflective writing, with self-directed activities tailored to the learner’s selected descriptor level.",
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
        },
          {
            id: 19,
            slug: "course-principles",
            title: "Course Principles introductory videos",
            shortTitle: 'Course Principles',
            end : "January 2025",
            date : "01/01/2025",
            location : "Leeds",
            subtitle : "Animations providing an overview of Leeds Beckett University’s Course Principles.",
            description : "Animations providing an overview of Leeds Beckett University’s Course Principles. The Course Principles are a set of guidelines and reflective questions designed to support academic staff in implementing effective pedagogical practices during course development.",
            thumbnail : `${import.meta.env.VITE_BASE}/images/course-principles.webp`,
            tags : ["video", "motion graphics", "video editing", "filming" ],
            techUsed : [
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
                }
            ]
        }, 
        {
            id: 20,
            slug: "the-sound-of-adult-children-determined-not-to-be-afraid",
            title: "The sound of adult children determined not to be afraid",
            shortTitle: 'The sound of adult children determined not to be afraid',
            end : "August 2017",
            start : "June",
            date : "01/08/2017",
            location : "Blackpool",
            subtitle : "Curatorial project combining visual art and humor to explore common experiences and anxieties.",
            description : "Curatorial project in Collaboration With (ICW), a temporary project space in Blackpool founded by Garth Gratrix in partnership with East Street Arts. The group show combined visual art and humor to explore shared experiences and anxieties through works by artists including Craig Atkinson, Michael Lacey, Oliver Bradley-Baker, Kieran Healy, and Claire Dorsett.",
            thumbnail : `${import.meta.env.VITE_BASE}/images/adult-children-1.webp`,
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
            id: 21,
            slug: "bob-north-two",
            title: "BOB North 2016",
            shortTitle: 'BOB North 2016',
            end : "March 2016",
            date : "03/01/2016",
            location : "Leeds",
            subtitle : "Curatorial project at BOB North 2016, held in the historic Post Office Building in Preston. I showcased a collection of Level 5 and 6 BA Fine Art student works.",
            description : "Curatorial project at BOB North 2016, held in the historic Post Office Building in Preston. I showcased a collection of Level 5 and 6 BA Fine Art student works. This was my second time curating student work during a BOB North event, having previously done so in 2015.",
            thumbnail : `${import.meta.env.VITE_BASE}/images/bob-two-1.webp`,
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
            id: 22,
            slug: "wish-in-one-hand",
            title: "Wish in one hand, sh*t in the other",
            shortTitle: 'Wish in one hand, sh*t in the other',
            end : "February 2019",
            start: "January 2019",
            date : "01/01/2019",
            location : "Preston",
            subtitle : "Curatorial project at the Hanover Project gallery centered on a commissioned story by artist Kyle Brown.",
            description : "Curatorial project at the Hanover Project gallery centered on a commissioned story by artist Kyle Brown. The artworks were arranged around this narrative, allowing viewers to form their own interpretations and connections. Featured artists included Ellie Barrett, Inga Lineviciute, Jade Annaw, and Paula Kolar. Artist talks were organised for BA and MA Fine Art students at the University of Central Lancashire, featuring Inga Lineviciute and Ellie Barrett.",
            thumbnail : `${import.meta.env.VITE_BASE}/images/wish-6.webp`,
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
            id: 23,
            slug: "ma-degree-show-installation",
            title: "MA Degree Show installation",
            shortTitle: 'MA Degree Show Installation',
            end : "November 2016",
            date : "11/01/2016",
            location : "Preston",
            subtitle : "Final Master of Arts degree show at the University of Central Lancashire. I showcased an interactive multimedia video game artwork, along with a book created for my dissertation.",
            description : "Final Master of Arts degree show at the University of Central Lancashire. I showcased an interactive multimedia video game artwork, along with a book created for my dissertation.",
            thumbnail : `${import.meta.env.VITE_BASE}/images/ma-3.webp`,
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
            id: 24,
            slug: "leeds-beckett-ai-hub",
            title: "Leeds Beckett staff AI Hub",
            shortTitle: 'Leeds Beckett AI Hub',
            end : "July 2025",
            date : "7/10/2025",
            location : "Leeds",
            subtitle : "Webpage highlighting generative AI resources, guidance, and workshops for teaching and learning at Leeds Beckett University.",
            description : "Webpage highlighting generative AI resources, guidance, and workshops for teaching and learning at Leeds Beckett University. A postcard was also designed to promote the hub. All content was displayed to Leeds Beckett staff during an AI symposium in July 2025.",
            thumbnail : `${import.meta.env.VITE_BASE}/images/ai-hub.webp`,
            tags : [ "web development", "graphic design", "sitecore", "photoshop" ],
            techUsed : [
                {
                    tech : "Sitecore",
                    icon : "mdi-movie-star"
                },
                {
                    tech : "Video",
                    icon : "mdi-camera"
                }, 
                {
                    tech : "InDesign",
                    icon : "mdi-star"
                },
                
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
                    skill : "Print",
                    icon : "mdi-printer"
                }
            ]
        },
           {
            id: 25,
            slug: "events-management",
            title: "BA Events Management",
            shortTitle: 'BA Events Management',
            end : "March 2024",
            date : "3/01/2024",
            location : "Leeds",
            subtitle : "Interviews and timelapse for the BA Events Management course at Leeds Beckett University.",
            description : "Interviews and timelapse for the BA Events Management course at Leeds Beckett University. Working with events company Sparq, the team staged a mock Asda staff awards ceremony. The videos capture insights from Sparq staff and students, as well as a timelapse showing the work and equipment involved in creating an ambitious event.",
            thumbnail : `${import.meta.env.VITE_BASE}/images/event-man-1.webp`,
            tags : [ "video", "premiere pro"],
            techUsed : [
                {
                    tech : "Video",
                    icon : "mdi-film"
                },
                {
                    tech : "Premiere Pro",
                    icon : "mdi-movie-star"
                },
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
            id: 26,
            slug: "ba-acting",
            title: "BA Acting VLE graphics",
            shortTitle: 'BA Acting',
            end : "May 2024",
            date : "5/08/2024",
            location : "Leeds",
            subtitle : "Banners and module graphics designed for a new, innovative, modueless BA Acting course at Leeds Beckett University.",
            description : "Banners and module graphics designed for a new, innovative, modueless BA Acting course at Leeds Beckett University.",
            thumbnail : `${import.meta.env.VITE_BASE}/images/ba-acting-1.webp`,
            tags : [ "photography", "graphic design", "photoshop" ],
            techUsed : [
                {
                    tech : "Photoshop",
                    icon : "mdi-movie-star"
                },
            ],
            skills : [
                {
                    skill : "graphic design",
                    icon : "mdi-box-cutter"
                },
                {
                    skill : "photography",
                    icon : "mdi-camera"
                }
            ]
        },
             {
            id: 27,
            slug: "fareshare",
            title: "BA Nutrition FareShare placements",
            shortTitle: 'FareShare placement students',
            end : "July 2024",
            date : "7/16/2024",
            location : "Leeds",
            subtitle : "Interviews for the BA Nutrition programme at Leeds Beckett University, created for students interested in placements at the charity FareShare.",
            description : "Interviews for the BA Nutrition programme at Leeds Beckett University, created for students interested in placements at the charity FareShare. Filmed over a full day at FareShare’s headquarters and distribution centre, the videos feature staff members and students on placement, offering an insight into the experience and impact of working with the charity.",
            thumbnail : `${import.meta.env.VITE_BASE}/images/fareshare-2.webp`,
            tags : [ "video", "premiere pro"],
            techUsed : [
                {
                    tech : "Photography",
                    icon : "mdi-camera"
                },
                {
                    tech : "Premiere Pro",
                    icon : "mdi-movie-star"
                },
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
            id: 28,
            slug: "zine-making-guide",
            title: "Zine making guide",
            shortTitle: 'Zine making guide for teaching and learning',
            end : "May 2025",
            date : "5/01/2025",
            location : "Leeds",
            subtitle : "Interactive guide showing how zines can be used in research and in teaching and learning within a higher education context.",
            description : "Interactive guide showing how zines can be used in research and in teaching and learning within a higher education context. Zines are both an active form of learning and a way to encourage communication during their development. This resource was developed from a forum in Spring 2025 that focused on research and scholarship at Leeds Beckett University.",
            thumbnail : `${import.meta.env.VITE_BASE}/images/zine-1.webp`,
            tags : [ "video", "premiere pro", "articulate", "independent study"],
            techUsed : [
                {
                    tech : "Photography",
                    icon : "mdi-camera"
                },
                {
                    tech : "Premiere Pro",
                    icon : "mdi-movie-star"
                },
                {
                    tech : "Articulate Storyline",
                    icon : "mdi-school"
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
    ])

    return { works }
}
 
export default projects