import SectionTitle from '@/Components/Shared/SectionTitle/SectionTitle';
import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { FaRegUser } from 'react-icons/fa';
import cnitLogo from "@/assets/img/cnit.png"
import softripleLogo from "@/assets/img/softriple.webp"

const About = () => {

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
        <section className='section snap-start' id='about'>
            <SectionTitle icon={<FaRegUser />} title={"About me"} />

            <Fade>
                <h2 className='section-heading'>Meet the Developer Behind <span className='text-[var(--primary-color)]'>Jubayer Codes</span></h2>
                <p className="description">
                    I’m Md. Jubayer Hossain, a passionate MERN Stack Developer building modern, user-friendly web applications. Through Jubayer Codes, I turn ideas into impactful digital solutions. With solid skills in React, Node.js, MongoDB, and more, I’m ready to help clients create fast, scalable, and beautiful websites that deliver results.
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

export default About;