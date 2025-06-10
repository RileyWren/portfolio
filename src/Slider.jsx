
// import React, { useState } from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';
// import { AnimatePresence, motion } from 'framer-motion';
// import img1 from './assets/portfolio1.png';
// import img2 from './assets/portfolio2.png';
// import img3 from './assets/portfolio3.png';

// const projects = [
//   {
//     image: img1,
//     title: 'Weather App',
//     description: 'A simple weather app using OpenWeather API.',
//     url: 'https://rileywren.github.io/gym-website/',
//   },
//   {
//     image: img2,
//     title: 'ToDo List',
//     description: 'Task manager with localStorage support.',
//     url: 'https://rileywren.github.io/resturant-website/',
//   },
//   {
//     image: img3,
//     title: 'Portfolio Website',
//     description: 'My personal portfolio built with React & Tailwind.',
//     url: 'https://rileywren.github.io/resturant-website/',
//   },
// ];

// const slideVariants = {
//   enter: (direction) => ({
//     x: direction > 0 ? 300 : -300,
//     opacity: 0,
//     position: 'absolute',
//   }),
//   center: {
//     x: 0,
//     opacity: 1,
//     position: 'relative',
//   },
//   exit: (direction) => ({
//     x: direction > 0 ? -300 : 300,
//     opacity: 0,
//     position: 'absolute',
//   }),
// };

// export default function Slider() {
//   const [index, setIndex] = useState(0);
//   const [direction, setDirection] = useState(0);

//   const nextSlide = () => {
//     setDirection(1);
//     setIndex((prev) => (prev + 1) % projects.length);
//   };

//   const prevSlide = () => {
//     setDirection(-1);
//     setIndex((prev) => (prev - 1 + projects.length) % projects.length);
//   };

//   const current = projects[index];

//   return (
//     <section className="relative bg-black text-white py-24 px-4 overflow-hidden">
//       {/* Background Blobs */}
//       <div className="absolute top-20 left-1/2 w-[80vw] h-[30vh] bg-gradient-to-tr from-orange-400 to-transparent opacity-20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
//       <div className="absolute bottom-20 right-1/2 w-[80vw] h-[30vh] bg-gradient-to-bl from-violet-400 to-transparent opacity-20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none" />

//       {/* Title */}
//       <div className="text-center mb-12 relative z-10">
//         <h2 className="text-4xl sm:text-5xl font-bold mb-3 drop-shadow">My Projects</h2>
//         <p className="text-gray-400 text-base">Swipe through some of my work</p>
//       </div>

//       {/* Slider with Animation */}
//       {/* <div className="relative max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-xl z-10 transition-transform duration-500 hover:scale-[1.01] group h-[28rem]"> */}
//       <div className="relative max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-xl z-10 transition-transform duration-500 hover:scale-[1.01] group h-[24rem] sm:h-[28rem]">

//         <div className="relative w-full h-full">
//           <AnimatePresence custom={direction} mode="wait">
//             <motion.a
//               key={current.title}
//               href={current.url}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="block h-full"
//               custom={direction}
//               variants={slideVariants}
//               initial="enter"
//               animate="center"
//               exit="exit"
//               transition={{ duration: 0.5, ease: 'easeInOut' }}
//             >
//               <div className="relative h-full">
//                 <img
//   src={current.image}
//   alt={current.title}
//   className="w-full h-full object-cover"


//                 />
//                 <div className="absolute inset-0 bg-black/40 backdrop-blur-sm transition duration-500 opacity-0 group-hover:opacity-100" />
//                 {/* <div className="absolute bottom-0 left-0 w-full bg-neutral-900 px-8 py-6 text-center">
//                   <h3 className="text-2xl font-semibold text-white">{current.title}</h3>
//                   <p className="text-gray-400 text-sm mt-2">{current.description}</p>
//                 </div> */}
//                 <div className="absolute bottom-0 left-0 w-full px-8 py-6 text-center backdrop-blur-md bg-white/10 border-t border-white/20 rounded-b-3xl">
//   <h3 className="text-2xl font-semibold text-white drop-shadow">{current.title}</h3>
//   <p className="text-gray-200 text-sm mt-2 drop-shadow-sm">{current.description}</p>
// </div>

