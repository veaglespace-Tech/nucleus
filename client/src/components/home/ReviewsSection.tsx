'use client';

import { useGetReviewsQuery } from '@/store/api/apiSlice';
import { Star, Quote } from 'lucide-react';
import FadeIn from '@/components/animations/FadeIn';
import StaggerContainer, { StaggerItem } from '@/components/animations/StaggerContainer';

export default function ReviewsSection() {
  const { data: reviews, isLoading } = useGetReviewsQuery({});

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-20">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  // Only show reviews if there are any
  if (!reviews || reviews.length === 0) return null;

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 lg:py-24 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2"></div>
      
      <FadeIn delay={0.1} direction="up" className="text-center max-w-3xl mx-auto mb-16 relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-base-200 border border-base-300 shadow-sm mb-6">
          <span className="text-xs font-bold uppercase tracking-wider text-primary">Testimonials</span>
        </div>
        <h2 className="text-4xl lg:text-5xl font-black mb-6 text-base-content leading-tight">Patient Stories</h2>
        <p className="text-xl text-base-content/70 leading-relaxed font-medium">
          Don't just take our word for it. Hear what our patients have to say about their experience and recovery at Nucleus Hospital.
        </p>
      </FadeIn>

      <StaggerContainer staggerDelay={0.15} className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8 relative z-10">
        {reviews.map((review: any, i: number) => (
          <StaggerItem key={review.id} className="break-inside-avoid">
            <div className="bg-base-100/60 backdrop-blur-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 rounded-[2.5rem] p-8 sm:p-10 border border-base-200/60 relative group">
              <div className="absolute top-6 right-6 text-primary/5 group-hover:text-primary/10 transition-colors duration-500">
                <Quote className="h-24 w-24 transform rotate-180" />
              </div>
              <div className="relative z-10">
                <div className="flex gap-1 text-warning mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`h-5 w-5 ${i < review.rating ? 'fill-current' : 'opacity-30 text-base-content'}`} />
                  ))}
                </div>
                <p className="text-base-content/80 text-lg leading-relaxed font-medium italic mb-8">
                  "{review.comment}"
                </p>
                <div className="flex items-center gap-4 mt-auto border-t border-base-300/50 pt-6">
                  <div className="avatar placeholder shadow-sm">
                    <div className="bg-gradient-to-br from-primary to-accent text-white rounded-full w-14 border-2 border-base-100">
                      <span className="text-xl font-black">{review.patientName.charAt(0)}</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-base-content text-lg">{review.patientName}</h4>
                    <p className="text-sm font-medium text-primary">Verified Patient</p>
                  </div>
                </div>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}
