import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ClipboardList, Shirt, Clock, Activity, Wind, Sparkles, ArrowRight, BrainCircuit, Smile, Moon, Timer } from 'lucide-react';

export const Process: React.FC = () => {
  const steps = [
    { 
      title: 'Doctor Referral', 
      icon: <Smile />, 
      description: 'This is where they get a doctor referral to come to our clinic.',
    },
    { 
      title: 'Patient Attire', 
      icon: <Shirt />, 
      description: 'The patient should be aware that the test is mildly uncomfortable due to the full-polysomnography procedure. Comfortable clothing preferably for sleep purposes is recommended.',
    },
    { 
      title: 'Start Time', 
      icon: <Timer />, 
      description: 'Tests are connected between 5PM and 9PM depending on the arranged time.',
    },
    { 
      title: 'Standard Process', 
      icon: <Activity />, 
      description: 'Electrode Paste, Glue, Micropore/ Transpore /Hyperflex and bandages are used for ensuring durability and quality data through-out the test night. This is removed after the test night using acetone.',
    },
    { 
      title: 'CPAP therapy', 
      icon: <Moon />, 
      description: 'If CPAP therapy is involved the patient will be informed and may be required to sleep an additional night with a CPAP machine. The CPAP machine distribution company Health sleep will be contacted to assist the patient.',
    },
  ];

  return (
    <div className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <header className="text-center mb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full font-bold text-xs uppercase tracking-widest mb-6"
          >
            <Sparkles className="w-4 h-4" /> The Neurowave Method
          </motion.div>
          <h1 className="font-serif text-5xl md:text-7xl text-slate-900 mb-8">The Patients Journey</h1>
        </header>

        <div className="relative">
          {/* Vertical Timeline Desktop Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-slate-200 hidden lg:block"></div>
          
          <div className="space-y-32">
            {steps.map((step, index) => (
              <motion.div 
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
                className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 relative ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 -ml-3 w-6 h-6 rounded-full bg-white border-4 border-primary z-20 hidden lg:block shadow-md"></div>
                
                <div className="flex-1 w-full z-10">
                   <div className="bg-white p-8 md:p-12 rounded-[40px] shadow-2xl shadow-slate-200/50 border border-slate-100 hover:border-primary/20 transition-all group">
                      <div className="flex items-center gap-6 mb-8">
                        <div className="w-20 h-20 bg-primary/5 rounded-3xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                          {React.cloneElement(step.icon as React.ReactElement, { className: "w-10 h-10" })}
                        </div>
                        <div>
                          <p className="font-sans font-bold text-primary uppercase tracking-widest text-xs mb-1">Phase 0{index + 1}</p>
                          <h3 className="font-serif text-3xl text-slate-900 group-hover:text-primary transition-colors">{step.title}</h3>
                        </div>
                      </div>
                      <p className="font-sans text-slate-600 leading-relaxed text-lg">
                        {step.description}
                      </p>
                   </div>
                </div>

                <div className="flex-1 w-full z-10">
                  <div className="relative aspect-[4/3] lg:aspect-video rounded-[32px] overflow-hidden shadow-2xl group border-8 border-white bg-slate-100 p-8 flex items-center justify-center">
                    <ProcessStepAnimation stepIndex={index} icon={step.icon} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA section */}
        <div className="mt-32 text-center pb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-slate-900 rounded-[48px] p-12 md:p-20 text-white relative overflow-hidden"
          >
            <div className="relative z-10">
              <h2 className="font-serif text-4xl md:text-6xl mb-8">Ready to Begin?</h2>
              <p className="text-white/60 mb-12 max-w-xl mx-auto text-lg">
                Your neurological wellness starts with a single step. Book your consultation through our specialist portal.
              </p>
              <Link 
                to="/contact"
                className="inline-flex items-center gap-3 bg-accent text-slate-950 px-12 py-5 rounded-full font-bold text-lg hover:bg-white transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-accent/20"
              >
                Book Now <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <Activity className="absolute -top-10 -left-10 w-64 h-64 text-white/5" />
            <BrainCircuit className="absolute -bottom-10 -right-10 w-64 h-64 text-white/5" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const ProcessStepAnimation: React.FC<{ stepIndex: number, icon: React.ReactNode }> = ({ stepIndex, icon }) => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #0ea5e9 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
      </div>
      
      {/* Background pulses */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute w-64 h-64 bg-primary rounded-full blur-[60px]"
      />

      <motion.div
        animate={stepIndex === 0 ? {
          scale: [1, 1.1, 1],
          y: [0, -5, 0],
        } : stepIndex === 2 ? {
          rotate: [0, 360],
        } : stepIndex === 4 ? {
          scale: [1, 1.05, 1],
          opacity: [0.8, 1, 0.8],
        } : {
          scale: [1, 1.1, 1],
          rotate: [2, -2, 2],
        }}
        transition={{ 
          duration: stepIndex === 2 ? 10 : 4, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="text-primary relative z-10"
      >
        {React.cloneElement(icon as React.ReactElement, { className: "w-48 h-48 stroke-[1.5]" })}
      </motion.div>

      {/* Dynamic elements based on phase */}
      {stepIndex === 0 && ( /* Smile Animation - additional pulses */
        <div className="absolute inset-0 flex items-center justify-center">
          {[...Array(3)].map((_, i) => (
            <motion.div 
              key={i}
              animate={{ scale: [1, 2], opacity: [0.3, 0] }}
              transition={{ duration: 3, delay: i * 1, repeat: Infinity }}
              className="absolute w-40 h-40 border-2 border-primary/20 rounded-full"
            />
          ))}
        </div>
      )}

      {stepIndex === 2 && ( /* Time Animation - spinning clock hands effect or orbital dots */
        <div className="absolute inset-0 flex items-center justify-center">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="w-80 h-80 border-t border-primary/10 rounded-full relative"
            >
              <div className="absolute top-0 left-1/2 -ml-1 w-2 h-2 bg-primary rounded-full" />
            </motion.div>
        </div>
      )}

      {stepIndex === 4 && ( /* Sleep Animation - floating ZZZ effect */
        <div className="absolute right-1/4 top-1/4 space-y-4">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: [0, 1, 0], y: [-20, -60], x: [0, 10, -10] }}
              transition={{ duration: 3, delay: i * 1, repeat: Infinity }}
              className="text-4xl font-serif text-primary/40 font-bold"
            >
              Z
            </motion.div>
          ))}
        </div>
      )}

      <div className="absolute bottom-8 left-8 right-8 z-20">
         <motion.div 
           initial={{ width: 0 }}
           whileInView={{ width: "8rem" }}
           className="h-1.5 bg-primary/20 rounded-full mb-3" 
         />
         <motion.div 
           initial={{ width: 0 }}
           whileInView={{ width: "4rem" }}
           className="h-1.5 bg-primary/10 rounded-full" 
         />
      </div>
    </div>
  );
};
