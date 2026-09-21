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
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8 lg:py-12 overflow-hidden relative">
      <FadeIn delay={0.1} direction="up" className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm border border-primary/20 shadow-sm mb-6">
            <BookOpen className="h-4 w-4" />
            <span>Latest News & Articles</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-4 text-base-content">Health Insights & Tips</h2>
          <p className="text-xl text-base-content/70 leading-relaxed">
            Stay informed with the latest medical news, research breakthroughs, and wellness tips written by our experts.
          </p>
        </div>
        <Link href="/blog" className="btn btn-outline btn-lg rounded-full px-8 shrink-0 hover:bg-primary hover:text-primary-content hover:border-primary transition-colors duration-300">
          Read All Articles
        </Link>
      </FadeIn>

      <StaggerContainer staggerDelay={0.15} className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {blogs.slice(0, 3).map((blog: any) => (
          <StaggerItem key={blog.id} className="card glass-card hover:-translate-y-2 transition-transform duration-500 rounded-[2rem] overflow-hidden group">
            <div className="relative h-56 w-full overflow-hidden bg-base-200 block">
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
              <div className="absolute top-4 left-4 bg-base-100/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-base-content shadow-sm flex items-center gap-2">
                <Calendar className="h-3 w-3" />
                {new Date(blog.createdAt).toLocaleDateString()}
              </div>
              <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                {blog.type || 'Post'}
              </div>
            </div>
            
            <div className="card-body p-8">
              <Link href={`/blog/${blog.id}`}>
                <h3 className="card-title text-xl mb-3 line-clamp-2 leading-snug group-hover:text-primary transition-colors cursor-pointer">
                  {blog.title}
                </h3>
              </Link>
              <p className="text-base-content/70 leading-relaxed line-clamp-3 mb-6">
                {blog.content}
              </p>
              
              <div className="card-actions justify-between items-center mt-auto pt-4 border-t border-base-200">
                <Link href={`/blog/${blog.id}`} className="font-semibold text-primary inline-flex items-center hover:underline group-hover:translate-x-1 transition-transform">
                  Read Full {blog.type || 'Post'} <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
                {blog.showContactBtn !== false && (
                   <Link href="/contact" className="btn btn-primary btn-sm rounded-full shadow-md shadow-primary/20 z-10">
                     Contact Us
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
