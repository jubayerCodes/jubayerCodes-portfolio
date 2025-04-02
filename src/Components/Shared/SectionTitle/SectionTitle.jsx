import React from 'react';
import "./SectionTitle.css"
import SplitText from '../SplitText/SplitText';

const SectionTitle = ({ icon, title }) => {
    return (
        <div className='section-title-container'>
            {icon}
            <SplitText
                text={title}
                className="section-title"
                delay={20}
            />
        </div>
    );
};

export default SectionTitle;