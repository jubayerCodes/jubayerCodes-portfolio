"use client"

import React, { useEffect, useState } from 'react';
import profileImg from "@/assets/img/jubayer.png"
import Link from 'next/link';
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import SmoothScrollWrapper from '../SmoothScrollWrapper/SmoothScrollWrapper';

const MainLayout = ({ children }) => {

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
                    <h3 className="title">Hello I'm <br /> JUBAYER HOSSAIN <br /> a
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
                    {/* {children} */}
                    <p className='text-amber-50'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ornare enim sem, et sodales lectus pulvinar ac. Morbi massa nulla, fringilla a magna ut, mattis pretium quam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed vel risus bibendum, fringilla mi eget, molestie felis. Praesent ac mi ut nunc luctus pharetra. Etiam sodales urna quis ex lobortis placerat. Aenean eleifend, ipsum eget viverra porta, eros lectus ornare elit, vel faucibus ipsum odio sed turpis. Donec id tristique sapien. Proin purus turpis, tincidunt eu aliquet eget, congue et erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget dui magna. Ut nec mauris eleifend, pellentesque odio in, auctor nulla. Ut vel tortor id urna facilisis blandit vitae in est.

                        Donec condimentum magna commodo, imperdiet erat a, consectetur nisi. Maecenas et nibh id augue cursus aliquet. Mauris condimentum neque ac ligula bibendum consequat. Aliquam id ipsum urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet feugiat tellus. Ut ac metus id arcu mattis pretium. Aliquam dictum justo vel nulla blandit egestas. Nam dignissim ligula at velit vulputate, sed accumsan velit sollicitudin. Fusce cursus non nisi eget maximus. Donec eget tristique neque, et tempor libero. Sed ut lacinia nulla. In at nibh accumsan, pharetra risus at, bibendum neque. Nam congue tempus magna, finibus ultrices tortor commodo quis.

                        Duis lacinia leo sed ligula luctus, eget efficitur arcu imperdiet. Mauris semper pulvinar cursus. Ut tincidunt nec mauris in feugiat. Sed hendrerit, dui in feugiat vehicula, diam ipsum eleifend sapien, nec imperdiet risus orci accumsan ex. Pellentesque porta dolor at dui luctus, a auctor libero sagittis. Donec elementum ac nisl sed bibendum. Pellentesque ut cursus lectus. Donec eu volutpat purus, quis mattis tortor. Morbi eleifend cursus est, eget faucibus ante fermentum eget. Nulla nunc libero, eleifend sed interdum id, facilisis quis ipsum. Ut pretium nunc a accumsan fringilla. Suspendisse potenti. Quisque et libero tortor. Sed non sagittis enim.

                        Ut ornare hendrerit sapien, quis pulvinar elit pellentesque ut. Vivamus consequat quam quis turpis posuere, non elementum magna lobortis. Vestibulum tincidunt, urna quis fermentum bibendum, erat ante consequat velit, et molestie dolor leo vitae erat. Curabitur lacinia magna iaculis sodales semper. Aenean sed ligula et velit rutrum pulvinar ut at eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi est nulla, feugiat vitae nulla aliquet, rutrum ullamcorper ligula. Cras bibendum dignissim pharetra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ullamcorper, urna ac ornare scelerisque, erat dolor dapibus massa, sed rhoncus enim risus in tortor.

                        Nunc eget commodo nulla, a ornare odio. Integer ultrices quam in ipsum elementum convallis. Nulla feugiat, turpis nec pulvinar efficitur, lectus ante scelerisque tortor, et porta felis tellus et tellus. Nam tristique non eros a consectetur. In eu mattis velit, interdum lobortis turpis. Maecenas sed malesuada augue, sit amet aliquet lorem. In hac habitasse platea dictumst. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis ex quam, egestas et nisi nec, dapibus pulvinar nulla. Quisque at ante fermentum, auctor magna ut, viverra tellus.

                        Nullam sed est in neque volutpat commodo. Mauris vitae placerat tortor. Cras sed justo at nisi mattis rutrum. Integer fermentum nisi lacus. Praesent leo orci, laoreet in est vitae, pulvinar placerat lorem. Vestibulum tristique, ex interdum luctus commodo, lorem enim porta est, vitae faucibus velit justo nec metus. Suspendisse eleifend ultrices tincidunt. Phasellus volutpat lobortis mi eget consequat.

                        Fusce malesuada, dui vitae feugiat ornare, lacus arcu lacinia turpis, vel finibus nisi sem eu quam. Donec finibus quam quis diam malesuada auctor. Etiam quis tellus placerat, lobortis libero eget, faucibus leo. Aenean condimentum ac ipsum non euismod. Ut fermentum dui et maximus euismod. Etiam tempus fermentum mi hendrerit molestie. Proin pellentesque nisi nec mi pellentesque ullamcorper. Maecenas ac arcu nunc. Sed convallis interdum diam, faucibus posuere dui fermentum pulvinar. Sed at nunc sit amet arcu laoreet faucibus.

                        Curabitur eget aliquet lectus, ac sagittis elit. Maecenas non nulla vel ex aliquam bibendum. Duis nec ultricies leo, ac porta massa. In a libero feugiat, luctus magna vitae, egestas leo. Nunc sodales venenatis nibh vitae fermentum. Mauris varius ante in dolor eleifend, vitae molestie lorem rutrum. Morbi porttitor odio ante, a ornare felis tempus ac. Duis tempor ex at risus scelerisque, eu tristique diam iaculis. Proin condimentum tempus massa, eget sollicitudin nibh imperdiet sed.

                        Etiam pretium enim eget pellentesque sodales. Nullam at placerat massa. Nunc a ipsum nec erat blandit imperdiet ut vitae ante. Donec interdum risus non neque iaculis, et bibendum augue pretium. In nisi nisl, mollis vitae ullamcorper sit amet, tristique eu ex. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec mi ante, interdum a nibh vitae, venenatis vehicula lectus. Nullam at fringilla lacus. Integer finibus pharetra eros, in pretium lectus elementum non. Sed sed libero sollicitudin, facilisis odio in, feugiat neque. In imperdiet, purus finibus posuere accumsan, ante neque maximus est, ac consequat nibh massa ut tellus. In pharetra mattis augue, nec dignissim augue. In eu rhoncus felis, ut semper est. Phasellus iaculis ipsum velit, eget mattis velit luctus rhoncus. Quisque sit amet commodo mauris. Etiam finibus libero massa, vel posuere neque vulputate et.

                        Vivamus ut justo risus. In sit amet nulla vitae nulla posuere molestie bibendum et sem. Nullam bibendum sit amet nisl ut facilisis. Sed egestas elementum metus, sed elementum urna condimentum ac. Nulla arcu justo, egestas id velit sed, facilisis bibendum nunc. Aenean ut mauris mauris. Cras varius risus eget nisl bibendum aliquet eu ut magna. Nam facilisis semper pulvinar. Sed consequat viverra facilisis. Ut faucibus ligula massa, sed mollis ipsum molestie a. Maecenas egestas suscipit arcu at facilisis.

                        Generated 10 paragraphs, 937 words, 6247 bytes of Lorem Ipsum</p>
                    <p className='text-amber-50'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ornare enim sem, et sodales lectus pulvinar ac. Morbi massa nulla, fringilla a magna ut, mattis pretium quam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed vel risus bibendum, fringilla mi eget, molestie felis. Praesent ac mi ut nunc luctus pharetra. Etiam sodales urna quis ex lobortis placerat. Aenean eleifend, ipsum eget viverra porta, eros lectus ornare elit, vel faucibus ipsum odio sed turpis. Donec id tristique sapien. Proin purus turpis, tincidunt eu aliquet eget, congue et erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget dui magna. Ut nec mauris eleifend, pellentesque odio in, auctor nulla. Ut vel tortor id urna facilisis blandit vitae in est.

                        Donec condimentum magna commodo, imperdiet erat a, consectetur nisi. Maecenas et nibh id augue cursus aliquet. Mauris condimentum neque ac ligula bibendum consequat. Aliquam id ipsum urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet feugiat tellus. Ut ac metus id arcu mattis pretium. Aliquam dictum justo vel nulla blandit egestas. Nam dignissim ligula at velit vulputate, sed accumsan velit sollicitudin. Fusce cursus non nisi eget maximus. Donec eget tristique neque, et tempor libero. Sed ut lacinia nulla. In at nibh accumsan, pharetra risus at, bibendum neque. Nam congue tempus magna, finibus ultrices tortor commodo quis.

                        Duis lacinia leo sed ligula luctus, eget efficitur arcu imperdiet. Mauris semper pulvinar cursus. Ut tincidunt nec mauris in feugiat. Sed hendrerit, dui in feugiat vehicula, diam ipsum eleifend sapien, nec imperdiet risus orci accumsan ex. Pellentesque porta dolor at dui luctus, a auctor libero sagittis. Donec elementum ac nisl sed bibendum. Pellentesque ut cursus lectus. Donec eu volutpat purus, quis mattis tortor. Morbi eleifend cursus est, eget faucibus ante fermentum eget. Nulla nunc libero, eleifend sed interdum id, facilisis quis ipsum. Ut pretium nunc a accumsan fringilla. Suspendisse potenti. Quisque et libero tortor. Sed non sagittis enim.

                        Ut ornare hendrerit sapien, quis pulvinar elit pellentesque ut. Vivamus consequat quam quis turpis posuere, non elementum magna lobortis. Vestibulum tincidunt, urna quis fermentum bibendum, erat ante consequat velit, et molestie dolor leo vitae erat. Curabitur lacinia magna iaculis sodales semper. Aenean sed ligula et velit rutrum pulvinar ut at eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi est nulla, feugiat vitae nulla aliquet, rutrum ullamcorper ligula. Cras bibendum dignissim pharetra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ullamcorper, urna ac ornare scelerisque, erat dolor dapibus massa, sed rhoncus enim risus in tortor.

                        Nunc eget commodo nulla, a ornare odio. Integer ultrices quam in ipsum elementum convallis. Nulla feugiat, turpis nec pulvinar efficitur, lectus ante scelerisque tortor, et porta felis tellus et tellus. Nam tristique non eros a consectetur. In eu mattis velit, interdum lobortis turpis. Maecenas sed malesuada augue, sit amet aliquet lorem. In hac habitasse platea dictumst. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis ex quam, egestas et nisi nec, dapibus pulvinar nulla. Quisque at ante fermentum, auctor magna ut, viverra tellus.

                        Nullam sed est in neque volutpat commodo. Mauris vitae placerat tortor. Cras sed justo at nisi mattis rutrum. Integer fermentum nisi lacus. Praesent leo orci, laoreet in est vitae, pulvinar placerat lorem. Vestibulum tristique, ex interdum luctus commodo, lorem enim porta est, vitae faucibus velit justo nec metus. Suspendisse eleifend ultrices tincidunt. Phasellus volutpat lobortis mi eget consequat.

                        Fusce malesuada, dui vitae feugiat ornare, lacus arcu lacinia turpis, vel finibus nisi sem eu quam. Donec finibus quam quis diam malesuada auctor. Etiam quis tellus placerat, lobortis libero eget, faucibus leo. Aenean condimentum ac ipsum non euismod. Ut fermentum dui et maximus euismod. Etiam tempus fermentum mi hendrerit molestie. Proin pellentesque nisi nec mi pellentesque ullamcorper. Maecenas ac arcu nunc. Sed convallis interdum diam, faucibus posuere dui fermentum pulvinar. Sed at nunc sit amet arcu laoreet faucibus.

                        Curabitur eget aliquet lectus, ac sagittis elit. Maecenas non nulla vel ex aliquam bibendum. Duis nec ultricies leo, ac porta massa. In a libero feugiat, luctus magna vitae, egestas leo. Nunc sodales venenatis nibh vitae fermentum. Mauris varius ante in dolor eleifend, vitae molestie lorem rutrum. Morbi porttitor odio ante, a ornare felis tempus ac. Duis tempor ex at risus scelerisque, eu tristique diam iaculis. Proin condimentum tempus massa, eget sollicitudin nibh imperdiet sed.

                        Etiam pretium enim eget pellentesque sodales. Nullam at placerat massa. Nunc a ipsum nec erat blandit imperdiet ut vitae ante. Donec interdum risus non neque iaculis, et bibendum augue pretium. In nisi nisl, mollis vitae ullamcorper sit amet, tristique eu ex. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec mi ante, interdum a nibh vitae, venenatis vehicula lectus. Nullam at fringilla lacus. Integer finibus pharetra eros, in pretium lectus elementum non. Sed sed libero sollicitudin, facilisis odio in, feugiat neque. In imperdiet, purus finibus posuere accumsan, ante neque maximus est, ac consequat nibh massa ut tellus. In pharetra mattis augue, nec dignissim augue. In eu rhoncus felis, ut semper est. Phasellus iaculis ipsum velit, eget mattis velit luctus rhoncus. Quisque sit amet commodo mauris. Etiam finibus libero massa, vel posuere neque vulputate et.

                        Vivamus ut justo risus. In sit amet nulla vitae nulla posuere molestie bibendum et sem. Nullam bibendum sit amet nisl ut facilisis. Sed egestas elementum metus, sed elementum urna condimentum ac. Nulla arcu justo, egestas id velit sed, facilisis bibendum nunc. Aenean ut mauris mauris. Cras varius risus eget nisl bibendum aliquet eu ut magna. Nam facilisis semper pulvinar. Sed consequat viverra facilisis. Ut faucibus ligula massa, sed mollis ipsum molestie a. Maecenas egestas suscipit arcu at facilisis.

                        Generated 10 paragraphs, 937 words, 6247 bytes of Lorem Ipsum</p>
                </div>
            </div>
        </div>
    );
};

export default MainLayout;