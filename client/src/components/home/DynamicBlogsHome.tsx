'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useGetBlogsQuery } from '@/store/api/apiSlice';
import { ArrowRight, Calendar, BookOpen } from 'lucide-react';
import FadeIn from '@/components/animations/FadeIn';
import StaggerContainer, { StaggerItem } from '@/components/animations/StaggerContainer';

export default function DynamicBlogsHome() {
  const { data: blogs, isLoading } = useGetBlogsQuery({});

  if (isLoading || !blogs || blogs.length === 0) return null;

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 lg:py-24 overflow-hidden relative">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -translate-y-1/2"></div>
      <FadeIn delay={0.1} direction="up" className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 relative z-10">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-base-200 border border-base-300 shadow-sm mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">Health Insights</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black mb-4 text-base-content leading-tight">Latest News & Articles</h2>
          <p className="text-xl text-base-content/70 leading-relaxed font-medium">
            Stay informed with the latest medical news, research breakthroughs, and wellness tips written by our experts.
          </p>
        </div>
        <Link href="/blog" className="btn btn-outline border-base-300 btn-lg rounded-full px-8 shrink-0 hover:bg-base-200 hover:text-base-content transition-colors duration-300 shadow-sm">
          Read All Articles
        </Link>
      </FadeIn>

      <StaggerContainer staggerDelay={0.15} className="grid grid-cols-1 md:grid-cols-3 gap-10 relative z-10">
        {blogs.slice(0, 3).map((blog: any) => (
          <StaggerItem key={blog.id} className="group relative rounded-[2.5rem] overflow-hidden bg-base-200 border border-base-300/50 shadow-md hover:shadow-2xl hover:border-primary/30 transition-all duration-500 cursor-pointer flex flex-col h-full">
            <div className="relative h-64 w-full overflow-hidden bg-base-300 shrink-0">
              {blog.image ? (
                <Image 
                  src={blog.image} 
                  alt={blog.title} 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-700" 
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-primary/5 text-primary/40 font-bold">
                  No Image Provided
                </div>
              )}
              {/* Badges */}
              <div className="absolute top-4 left-4 bg-base-100/90 backdrop-blur-md px-4 py-2 rounded-full text-xs font-bold text-base-content shadow-sm flex items-center gap-2">
                <Calendar className="h-3 w-3 text-primary" />
                {new Date(blog.createdAt).toLocaleDateString()}
              </div>
              <div className={`absolute top-4 right-4 text-white px-4 py-2 rounded-full text-xs font-bold shadow-sm ${blog.type === 'Article' ? 'bg-secondary' : 'bg-primary'}`}>
                {blog.type || 'Post'}
              </div>
            </div>
            
            <div className="card-body p-8 sm:p-10 flex-grow flex flex-col">
              <Link href={`/blog/${blog.id}`} className="block mb-4">
                <h3 className="card-title text-2xl font-bold leading-snug group-hover:text-primary transition-colors line-clamp-2">
                  {blog.title}
                </h3>
              </Link>
              <p className="text-base-content/70 leading-relaxed line-clamp-3 mb-8 flex-grow">
                {blog.content}
              </p>
              
              <div className="mt-auto pt-6 border-t border-base-300/50 flex justify-between items-center">
                <Link href={`/blog/${blog.id}`} className="font-bold text-primary inline-flex items-center group-hover:text-secondary transition-colors group/link">
                  Read Full <ArrowRight className="h-4 w-4 ml-2 group-hover/link:translate-x-2 transition-transform" />
                </Link>
                {blog.showContactBtn !== false && (
                   <Link href="/contact" className="btn btn-primary btn-sm rounded-full shadow-md shadow-primary/20 hover:scale-105 transition-transform">
                     Book
                   </Link>
                )}
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}