//               </div>
//             </motion.a>
//           </AnimatePresence>
//         </div>

//         {/* Nav Arrows */}
//         <button
//           onClick={prevSlide}
//           className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-2 md:p-3 rounded-full backdrop-blur-md border border-white/20 shadow-md transition z-20"
//         >
//           <ChevronLeft className="w-6 h-6 text-white" />
//         </button>
//         <button
//           onClick={nextSlide}
//           className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-2 md:p-3 rounded-full backdrop-blur-md border border-white/20 shadow-md transition z-20"
//         >
//           <ChevronRight className="w-6 h-6 text-white" />
//         </button>
//       </div>

//       {/* Dots */}
//       <div className="flex justify-center mt-6 gap-3 z-10 relative">
//         {projects.map((_, i) => (
//           <button
//             key={i}
//             onClick={() => {
//               setDirection(i > index ? 1 : -1);
//               setIndex(i);
//             }}
//             className={`h-3 w-3 rounded-full transition duration-300 ${
//               i === index
//                 ? 'bg-white scale-110 shadow-md'
//                 : 'bg-white/30 hover:bg-white/50'
//             }`}
//           />
//         ))}
//       </div>
//     </section>
//   );
// }






// import React, { useState, useEffect, useRef } from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';
// import { AnimatePresence, motion } from 'framer-motion';
// import img1 from './assets/portfolio1.png';
// import img2 from './assets/portfolio2.png';
// import img3 from './assets/portfolio3.png';

// const projects = [
//   {
//     image: img1,
//     title: 'Weather App',
//     description: 'A simple weather app using OpenWeather API.',
//     url: 'https://rileywren.github.io/gym-website/',
//     code: 'https://github.com/rileywren/weather-app',
//     tags: ['React', 'API', 'CSS'],
//   },
//   {
//     image: img2,
//     title: 'ToDo List',
//     description: 'Task manager with localStorage support.',
//     url: 'https://rileywren.github.io/resturant-website/',
//     code: 'https://github.com/rileywren/todo-app',
//     tags: ['JavaScript', 'HTML', 'localStorage'],
//   },
//   {
//     image: img3,
//     title: 'Portfolio Website',
//     description: 'My personal portfolio built with React & Tailwind.',
//     url: 'https://rileywren.github.io/resturant-website/',
//     code: 'https://github.com/rileywren/portfolio',
//     tags: ['React', 'Tailwind', 'Responsive'],
//   },
// ];

// const slideVariants = {
//   enter: (direction) => ({
//     x: direction > 0 ? 300 : -300,
//     opacity: 0,
//     position: 'absolute',
//   }),
//   center: {
//     x: 0,
//     opacity: 1,
//     position: 'relative',
//   },
//   exit: (direction) => ({
//     x: direction > 0 ? -300 : 300,
//     opacity: 0,
//     position: 'absolute',
//   }),
// };

// export default function Slider() {
//   const [index, setIndex] = useState(0);
//   const [direction, setDirection] = useState(0);
//   const [isHovered, setIsHovered] = useState(false);
//   const timeoutRef = useRef(null);

//   const nextSlide = () => {
//     setDirection(1);
//     setIndex((prev) => (prev + 1) % projects.length);
//   };

//   const prevSlide = () => {
//     setDirection(-1);
//     setIndex((prev) => (prev - 1 + projects.length) % projects.length);
//   };

//   const current = projects[index];

//   // Autoplay every 5s (pause when hovered)
//   useEffect(() => {
//     if (!isHovered) {
//       timeoutRef.current = setTimeout(nextSlide, 5000);
//     }
//     return () => clearTimeout(timeoutRef.current);
//   }, [index, isHovered]);

