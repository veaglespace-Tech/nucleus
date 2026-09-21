import Link from "next/link";
import Image from "next/image";
import { Activity, Clock, Shield, Star, Users, ArrowRight, HeartPulse, CheckCircle2 } from "lucide-react";
import ReviewsSection from "@/components/home/ReviewsSection";
import DynamicServicesHome from "@/components/home/DynamicServicesHome";
import FAQSection from "@/components/home/FAQSection";
import FadeIn from "@/components/animations/FadeIn";
import AchievementsBanner from "@/components/home/AchievementsBanner";
import DoctorsSection from "@/components/home/DoctorsSection";
import DynamicBlogsHome from "@/components/home/DynamicBlogsHome";

export default function Home() {
  return (
    <div className="flex flex-col gap-8 lg:gap-12 pb-16 bg-base-100 overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-24 pb-32 overflow-hidden bg-base-100">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-base-100 to-base-100 z-0"></div>
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-secondary/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 -right-40 w-96 h-96 bg-primary/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-40 left-20 w-96 h-96 bg-accent/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Content */}
            <div className="space-y-8 animate-in fade-in slide-in-from-left duration-1000">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 text-primary font-medium text-sm border border-primary/20 shadow-sm backdrop-blur-sm">
                <HeartPulse className="h-4 w-4 animate-pulse text-secondary" />
                <span>Your Health, Our Top Priority</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-black tracking-tight text-base-content leading-[1.1]">
                Advanced <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">Healthcare</span> <br />
                Close To You
              </h1>
              <p className="text-xl text-base-content/80 max-w-lg leading-relaxed">
                Nucleus Hospital brings together top-tier medical experts, state-of-the-art technology, and compassionate care to ensure you get the absolute best treatment possible.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/contact" className="btn border-0 bg-gradient-to-r from-primary to-accent hover:from-primary hover:to-secondary text-white btn-lg rounded-full shadow-xl shadow-primary/30 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/40 transition-all duration-300 px-8">
                  Book an Appointment
                </Link>
                <Link href="/services" className="btn btn-outline btn-lg rounded-full hover:-translate-y-1 hover:bg-base-200 hover:text-base-content transition-all duration-300 border-base-300 px-8">
                  Explore Services
                </Link>
              </div>

              <div className="flex items-center gap-4 pt-6">
                <div className="avatar-group -space-x-4 rtl:space-x-reverse">
                  <div className="avatar">
                    <div className="w-10 rounded-full border-2 border-base-100">
                      <img src="https://i.pravatar.cc/150?img=32" alt="Patient" />
                    </div>
                  </div>
                  <div className="avatar">
                    <div className="w-10 rounded-full border-2 border-base-100">
                      <img src="https://i.pravatar.cc/150?img=12" alt="Patient" />
                    </div>
                  </div>
                  <div className="avatar">
                    <div className="w-10 rounded-full border-2 border-base-100">
                      <img src="https://i.pravatar.cc/150?img=5" alt="Patient" />
                    </div>
                  </div>
                  <div className="avatar placeholder">
                    <div className="w-10 bg-neutral text-neutral-content border-2 border-base-100 rounded-full">
                      <span>+9k</span>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-base-content/70 font-medium">Trusted by 10,000+ patients</p>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative animate-in fade-in slide-in-from-right duration-1000 delay-200">
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-primary/20 bg-base-100 aspect-[4/3] border border-base-200/50">
                <Image 
                  src="/images/hero.jpg" 
                  alt="Nucleus Hospital Modern Facility" 
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-base-300/80 via-transparent to-transparent"></div>
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-8 -left-8 bg-base-100/90 backdrop-blur-md p-6 rounded-3xl shadow-2xl border border-base-200 flex items-center gap-4 animate-bounce-slow">
                <div className="bg-success/20 p-3 rounded-2xl">
                  <Star className="h-8 w-8 text-success fill-success" />
                </div>
                <div>
                  <p className="text-3xl font-bold">4.9/5</p>
                  <p className="text-sm text-base-content/70 font-medium">Patient Satisfaction</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Stats Section */}
      <FadeIn delay={0.4} direction="up" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full -mt-32 relative z-20">
        <div className="bg-base-100/80 backdrop-blur-xl rounded-[2rem] shadow-2xl shadow-base-300/50 border border-base-200 p-8 lg:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-base-200/50">
            <div className="text-center px-4 hover:-translate-y-1 transition-transform duration-300">
              <p className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-primary to-secondary mb-2">50+</p>
              <p className="text-base-content/70 font-medium text-lg">Specialist Doctors</p>
            </div>
            <div className="text-center px-4 hover:-translate-y-1 transition-transform duration-300">
              <p className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-primary to-secondary mb-2">24/7</p>
              <p className="text-base-content/70 font-medium text-lg">Emergency Care</p>
            </div>
            <div className="text-center px-4 hover:-translate-y-1 transition-transform duration-300">
              <p className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-primary to-secondary mb-2">10k+</p>
              <p className="text-base-content/70 font-medium text-lg">Happy Patients</p>
            </div>
            <div className="text-center px-4 hover:-translate-y-1 transition-transform duration-300">
              <p className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-primary to-secondary mb-2">15+</p>
              <p className="text-base-content/70 font-medium text-lg">Years Experience</p>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* Dynamic Services Section */}
      <DynamicServicesHome />

      {/* Achievements Banner */}
      <AchievementsBanner />

      {/* Expert Doctors Section */}
      <DoctorsSection />

      {/* Reviews Section */}
      <ReviewsSection />

      {/* Features Section with Image */}
      <section className="bg-neutral text-neutral-content py-12 lg:py-16 relative overflow-hidden rounded-[3rem] mx-4 sm:mx-6 lg:mx-8 shadow-2xl">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-12 lg:px-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            
            {/* Left Content */}
            <div>
              <h2 className="text-4xl lg:text-5xl font-extrabold mb-8 text-white leading-tight">
                Why Choose Nucleus Hospital For Your Care?
              </h2>
              <p className="text-neutral-content/80 mb-10 text-xl leading-relaxed">
                We are committed to providing exceptional care in a comfortable, healing environment. Our patient-first approach ensures you receive personalized attention tailored to your exact needs.
              </p>
              
              <div className="space-y-8">
                <div className="flex gap-6 items-start group">
                  <div className="bg-primary/20 p-4 rounded-2xl h-fit group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <Shield className="h-8 w-8 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-white mb-2 font-heading">Highest Quality Standards & Accreditation</h4>
                    <p className="text-neutral-content/70 text-lg">Our hospital is recognized globally with JCI accreditation, adhering to the strictest clinical safety protocols and delivering a zero-infection surgical environment.</p>
                  </div>
                </div>
                
                <div className="flex gap-6 items-start group">
                  <div className="bg-primary/20 p-4 rounded-2xl h-fit group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <Clock className="h-8 w-8 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-white mb-2 font-heading">Comprehensive 24/7 Emergency Care</h4>
                    <p className="text-neutral-content/70 text-lg">Our Level 1 Trauma Center, advanced ICU units, and rapid-response ambulances are fully operational 365 days a year, ensuring you receive immediate life-saving care.</p>
                  </div>
                </div>

                <div className="flex gap-6 items-start group">
                  <div className="bg-primary/20 p-4 rounded-2xl h-fit group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <CheckCircle2 className="h-8 w-8 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-white mb-2 font-heading">Seamless Insurance & Financing Support</h4>
                    <p className="text-neutral-content/70 text-lg">We have partnered with all major international and domestic health insurance providers, offering cashless hospitalization and flexible, zero-interest EMI options for extensive medical procedures.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Side Visuals */}
            <div className="relative">
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[4/5] border-4 border-base-100/10 hover:scale-[1.02] transition-transform duration-500">
                 <Image 
                  src="/images/about.jpg" 
                  alt="City Hospital Expert Doctors" 
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              {/* Overlay Stat */}
              <div className="absolute -left-12 top-1/4 bg-base-100 rounded-[2rem] p-8 shadow-2xl border border-base-200 text-base-content animate-bounce-slow hidden md:block">
                <p className="text-5xl font-extrabold text-primary mb-2">99%</p>
                <p className="text-base-content/80 font-medium text-lg">Success Rate in<br/>Major Surgeries</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Dynamic Blogs Section */}
      <DynamicBlogsHome />

      {/* FAQ Section */}
      <FAQSection />

      {/* CTA Section */}
      <FadeIn delay={0.2} direction="up" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full mb-12 relative">
        <div className="absolute inset-0 bg-primary/20 blur-3xl -z-10 rounded-full scale-y-50"></div>
        <div className="bg-gradient-to-br from-primary to-secondary rounded-[3rem] p-16 text-center text-primary-content shadow-2xl hover:shadow-primary/30 transition-shadow duration-500 border border-white/10">
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">Need a Medical Consultation?</h2>
          <p className="text-xl text-primary-content/90 max-w-2xl mx-auto mb-10 leading-relaxed">
            Book an appointment with our expert doctors today and take the first step towards a healthier, happier life.
          </p>
          <div className="flex justify-center gap-6">
            <Link href="/contact" className="btn btn-base-100 text-primary btn-lg rounded-full shadow-xl px-10 hover:scale-105 transition-transform duration-300">
              Book Appointment Now
            </Link>
            <Link href="/about" className="btn btn-outline text-primary-content border-primary-content hover:bg-primary-content hover:text-primary btn-lg rounded-full px-10 hover:scale-105 transition-transform duration-300">
              Learn About Us
            </Link>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
