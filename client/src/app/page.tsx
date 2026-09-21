import Link from "next/link";
import Image from "next/image";
import { Activity, Clock, Shield, Star, Users, ArrowRight, HeartPulse, CheckCircle2 } from "lucide-react";
import ReviewsSection from "@/components/home/ReviewsSection";
import DynamicServicesHome from "@/components/home/DynamicServicesHome";
import FAQSection from "@/components/home/FAQSection";
import FadeIn from "@/components/animations/FadeIn";
import Counter from "@/components/animations/Counter";
import AchievementsBanner from "@/components/home/AchievementsBanner";
import DoctorsSection from "@/components/home/DoctorsSection";
import DynamicBlogsHome from "@/components/home/DynamicBlogsHome";

export default function Home() {
  return (
    <div className="flex flex-col gap-8 lg:gap-12 pb-16 bg-base-100 overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-24 pb-20 overflow-hidden bg-base-100">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-base-100 to-base-100 z-0"></div>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] mix-blend-multiply opacity-70 animate-blob"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[100px] mix-blend-multiply opacity-70 animate-blob animation-delay-4000"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Left Content */}
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 mt-10 lg:mt-0">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-base-100 border border-primary/20 shadow-xl shadow-primary/10 backdrop-blur-md">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                </span>
                <span className="text-sm font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">Premium Healthcare Template</span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-base-content leading-[1.1]">
                Advanced <br/>
                <span className="relative inline-block mt-2">
                  <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">Medical Care</span>
                  <span className="absolute bottom-2 left-0 w-full h-4 bg-primary/20 -z-10 -rotate-2 rounded-full"></span>
                </span> <br/>
                Close To You
              </h1>
              
              <p className="text-xl text-base-content/70 max-w-lg leading-relaxed font-medium">
                We bring together top-tier medical experts, state-of-the-art technology, and compassionate care to ensure you get the absolute best treatment possible.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-5 pt-2 w-full">
                <Link href="/contact" className="btn border-0 bg-gradient-to-r from-primary via-secondary to-accent hover:from-primary hover:to-secondary text-white btn-lg rounded-full shadow-xl shadow-primary/30 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/40 transition-all duration-300 w-full sm:w-auto px-10 text-lg font-bold">
                  Book Appointment
                </Link>
                <Link href="/services" className="btn btn-outline btn-lg rounded-full hover:-translate-y-1 bg-base-100 hover:bg-base-200 hover:text-base-content transition-all duration-300 border-base-200 shadow-sm w-full sm:w-auto px-10 text-lg font-bold">
                  Explore Services
                </Link>
              </div>

              <div className="flex items-center gap-5 pt-8 border-t border-base-200 mt-8">
                <div className="avatar-group -space-x-4 rtl:space-x-reverse">
                  <div className="avatar shadow-md">
                    <div className="w-12 rounded-full border-2 border-base-100">
                      <img src="https://i.pravatar.cc/150?img=32" alt="Patient" />
                    </div>
                  </div>
                  <div className="avatar shadow-md">
                    <div className="w-12 rounded-full border-2 border-base-100">
                      <img src="https://i.pravatar.cc/150?img=12" alt="Patient" />
                    </div>
                  </div>
                  <div className="avatar shadow-md">
                    <div className="w-12 rounded-full border-2 border-base-100">
                      <img src="https://i.pravatar.cc/150?img=5" alt="Patient" />
                    </div>
                  </div>
                  <div className="avatar placeholder shadow-md">
                    <div className="w-12 bg-primary text-primary-content border-2 border-base-100 rounded-full font-bold">
                      <span>+10k</span>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex text-warning text-sm mb-1">
                    <Star className="h-4 w-4 fill-warning" />
                    <Star className="h-4 w-4 fill-warning" />
                    <Star className="h-4 w-4 fill-warning" />
                    <Star className="h-4 w-4 fill-warning" />
                    <Star className="h-4 w-4 fill-warning" />
                  </div>
                  <p className="text-sm text-base-content/70 font-bold">Trusted by 10,000+ patients</p>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative animate-in fade-in slide-in-from-right-8 duration-1000 delay-200 hidden md:block">
              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl shadow-primary/20 bg-base-100 aspect-[4/5] border border-base-200">
                <Image 
                  src="/images/hero.jpg" 
                  alt="Nucleus Hospital Modern Facility" 
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>
              
              {/* Floating Badge 1 */}
              <div className="absolute top-10 -left-12 bg-base-100/90 backdrop-blur-md p-5 rounded-3xl shadow-2xl border border-base-200 flex items-center gap-4 animate-float">
                <div className="bg-secondary/20 p-3 rounded-2xl">
                  <Activity className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <p className="text-xl font-bold">24/7 Care</p>
                  <p className="text-xs text-base-content/70 font-medium">Always available</p>
                </div>
              </div>

              {/* Floating Badge 2 */}
              <div className="absolute bottom-10 -right-12 bg-base-100/90 backdrop-blur-md p-5 rounded-3xl shadow-2xl border border-base-200 flex items-center gap-4 animate-float animation-delay-2000">
                <div className="bg-success/20 p-3 rounded-2xl">
                  <Shield className="h-6 w-6 text-success" />
                </div>
                <div>
                  <p className="text-xl font-bold">100% Safe</p>
                  <p className="text-xs text-base-content/70 font-medium">Certified hospital</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Stats Section */}
      <FadeIn delay={0.4} direction="up" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full -mt-32 relative z-20">
        <div className="bg-base-100/90 backdrop-blur-xl rounded-[2rem] shadow-2xl shadow-primary/20 border border-primary/10 p-8 lg:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-base-200/50">
            <div className="text-center px-4 hover:-translate-y-2 transition-transform duration-300 cursor-pointer">
              <Counter to={50} suffix="+" className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-primary to-secondary mb-2 block" />
              <p className="text-base-content/70 font-medium text-lg">Specialist Doctors</p>
            </div>
            <div className="text-center px-4 hover:-translate-y-2 transition-transform duration-300 cursor-pointer">
              <Counter to={24} suffix="/7" className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-primary to-secondary mb-2 block" />
              <p className="text-base-content/70 font-medium text-lg">Emergency Care</p>
            </div>
            <div className="text-center px-4 hover:-translate-y-2 transition-transform duration-300 cursor-pointer">
              <Counter to={10} suffix="k+" className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-primary to-secondary mb-2 block" />
              <p className="text-base-content/70 font-medium text-lg">Happy Patients</p>
            </div>
            <div className="text-center px-4 hover:-translate-y-2 transition-transform duration-300 cursor-pointer">
              <Counter to={15} suffix="+" className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-primary to-secondary mb-2 block" />
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-12">
        <section className="bg-base-200/50 py-16 px-6 sm:px-12 lg:py-24 lg:px-16 relative overflow-hidden rounded-[3rem] border border-base-200">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-base-100 border border-base-300 shadow-sm mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-primary">Why Choose Us</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-black mb-6 text-base-content leading-tight">
                Premium Care For <br/>Your Family
              </h2>
              <p className="text-base-content/70 mb-10 text-lg leading-relaxed font-medium">
                We are committed to providing exceptional care in a comfortable, healing environment. Our patient-first approach ensures you receive personalized attention tailored to your exact needs.
              </p>
              
              <div className="space-y-6">
                <div className="bg-base-100 p-6 rounded-3xl shadow-sm border border-base-200 hover:shadow-md hover:border-primary/30 transition-all duration-300 group">
                  <div className="flex gap-5 items-start">
                    <div className="bg-primary/10 p-4 rounded-2xl group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <Shield className="h-7 w-7 text-primary group-hover:text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-base-content mb-2">Highest Quality Standards</h4>
                      <p className="text-base-content/60 text-sm leading-relaxed">Globally recognized with JCI accreditation, adhering to the strictest clinical safety protocols.</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-base-100 p-6 rounded-3xl shadow-sm border border-base-200 hover:shadow-md hover:border-secondary/30 transition-all duration-300 group">
                  <div className="flex gap-5 items-start">
                    <div className="bg-secondary/10 p-4 rounded-2xl group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                      <Clock className="h-7 w-7 text-secondary group-hover:text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-base-content mb-2">24/7 Emergency Care</h4>
                      <p className="text-base-content/60 text-sm leading-relaxed">Level 1 Trauma Center and advanced ICU units operational 365 days a year.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-base-100 p-6 rounded-3xl shadow-sm border border-base-200 hover:shadow-md hover:border-accent/30 transition-all duration-300 group">
                  <div className="flex gap-5 items-start">
                    <div className="bg-accent/10 p-4 rounded-2xl group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                      <CheckCircle2 className="h-7 w-7 text-accent group-hover:text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-base-content mb-2">Seamless Financing</h4>
                      <p className="text-base-content/60 text-sm leading-relaxed">Partnered with major insurance providers for cashless hospitalization and EMI options.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Side Visuals */}
            <div className="relative hidden lg:block">
              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl aspect-[3/4] border-8 border-base-100">
                 <Image 
                  src="/images/about.jpg" 
                  alt="City Hospital Expert Doctors" 
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              {/* Overlay Stat */}
              <div className="absolute -left-16 top-1/3 bg-base-100 rounded-[2rem] p-6 shadow-2xl border border-base-200 text-base-content animate-float flex items-center gap-5">
                <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">99%</div>
                <div>
                  <p className="font-bold text-base-content/80 text-sm uppercase tracking-wider">Success Rate</p>
                  <p className="text-xs text-base-content/50">in major surgeries</p>
                </div>
              </div>
            </div>

            </div>
          </div>
        </section>
      </div>

      {/* Dynamic Blogs Section */}
      <DynamicBlogsHome />

      {/* FAQ Section */}
      <FAQSection />

      {/* CTA Section */}
      <FadeIn delay={0.2} direction="up" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-10 mb-10 relative">
        <div className="absolute inset-0 bg-primary/20 blur-3xl -z-10 rounded-full scale-y-50"></div>
        <div className="relative bg-gradient-to-br from-primary via-secondary to-accent rounded-[3rem] p-10 sm:p-16 lg:p-20 text-center shadow-2xl overflow-hidden group">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay group-hover:opacity-20 transition-opacity duration-500"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          
          <div className="relative z-10">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight text-white drop-shadow-sm">
              Ready for Better Health?
            </h2>
            <p className="text-xl sm:text-2xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
              Book an appointment with our expert doctors today and take the first step towards a healthier, happier life.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-5 w-full">
              <Link href="/contact" className="btn bg-white border-0 text-primary h-14 sm:h-16 text-base sm:text-lg rounded-full shadow-xl w-full sm:w-auto px-8 sm:px-12 hover:scale-105 transition-transform duration-300 whitespace-nowrap font-bold hover:bg-base-200">
                Book Appointment Now
              </Link>
              <Link href="/services" className="btn btn-outline text-white border-white/40 hover:bg-white/10 hover:border-white h-14 sm:h-16 text-base sm:text-lg rounded-full w-full sm:w-auto px-8 sm:px-12 hover:scale-105 transition-all duration-300 whitespace-nowrap font-bold">
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
