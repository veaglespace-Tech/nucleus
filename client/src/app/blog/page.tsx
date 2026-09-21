'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useGetBlogsQuery } from '@/store/api/apiSlice';
import { Calendar, User, ArrowRight, Mail } from 'lucide-react';

export default function Blog() {
  const { data: blogs, isLoading } = useGetBlogsQuery({});

  return (
    <div className="pb-24">
      {/* Banner */}
      <div className="relative h-[300px] flex items-center justify-center overflow-hidden bg-primary/10">
        <div className="relative z-10 text-center px-4 animate-in slide-in-from-bottom duration-700">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-primary">Health & Wellness Blog</h1>
          <p className="text-xl max-w-2xl mx-auto text-base-content/80">
            Insights, tips, and the latest medical news from our experts.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        {isLoading ? (
          <div className="flex justify-center items-center py-24">
            <span className="loading loading-spinner loading-lg text-primary"></span>
          </div>
        ) : !blogs || blogs.length === 0 ? (
          <div className="text-center py-20 bg-base-200 rounded-[2rem] border border-base-300">
            <h3 className="text-2xl font-bold text-base-content/70">No Articles Found</h3>
            <p className="text-base-content/50 mt-2">Check back later for new health and wellness tips.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogs.map((blog: any, index: number) => (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                key={blog.id} 
                className="card glass-card hover:-translate-y-2 transition-transform duration-500 rounded-[2rem] overflow-hidden group"
              >
                {/* Cover Image */}
                <div className="relative h-64 w-full overflow-hidden bg-base-200">
                  {blog.image ? (
                    <Image 
                      src={blog.image} 
                      alt={blog.title} 
                      fill 
                      className="object-cover group-hover:scale-105 transition-transform duration-700" 
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-primary/5 text-primary/40 font-bold">
                      No Image Provided
                    </div>
                  )}
                </div>
                
                <div className="card-body p-8">
                  {/* Meta */}
                  <div className="flex items-center gap-4 text-sm text-base-content/60 mb-4">
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      {blog.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {new Date(blog.createdAt).toLocaleDateString()}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <h3 className="card-title text-2xl mb-3 line-clamp-2 leading-tight group-hover:text-primary transition-colors">
                    {blog.title}
                  </h3>
                  <p className="text-base-content/70 leading-relaxed text-lg line-clamp-3 mb-6">
                    {blog.content}
                  </p>
                  
                  <div className="card-actions justify-between items-center mt-auto flex-wrap gap-4">
                    <button className="font-semibold text-primary inline-flex items-center hover:underline">
                      Read Full Article <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </button>
                    {blog.showContactBtn !== false && (
                      <Link href="/contact" className="btn btn-primary btn-sm rounded-full shadow-md shadow-primary/20">
                        Contact Us
                      </Link>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Newsletter Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-32">
        <div className="bg-gradient-to-br from-base-200 to-base-300 rounded-[3rem] p-12 lg:p-16 text-center shadow-xl border border-base-100">
          <div className="bg-primary/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Mail className="h-10 w-10 text-primary" />
          </div>
          <h2 className="text-4xl font-extrabold mb-4 text-base-content">Subscribe to Our Newsletter</h2>
          <p className="text-xl text-base-content/70 max-w-2xl mx-auto mb-10">
            Get the latest medical news, health tips, and exclusive hospital updates delivered directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-xl mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="input input-bordered input-lg w-full rounded-full focus:input-primary shadow-sm"
            />
            <button className="btn btn-primary btn-lg rounded-full px-10 shadow-xl shadow-primary/30">
              Subscribe Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