//   return (
//     <section
//       className="relative bg-black text-white py-24 px-4 overflow-hidden"
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       {/* Blobs */}
//       <div className="absolute top-20 left-1/2 w-[80vw] h-[30vh] bg-gradient-to-tr from-orange-400 to-transparent opacity-20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
//       <div className="absolute bottom-20 right-1/2 w-[80vw] h-[30vh] bg-gradient-to-bl from-violet-400 to-transparent opacity-20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none" />

//       {/* Header */}
//       <div className="text-center mb-12 relative z-10">
//         <h2 className="text-4xl sm:text-5xl font-bold mb-3 drop-shadow">My Projects</h2>
//         <p className="text-gray-400 text-base">Swipe through some of my work</p>
//       </div>

//       {/* Slider */}
//       <div className="relative max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-xl z-10 transition-transform duration-500 hover:scale-[1.01] group h-[24rem] sm:h-[28rem]">
//         <div className="relative w-full h-full">
//           <AnimatePresence custom={direction} mode="wait">
//             <motion.a
//               key={current.title}
//               href={current.url}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="block h-full"
//               custom={direction}
//               variants={slideVariants}
//               initial="enter"
//               animate="center"
//               exit="exit"
//               transition={{ duration: 0.5, ease: 'easeInOut' }}
//             >
//               <div className="relative h-full overflow-hidden">
//                 <img
//                   src={current.image}
//                   alt={current.title}
//                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
//                   loading="lazy"
//                 />
//                 {/* <div className="absolute inset-0 bg-black/40 backdrop-blur-sm transition duration-500 opacity-0 group-hover:opacity-100" /> */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent backdrop-blur-[2px] transition-opacity duration-500 opacity-0 group-hover:opacity-100 z-10" />

//                 <div className="absolute bottom-0 left-0 w-full px-8 py-6 text-center backdrop-blur-md bg-white/10 border-t border-white/20 rounded-b-3xl">
//                   <h3 className="text-2xl font-semibold text-white drop-shadow">{current.title}</h3>
//                   <p className="text-gray-200 text-sm mt-2 drop-shadow-sm">{current.description}</p>
//                   {/* Tags */}
//                   <div className="flex justify-center gap-2 flex-wrap mt-3">
//                     {current.tags.map((tag, i) => (
//                       <span key={i} className="bg-white/10 border border-white/20 px-2 py-1 rounded-full text-xs text-gray-200">
//                         {tag}
//                       </span>
//                     ))}
//                   </div>
//                   {/* View Code */}
//                   {current.code && (
//                     <a
//                       href={current.code}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="inline-block mt-3 text-sm text-orange-300 underline hover:text-orange-400 transition"
//                     >
//                       View Code ↗
//                     </a>
//                   )}
//                 </div>
//               </div>
//             </motion.a>
//           </AnimatePresence>
//         </div>

//         {/* Arrows */}
//         <button
//           onClick={prevSlide}
//           className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-2 md:p-3 rounded-full backdrop-blur-md border border-white/20 shadow-md transition z-20"
//         >
//           <ChevronLeft className="w-6 h-6 text-white" />
//         </button>
//         <button
//           onClick={nextSlide}
//           className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-2 md:p-3 rounded-full backdrop-blur-md border border-white/20 shadow-md transition z-20"
//         >
//           <ChevronRight className="w-6 h-6 text-white" />
//         </button>
//       </div>

//       {/* Dots & Slide Counter */}
//       <div className="flex flex-col items-center mt-6 z-10 relative">
//         <div className="flex gap-3 mb-2">
//           {projects.map((_, i) => (
//             <button
//               key={i}
//               onClick={() => {
//                 setDirection(i > index ? 1 : -1);
//                 setIndex(i);
//               }}
//               className={`h-3 w-3 rounded-full transition duration-300 ${
//                 i === index ? 'bg-white scale-110 shadow-md' : 'bg-white/30 hover:bg-white/50'
//               }`}
//             />
//           ))}
//         </div>
//         <span className="text-xs text-gray-400">{index + 1} / {projects.length}</span>
//       </div>
//     </section>
//   );
// }


