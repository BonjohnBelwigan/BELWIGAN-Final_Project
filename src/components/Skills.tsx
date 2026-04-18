import { motion } from 'motion/react';
import { 
  Code2, 
  Database, 
  Palette, 
  Globe, 
  Cpu, 
  Layers 
} from 'lucide-react';

const skillGroups = [
  {
    title: 'Frontend Development',
    icon: Palette,
    skills: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript']
  },
  {
    title: 'Backend & Data',
    icon: Database,
    skills: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB']
  },
  {
    title: 'Tools & Others',
    icon: Cpu,
    skills: ['Git', 'Docker', 'Vite', 'Unity']
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="glass-card"
      >
        <h2 className="section-title">Skills</h2>
        
        <div className="grid gap-8 md:grid-cols-3">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="space-y-4"
            >
              <h4 className="text-sm font-bold text-[#f8fafc] uppercase tracking-widest flex items-center gap-2">
                <group.icon className="w-4 h-4 text-primary" />
                {group.title}
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {group.skills.map(skill => (
                  <div key={skill} className="skill-badge uppercase font-bold tracking-tighter">
                    {skill}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
