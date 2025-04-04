import React from 'react';
import "./SectionTitle.css"
import { Fade } from 'react-awesome-reveal';

const SectionTitle = ({ icon, title }) => {
    return (
        <div className='section-title-container'>
            <Fade>
                {icon}
                <h3 className='section-title'>{title}</h3>
            </Fade>
        </div>
    );
};

export default SectionTitle;