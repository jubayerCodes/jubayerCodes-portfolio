"use client"

import React, { useEffect, useState } from 'react';
import profileImg from "@/assets/img/jubayer-codes.png"
import Link from 'next/link';
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import Introduction from '@/Components/Home/Introduction/Introduction';
import "./Home.css"
import { Typewriter } from 'react-simple-typewriter';
import About from '@/Components/Home/About/About';

const Home = () => {
    const headings = ["Developer", "Explorer"];
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            console.log(lastScrollY, currentScrollY);

            // Ensure user is scrolling down and crosses 100px for the first time
            if (lastScrollY < currentScrollY && currentScrollY >= 200) {
                const aboutSection = document.getElementById("about");
                if (aboutSection) {
                    aboutSection.scrollIntoView({ behavior: "smooth" });
                }
            }

            // Update last scroll position
            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollY]);

    return (
        <div>
            <div className="my-container flex gap-20 relative">
                <aside className='profile-card w-1/3'>
                    <img src={profileImg.src} alt="jubayer codes Profile" className='profile-img' />
                    <div className="shape"></div>
                    <h3 className="title">Hello I'm <br /> Jubayer Hossain <br /> a
                        <Typewriter words={headings} loop cursor cursorBlinking={false} cursorColor='#FF014F' />
                    </h3>
                    <ul className="social-icon">
                        <li>
                            <Link href="https://www.facebook.com/jubayerCodes/">
                                <FaFacebookF />
                            </Link>
                        </li>
                        <li>
                            <Link href="https://www.linkedin.com/in/jubayer-hossain-6b866723b/">
                                <FaLinkedinIn />
                            </Link>
                        </li>
                        <li>
                            <Link href="https://github.com/jubayerCodes">
                                <FaGithub />
                            </Link>
                        </li>
                    </ul>
                </aside>
                <div className='w-[900px]'>
                    <Introduction />
                    <About />
                </div>
            </div>
        </div>
    );
};

export default Home;