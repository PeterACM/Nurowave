import React from 'react';
import { BrainCircuit, Microscope, FileText, Send } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-sky-400/20">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        <div className="space-y-6">
          <p className="font-sans text-sm max-w-xs leading-relaxed opacity-70">
            Leading the future of neurophysiology with precision, empathy, and advanced clinical research. Our laboratory is dedicated to uncovering the rhythms of the mind.
          </p>
          <div className="flex gap-4">
            <BrainCircuit className="w-5 h-5 text-sky-400 opacity-60" />
            <Microscope className="w-5 h-5 text-sky-400 opacity-60" />
            <FileText className="w-5 h-5 text-sky-400 opacity-60" />
          </div>
        </div>
        
        <div className="space-y-6">
          <h4 className="text-white font-serif text-lg">Contact Us</h4>
          <div className="space-y-3 text-sm">
            <div className="flex items-center gap-3">
              <span className="text-sky-400 font-bold uppercase tracking-widest text-[10px]">Phone:</span>
              <a href="tel:0828980512" className="hover:text-sky-400 transition-colors">082 898 0512</a>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sky-400 font-bold uppercase tracking-widest text-[10px]">Email:</span>
              <a href="mailto:oceanneuro@gmail.com" className="hover:text-sky-400 transition-colors">oceanneuro@gmail.com</a>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-sky-400 font-bold uppercase tracking-widest text-[10px] mt-1">Location:</span>
              <span className="text-slate-400 leading-relaxed text-sm">
                32 Inanda Road, Hillcrest, 3610,<br />
                KwaZulu-Natal, South Africa
              </span>
            </div>
          </div>
          <p className="text-xs opacity-50 leading-relaxed pt-2">
            © {new Date().getFullYear()} Neurowave Inc. Clinical Neurophysiology. All rights reserved. Precision in Neurophysiology.
          </p>
        </div>
      </div>
      <div className="w-full h-1 bg-gradient-to-r from-transparent via-sky-400/20 to-transparent"></div>
    </footer>
  );
};
