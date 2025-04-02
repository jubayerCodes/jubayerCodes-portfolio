"use client"

import React, { useEffect, useState } from 'react';
import profileImg from "@/assets/img/jubayer.png"
import Link from 'next/link';
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import Introduction from '@/Components/Home/Introduction/Introduction';
import "./Home.css"

const Home = () => {
    const headings = ["Developer", "Explorer"];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % headings.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <div className="my-container flex gap-20 relative">
                <aside className='profile-card w-1/3'>
                    <img src={profileImg.src} alt="jubayer codes" className='profile-img' />
                    <div className="shape"></div>
                    <h3 className="title">Hello I'm <br /> Jubayer Hossain <br /> a
                        <AnimatePresence mode="wait">
                            <motion.span
                                key={index}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 20 }}
                                transition={{ duration: 0.2 }}
                                className="header-caption ms-1.5 absolute w-full"
                            >
                                {headings[index]}
                            </motion.span>
                        </AnimatePresence>
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
                <div className='w-2/3'>
                    <Introduction />
                </div>
            </div>
        </div>
    );
};

export default Home;