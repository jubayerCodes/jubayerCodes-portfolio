import SectionTitle from '@/Components/Shared/SectionTitle/SectionTitle';
import React from 'react';
import { LuHouse } from "react-icons/lu";
import "./Introduction.css"
import { Fade } from 'react-awesome-reveal';

const Introduction = () => {

    return (
        <section className='section' id='introduction'>
            <SectionTitle icon={<LuHouse />} title={"Introduce"} />

            <Fade>
                <h1 className='heading'>
                    Say Hi from <span className='text-[var(--primary-color)]'>Jubayer Codes</span>,
                </h1>
                <h2 className='heading'>
                    Crafting Scalable Web Apps
                </h2>
                <p className="description">
                    I design and code beautifully simple things and i love what i do. Just simple like that!
                </p>
                <button className="btn mt-5">What I’ve Built</button>
            </Fade>
        </section>
    );
};

export default Introduction;