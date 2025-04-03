import SectionTitle from '@/Components/Shared/SectionTitle/SectionTitle';
import React from 'react';
import { FaRegUser } from 'react-icons/fa';

const About = () => {
    return (
        <section className='section' id='about'>
            <SectionTitle icon={<FaRegUser />} title={"About me"} />
        </section>
    );
};

export default About;