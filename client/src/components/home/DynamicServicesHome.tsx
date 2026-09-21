'use client';

import Link from 'next/link';
import { useGetServicesQuery } from '@/store/api/apiSlice';
import { ArrowRight, Activity, HeartPulse, Stethoscope, Microscope, Brain, Bone, Syringe, Shield } from 'lucide-react';
import FadeIn from '@/components/animations/FadeIn';
import StaggerContainer, { StaggerItem } from '@/components/animations/StaggerContainer';

const iconMap: Record<string, any> = {
  HeartPulse,
  Activity,
  Stethoscope,
  Microscope,
  Brain,
  Bone,
  Syringe,
  Shield,
};

export default function DynamicServicesHome() {
  const { data: services, isLoading } = useGetServicesQuery({});

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8 lg:py-12 overflow-hidden">
      <FadeIn delay={0.1} direction="up" className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm border border-primary/20 shadow-sm mb-6">
          <Activity className="h-4 w-4" />
          <span>Specialized Healthcare</span>
        </div>
        <h2 className="text-4xl lg:text-5xl font-extrabold mb-6 text-base-content">Our Departments & Services</h2>
        <p className="text-xl text-base-content/70 leading-relaxed">
          We offer a comprehensive range of specialized medical services, utilizing the latest technology, robotics, and highly trained medical staff to ensure a seamless recovery.
        </p>
      </FadeIn>
      
      {isLoading ? (
        <div className="flex justify-center items-center py-20">
          <span className="loading loading-spinner loading-lg text-primary"></span>
        </div>
      ) : !services || services.length === 0 ? (
        <div className="text-center py-20 bg-base-200 rounded-[2rem] border border-base-300">
          <h3 className="text-2xl font-bold text-base-content/70">No Services Available</h3>
          <p className="text-base-content/50 mt-2">Services added in the admin dashboard will appear here.</p>
        </div>
      ) : (
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.slice(0, 3).map((service: any) => {
            const IconComponent = iconMap[service.icon] || Activity;
            return (
              <StaggerItem key={service.id} className="card glass-card group cursor-pointer rounded-[2rem]">
                <div className="card-body p-8">
                  <div className="bg-gradient-to-br from-primary/20 to-secondary/20 w-20 h-20 rounded-[1.5rem] flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-500 shadow-inner">
                    <IconComponent className="h-10 w-10 text-primary group-hover:text-primary-content transition-colors duration-500" />
                  </div>
                  <h3 className="card-title text-2xl mb-3">{service.title}</h3>
                  <p className="text-base-content/70 leading-relaxed text-lg line-clamp-3">{service.description}</p>
                  <div className="card-actions justify-between items-center mt-6">
                    <Link href={`/services`} className="btn btn-ghost text-primary hover:bg-primary/10 rounded-full px-6 transition-colors">
                      Learn more <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                    </Link>
                    {service.showContactBtn !== false && (
                       <Link href="/contact" className="btn btn-primary btn-sm rounded-full shadow-md shadow-primary/20">
                         Contact Us
                       </Link>
                    )}
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      )}
      
      <FadeIn delay={0.4} className="text-center mt-16">
        <Link href="/services" className="btn btn-outline btn-lg rounded-full px-10 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-primary hover:text-primary-content hover:border-primary">
          View All Specialized Services
        </Link>
      </FadeIn>
    </section>
  );
}