// import React, { useState, useEffect, useRef } from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';
// import { AnimatePresence, motion } from 'framer-motion';
// import img1 from './assets/portfolio1.png';
// import img2 from './assets/portfolio2.png';
// import img3 from './assets/portfolio3.png';

// const projects = [
//   {
//     image: img1,
//     title: 'Weather App',
//     description: 'A simple weather app using OpenWeather API.',
//     url: 'https://rileywren.github.io/gym-website/',
//     code: 'https://github.com/rileywren/weather-app',
//     tags: ['React', 'API', 'CSS'],
//   },
//   {
//     image: img2,
//     title: 'ToDo List',
//     description: 'Task manager with localStorage support.',
//     url: 'https://rileywren.github.io/resturant-website/',
//     code: 'https://github.com/rileywren/todo-app',
//     tags: ['JavaScript', 'HTML', 'localStorage'],
//   },
//   {
//     image: img3,
//     title: 'Portfolio Website',
//     description: 'My personal portfolio built with React & Tailwind.',
//     url: 'https://rileywren.github.io/resturant-website/',
//     code: 'https://github.com/rileywren/portfolio',
//     tags: ['React', 'Tailwind', 'Responsive'],
//   },
// ];

// const slideVariants = {
//   enter: (direction) => ({
//     x: direction > 0 ? 300 : -300,
//     opacity: 0,
//     position: 'absolute',
//     width: '100%', // Ensure it takes full width during transition
//     height: '100%', // Ensure it takes full height during transition
//   }),
//   center: {
//     x: 0,
//     opacity: 1,
//     position: 'relative',
//     width: '100%',
//     height: '100%',
//   },
//   exit: (direction) => ({
//     x: direction > 0 ? -300 : 300,
//     opacity: 0,
//     position: 'absolute',
//     width: '100%',
//     height: '100%',
//   }),
// };

// export default function Slider() {
//   const [index, setIndex] = useState(0);
//   const [direction, setDirection] = useState(0);
//   const [isHovered, setIsHovered] = useState(false);
//   const timeoutRef = useRef(null);

//   const nextSlide = () => {
//     setDirection(1);
//     setIndex((prev) => (prev + 1) % projects.length);
//   };

//   const prevSlide = () => {
//     setDirection(-1);
//     setIndex((prev) => (prev - 1 + projects.length) % projects.length);
//   };

//   const current = projects[index];

//   // Autoplay every 5s (pause when hovered)
//   useEffect(() => {
//     if (!isHovered) {
//       timeoutRef.current = setTimeout(nextSlide, 5000);
//     }
//     return () => clearTimeout(timeoutRef.current);
//   }, [index, isHovered]);

//   return (
//     <section
//       className="relative bg-black text-white py-24 px-4 overflow-hidden"
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       {/* Blobs */}
//       <div className="absolute top-20 left-1/2 w-[80vw] h-[30vh] bg-gradient-to-tr from-orange-400 to-transparent opacity-20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
//       <div className="absolute bottom-20 right-1/2 w-[80vw] h-[30vh] bg-gradient-to-bl from-violet-400 to-transparent opacity-20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none" />

//       {/* Header */}
//       <div className="text-center mb-12 relative z-10">
//         <h2 className="text-4xl sm:text-5xl font-bold mb-3 drop-shadow">My Projects</h2>
//         <p className="text-gray-400 text-base">Swipe through some of my work</p>
//       </div>

//       {/* Slider */}
//       <div className="relative max-w-5xl mx-auto rounded-3xl shadow-xl z-10 transition-transform duration-500 group h-[38rem] sm:h-[28rem] flex flex-col sm:flex-row overflow-hidden">
//         <AnimatePresence custom={direction} mode="wait">
//           <motion.div
//             key={current.title}
//             className="flex flex-col sm:flex-row w-full h-full"
//             custom={direction}
//             variants={slideVariants}
//             initial="enter"
//             animate="center"
//             exit="exit"
//             transition={{ duration: 0.5, ease: 'easeInOut' }}
//           >
//             {/* Image Section */}
//             <div className="relative w-full sm:w-1/2 h-1/2 sm:h-full overflow-hidden">
//               <a
//                 href={current.url}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="block h-full w-full"
//               >
//                 <img
//                   src={current.image}
//                   alt={current.title}
//                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
//                   loading="lazy"
//                 />
//               </a>
//             </div>

