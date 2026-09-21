import Image from "next/image";
import { CheckCircle2, Target, Eye, Heart, Shield, Award, Users, MapPin, Phone } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import StaggerContainer, { StaggerItem } from "@/components/animations/StaggerContainer";

export default function About() {
  return (
    <div className="pb-24">
      {/* Banner */}
      <div className="relative h-[60vh] min-h-[500px] flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/about.jpg" 
            alt="Hospital Building" 
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
        </div>
        <div className="relative z-10 text-left w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 backdrop-blur-md text-white font-bold text-sm uppercase tracking-wider mb-6 border border-white/10">
              Our Legacy
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight drop-shadow-md">
              Excellence in <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Healthcare</span>
            </h1>
            <p className="text-xl text-white/80 font-medium leading-relaxed">
              Discover the legacy, the people, and the core values that drive our commitment to exceptional patient care.
            </p>
          </div>
        </div>
      </div>
      
      {/* Our Story Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative rounded-[3rem] overflow-hidden shadow-2xl aspect-square border-8 border-base-100 group">
            <Image 
              src="/images/about.jpg" 
              alt="Nucleus Hospital Doctors" 
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          </div>
          
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-base-200 border border-base-300 shadow-sm">
              <span className="text-xs font-bold uppercase tracking-wider text-primary">Our Story</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-base-content leading-tight">
              A Legacy of Care and <br/> Excellence Since 2008.
            </h2>
            <div className="prose prose-lg max-w-none text-base-content/70 space-y-6">
              <p className="leading-relaxed font-medium">
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
                <div key={i} className="flex items-center gap-4 bg-base-200/50 p-4 rounded-2xl border border-base-200 shadow-sm hover:border-primary/30 transition-colors">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
                  <span className="font-bold text-base-content">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <section className="mt-32 py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-neutral"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <FadeIn delay={0.1} direction="left" className="bg-base-100 p-12 lg:p-16 rounded-[3rem] shadow-2xl relative overflow-hidden group border border-base-200">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-150 group-hover:opacity-10 transition-all duration-700">
                <Target className="w-64 h-64" />
              </div>
              <div className="relative z-10 space-y-8">
                <div className="bg-primary/10 w-24 h-24 rounded-3xl flex items-center justify-center border border-primary/20">
                  <Target className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-4xl font-black text-base-content">Our Mission</h3>
                <p className="text-xl text-base-content/70 leading-relaxed font-medium">
                  To provide compassionate, accessible, and high-quality healthcare services to our community, leveraging the latest technology and top-tier medical expertise.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2} direction="right" className="bg-gradient-to-br from-primary via-secondary to-accent p-12 lg:p-16 rounded-[3rem] shadow-2xl relative overflow-hidden group text-white border border-white/10">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-150 group-hover:opacity-20 transition-all duration-700">
                <Eye className="w-64 h-64" />
              </div>
              <div className="relative z-10 space-y-8">
                <div className="bg-white/10 w-24 h-24 rounded-3xl flex items-center justify-center backdrop-blur-md border border-white/20">
                  <Eye className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-4xl font-black">Our Vision</h3>
                <p className="text-xl text-white/90 leading-relaxed font-medium">
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-base-200 border border-base-300 shadow-sm mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">Principles</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-base-content mb-6">Our Core Values</h2>
          <p className="text-xl text-base-content/70 max-w-2xl mx-auto font-medium">
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
            <StaggerItem key={i} className="text-center p-10 rounded-[2.5rem] bg-base-100 shadow-xl shadow-base-300/50 border border-base-200 hover:-translate-y-2 hover:border-primary/30 transition-all duration-300 group">
              <div className="mx-auto bg-base-200 w-24 h-24 rounded-3xl flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <value.icon className="h-10 w-10 text-primary group-hover:text-white" />
              </div>
              <h4 className="text-2xl font-bold mb-4 text-base-content">{value.title}</h4>
              <p className="text-base-content/70 text-lg leading-relaxed">{value.desc}</p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* Timeline Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-32 mb-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-base-200 border border-base-300 shadow-sm mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">History</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-base-content mb-6">Our Journey</h2>
          <p className="text-xl text-base-content/70 font-medium">A timeline of our major milestones and growth.</p>
        </div>

        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
          <li>
            <div className="timeline-middle">
              <div className="bg-primary text-white p-2 rounded-full shadow-lg">
                <CheckCircle2 className="h-5 w-5" />
              </div>
            </div>
            <div className="timeline-start md:text-end mb-10 pb-6 px-4">
              <time className="font-mono text-primary font-bold text-lg mb-2 block">2008</time>
              <div className="text-2xl font-black mb-2">Clinic Foundation</div>
              <p className="text-base-content/70 mt-2 text-lg">Nucleus started as a small 5-bed clinic providing basic community healthcare.</p>
            </div>
            <hr className="bg-primary/20" />
          </li>
          <li>
            <hr className="bg-primary/20" />
            <div className="timeline-middle">
              <div className="bg-secondary text-white p-2 rounded-full shadow-lg">
                <CheckCircle2 className="h-5 w-5" />
              </div>
            </div>
            <div className="timeline-end mb-10 pb-6 px-4">
              <time className="font-mono text-secondary font-bold text-lg mb-2 block">2014</time>
              <div className="text-2xl font-black mb-2">Multi-Specialty Expansion</div>
              <p className="text-base-content/70 mt-2 text-lg">Upgraded to a 50-bed hospital and added Cardiology and Neurology departments.</p>
            </div>
            <hr className="bg-primary/20" />
          </li>
          <li>
            <hr className="bg-primary/20" />
            <div className="timeline-middle">
              <div className="bg-accent text-white p-2 rounded-full shadow-lg">
                <CheckCircle2 className="h-5 w-5" />
              </div>
            </div>
            <div className="timeline-start md:text-end mb-10 pb-6 px-4">
              <time className="font-mono text-accent font-bold text-lg mb-2 block">2019</time>
              <div className="text-2xl font-black mb-2">Advanced Surgery Wing</div>
              <p className="text-base-content/70 mt-2 text-lg">Introduced robotic surgery capabilities and built a state-of-the-art ICU.</p>
            </div>
            <hr className="bg-primary/20" />
          </li>
          <li>
            <hr className="bg-primary/20" />
            <div className="timeline-middle">
              <div className="bg-success text-white p-2 rounded-full shadow-lg">
                <CheckCircle2 className="h-5 w-5" />
              </div>
            </div>
            <div className="timeline-end mb-10 pb-6 px-4">
              <time className="font-mono text-success font-bold text-lg mb-2 block">2023</time>
              <div className="text-2xl font-black mb-2">Awarded Best Regional Hospital</div>
              <p className="text-base-content/70 mt-2 text-lg">Recognized for medical excellence and maintaining a 99% patient satisfaction rate.</p>
            </div>
          </li>
        </ul>
      </section>

    </div>
  );
}
