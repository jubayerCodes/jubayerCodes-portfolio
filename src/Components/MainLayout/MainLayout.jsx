import React from 'react';
import profileImg from "@/assets/img/jubayer.png"

const MainLayout = () => {
    return (
        <div>
            <div className="my-container grid grid-cols-3">
                <aside className='profile-card'>
                    <img src={profileImg.src} alt="jubayer codes" className='profile-img' />
                    <div className="shape"></div>
                    <h3 className="title">Hello I'm <br /> John Deon <br /> a
                        <span className="header-caption">
                            <span className="cd-headline clip is-full-width">
                                <span className="cd-words-wrapper" style={{ width: "171.094px" }}>
                                    <b className="theme-gradient is-visible"> Developer</b>
                                </span>
                            </span>
                        </span>
                    </h3>
                </aside>
                <div></div>
            </div>
        </div>
    );
};

export default MainLayout;