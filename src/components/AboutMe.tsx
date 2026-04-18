import { motion } from 'motion/react';

export default function AboutMe() {
  return (
    <section id="about" className="pt-32 pb-24 px-6 max-w-4xl mx-auto">
      <div className="space-y-12">
        <div className="flex flex-col md:flex-row gap-10 md:items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative shrink-0"
          >
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full"></div>
            <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-[2rem] overflow-hidden border-2 border-primary/50 rotate-3 hover:rotate-0 transition-transform duration-500 shadow-2xl">
              <img 
                src="https://lh3.googleusercontent.com/d/1ZyEKituS9qoqLtRA0p5GCiTmZzuAinbP" 
                alt="Bonjohn D. Belwigan"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

          <motion.header
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="border-primary border-l-4 pl-6"
          >
            <h1 className="text-5xl md:text-6xl font-display font-extrabold tracking-tight">
              Bonjohn D. <span className="gradient-text">Belwigan</span>
            </h1>
            <div className="text-primary text-sm uppercase tracking-[0.2em] mt-2 font-semibold">
              Aspiring Web Developer & Undergraduate Student
            </div>
          </motion.header>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="glass-card"
        >
          <h2 className="section-title">About Me</h2>
          <p className="text-lg text-[#94a3b8] leading-relaxed mb-8">
            I am a passionate web developer focused on building efficient and user-friendly applications. 
            Currently pursuing my degree, I enjoy exploring modern frontend technologies and creating 
            clean, impactful digital experiences.
          </p>
          
          <div className="flex gap-10 border-t border-border pt-8">
            <div className="text-center">
              <div className="text-4xl font-bold">2+</div>
              <div className="text-[10px] text-[#94a3b8] uppercase tracking-wider">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold">3</div>
              <div className="text-[10px] text-[#94a3b8] uppercase tracking-wider">Languages</div>
            </div>
            <div className="ml-auto flex items-center gap-4">
               <a 
                href="#contact" 
                className="px-8 py-3 bg-primary text-white rounded-xl font-bold hover:opacity-90 transition-all hover:scale-105 active:scale-95 whitespace-nowrap"
              >
                Let's Build Something
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
