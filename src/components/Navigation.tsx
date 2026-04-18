import { motion } from 'motion/react';
import { User, GraduationCap, Briefcase, Code2, Mail } from 'lucide-react';

const navItems = [
  { name: 'About', href: '#about', icon: User },
  { name: 'Education', href: '#education', icon: GraduationCap },
  { name: 'Experience', href: '#experience', icon: Briefcase },
  { name: 'Skills', href: '#skills', icon: Code2 },
  { name: 'Contact', href: '#contact', icon: Mail },
];

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050507]/80 backdrop-blur-xl border-b border-border shadow-2xl">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-6 h-16">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center font-bold text-white shadow-[0_0_20px_rgba(59,130,246,0.5)]">B</div>
          <span className="font-display font-bold tracking-tight text-white hidden sm:block">Belwigan</span>
        </div>
        
        <div className="flex items-center gap-1 sm:gap-2">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="flex items-center gap-2 px-3 py-2 text-xs font-bold uppercase tracking-widest text-[#94a3b8] hover:text-white transition-all rounded-lg hover:bg-white/5"
            >
              <item.icon className="w-4 h-4" />
              <span className="hidden lg:inline">{item.name}</span>
            </a>
          ))}
        </div>
        
        <div className="hidden md:block">
          <a href="#contact" className="px-5 py-2 bg-primary text-white text-[10px] uppercase font-bold tracking-[0.2em] rounded-lg hover:opacity-90 transition-all">
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
}
