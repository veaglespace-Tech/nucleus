import Image from 'next/image';
import { ArrowRight, Star } from 'lucide-react';
import FadeIn from '@/components/animations/FadeIn';
import StaggerContainer, { StaggerItem } from '@/components/animations/StaggerContainer';
import Link from 'next/link';

export default function DoctorsSection() {
  const doctors = [
    {
      name: "Dr. Sarah Jenkins",
      specialty: "Chief Cardiologist",
      qualifications: "MD, FACC, Ph.D. in Cardiovascular Medicine",
      experience: "20+ Years",
      image: "https://i.pravatar.cc/300?img=47",
      bio: "Dr. Jenkins is a world-renowned cardiologist specializing in advanced heart failure and minimally invasive cardiac surgeries. She has pioneered several robotic surgery techniques.",
      rating: 4.9,
    },
    {
      name: "Dr. Michael Chen",
      specialty: "Lead Neurosurgeon",
      qualifications: "MD, FACS, Board Certified in Neurological Surgery",
      experience: "15+ Years",
      image: "https://i.pravatar.cc/300?img=11",
      bio: "Dr. Chen focuses on complex brain tumors and spinal cord injuries. His patient-first approach and extensive research in neuro-oncology have earned him global recognition.",
      rating: 4.8,
    },
    {
      name: "Dr. Emily Rodriguez",
      specialty: "Pediatric Specialist",
      qualifications: "MD, FAAP, Specialist in Neonatology",
      experience: "12+ Years",
      image: "https://i.pravatar.cc/300?img=5",
      bio: "Dedicated to providing compassionate care for children of all ages, Dr. Rodriguez specializes in treating complex pediatric infectious diseases and developmental disorders.",
      rating: 5.0,
    },
    {
      name: "Dr. James Wilson",
      specialty: "Orthopedic Surgeon",
      qualifications: "MD, FAAOS, Fellowship in Sports Medicine",
      experience: "18+ Years",
      image: "https://i.pravatar.cc/300?img=68",
      bio: "Expert in joint replacement and sports injuries. Dr. Wilson has successfully treated thousands of professional athletes, utilizing cutting-edge arthroscopic techniques.",
      rating: 4.9,
    }
  ];

  return (
    <section className="bg-base-200 py-12 lg:py-16 rounded-[3rem] mx-4 sm:mx-6 lg:mx-8 shadow-inner overflow-hidden mb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn delay={0.1} direction="up" className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-4xl lg:text-5xl font-extrabold mb-6 text-base-content">Meet Our Expert Specialists</h2>
            <p className="text-xl text-base-content/70 leading-relaxed">
              Our team of award-winning doctors and surgeons are globally recognized leaders in their respective fields, dedicated to providing unparalleled care.
            </p>
          </div>
          <Link href="/about" className="btn btn-primary btn-lg rounded-full px-8 shrink-0 shadow-lg shadow-primary/30">
            View All Doctors <ArrowRight className="h-5 w-5 ml-2" />
          </Link>
        </FadeIn>

        <StaggerContainer staggerDelay={0.15} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctors.map((doc, i) => (
            <StaggerItem key={i} className="card bg-base-100 shadow-xl shadow-base-300/50 border border-base-200 hover:shadow-2xl hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 rounded-[2rem] overflow-hidden">
              <div className="relative h-72 w-full overflow-hidden bg-base-300">
                <Image 
                  src={doc.image} 
                  alt={doc.name} 
                  fill 
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-base-100 via-transparent to-transparent"></div>
              </div>
              <div className="card-body p-6 text-center relative z-10 -mt-10 bg-base-100 rounded-t-[2rem]">
                <h3 className="card-title text-2xl font-bold justify-center font-heading">{doc.name}</h3>
                <p className="text-primary font-semibold text-lg">{doc.specialty}</p>
                <div className="flex flex-col gap-1 mt-2 text-sm text-base-content/70">
                  <span className="font-medium text-base-content/90">{doc.qualifications}</span>
                  <span>{doc.experience} Experience</span>
                </div>
                <div className="mt-4 pt-4 border-t border-base-200">
                  <p className="text-sm text-base-content/70 leading-relaxed text-left line-clamp-3">{doc.bio}</p>
                </div>
                <div className="flex items-center justify-center gap-1 mt-4 text-warning font-bold">
                  <Star className="h-5 w-5 fill-current" />
                  <span className="text-base-content">{doc.rating} Rating</span>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
