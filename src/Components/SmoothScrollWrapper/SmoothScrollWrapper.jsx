// "use client";
// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollSmoother } from "gsap/ScrollSmoother";

// gsap.registerPlugin(ScrollSmoother);

// export default function SmoothScrollWrapper({ children }) {
//     const scrollRef = useRef(null);

//     useEffect(() => {
//         let smoother = ScrollSmoother.create({
//             wrapper: scrollRef.current,
//             content: scrollRef.current.children[0],
//             smooth: 2, // Adjust smoothness (higher = smoother)
//         });

//         return () => {
//             if (smoother) smoother.kill();
//         };
//     }, []);

//     return (
//         <div ref={scrollRef} className="scroll-wrapper">
//             <div className="scroll-content">{children}</div>
//         </div>
//     );
// }
