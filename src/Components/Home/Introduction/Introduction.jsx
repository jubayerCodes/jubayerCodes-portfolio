import SectionTitle from '@/Components/Shared/SectionTitle/SectionTitle';
import React from 'react';
import { LuHouse } from "react-icons/lu";
import "./Introduction.css"
import { Fade } from 'react-awesome-reveal';
import cnitLogo from "@/assets/img/cnit.svg"
import softripleLogo from "@/assets/img/softriple.webp"

const Introduction = () => {

    const experience = [
        {
            title: "MERN Stack Developer",
            company: "CODE NEXT IT",
            logo: cnitLogo,
            from: "jan 2025",
            to: "Present"
        },
        {
            title: "Frontend Developer",
            company: "SOFTRIPLE",
            logo: softripleLogo,
            from: "Aug 2023",
            to: "Sep 2023"
        },
    ]

    return (
        <section className='section' id='introduction'>
            <SectionTitle icon={<LuHouse />} title={"Introduce"} />

            <Fade>
                <h1 className='heading'>
                    Say Hi from <span className='text-[var(--primary-color)]'>Jubayer Codes</span>,
                </h1>
                <h2 className='heading'>
                    MERN Stack Web Solution
                </h2>
                <p className="description">
                    I design and code beautifully simple things and i love what i do. Just simple like that!
                </p>
                <div className="experience-container flex gap-5 justify-between items-start mt-5">
                    {
                        experience?.map((ex, idx) => (
                            <div className='card experience-card w-1/2 flex justify-between items-start' key={idx}>
                                <div>
                                    <h4 className='text-base capitalize mb-3'>{ex?.title}</h4>
                                    <img src={ex?.logo?.src} className='h-[20px] grayscale-100' alt="jubayer codes exp" />
                                </div>
                                <div className="text-[var(--text-color)] capitalize text-white">{ex?.from} - {ex?.to}</div>
                            </div>
                        ))
                    }
                </div>
            </Fade>
        </section>
    );
};

export default Introduction;