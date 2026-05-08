import React from 'react';
import { motion } from 'motion/react';
import { Brain, Mail, Check, Phone, MapPin, ShieldCheck } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <div className="py-24 bg-white" id="patient-portal">
      <div className="max-w-7xl mx-auto px-6">
        <header className="text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="font-serif text-5xl md:text-6xl text-slate-900 mb-6"
          >
            Contact Details
          </motion.h1>
          <p className="font-sans text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Connect with Neurowave for diagnostic inquiries and clinical consultation.
          </p>
        </header>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-panel p-12 rounded-[40px] border-sky-400/10 shadow-xl shadow-slate-100/50">
              <h3 className="font-serif text-3xl text-slate-900 mb-10">Direct Channels</h3>
              <div className="space-y-10">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Phone</p>
                    <a href="tel:0828980512" className="font-serif text-2xl text-slate-900 hover:text-primary transition-colors">082 898 0512</a>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Email</p>
                    <a href="mailto:oceanneuro@gmail.com" className="font-serif text-2xl text-slate-900 hover:text-primary transition-colors break-all">oceanneuro@gmail.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Location</p>
                    <p className="font-serif text-2xl text-slate-900">32 Inanda Road, Hillcrest</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-primary text-white p-12 rounded-[40px] shadow-2xl shadow-primary/20 relative overflow-hidden group h-full flex flex-col justify-center">
                <div className="relative z-10">
                  <h4 className="font-serif text-3xl mb-6 flex items-center gap-3">
                    <ShieldCheck className="w-8 h-8 text-accent" /> Clinical Security
                  </h4>
                  <p className="text-lg opacity-80 leading-relaxed mb-8 font-sans">
                    All patient diagnostic recordings and reports are managed under strict clinical confidentiality protocols.
                  </p>
                  <div className="flex flex-wrap items-center gap-6 text-xs font-bold uppercase tracking-widest">
                     <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full"><Check className="w-4 h-4 text-accent" /> 256-bit AES</span>
                     <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full"><Check className="w-4 h-4 text-accent" /> SOC2 Ready</span>
                  </div>
                </div>
                <Brain className="absolute -bottom-10 -right-10 w-64 h-64 text-white/5 group-hover:scale-110 transition-transform duration-700" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
