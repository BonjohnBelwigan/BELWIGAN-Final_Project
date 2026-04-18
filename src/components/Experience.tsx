import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github, FileText, Briefcase, Code } from 'lucide-react';

const content = {
  experience: [
    {
      title: 'University Projects',
      company: 'University of the Cordilleras',
      period: '2024 - Present',
      description: 'Developed various web applications as part of the curriculum, focusing on React, TypeScript, and Node.js.',
      tags: ['React', 'Node.js', 'SQL']
    },
    {
      title: 'Academic Researcher',
      company: 'UC Project Group',
      period: '2023',
      description: 'Collaborated on documentation and initial prototyping for school-based system applications.',
      tags: ['Documentation', 'UI Design']
    }
  ],
  contracts: [
    {
      title: 'Junior Web Helper',
      company: 'Freelance (Remote)',
      period: '2024',
      description: 'Assisted in minor CSS fixes and layout adjustments for local business landing pages.',
      tags: ['CSS', 'HTML', 'Freelance']
    },
    {
      title: 'Community Support',
      company: 'Tech Communities',
      period: 'Ongoing',
      description: 'Actively participating in local tech groups and contributing to small open-source documentation.',
      tags: ['Community', 'Markdown']
    }
  ]
};

export default function Experience() {
  const [activeTab, setActiveTab] = useState<'experience' | 'contracts'>('experience');

  return (
    <section id="experience" className="py-24 px-6 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="glass-card"
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
          <h2 className="section-title mb-0 grow">Experience</h2>
          
          <div className="flex p-1 bg-white/5 rounded-xl border border-border w-fit">
            {['experience', 'contracts'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as any)}
                className={`px-5 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
                  activeTab === tab 
                    ? 'bg-primary text-white' 
                    : 'text-[#94a3b8] hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="relative min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="space-y-8"
            >
              {content[activeTab].map((item, index) => (
                <div key={item.title} className="border-l border-border pl-6 relative">
                   <div className="absolute left-[-5.5px] top-0 w-[11px] h-[11px] rounded-full bg-primary border-2 border-dark"></div>
                   <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-1">
                     <h4 className="text-lg font-bold text-white">{item.title}</h4>
                     <span className="item-sub font-mono">{item.period}</span>
                   </div>
                   <div className="text-primary text-sm font-semibold mb-3 uppercase tracking-wider">{item.company}</div>
                   <p className="text-sm text-[#94a3b8] leading-relaxed mb-4 max-w-2xl">{item.description}</p>
                   <div className="flex flex-wrap gap-2">
                     {item.tags.map(tag => (
                       <span key={tag} className="skill-badge uppercase font-bold tracking-widest text-[10px]">
                         {tag}
                       </span>
                     ))}
                   </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
}
