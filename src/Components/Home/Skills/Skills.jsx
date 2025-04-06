import SectionTitle from '@/Components/Shared/SectionTitle/SectionTitle';
import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { FaLayerGroup } from "react-icons/fa";
import "./Skills.css"

import reactLogo from '@/assets/img/skills/react.png'
import nextLogo from '@/assets/img/skills/nextjs.png'
import jsLogo from '@/assets/img/skills/js.png'
import tsLogo from '@/assets/img/skills/ts-logo.png'
import nodeLogo from '@/assets/img/skills/node-js.png'
import mongodbLogo from '@/assets/img/skills/mongodb.png'
import expressLogo from '@/assets/img/skills/express-js.png'
import firebaseLogo from '@/assets/img/skills/firebase.png'
import tailwindLogo from '@/assets/img/skills/tailwind-css.png'
import materialLogo from '@/assets/img/skills/material-ui.png'
import bootstrapLogo from '@/assets/img/skills/bootstrap.png'
import stripeLogo from '@/assets/img/skills/stripe.png'
import reduxLogo from '@/assets/img/skills/Redux.png'
import scssLogo from '@/assets/img/skills/scss.png'
import chatgptLogo from '@/assets/img/skills/chatgpt.png'
import figmaLogo from '@/assets/img/skills/figma.png'

const Skills = () => {

    const skills = [
        {
            name: 'React',
            logo: reactLogo
        },
        {
            name: 'Next JS',
            logo: nextLogo
        },
        {
            name: 'Javascript',
            logo: jsLogo
        },
        {
            name: 'Typecript',
            logo: tsLogo
        },
        {
            name: 'Node JS',
            logo: nodeLogo
        },
        {
            name: 'MongoDB',
            logo: mongodbLogo
        },
        {
            name: 'Express JS',
            logo: expressLogo
        },
        {
            name: 'Redux',
            logo: reduxLogo
        },
        {
            name: 'Firebase',
            logo: firebaseLogo
        },
        {
            name: 'Figma',
            logo: figmaLogo
        },
        {
            name: 'Tailwind CSS',
            logo: tailwindLogo
        },
        {
            name: 'SCSS',
            logo: scssLogo
        },
        {
            name: 'Material UI',
            logo: materialLogo
        },
        {
            name: 'Bootstrap',
            logo: bootstrapLogo
        },
        {
            name: 'Stripe',
            logo: stripeLogo
        },
        {
            name: 'Chat GPT',
            logo: chatgptLogo
        }
    ]

    return (
        <section className='section' id='skills'>
            <SectionTitle icon={<FaLayerGroup />} title={"My Skills"} />

            <Fade>
                <h2 className='section-heading'>Tech Stack &  <span className='text-[var(--primary-color)]'>Expertise</span></h2>

                <div className='grid grid-cols-4 lg:grid-cols-6 justify-between md:items-center gap-3 lg:gap-5 mt-5'>
                    {
                        skills?.map((skill, idx) => (
                            <div className='card skill-card flex justify-center flex-col items-center' key={idx}>
                                <img src={skill?.logo.src} alt={`jubayer codes ${skill?.name}`} className='w-fit h-[40px]' />
                                <p className='text-center'>{skill?.name}</p>
                            </div>
                        ))
                    }
                </div>
            </Fade>
        </section>
    );
};

export default Skills;