import Image from "next/image";
import { CheckCircle2, Target, Eye, Heart, Shield, Award, Users, MapPin, Phone } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import StaggerContainer, { StaggerItem } from "@/components/animations/StaggerContainer";

export default function About() {
  return (
    <div className="pb-24">
      {/* Banner */}
      <div className="relative h-[400px] bg-primary/10 flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 backdrop-blur-3xl z-0"></div>
        <div className="relative z-10 text-center space-y-4 px-4 animate-in zoom-in duration-700">
          <h1 className="text-5xl md:text-7xl font-extrabold text-primary">About Nucleus</h1>
          <p className="text-xl text-base-content/70 max-w-2xl mx-auto font-medium">
            Discover the legacy, the people, and the core values that drive our commitment to exceptional healthcare.
          </p>
        </div>
      </div>
      
      {/* Our Story Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative rounded-[3rem] overflow-hidden shadow-2xl aspect-square border-8 border-base-100 hover:scale-[1.01] transition-transform duration-700">
            <Image 
              src="/images/about.jpg" 
              alt="Nucleus Hospital Doctors" 
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary font-bold text-sm uppercase tracking-wider">
              Our Story
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-base-content leading-tight">
              A Legacy of Care and <br/> Excellence Since 2008.
            </h2>
            <div className="prose prose-lg max-w-none text-base-content/70 space-y-6">
              <p className="leading-relaxed">
                Founded with a vision to provide accessible, high-quality healthcare, Nucleus Hospital has been a pillar of health in our community. We started as a small clinic and have grown into a multi-specialty medical center serving over 10,000 patients annually.
              </p>
              <p className="leading-relaxed">
                Our team consists of highly skilled and experienced specialists dedicated to improving lives through advanced medical treatments, continuous research, and deeply compassionate care.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
              {[
                "Certified Medical Staff",
                "Advanced Technology",
                "24/7 Emergency Care",
                "Affordable Treatments"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-base-200/50 p-4 rounded-xl border border-base-200">
                  <CheckCircle2 className="h-6 w-6 text-success flex-shrink-0" />
                  <span className="font-semibold text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <section className="bg-base-200 mt-32 py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <FadeIn delay={0.1} direction="left" className="bg-base-100 p-12 rounded-[3rem] shadow-xl border border-base-200 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-150 transition-transform duration-700">
                <Target className="w-48 h-48" />
              </div>
              <div className="relative z-10 space-y-6">
                <div className="bg-primary/20 w-20 h-20 rounded-2xl flex items-center justify-center">
                  <Target className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-3xl font-bold text-base-content">Our Mission</h3>
                <p className="text-xl text-base-content/70 leading-relaxed">
                  To provide compassionate, accessible, and high-quality healthcare services to our community, leveraging the latest technology and top-tier medical expertise.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2} direction="right" className="bg-gradient-to-br from-primary to-secondary p-12 rounded-[3rem] shadow-xl border border-white/10 relative overflow-hidden group text-primary-content">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-150 transition-transform duration-700">
                <Eye className="w-48 h-48" />
              </div>
              <div className="relative z-10 space-y-6">
                <div className="bg-white/20 w-20 h-20 rounded-2xl flex items-center justify-center">
                  <Eye className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold">Our Vision</h3>
                <p className="text-xl text-primary-content/90 leading-relaxed">
                  To be the region's leading healthcare provider, recognized globally for setting the standard in patient care, clinical excellence, and medical innovation.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-32 overflow-hidden">
        <FadeIn delay={0.1} direction="up" className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-base-content mb-4">Our Core Values</h2>
          <p className="text-xl text-base-content/70 max-w-2xl mx-auto">
            These guiding principles form the foundation of our hospital culture and dictate how we treat every single patient.
          </p>
        </FadeIn>

        <StaggerContainer staggerDelay={0.15} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: "Compassion", desc: "We treat everyone with empathy and kindness.", icon: Heart },
            { title: "Excellence", desc: "We strive for the highest standards in medicine.", icon: Award },
            { title: "Integrity", desc: "We are honest, transparent, and ethical.", icon: Shield },
            { title: "Teamwork", desc: "We collaborate across disciplines for your health.", icon: Users },
          ].map((value, i) => (
            <StaggerItem key={i} className="text-center p-8 rounded-[2rem] bg-base-100 shadow-lg border border-base-200 hover:-translate-y-2 transition-transform duration-300">
              <div className="mx-auto bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mb-6">
                <value.icon className="h-10 w-10 text-primary" />
              </div>
              <h4 className="text-2xl font-bold mb-3 text-base-content">{value.title}</h4>
              <p className="text-base-content/70 text-lg leading-relaxed">{value.desc}</p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* Timeline Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-base-content mb-4">Our Journey</h2>
          <p className="text-xl text-base-content/70">A timeline of our major milestones and growth.</p>
        </div>

        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
          <li>
            <div className="timeline-middle text-primary">
              <CheckCircle2 className="h-5 w-5" />
            </div>
            <div className="timeline-start md:text-end mb-10">
              <time className="font-mono italic">2008</time>
              <div className="text-lg font-black">Clinic Foundation</div>
              <p className="text-base-content/70 mt-2">Nucleus started as a small 5-bed clinic providing basic community healthcare.</p>
            </div>
            <hr className="bg-primary" />
          </li>
          <li>
            <hr className="bg-primary" />
            <div className="timeline-middle text-primary">
              <CheckCircle2 className="h-5 w-5" />
            </div>
            <div className="timeline-end mb-10">
              <time className="font-mono italic">2014</time>
              <div className="text-lg font-black">Multi-Specialty Expansion</div>
              <p className="text-base-content/70 mt-2">Upgraded to a 50-bed hospital and added Cardiology and Neurology departments.</p>
            </div>
            <hr className="bg-primary" />
          </li>
          <li>
            <hr className="bg-primary" />
            <div className="timeline-middle text-primary">
              <CheckCircle2 className="h-5 w-5" />
            </div>
            <div className="timeline-start md:text-end mb-10">
              <time className="font-mono italic">2019</time>
              <div className="text-lg font-black">Advanced Surgery Wing</div>
              <p className="text-base-content/70 mt-2">Introduced robotic surgery capabilities and built a state-of-the-art ICU.</p>
            </div>
            <hr className="bg-primary" />
          </li>
          <li>
            <hr className="bg-primary" />
            <div className="timeline-middle text-primary">
              <CheckCircle2 className="h-5 w-5" />
            </div>
            <div className="timeline-end mb-10">
              <time className="font-mono italic">2023</time>
              <div className="text-lg font-black">Awarded Best Regional Hospital</div>
              <p className="text-base-content/70 mt-2">Recognized for medical excellence and maintaining a 99% patient satisfaction rate.</p>
            </div>
          </li>
        </ul>
      </section>

    </div>
  );
}
