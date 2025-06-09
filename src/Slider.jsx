

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react'; // Optional icons
import img1 from './assets/portfolio1.png';
import img2 from './assets/portfolio2.png';
import img3 from './assets/portfolio3.png';

const images = [img1, img2, img3];

export default function Slider() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((index + 1) % images.length);
  const prevSlide = () => setIndex((index - 1 + images.length) % images.length);

  return (
    <section className="bg-[#0d1117] text-white py-16 px-4">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">My Projects Slider</h2>
        <p className="text-gray-400 text-sm md:text-base">Swipe through some of my work</p>
      </div>

      <div className="relative max-w-4xl mx-auto overflow-hidden rounded-2xl shadow-lg">
        <img
          src={images[index]}
          alt={`Slide ${index}`}
          className="w-full h-64 md:h-96 object-cover transition-all duration-500"
        />

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
        {images.map((_, i) => (
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
