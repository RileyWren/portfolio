
import { motion, useViewportScroll, useTransform } from 'framer-motion';

const techs = [
  "React", "Next.js", "Node.js", "Express", "MongoDB", "Tailwind CSS" 
  // I added Tailwind since it's used in your components. Feel free to change!
];

export default function AboutSection() {
  // Framer Motion hooks for parallax effect can remain the same.
  const { scrollY } = useViewportScroll();
  const topBlurY = useTransform(scrollY, [0, 500], [0, -80]);
  const bottomBlurY = useTransform(scrollY, [0, 500], [0, 80]);

  return (
    <section className="relative w-full min-h-screen py-24 bg-black text-white flex flex-col justify-center items-center px-6 md:px-12 overflow-hidden">
      {/* Background Blurs with Parallax */}
      <motion.div 
        style={{ y: topBlurY }}
        className="absolute top-0 left-0 w-[60vw] h-[40vh] bg-gradient-to-tr from-violet-500 to-transparent opacity-30 rounded-full blur-3xl -translate-x-1/3 -translate-y-1/3 pointer-events-none" 
      />
      <motion.div 
        style={{ y: bottomBlurY }}
        className="absolute bottom-0 right-0 w-[60vw] h-[40vh] bg-gradient-to-bl from-orange-400 to-transparent opacity-30 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none" 
      />

      <div className="z-10 max-w-4xl text-center flex flex-col gap-16">
        {/* About Me Section - REWRITTEN */}
        <motion.div
          className="flex flex-col gap-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.7 }}
        >
          <h3 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white drop-shadow-md">
            A Partner in Your Vision
          </h3>
          {/*
            OLD: A tech-focused bio.
            NEW: A client-focused philosophy. It explains your purpose is to solve their business problem.
          */}
          <p className="text-white/70 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
            My work is more than just code; it's about building a digital asset that serves as your hardest-working employee. I collaborate closely with local businesses and professionals to understand their unique needs, then translate those goals into a website that builds credibility and drives growth around the clock.
          </p>
        </motion.div>

        {/* The Guarantee Section - NEW */}
        <motion.div
          className="flex flex-col gap-7 bg-white/5 border border-white/10 rounded-2xl p-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true, amount: 0.8 }}
        >
          <h4 className="text-2xl sm:text-4xl font-extrabold text-violet-400">
            A Risk-Free Partnership
          </h4>
          {/*
            This is the professional way to say "don't pay if you don't like it".
            It builds immense trust and shows confidence.
          */}
          <p className="text-white/80 text-base sm:text-lg leading-relaxed">
            {/* Trust is the foundation of any great partnership. That's why I offer a simple promise: if you are not 100% satisfied with the final design we agree upon, you don't pay. It's that simple. I only succeed when you have a website you are proud to share. */}
          If you’re not 100% satisfied with the final website we launch together, you don’t pay. No hard feelings — just a promise built on trust and results.
          </p>
        </motion.div>

        {/* Tech Stack Section - RECONTEXTUALIZED */}
        <motion.div
          className="flex flex-col gap-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, amount: 0.7 }}
        >
          <h3 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white drop-shadow-md">
            My Tech Stack
          </h3>
          {/*
            This paragraph gives context to the tech list. It translates the "what" (tech) into the "why" (client benefit).
          */}
          <p className="text-white/70 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
            To deliver on my promise of a fast, reliable, and future-proof website, I use a carefully selected set of modern technologies.
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 pt-4">
            {techs.map((tech, idx) => (
              <motion.div
                key={idx}
                className="px-5 py-2 border border-white/20 rounded-full text-white/80 backdrop-blur-lg text-sm sm:text-base"
                whileHover={{ scale: 1.08, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                transition={{ duration: 0.2 }}
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}