//             {/* Content Section */}
//             <div className="w-full sm:w-1/2 h-1/2 sm:h-full p-6 sm:p-8 flex flex-col justify-center bg-white/5 border-t border-white/20 sm:border-t-0 sm:border-l rounded-b-3xl sm:rounded-bl-none sm:rounded-r-3xl">
//               <h3 className="text-xl sm:text-2xl font-semibold text-white drop-shadow">{current.title}</h3>
//               <p className="text-gray-200 text-sm mt-2 drop-shadow-sm">{current.description}</p>
//               {/* Tags */}
//               <div className="flex justify-start gap-2 flex-wrap mt-3">
//                 {current.tags.map((tag, i) => (
//                   <span key={i} className="bg-white/10 border border-white/20 px-2 py-1 rounded-full text-xs text-gray-200">
//                     {tag}
//                   </span>
//                 ))}
//               </div>
//               {/* View Code */}
//               {current.code && (
//                 <a
//                   href={current.code}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-block mt-3 text-sm text-orange-300 underline hover:text-orange-400 transition  p-4"
//                 >
//                   View Code ↗
//                 </a>
//               )}
//             </div>
//           </motion.div>
//         </AnimatePresence>

//         {/* Arrows */}
//         <button
//           onClick={prevSlide}
//           className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-2 md:p-3 rounded-full backdrop-blur-md border border-white/20 shadow-md transition z-20"
//         >
//           <ChevronLeft className="w-6 h-6 text-white" />
//         </button>
//         <button
//           onClick={nextSlide}
//           className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-2 md:p-3 rounded-full backdrop-blur-md border border-white/20 shadow-md transition z-20"
//         >
//           <ChevronRight className="w-6 h-6 text-white" />
//         </button>
//       </div>

//       {/* Dots & Slide Counter */}
//       <div className="flex flex-col items-center mt-6 z-10 relative">
//         <div className="flex gap-3 mb-2">
//           {projects.map((_, i) => (
//             <button
//               key={i}
//               onClick={() => {
//                 setDirection(i > index ? 1 : -1);
//                 setIndex(i);
//               }}
//               className={`h-3 w-3 rounded-full transition duration-300 ${
//                 i === index ? 'bg-white scale-110 shadow-md' : 'bg-white/30 hover:bg-white/50'
//               }`}
//             />
//           ))}
//         </div>
//         <span className="text-xs text-gray-400">{index + 1} / {projects.length}</span>
//       </div>
//     </section>
//   );
// }



import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import img1 from './assets/portfolio1.png';
import img2 from './assets/portfolio2.png';
import img3 from './assets/portfolio3.png';

const projects = [
  {
    image: img1,
    title: 'Weather App',
    description: 'A simple weather app using OpenWeather API.',
    url: 'https://rileywren.github.io/gym-website/',
    code: 'https://github.com/rileywren/weather-app',
    tags: ['React', 'API', 'CSS'],
  },
  {
    image: img2,
    title: 'ToDo List',
    description: 'Task manager with localStorage support.',
    url: 'https://rileywren.github.io/resturant-website/',
    code: 'https://github.com/rileywren/todo-app',
    tags: ['JavaScript', 'HTML', 'localStorage'],
  },
  {
    image: img3,
    title: 'Portfolio Website',
    description: 'My personal portfolio built with React & Tailwind.',
    url: 'https://rileywren.github.io/resturant-website/',
    code: 'https://github.com/rileywren/portfolio',
    tags: ['React', 'Tailwind', 'Responsive'],
  },
];

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
    position: 'absolute',
    width: '100%', // Ensure it takes full width during transition
    height: '100%', // Ensure it takes full height during transition
  }),
  center: {
    x: 0,
    opacity: 1,
    position: 'relative',
    width: '100%',
    height: '100%',
  },
  exit: (direction) => ({
    x: direction > 0 ? -300 : 300,
    opacity: 0,
    position: 'absolute',
    width: '100%',
    height: '100%',
  }),
};

