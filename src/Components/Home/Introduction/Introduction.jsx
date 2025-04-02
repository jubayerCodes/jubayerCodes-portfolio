import SectionTitle from '@/Components/Shared/SectionTitle/SectionTitle';
import React from 'react';
import { LuHouse } from "react-icons/lu";
import "./Introduction.css"
import SplitText from '@/Components/Shared/SplitText/SplitText';

const Introduction = () => {
    return (
        <section className='section' id='introduction'>
            <SectionTitle icon={<LuHouse />} title={"Introduce"} />
            <h2 className='heading'>
                <SplitText
                    text={`Say Hi from`}
                    delay={10}
                />
                <SplitText
                    text={`JubayerCodes,`}
                    delay={10}
                    className='text-[var(--primary-color)] font-[700]'
                />
            </h2>
            <h2 className='heading'>
                <SplitText
                    text={"MERN Stack Web Solution"}
                    delay={10}
                />
            </h2>
            <span className="description">
                <SplitText
                    text={"I design and code beautifully simple things and i love what i do. Just simple like that!"}
                    delay={10}
                />
            </span>
        </section>
    );
};

export default Introduction;