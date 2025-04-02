// "use client";
// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollSmoother } from "gsap/ScrollSmoother";

// gsap.registerPlugin(ScrollSmoother);

// export default function SmoothScrollWrapper({ children }) {
//     const wrapperRef = useRef(null);
//     const contentRef = useRef(null);

//     useEffect(() => {
//         if (typeof window !== "undefined" && wrapperRef.current && contentRef.current) {
//             let smoother = ScrollSmoother.create({
//                 wrapper: wrapperRef.current,
//                 content: contentRef.current,
//                 smooth: 2, // Adjust for smoother scrolling
//                 effects: true, // Enables scroll-based animations
//             });

//             return () => {
//                 if (smoother) smoother.kill();
//             };
//         }
//     }, []);

//     return (
//         <div ref={wrapperRef} className="scroll-wrapper">
//             <div ref={contentRef} className="scroll-content">{children}</div>
//         </div>
//     );
// }