export default function Slider() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const timeoutRef = useRef(null);

  const nextSlide = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const current = projects[index];

  // Autoplay every 5s (pause when hovered)
  useEffect(() => {
    if (!isHovered) {
      timeoutRef.current = setTimeout(nextSlide, 5000);
    }
    return () => clearTimeout(timeoutRef.current);
  }, [index, isHovered]);

  return (
    <section
      className="relative bg-black text-white py-24 px-4 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Blobs */}
      <div className="absolute top-20 left-1/2 w-[80vw] h-[30vh] bg-gradient-to-tr from-orange-400 to-transparent opacity-20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-20 right-1/2 w-[80vw] h-[30vh] bg-gradient-to-bl from-violet-400 to-transparent opacity-20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none" />

      {/* Header */}
      <div className="text-center mb-12 relative z-10">
        <h2 className="text-4xl sm:text-5xl font-bold mb-3 drop-shadow">My Projects</h2>
        <p className="text-gray-400 text-base">Swipe through some of my work</p>
      </div>

      {/* Slider */}
      {/* Adjusted height for mobile: h-[50rem] to allow for vertical stacking */}
      <div className="relative max-w-5xl mx-auto rounded-3xl shadow-xl z-10 transition-transform duration-500 group h-[50rem] sm:h-[28rem] flex flex-col overflow-hidden">
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={current.title}
            className="flex flex-col w-full h-full" // Changed from sm:flex-row to flex-col for mobile stacking
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            {/* Image Section */}
            {/* Adjusted image height for mobile: h-2/3 */}
            <div className="relative w-full h-2/3 sm:h-full overflow-hidden">
              <a
                href={current.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full w-full"
              >
                <img
                  src={current.image}
                  alt={current.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </a>
            </div>

            {/* Content Section */}
            {/* Adjusted content height for mobile: h-1/3 and border styles */}
            <div className="w-full h-1/3 sm:h-full p-6 sm:p-8 flex flex-col justify-center bg-white/5 border-t border-white/20 rounded-b-3xl sm:border-t-0 sm:border-l sm:rounded-bl-none sm:rounded-r-3xl">
              <h3 className="text-xl sm:text-2xl font-semibold text-white drop-shadow">{current.title}</h3>
              <p className="text-gray-200 text-sm mt-2 drop-shadow-sm">{current.description}</p>
              {/* Tags */}
              <div className="flex justify-start gap-2 flex-wrap mt-3">
                {current.tags.map((tag, i) => (
                  <span key={i} className="bg-white/10 border border-white/20 px-2 py-1 rounded-full text-xs text-gray-200">
                    {tag}
                  </span>
                ))}
              </div>
              {/* View Code */}
              {current.code && (
                <a
                  href={current.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 text-sm text-orange-300 underline hover:text-orange-400 transition  p-4"
                >
                  View Code ↗
                </a>
              )}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Arrows */}
        {/* Adjusted arrow positioning for mobile to be less intrusive over the content */}
        <button
          onClick={prevSlide}
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-2 md:p-3 rounded-full backdrop-blur-md border border-white/20 shadow-md transition z-20"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-2 md:p-3 rounded-full backdrop-blur-md border border-white/20 shadow-md transition z-20"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
      </div>

      {/* Dots & Slide Counter */}
      <div className="flex flex-col items-center mt-6 z-10 relative">
        <div className="flex gap-3 mb-2">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > index ? 1 : -1);
                setIndex(i);
              }}
              className={`h-3 w-3 rounded-full transition duration-300 ${
                i === index ? 'bg-white scale-110 shadow-md' : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
        <span className="text-xs text-gray-400">{index + 1} / {projects.length}</span>
      </div>
    </section>
  );
}