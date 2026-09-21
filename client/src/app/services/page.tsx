'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useGetServicesQuery } from '@/store/api/apiSlice';
import { Activity, HeartPulse, Stethoscope, Microscope, Brain, Bone, ArrowRight, ClipboardCheck, PhoneCall, HeartHandshake, Syringe, Shield } from "lucide-react";

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

export default function Services() {
  const { data: services, isLoading } = useGetServicesQuery({});

  return (
    <div className="pb-24">
      {/* Banner */}
      <div className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <Image 
          src="/images/services.jpg" 
          alt="Advanced Medical Services" 
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-neutral/70 backdrop-blur-sm"></div>
        <div className="relative z-10 text-center text-white px-4 animate-in slide-in-from-bottom duration-700">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">Medical Specialties</h1>
          <p className="text-xl max-w-2xl mx-auto text-neutral-content/90">
            Delivering world-class healthcare through modern technology and specialized expertise.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-base-content mb-4">Explore Our Departments</h2>
          <p className="text-xl text-base-content/70 max-w-3xl mx-auto">
            We provide a wide array of treatments to cover all your health needs. Browse our live catalog of specialized medical services below.
          </p>
        </div>
        
        {isLoading ? (
          <div className="flex justify-center items-center py-24">
            <span className="loading loading-spinner loading-lg text-primary"></span>
          </div>
        ) : !services || services.length === 0 ? (
          <div className="text-center py-20 bg-base-200 rounded-[2rem] border border-base-300">
            <h3 className="text-2xl font-bold text-base-content/70">No Services Available</h3>
            <p className="text-base-content/50 mt-2">Check back later or contact us directly.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service: any, index: number) => {
              const IconComponent = iconMap[service.icon] || Activity;
              return (
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  key={service.id} 
                  className="card glass-card group rounded-3xl overflow-hidden"
                >
                  <div className="card-body p-8">
                    <div className="bg-gradient-to-br from-primary/20 to-secondary/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-500 shadow-sm">
                      <IconComponent className="h-8 w-8 text-primary group-hover:text-primary-content transition-colors" />
                    </div>
                    <h3 className="card-title text-2xl mb-2 text-base-content">{service.title}</h3>
                    <p className="text-base-content/70 text-lg mb-4">{service.description}</p>
                    
                    {service.details && (
                      <div className="mt-2 pt-4 border-t border-base-200 hidden group-hover:block animate-in fade-in slide-in-from-top-4 duration-300">
                         <p className="text-sm text-base-content/60 leading-relaxed">{service.details}</p>
                      </div>
                    )}
                    
                    <div className="card-actions justify-end mt-4 gap-2 flex-wrap">
                      {service.showContactBtn !== false && (
                        <Link href="/contact" className="btn btn-primary btn-sm rounded-full px-6 shadow-md shadow-primary/20">
                          Contact Us
                        </Link>
                      )}
                      <button className="btn btn-outline btn-secondary btn-sm rounded-full px-6 modern-border">
                        Read More
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>

      {/* New Section: How It Works */}
      <section className="bg-base-200 mt-24 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-base-content mb-4">Your Healthcare Journey</h2>
            <p className="text-xl text-base-content/70 max-w-2xl mx-auto">
              We've streamlined our patient intake and care process so you can focus entirely on your recovery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center space-y-4">
              <div className="mx-auto bg-primary/20 w-24 h-24 rounded-full flex items-center justify-center">
                <PhoneCall className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-base-content">1. Book an Appointment</h3>
              <p className="text-base-content/70 text-lg leading-relaxed">
                Reach out via our 24/7 hotline or use our online portal to schedule a visit with the right specialist.
              </p>
            </div>
            
            <div className="text-center space-y-4 relative">
              <div className="hidden md:block absolute top-12 -left-[20%] w-[40%] h-[2px] bg-primary/30 border-dashed border-2"></div>
              <div className="mx-auto bg-primary/20 w-24 h-24 rounded-full flex items-center justify-center">
                <ClipboardCheck className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-base-content">2. Diagnosis & Consultation</h3>
              <p className="text-base-content/70 text-lg leading-relaxed">
                Meet with our expert doctors for a thorough diagnosis using our state-of-the-art laboratory equipment.
              </p>
            </div>

            <div className="text-center space-y-4 relative">
              <div className="hidden md:block absolute top-12 -left-[20%] w-[40%] h-[2px] bg-primary/30 border-dashed border-2"></div>
              <div className="mx-auto bg-primary/20 w-24 h-24 rounded-full flex items-center justify-center">
                <HeartHandshake className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-base-content">3. Treatment & Recovery</h3>
              <p className="text-base-content/70 text-lg leading-relaxed">
                Receive personalized care, minimally invasive treatments, and comprehensive post-op support.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
