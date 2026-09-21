'use client';

import { use, useEffect } from 'react';
import { useGetBlogByIdQuery } from '@/store/api/apiSlice';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, User, Clock, Share2 } from 'lucide-react';
import FadeIn from '@/components/animations/FadeIn';

export default function SingleBlogPage({ params }: { params: Promise<{ id: string }> }) {
  // Use React.use() to unwrap the params promise (Next.js 15+ standard for dynamic routes)
  const resolvedParams = use(params);
  const { data: blog, isLoading, isError } = useGetBlogByIdQuery(resolvedParams.id);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-base-100">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  if (isError || !blog) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-base-100 gap-6">
        <h1 className="text-3xl font-bold text-base-content">Blog not found</h1>
        <p className="text-base-content/60">The article you're looking for doesn't exist or has been removed.</p>
        <Link href="/" className="btn btn-primary rounded-full">Return Home</Link>
      </div>
    );
  }

  return (
    <article className="min-h-screen bg-base-100 pb-24">
      {/* Hero Section */}
      <div className="relative w-full h-[40vh] md:h-[60vh] bg-base-300">
        {blog.image ? (
          <Image 
            src={blog.image} 
            alt={blog.title} 
            fill 
            className="object-cover"
            priority
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-accent/10">
            <span className="text-primary/40 text-2xl font-bold">No Cover Image</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-base-100 via-base-100/50 to-transparent"></div>
        
        {/* Back Button */}
        <Link href="/" className="absolute top-8 left-4 md:left-8 btn btn-circle btn-ghost bg-base-100/50 backdrop-blur-md hover:bg-base-100 shadow-sm z-10">
          <ArrowLeft className="h-5 w-5" />
        </Link>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-32 relative z-10">
        <FadeIn delay={0.1} direction="up" className="bg-base-100 rounded-3xl p-8 md:p-12 shadow-2xl shadow-base-300/50 border border-base-200">
          {/* Metadata */}
          <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-base-content/70 mb-6">
            <span className={`badge ${blog.type === 'Article' ? 'badge-secondary' : 'badge-primary'} badge-lg rounded-full`}>
              {blog.type || 'Post'}
            </span>
            <div className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4" />
              {new Date(blog.createdAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </div>
            <div className="flex items-center gap-1.5">
              <User className="h-4 w-4" />
              {blog.author}
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-base-content mb-8 leading-tight">
            {blog.title}
          </h1>

          {/* Content */}
          <div className="prose prose-lg md:prose-xl prose-base-content max-w-none prose-headings:text-base-content prose-a:text-primary">
            {blog.content.split('\n').map((paragraph: string, idx: number) => (
              paragraph.trim() ? <p key={idx} className="mb-6 leading-relaxed">{paragraph}</p> : <br key={idx} />
            ))}
          </div>

          <div className="divider my-12"></div>

          {/* Footer Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex gap-4">
              <button className="btn btn-outline btn-sm rounded-full">
                <Share2 className="h-4 w-4 mr-2" /> Share
              </button>
            </div>
            
            {blog.showContactBtn !== false && (
              <div className="bg-primary/5 p-6 rounded-2xl w-full sm:w-auto flex flex-col items-center sm:items-end text-center sm:text-right border border-primary/10">
                <h3 className="font-bold text-lg mb-2">Need medical advice?</h3>
                <p className="text-sm text-base-content/70 mb-4">Our specialists are here to help you.</p>
                <Link href="/contact" className="btn btn-primary rounded-full shadow-lg shadow-primary/30 w-full sm:w-auto">
                  Book an Appointment
                </Link>
              </div>
            )}
          </div>
        </FadeIn>
      </div>
    </article>
  );
}
