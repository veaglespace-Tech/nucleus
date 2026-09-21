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
              <StaggerItem key={service.id} className="card bg-base-100/50 backdrop-blur-md border border-base-200 shadow-lg hover:shadow-2xl hover:border-primary/30 transition-all duration-500 group cursor-pointer rounded-[2.5rem] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
                <div className="card-body p-8 sm:p-10 relative z-10">
                  <div className="bg-gradient-to-br from-base-200 to-base-300 w-24 h-24 rounded-[2rem] flex items-center justify-center mb-8 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-secondary group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500 shadow-inner">
                    <IconComponent className="h-12 w-12 text-primary group-hover:text-white transition-colors duration-500" />
                  </div>
                  <h3 className="card-title text-3xl mb-4 font-bold">{service.title}</h3>
                  <p className="text-base-content/70 leading-relaxed text-lg mb-8 line-clamp-3">{service.description}</p>
                  
                  <div className="mt-auto pt-6 border-t border-base-200/50 flex justify-between items-center">
                    <Link href={`/services`} className="text-primary font-bold hover:text-secondary transition-colors inline-flex items-center group/link">
                      Learn more <ArrowRight className="h-5 w-5 ml-2 group-hover/link:translate-x-2 transition-transform duration-300" />
                    </Link>
                    {service.showContactBtn !== false && (
                       <Link href="/contact" className="btn btn-primary btn-sm rounded-full shadow-md shadow-primary/20 hover:scale-105 transition-transform duration-300">
                         Book
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
