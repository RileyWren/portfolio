

// import React, { useState } from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react'; // Optional icons
// import img1 from './assets/portfolio1.png';
// import img2 from './assets/portfolio2.png';
// import img3 from './assets/portfolio3.png';

// const images = [img1, img2, img3];

// export default function Slider() {
//   const [index, setIndex] = useState(0);

//   const nextSlide = () => setIndex((index + 1) % images.length);
//   const prevSlide = () => setIndex((index - 1 + images.length) % images.length);

//   return (
//     <section className="bg-[#0d1117] text-white py-16 px-4">
//       <div className="text-center mb-8">
//         <h2 className="text-3xl md:text-4xl font-bold mb-2">My Projects Slider</h2>
//         <p className="text-gray-400 text-sm md:text-base">Swipe through some of my work</p>
//       </div>

//       <div className="relative max-w-4xl mx-auto overflow-hidden rounded-2xl shadow-lg">
//         <img
//           src={images[index]}
//           alt={`Slide ${index}`}
//           className="w-full h-64 md:h-160 object-cover transition-all duration-500"
//         />

//         <button
//           onClick={prevSlide}
//           className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 p-2 md:p-3 rounded-full transition"
//         >
//           <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
//         </button>

//         <button
//           onClick={nextSlide}
//           className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 p-2 md:p-3 rounded-full transition"
//         >
//           <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
//         </button>
//       </div>

//       <div className="flex justify-center mt-4 gap-2">
//         {images.map((_, i) => (
//           <button
//             key={i}
//             onClick={() => setIndex(i)}
//             className={`h-2 w-2 md:h-3 md:w-3 rounded-full ${
//               i === index ? 'bg-white' : 'bg-gray-500'
//             } transition`}
//           />
//         ))}
//       </div>
//     </section>
//   );
// }






import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import img1 from './assets/portfolio1.png';
import img2 from './assets/portfolio2.png';
import img3 from './assets/portfolio3.png';

const projects = [
  {
    image: img1,
    title: 'Weather App',
    description: 'A simple weather app using OpenWeather API.',
    url: 'https://rileywren.github.io/gym-website/',
  },
  {
    image: img2,
    title: 'ToDo List',
    description: 'Task manager with localStorage support.',
    url: 'https://rileywren.github.io/resturant-website/',
  },
  {
    image: img3,
    title: 'Portfolio Website',
    description: 'My personal portfolio built with React & Tailwind.',
    url: 'https://rileywren.github.io/resturant-website/',
  },
];

export default function Slider() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((index + 1) % projects.length);
  const prevSlide = () => setIndex((index - 1 + projects.length) % projects.length);

  const current = projects[index];

  return (
    <section className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 text-white py-16 px-4">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">My Projects Slider</h2>
        <p className="text-gray-400 text-sm md:text-base">Swipe through some of my work</p>
      </div>

      <div className="relative max-w-4xl mx-auto overflow-hidden rounded-2xl shadow-lg">
        <a href={current.url} target="_blank" rel="noopener noreferrer" className="block">
          <img
            src={current.image}
            alt={current.title}
            className="w-full h-64 md:h-160 object-cover transition-all duration-500"
          />
          <div className="bg-[#161b22] px-6 py-4">
            <h3 className="text-xl font-semibold">{current.title}</h3>
            <p className="text-gray-400 text-sm">{current.description}</p>
          </div>
        </a>

        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 p-2 md:p-3 rounded-full transition"
        >
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 p-2 md:p-3 rounded-full transition"
        >
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
        </button>
      </div>

      <div className="flex justify-center mt-4 gap-2">
        {projects.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2 w-2 md:h-3 md:w-3 rounded-full ${
              i === index ? 'bg-white' : 'bg-gray-500'
            } transition`}
          />
        ))}
      </div>
    </section>
  );
}
