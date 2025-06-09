import React from 'react';

const techStack = [
  { name: "TypeScript", color: "bg-blue-900" },
  { name: "Python", color: "bg-yellow-900" },
  { name: "C++", color: "bg-purple-900" },
  { name: "React", color: "bg-indigo-700" },
  { name: "Vue", color: "bg-green-900" },
  { name: "Next.js", color: "bg-black" },
  { name: "Express.js", color: "bg-neutral-800" },
  { name: "MongoDB", color: "bg-green-800" },
  { name: "PostgreSQL", color: "bg-blue-800" },
  { name: "Drizzle", color: "bg-zinc-800" },
  { name: "Tailwind CSS", color: "bg-cyan-800" },
  { name: "AWS", color: "bg-yellow-800" },
  { name: "GCP", color: "bg-blue-700" },
  { name: "Problem Solving", color: "bg-indigo-900" },
  { name: "System Design", color: "bg-pink-900" },
];

export default function AboutSection() {
  return (
    <section className="min-h-screen bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 text-white py-20 px-6 md:px-16">
      <div className="text-center mb-16">
        <p className="text-green-400 font-medium tracking-widest">ABOUT ME</p>
        <h2 className="text-4xl md:text-5xl font-bold mt-2">
          A Glimpse Into My World
        </h2>
        <p className="text-gray-400 mt-3 max-w-xl mx-auto">
          Learn more about who I am and what technologies I work with.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-12">
        {/* Background */}
        <div className="md:w-1/2 space-y-4">
          <h3 className="text-2xl font-semibold">My Background</h3>
          <p className="text-gray-300 leading-relaxed">
            Self-taught full stack developer with a passion for creating elegant digital
            solutions. While completing high school, I’ve dedicated myself to mastering
            web technologies through real-world projects and open source contributions.
          </p>
          <p className="text-gray-300 leading-relaxed">
            I thrive on solving complex problems and crafting efficient, maintainable code.
            Beyond technical skills, I bring persistence, creativity, and attention to detail
            to everything I build.
          </p>
          <p className="text-gray-300 leading-relaxed">
            When not coding, I explore new technologies and expand my understanding of software
            architecture—eager to bring my fresh perspective to professional development opportunities.
          </p>
        </div>

        {/* Tech Stack */}
        <div className="md:w-1/2 space-y-4">
          <h3 className="text-2xl font-semibold">My Tech Stack</h3>
          <div className="flex flex-wrap gap-3">
            {techStack.map((tech) => (
              <span
                key={tech.name}
                className={`text-sm px-5 py-3 rounded-full ${tech.color} text-white `}
              >
                {tech.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
