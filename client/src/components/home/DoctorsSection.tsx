import Image from 'next/image';
import { ArrowRight, Star, Linkedin, Twitter, Mail } from 'lucide-react';
import FadeIn from '@/components/animations/FadeIn';
import StaggerContainer, { StaggerItem } from '@/components/animations/StaggerContainer';
import Link from 'next/link';

export default function DoctorsSection() {
  const doctors = [
    {
      name: "Dr. Sarah Jenkins",
      specialty: "Chief Cardiologist",
      qualifications: "MD, FACC",
      experience: "20+ Years",
      image: "https://i.pravatar.cc/400?img=47",
      bio: "World-renowned cardiologist specializing in advanced heart failure and minimally invasive robotic surgeries.",
      rating: 4.9,
    },
    {
      name: "Dr. Michael Chen",
      specialty: "Lead Neurosurgeon",
      qualifications: "MD, FACS",
      experience: "15+ Years",
      image: "https://i.pravatar.cc/400?img=11",
      bio: "Focuses on complex brain tumors and spinal cord injuries. Globally recognized for neuro-oncology research.",
      rating: 4.8,
    },
    {
      name: "Dr. Emily Rodriguez",
      specialty: "Pediatric Specialist",
      qualifications: "MD, FAAP",
      experience: "12+ Years",
      image: "https://i.pravatar.cc/400?img=5",
      bio: "Dedicated to providing compassionate care for children, specializing in complex infectious diseases.",
      rating: 5.0,
    },
    {
      name: "Dr. James Wilson",
      specialty: "Orthopedic Surgeon",
      qualifications: "MD, FAAOS",
      experience: "18+ Years",
      image: "https://i.pravatar.cc/400?img=68",
      bio: "Expert in joint replacement and sports injuries. Successfully treated thousands of professional athletes.",
      rating: 4.9,
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mb-20">
      <section className="bg-base-100 py-12">
        <div className="w-full">
        <FadeIn delay={0.1} direction="up" className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-base-200 border border-base-300 shadow-sm mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-primary">Medical Experts</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black mb-6 text-base-content leading-tight">World-Class Specialists</h2>
            <p className="text-xl text-base-content/70 leading-relaxed font-medium">
              Our award-winning team of doctors are globally recognized leaders in their respective fields, dedicated to providing unparalleled care.
            </p>
          </div>
          <Link href="/about" className="btn btn-outline border-base-300 btn-lg rounded-full px-8 shrink-0 shadow-sm hover:bg-base-200 hover:text-base-content">
            View All Doctors <ArrowRight className="h-5 w-5 ml-2" />
          </Link>
        </FadeIn>

        <StaggerContainer staggerDelay={0.15} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctors.map((doc, i) => (
            <StaggerItem key={i} className="group relative rounded-[2.5rem] overflow-hidden bg-base-200 border border-base-300/50 shadow-md hover:shadow-2xl hover:border-primary/30 transition-all duration-500 cursor-pointer">
              
              {/* Image Container */}
              <div className="relative h-80 w-full overflow-hidden bg-base-300">
                <Image 
                  src={doc.image} 
                  alt={doc.name} 
                  fill 
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-700 origin-top"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
                
                {/* Social Links (Reveal on hover) */}
                <div className="absolute top-4 right-4 flex flex-col gap-2 translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-primary hover:text-white transition-colors cursor-pointer text-white">
                    <Linkedin className="h-4 w-4" />
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-primary hover:text-white transition-colors cursor-pointer text-white">
                    <Twitter className="h-4 w-4" />
                  </div>
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 w-full p-6 text-left text-white transform transition-transform duration-500">
                  <h3 className="text-2xl font-bold mb-1">{doc.name}</h3>
                  <p className="text-primary font-bold text-sm mb-3 uppercase tracking-wider">{doc.specialty}</p>
                  
                  {/* Expandable bio on hover */}
                  <div className="h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 overflow-hidden transition-all duration-500">
                    <p className="text-white/80 text-sm leading-relaxed mb-4">{doc.bio}</p>
                    <div className="flex items-center justify-between border-t border-white/20 pt-4 mt-2">
                      <div className="flex items-center gap-1 text-warning">
                        <Star className="h-4 w-4 fill-current" />
                        <span className="font-bold text-sm text-white">{doc.rating}</span>
                      </div>
                      <span className="text-xs font-medium text-white/70 bg-white/10 px-3 py-1 rounded-full">{doc.experience}</span>
                    </div>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
        </div>
      </section>
    </div>
  );
}
