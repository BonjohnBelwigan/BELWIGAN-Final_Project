export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/5">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center font-bold text-white">B</div>
          <span className="font-display font-bold tracking-tight">Belwigan</span>
        </div>
        
        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} Bonjohn D. Belwigan. All rights reserved. Built with React & Tailwind.
        </p>
        
        <div className="flex gap-6 text-sm text-slate-500 font-medium">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#skills" className="hover:text-white transition-colors">Skills</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
}
