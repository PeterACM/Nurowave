import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Calendar, User, ArrowLeft, Share2, BookOpen } from 'lucide-react';
import { blogPosts } from '../data/blogData';

export const BlogPostDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const post = blogPosts.find(p => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!post) {
      navigate('/blog');
    }
  }, [post, navigate]);

  if (!post) return null;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Header */}
      <section className="relative h-[60vh] min-h-[400px] flex items-end">
        <div className="absolute inset-0 z-0">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-slate-900/40" />
        </div>
        
        <div className="max-w-4xl mx-auto px-6 w-full relative z-10 pb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link 
              to="/blog" 
              className="inline-flex items-center gap-2 text-white bg-slate-900/50 backdrop-blur-md px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-8 hover:bg-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Journals
            </Link>
            
            <div className="flex items-center gap-3 text-white/80 text-xs font-bold uppercase tracking-widest mb-4">
               {post.icon}
               <span>{post.category}</span>
            </div>
            
            <h1 className="font-serif text-4xl md:text-6xl text-slate-900 leading-tight">
              {post.title}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12">
            {/* Sidebar Meta */}
            <aside className="md:w-64 flex-shrink-0">
              <div className="sticky top-24 space-y-8">
                <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
                  <div className="space-y-6">
                    <div className="flex items-center gap-3 text-slate-400">
                      <Calendar className="w-4 h-4" />
                      <div className="flex flex-col">
                        <span className="text-[10px] uppercase tracking-widest font-bold">Published</span>
                        <span className="text-slate-900 text-sm font-medium">{post.date}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 text-slate-400">
                      <User className="w-4 h-4" />
                      <div className="flex flex-col">
                        <span className="text-[10px] uppercase tracking-widest font-bold">Author</span>
                        <span className="text-slate-900 text-sm font-medium">{post.author}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <button className="w-full flex items-center justify-center gap-3 py-4 border border-slate-200 rounded-2xl hover:bg-slate-50 transition-colors text-slate-600 font-bold text-sm">
                   <Share2 className="w-4 h-4" /> Share Insight
                </button>
              </div>
            </aside>

            {/* Main Article Body */}
            <article className="flex-1">
              <div className="prose prose-slate prose-lg max-w-none">
                {post.content.map((paragraph, idx) => (
                  <p key={idx} className="font-sans text-slate-600 leading-relaxed mb-8 text-lg">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Author Bio */}
              <div className="mt-20 p-10 bg-slate-950 rounded-[48px] text-white relative overflow-hidden">
                <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
                  <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center text-primary border border-primary/30">
                    <BookOpen className="w-10 h-10" />
                  </div>
                  <div>
                    <h4 className="font-serif text-2xl mb-2">Clinical Commentary</h4>
                    <p className="text-white/60 text-sm leading-relaxed max-w-lg">
                      These insights are provided for academic and professional reference. For clinical consultation or specialized neurophysiological pathways, please connect with our team.
                    </p>
                  </div>
                </div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-[60px] rounded-full -mr-16 -mt-16" />
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Recommended Reading */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
           <h2 className="font-serif text-3xl text-slate-900 mb-12">Related Academic Insights</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {blogPosts.filter(p => p.slug !== slug).slice(0, 2).map((other) => (
                <Link 
                  key={other.slug} 
                  to={`/blog/${other.slug}`}
                  className="bg-white p-6 rounded-3xl border border-slate-200 hover:shadow-xl transition-all text-left flex gap-6 items-center group"
                >
                  <img src={other.image} className="w-24 h-24 rounded-2xl object-cover shrink-0" alt="" />
                  <div>
                    <h3 className="font-serif text-lg text-slate-900 group-hover:text-primary transition-colors line-clamp-2 italic">{other.title}</h3>
                    <p className="text-xs text-slate-400 mt-2">{other.date}</p>
                  </div>
                </Link>
              ))}
           </div>
        </div>
      </section>
    </div>
  );
};
