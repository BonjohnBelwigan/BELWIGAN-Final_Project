import { motion } from 'motion/react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const education = [
  {
    institution: 'University of the Cordilleras',
    degree: 'Bachelor of Science in Information Technology',
    period: 'Current',
    description: 'Focusing on web technologies, database management, and software engineering principles.',
    location: 'Baguio City'
  },
  {
    institution: 'University of Baguio',
    degree: 'Secondary Education / Previous Studies',
    period: 'Previous',
    description: 'Foundational studies in computer science and general education.',
    location: 'Baguio City'
  }
];

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="glass-card"
      >
        <h2 className="section-title">Education</h2>
        
        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group border-l border-border pl-6 relative"
            >
              <div className="absolute left-[-5px] top-0 w-2 h-2 rounded-full bg-primary border border-dark group-hover:scale-150 transition-transform"></div>
              <h4 className="text-lg font-bold">{edu.institution}</h4>
              <div className="item-sub flex items-center gap-2 mt-1">
                 <span className="text-primary font-semibold">{edu.period}</span>
                 <span>&bull;</span>
                 <span>{edu.degree}</span>
              </div>
              <p className="text-sm text-[#94a3b8] mt-3 leading-relaxed max-w-2xl">
                {edu.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
