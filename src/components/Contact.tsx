import { motion } from 'motion/react';
import { Mail, Github, Linkedin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="glass-card"
      >
        <h2 className="section-title">Contact</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-sm">
                <span className="text-primary font-bold uppercase tracking-widest w-20">Email:</span>
                <a href="mailto:belwiganbonjohn@gmail.com" className="text-[#94a3b8] hover:text-white transition-colors">belwiganbonjohn@gmail.com</a>
              </div>
              <div className="flex items-center gap-4 text-sm">
                <span className="text-primary font-bold uppercase tracking-widest w-20">GitHub:</span>
                <a href="#" className="text-[#94a3b8] hover:text-white transition-colors">github.com/belwigan</a>
              </div>
              <div className="flex items-center gap-4 text-sm">
                <span className="text-primary font-bold uppercase tracking-widest w-20">Location:</span>
                <span className="text-[#94a3b8]">Baguio City, Philippines</span>
              </div>
            </div>
            
            <div className="pt-6 border-t border-border">
              <p className="text-sm italic text-[#94a3b8]">
                "Let's build something amazing together."
              </p>
            </div>
          </div>
          
          <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="text" 
              placeholder="Name"
              className="w-full px-4 py-3 bg-white/5 border border-border rounded-lg focus:outline-none focus:border-primary/50 transition-all text-sm"
            />
            <input 
              type="email" 
              placeholder="Email"
              className="w-full px-4 py-3 bg-white/5 border border-border rounded-lg focus:outline-none focus:border-primary/50 transition-all text-sm"
            />
            <textarea 
              rows={3}
              placeholder="Message"
              className="w-full px-4 py-3 bg-white/5 border border-border rounded-lg focus:outline-none focus:border-primary/50 transition-all text-sm resize-none"
            ></textarea>
            <button className="w-full py-3 bg-primary text-white rounded-lg font-bold text-xs uppercase tracking-widest hover:opacity-90 transition-all active:scale-95">
              Send Message
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
}
