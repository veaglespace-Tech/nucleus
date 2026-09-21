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
      <div className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <Image 
          src="/images/services.jpg" 
          alt="Advanced Medical Services" 
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-base-100 via-base-100/80 to-black/60 backdrop-blur-sm"></div>
        <div className="relative z-10 text-center text-base-content px-4 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-base-200/50 backdrop-blur-md border border-base-300 shadow-sm mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">Specialties</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 drop-shadow-md">Medical <span className="text-primary">Departments</span></h1>
          <p className="text-xl max-w-2xl mx-auto text-base-content/80 font-medium">
            Delivering world-class healthcare through modern technology and specialized expertise.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 relative">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 -z-10"></div>
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-black text-base-content mb-6 leading-tight">Explore Our Departments</h2>
          <p className="text-xl text-base-content/70 max-w-3xl mx-auto font-medium">
            We provide a wide array of treatments to cover all your health needs. Browse our live catalog of specialized medical services below.
          </p>
        </div>
        
        {isLoading ? (
          <div className="flex justify-center items-center py-24">
            <span className="loading loading-spinner loading-lg text-primary"></span>
          </div>
        ) : !services || services.length === 0 ? (
          <div className="text-center py-20 bg-base-200 rounded-[3rem] border border-base-300 shadow-inner">
            <h3 className="text-3xl font-bold text-base-content mb-4">No Services Available</h3>
            <p className="text-base-content/50 text-lg">Check back later or contact us directly.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10">
            {services.map((service: any, index: number) => {
              const IconComponent = iconMap[service.icon] || Activity;
              return (
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  key={service.id} 
                  className="group relative rounded-[2.5rem] overflow-hidden bg-base-100/50 backdrop-blur-md border border-base-200 shadow-lg hover:shadow-2xl hover:border-primary/30 transition-all duration-500 cursor-pointer flex flex-col h-full"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
                  <div className="card-body p-8 sm:p-10 relative z-10 flex-grow flex flex-col">
                    <div className="bg-gradient-to-br from-base-200 to-base-300 w-20 h-20 rounded-[1.5rem] flex items-center justify-center mb-8 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-secondary group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500 shadow-inner">
                      <IconComponent className="h-10 w-10 text-primary group-hover:text-white transition-colors duration-500" />
                    </div>
                    <h3 className="card-title text-3xl font-bold mb-4 text-base-content">{service.title}</h3>
                    <p className="text-base-content/70 text-lg mb-8 leading-relaxed flex-grow">{service.description}</p>
                    
                    {service.details && (
                      <div className="mb-6 h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-500 overflow-hidden">
                         <p className="text-sm text-base-content/60 leading-relaxed font-medium bg-base-200/50 p-4 rounded-2xl">{service.details}</p>
                      </div>
                    )}
                    
                    <div className="mt-auto pt-6 border-t border-base-200/50 flex justify-between items-center">
                      <button className="text-primary font-bold hover:text-secondary transition-colors inline-flex items-center group/link">
                        Read More <ArrowRight className="h-5 w-5 ml-2 group-hover/link:translate-x-2 transition-transform duration-300" />
                      </button>
                      {service.showContactBtn !== false && (
                        <Link href="/contact" className="btn btn-primary btn-sm rounded-full shadow-md shadow-primary/20 hover:scale-105 transition-transform duration-300">
                          Book
                        </Link>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>

      {/* New Section: How It Works */}
      <section className="bg-base-200 mt-32 py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-base-100 border border-base-300 shadow-sm mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-primary">Process</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-base-content mb-6 leading-tight">Your Healthcare Journey</h2>
            <p className="text-xl text-base-content/70 max-w-2xl mx-auto font-medium">
              We've streamlined our patient intake and care process so you can focus entirely on your recovery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-primary via-secondary to-accent opacity-30"></div>
            
            <div className="text-center space-y-6 relative z-10">
              <div className="mx-auto bg-base-100 w-24 h-24 rounded-[2rem] flex items-center justify-center shadow-xl shadow-base-300/50 border border-base-200 hover:scale-110 transition-transform duration-500">
                <PhoneCall className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-base-content">1. Book an Appointment</h3>
              <p className="text-base-content/70 text-lg leading-relaxed">
                Reach out via our 24/7 hotline or use our online portal to schedule a visit with the right specialist.
              </p>
            </div>
            
            <div className="text-center space-y-6 relative z-10">
              <div className="mx-auto bg-base-100 w-24 h-24 rounded-[2rem] flex items-center justify-center shadow-xl shadow-base-300/50 border border-base-200 hover:scale-110 transition-transform duration-500">
                <ClipboardCheck className="h-10 w-10 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold text-base-content">2. Diagnosis & Consultation</h3>
              <p className="text-base-content/70 text-lg leading-relaxed">
                Meet with our expert doctors for a thorough diagnosis using our state-of-the-art laboratory equipment.
              </p>
            </div>

            <div className="text-center space-y-6 relative z-10">
              <div className="mx-auto bg-base-100 w-24 h-24 rounded-[2rem] flex items-center justify-center shadow-xl shadow-base-300/50 border border-base-200 hover:scale-110 transition-transform duration-500">
                <HeartHandshake className="h-10 w-10 text-accent" />
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
