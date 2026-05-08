import React from 'react';
import { motion } from 'motion/react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogData';

export const Blog: React.FC = () => {
  return (
    <div className="py-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Academic Journals</span>
            <h1 className="font-serif text-5xl md:text-7xl text-slate-900 mb-6 leading-tight">
              Clinical Insights & <span className="text-tertiary italic">Neural Narratives</span>
            </h1>
            <p className="font-sans text-slate-600 max-w-2xl text-xl leading-relaxed">
              Advancing neurophysiological knowledge within the South African landscape through rigorous research and clinical expertise.
            </p>
          </motion.div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group bg-white rounded-[32px] overflow-hidden border border-slate-100 hover:border-primary/20 hover:shadow-2xl hover:shadow-slate-200/50 transition-all flex flex-col h-full"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-6 left-6">
                  <div className="bg-white/90 backdrop-blur-md text-primary px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-2 shadow-lg">
                    {post.icon} {post.category}
                  </div>
                </div>
              </div>
              
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-center gap-4 text-xs font-sans text-slate-400 mb-4 font-medium">
                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                  <span className="flex items-center gap-1"><User className="w-3 h-3" /> {post.author}</span>
                </div>
                
                <h2 className="font-serif text-2xl text-slate-900 mb-4 group-hover:text-primary transition-colors line-clamp-2 italic">
                  {post.title}
                </h2>
                
                <p className="text-slate-600 mb-8 line-clamp-3 text-sm leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="mt-auto flex items-center justify-between">
                  <Link 
                    to={`/blog/${post.slug}`}
                    className="text-primary font-bold text-sm underline underline-offset-4 flex items-center gap-2"
                  >
                    Read Article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Blog footer CTA */}
        <div className="mt-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-900 rounded-[64px] p-12 md:p-24 text-center relative overflow-hidden"
          >
            <div className="relative z-10">
              <span className="text-accent font-bold uppercase tracking-[0.2em] text-xs mb-6 block">Stay Informed</span>
              <h2 className="font-serif text-4xl md:text-5xl text-white mb-8">Subscribe to Clinical Updates</h2>
              <div className="max-w-md mx-auto flex flex-col md:flex-row gap-4">
                <input 
                  type="email" 
                  placeholder="name@university.ac.za" 
                  className="flex-1 bg-white/10 border border-white/20 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-accent transition-colors"
                />
                <button className="bg-accent text-slate-950 font-bold px-8 py-4 rounded-2xl hover:bg-white transition-all">
                  Join Register
                </button>
              </div>
              <p className="mt-6 text-white/40 text-xs">By subscribing you agree to receive academic newsletters.</p>
            </div>
            {/* Artistic flair */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[100px] rounded-full -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-tertiary/20 blur-[100px] rounded-full -ml-32 -mb-32"></div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
