import SectionTitle from '@/Components/Shared/SectionTitle/SectionTitle';
import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { FaBriefcase } from "react-icons/fa";

const Portfolio = () => {

    const projects = [
        {
            "id": 1,
            "title": "Hello Summer",
            "projectType": "MERN Stack Project",
            "featuredImg": "https://i.ibb.co/YPddD3R/hellosummer-47f86-web-app-Hello-Summer.png",
            "technologies": [
                "React JS",
                "Tailwind CSS",
                "Daisy UI",
                "MongoDB",
                "Node JS",
                "Express JS",
                "Firebase",
                "Axios"
            ],
            "features": [
                "The user roles are secure. Only specific role holder can see specific page of dashboard. Ex. Student can only see My Selected Classes, My Enrolled Classes and Payment History pages.",
                "Students can Enroll a class through a payment system. (We used stripe as payment gateway.)",
                "This site allows to toggle between dark and light theme."
            ],
            "links": {
                "live": "https://hellosummer-47f86.web.app/",
                "sourceCode": "https://github.com/jubayerCodes/helloSummer.git"
            }
        },
        {
            "id": 2,
            "title": "Prime Toys",
            "projectType": "MERN Stack Project",
            "featuredImg": "https://i.ibb.co/FJfjZZS/primetoys-b0dbf-web-app-Prime-Toys-1.png",
            "technologies": [
                "React JS",
                "Tailwind CSS",
                "Daisy UI",
                "MongoDB",
                "Node JS",
                "Express JS",
                "Firebase",
                "Axios",
                "React Tabs"
            ],
            "features": [
                "Only logged-in users can add, remove and update their toys. And see details of a toy.",
                "Used pagination when showing toys, and users can search for toys by name.",
                "Added tabs on the home page. Tabs are containing toys in terms of subcategory."
            ],
            "links": {
                "live": "https://primetoys-b0dbf.web.app/",
                "sourceCode": "https://github.com/jubayerCodes/primeToys.git"
            }
        },
        {
            "id": 3,
            "title": "Bong Bites",
            "projectType": "Front End Project",
            "featuredImg": "https://i.ibb.co/vmS0vLZ/bong-bites-75239-web-app-Bong-Bites.png",
            "technologies": [
                "React JS",
                "Express JS",
                "Tailwind CSS",
                "Daisy UI",
                "Firebase",
                "React-Lazy-Load",
                "Vercel",
                "DOTENV"
            ],
            "features": [
                "Users can print the Blog page by clicking on the PRINT THIS PAGE button.",
                "A proper Authentication system was added to this project, users can authenticate with email and password, Google, and Github.",
                "Users can add recipes to their favorites by clicking on Add to Favorite button."
            ],
            "links": {
                "live": "https://bong-bites-75239.web.app/",
                "sourceCode": "https://github.com/jubayerCodes/bong-bites.git"
            }
        }
    ]


    return (
        <section className='section' id='portfolio'>
            <SectionTitle icon={<FaBriefcase />} title={"Portfolio"} />

            <Fade>
                <h2 className='section-heading'>Showcasing <span className='text-[var(--primary-color)]'>My Creations</span></h2>

                <div className='flex flex-col items-stretch gap-5'>
                    {
                        projects?.map((project, idx) => (
                            <div className='grid grid-cols-2 h-[300px] overflow-hidden' key={idx} >
                                <div>
                                    <img src={project?.featuredImg} alt="" className='w-full' />
                                </div>
                                <div>

                                </div>
                            </div>
                        ))
                    }
                </div>
            </Fade>
        </section>
    );
};

export default Portfolio;