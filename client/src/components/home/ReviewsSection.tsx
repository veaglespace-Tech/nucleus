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
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8 lg:py-12 overflow-hidden">
      <FadeIn delay={0.1} direction="up" className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl font-extrabold mb-6">Patient Testimonials</h2>
        <p className="text-xl text-base-content/70 leading-relaxed">
          Don't just take our word for it. Hear what our patients have to say about their experience and recovery at Nucleus Hospital.
        </p>
      </FadeIn>

      <StaggerContainer staggerDelay={0.2} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reviews.slice(0, 3).map((review: any) => (
          <StaggerItem key={review.id} className="card bg-base-100 shadow-xl shadow-base-300/50 border border-base-200 hover:-translate-y-2 transition-transform duration-500 rounded-[2rem] relative overflow-hidden">
            <div className="absolute top-4 right-6 text-primary/10">
              <Quote className="h-20 w-20 transform rotate-180" />
            </div>
            <div className="card-body p-8 relative z-10">
              <div className="flex gap-1 text-warning mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`h-5 w-5 ${i < review.rating ? 'fill-current' : 'opacity-30 text-base-content'}`} />
                ))}
              </div>
              <p className="text-base-content/80 text-lg leading-relaxed italic mb-8 flex-grow">
                "{review.comment}"
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="avatar placeholder">
                  <div className="bg-primary text-primary-content rounded-full w-12">
                    <span className="text-xl font-bold">{review.patientName.charAt(0)}</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-base-content">{review.patientName}</h4>
                  <p className="text-sm text-base-content/60">Verified Patient</p>
                </div>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}
