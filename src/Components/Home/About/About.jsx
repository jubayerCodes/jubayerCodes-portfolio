import SectionTitle from '@/Components/Shared/SectionTitle/SectionTitle';
import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { FaRegUser } from 'react-icons/fa';

const About = () => {
    return (
        <section className='section' id='about'>
            <SectionTitle icon={<FaRegUser />} title={"About me"} />

            <Fade>
                <h2 className='section-heading'>Meet the Developer Behind <span className='text-[var(--primary-color)]'>Jubayer Codes</span></h2>
                <p className="description">
                    I’m Md. Jubayer Hossain, a passionate MERN Stack Developer building modern, user-friendly web applications. Through Jubayer Codes, I turn ideas into impactful digital solutions. With solid skills in React, Node.js, MongoDB, and more, I’m ready to help clients create fast, scalable, and beautiful websites that deliver results.
                </p>
            </Fade>
        </section>
    );
};

export default About;