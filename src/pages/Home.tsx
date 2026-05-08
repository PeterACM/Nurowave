import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Award, ShieldCheck, Microscope, Brain, Eye, Zap, Wind, Thermometer, Info, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Home: React.FC = () => {
  const parameters = [
    { name: 'EEG', fullName: 'Electroencephalography', icon: <Brain />, description: 'Monitoring cortical electrical activity to identify sleep stages and seizure activity.' },
    { name: 'EOG', fullName: 'Electrooculography', icon: <Eye />, description: 'Tracking vertical and horizontal eye movements to detect REM sleep onset.' },
    { name: 'EMG', fullName: 'Electromyography', icon: <Zap />, description: 'Measuring muscle tension in the chin and limbs to identify sleep-related movement disorders.' },
    { name: 'EKG', fullName: 'Electrocardiography', icon: <Activity />, description: 'Continuously monitoring heart rate and rhythm' },
    { name: 'Flow', fullName: 'Respiratory Flux', icon: <Wind />, description: 'Precise measurement of airflow through sleep' },
    { name: 'SpO2', fullName: 'Oxygen Saturation', icon: <Thermometer />, description: 'Constant pulse oximetry to track blood oxygen levels and identify desaturations.' },
  ];

  const conditions = [
    { title: 'Obstructive Sleep Apnea (OSA)', description: 'Identification of repetitive airway collapse through advanced pressure sensors and effort monitoring.' },
    { title: 'Central Sleep Apnea (CSA)', description: 'Distinguishing between mechanical obstruction' },
    { title: 'Restless Leg Syndrome (RLS)', description: 'Quantifying periodic limb movements during sleep using synchronized EMG and video telemetry.' },
    { title: 'Nocturnal Seizures', description: 'Differential diagnosis of parasomnias vs. epilepsy through high-density EEG mapping.' },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center bg-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center z-10 flex flex-col items-center">
          <motion.span 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary font-sans font-bold uppercase tracking-widest text-xs mb-4 block"
          >
            Precision Neurophysiology
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif text-5xl md:text-7xl text-slate-900 mb-8 leading-tight"
          >
            About <br />
            <span className="text-primary italic">Neurowave</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-sans text-lg md:text-xl text-slate-600 max-w-2xl mb-10 leading-relaxed mx-auto"
          >
            Neurowave Inc. combines clinical rigor with empathetic care, providing advanced neurodiagnostic services that illuminate the path to neurological wellness.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex justify-center"
          >
            <Link 
              to="/contact" 
              className="bg-tertiary text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:bg-tertiary/90 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-tertiary/20"
            >
              Book Now <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Diagnostics Section */}
      <section className="py-24 bg-white" id="diagnostics">
        <div className="max-w-7xl mx-auto px-6">
          <header className="mb-20 text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-center gap-4 text-primary mb-4"
            >
              <div className="h-px w-12 bg-primary"></div>
              <span className="font-sans font-bold uppercase tracking-widest text-xs">Diagnostic Excellence</span>
              <div className="h-px w-12 bg-primary"></div>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-serif text-5xl text-slate-900 mb-6"
            >
              Polysomnography Parameters
            </motion.h2>
            <p className="font-sans text-slate-600 max-w-2xl mx-auto leading-relaxed text-lg">
              Our specialized Polysomnography (PSG) unit represents the pinnacle of sleep diagnostic technology, monitoring vital neural and physiological metrics.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
            {parameters.map((param, index) => (
              <motion.div
                key={param.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all group"
              >
                <div className="w-16 h-16 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center text-primary mb-6 transition-colors group-hover:bg-primary group-hover:text-white">
                  {React.cloneElement(param.icon as React.ReactElement, { className: "w-8 h-8" })}
                </div>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">{param.name}</div>
                <h3 className="font-serif text-2xl text-slate-900 mb-4">{param.fullName}</h3>
                <p className="font-sans text-sm text-slate-600 leading-relaxed">
                  {param.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Pathological Focus Section */}
          <div className="bg-slate-950 rounded-[48px] p-12 md:p-20 overflow-hidden relative shadow-2xl shadow-slate-900/20">
            <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
              <Brain className="w-64 h-64 text-white" />
            </div>
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="font-serif text-4xl text-white mb-8">Pathological Focus Areas</h2>
                <div className="space-y-6">
                  {conditions.map((condition, index) => (
                    <motion.div 
                      key={condition.title}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                    >
                      <div className="mt-1">
                        <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
                      </div>
                      <div>
                        <h4 className="font-bold text-white mb-2">{condition.title}</h4>
                        <p className="text-sm text-white/60 leading-relaxed font-sans">{condition.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                  <img 
                    src="/Sleeping.png" 
                    alt="Sleep Study"
                    className="w-full h-[500px] object-cover"
                  />
                </div>
                <div className="absolute -bottom-8 -left-8 glass-panel p-6 rounded-2xl max-w-xs border border-white/20 z-20">
                  <div className="flex items-start gap-3">
                    <Info className="w-6 h-6 text-accent mt-1" />
                    <p className="text-sm font-sans italic text-white/80">
                      "Live Setup: High-Density PSG Array monitored 24/7 by our clinical staff."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="relative flex-shrink-0">
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-accent animate-[spin_15s_linear_infinite] p-4 scale-110 opacity-30"></div>
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl relative z-10 transition-transform hover:scale-105 duration-500">
              <img 
                src="/ocean_naidoo.png" 
                alt="Mr. Ocean Lesley Naidoo"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="flex-1 space-y-6">
            <h2 className="font-serif text-4xl md:text-5xl text-slate-900 mb-2">Mr. Ocean Lesley Naidoo</h2>
            <p className="text-primary font-bold text-lg md:text-xl tracking-wide uppercase font-sans">Lead Neurophysiologist & Visionary</p>
            
            <div className="flex flex-wrap gap-4">
              <span className="flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-full border border-slate-200 text-slate-700 text-sm font-bold">
                <Award className="w-4 h-4 text-primary" /> BHSc-CT (Neurophysiology)
              </span>
              <span className="flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-full border border-slate-200 text-slate-700 text-sm font-bold">
                <ShieldCheck className="w-4 h-4 text-primary" /> KTG: 0012459
              </span>
              <span className="flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-full border border-slate-200 text-slate-700 text-sm font-bold">
                <CheckCircle2 className="w-4 h-4 text-primary" /> Practice No.: 1250302
              </span>
            </div>
            
            <p className="font-sans text-slate-600 leading-relaxed text-lg italic border-l-4 border-primary pl-6 py-2">
              "To provide exceptional quality in diagnostic services through precision, empowering medical doctors and patients with the data needed to navigate neurological health with confidence."
            </p>
            

          </div>
        </div>
      </section>

      {/* Clinical Promise Section - Bento Grid */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl text-slate-900 mb-4">Our Clinical Promise</h2>
            <p className="font-sans text-slate-600 max-w-2xl mx-auto">Bridging the gap between complex neurophysiological data and actionable clinical outcomes.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6">
                <Brain className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl text-slate-900 mb-4">Data Fidelity</h3>
              <p className="font-sans text-slate-600 leading-relaxed">
                Ultra-high sample rates and advanced artifact reduction protocols ensure that our diagnostics are as clean and accurate as modern technology allows.
              </p>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-primary text-white p-8 rounded-3xl shadow-xl shadow-primary/20"
            >
              <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center text-white mb-6">
                <Microscope className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl mb-4">Neurological Insight</h3>
              <p className="opacity-80 font-sans leading-relaxed">
                We don't just provide data; we provide interpretation. Our reports speak the language of referring physicians, making complex results actionable.
              </p>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100"
            >
              <div className="w-14 h-14 bg-tertiary/10 rounded-2xl flex items-center justify-center text-tertiary mb-6">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl text-slate-900 mb-4">Integrity & Care</h3>
              <p className="font-sans text-slate-600 leading-relaxed">
                Patient comfort is not secondary to data quality. Our laboratory environment is designed to minimize stress and maximize patient dignity.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Wave Section */}
      <section className="bg-slate-950 py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
            <path className="waveform-line" d="M0,160 L100,160 L120,100 L140,220 L160,160 L300,160 L320,40 L340,280 L360,160 L500,160 L520,120 L540,200 L560,160 L700,160 L720,20 L740,300 L760,160 L1000,160 L1020,140 L1040,180 L1060,160 L1200,160 L1220,100 L1240,220 L1260,160 L1440,160" fill="none" stroke="#4fc3f7" strokeWidth="2" />
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <h2 className="font-serif text-3xl md:text-5xl text-white mb-8">Ready to Advance Your Neurological Health?</h2>
          <Link 
            to="/contact"
            className="inline-flex items-center gap-3 bg-accent text-slate-950 px-10 py-5 rounded-full font-bold text-lg hover:bg-white transition-all hover:scale-105 active:scale-95"
          >
            Book Now <Send className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

const Send = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" height="24" width="24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
  </svg>
);
