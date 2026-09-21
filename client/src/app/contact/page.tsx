import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";

export default function Contact() {
  return (
    <div className="pb-24">
      {/* Banner */}
      <div className="relative h-[40vh] min-h-[400px] bg-base-300 flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 backdrop-blur-3xl z-0"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="relative z-10 text-center space-y-4 px-4 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-base-100/50 backdrop-blur-md border border-base-200 shadow-sm mb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">Get In Touch</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-base-content leading-tight drop-shadow-sm">
            Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Us</span>
          </h1>
          <p className="text-xl text-base-content/70 max-w-2xl mx-auto font-medium">
            We are here to assist you. Reach out for appointments, inquiries, or emergency support.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10 mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-8">
          
          {/* Contact Information */}
          <FadeIn delay={0.1} direction="right" className="lg:col-span-5 space-y-6">
            <div className="bg-base-100/95 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-10 shadow-[0_20px_60px_-10px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_60px_-10px_rgba(var(--color-primary),0.2)] border border-base-200 h-full flex flex-col justify-between relative overflow-hidden group transition-all duration-500">
              <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors duration-700"></div>
              
              <div className="relative z-10">
                <h2 className="text-3xl font-black mb-8 text-base-content">Contact Info</h2>
                
                <div className="space-y-8">
                  <div className="flex items-start gap-6 group/item cursor-pointer">
                    <div className="bg-primary/10 w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 group-hover/item:bg-primary group-hover/item:text-white transition-colors duration-300 shadow-sm border border-primary/10">
                      <MapPin className="h-6 w-6 text-primary group-hover/item:text-white transition-colors" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-1 text-base-content">Our Location</h3>
                      <p className="text-base-content/70 leading-relaxed font-medium">123 Health Avenue, Medical District,<br/>City, State - 400001</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6 group/item cursor-pointer">
                    <div className="bg-secondary/10 w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 group-hover/item:bg-secondary group-hover/item:text-white transition-colors duration-300 shadow-sm border border-secondary/10">
                      <Phone className="h-6 w-6 text-secondary group-hover/item:text-white transition-colors" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-1 text-base-content">Phone</h3>
                      <p className="text-base-content/70 leading-relaxed font-medium">+91 98765 43210<br/>+91 98765 43211</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6 group/item cursor-pointer">
                    <div className="bg-accent/10 w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 group-hover/item:bg-accent group-hover/item:text-white transition-colors duration-300 shadow-sm border border-accent/10">
                      <Mail className="h-6 w-6 text-accent group-hover/item:text-white transition-colors" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-1 text-base-content">Email</h3>
                      <p className="text-base-content/70 leading-relaxed font-medium">info@nucleus-hospital.com<br/>support@nucleus-hospital.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-6 group/item cursor-pointer">
                    <div className="bg-success/10 w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 group-hover/item:bg-success group-hover/item:text-white transition-colors duration-300 shadow-sm border border-success/10">
                      <Clock className="h-6 w-6 text-success group-hover/item:text-white transition-colors" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-1 text-base-content">Working Hours</h3>
                      <p className="text-base-content/70 leading-relaxed font-medium">Emergency: 24/7<br/>OPD: Mon - Sat, 9:00 AM - 8:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Contact Form */}
          <FadeIn delay={0.2} direction="left" className="lg:col-span-7">
            <div className="relative bg-base-100/95 backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] border border-base-200 shadow-[0_20px_60px_-10px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_60px_-10px_rgba(var(--color-secondary),0.2)] overflow-hidden group transition-all duration-500">
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-secondary/10 rounded-full blur-3xl group-hover:bg-secondary/20 transition-colors duration-700"></div>
              
              <div className="relative z-10">
                <h2 className="text-3xl font-black mb-8 text-base-content">Send a Message</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-control">
                      <label className="label pt-0"><span className="label-text font-bold text-base-content/80">First Name</span></label>
                      <input type="text" className="input input-lg bg-base-200 border-base-300 text-base-content placeholder-base-content/40 w-full focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all rounded-2xl" placeholder="John" />
                    </div>
                    <div className="form-control">
                      <label className="label pt-0"><span className="label-text font-bold text-base-content/80">Last Name</span></label>
                      <input type="text" className="input input-lg bg-base-200 border-base-300 text-base-content placeholder-base-content/40 w-full focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all rounded-2xl" placeholder="Doe" />
                    </div>
                  </div>
                  
                  <div className="form-control">
                    <label className="label"><span className="label-text font-bold text-base-content/80">Email Address</span></label>
                    <input type="email" className="input input-lg bg-base-200 border-base-300 text-base-content placeholder-base-content/40 w-full focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all rounded-2xl" placeholder="john@example.com" />
                  </div>
                  
                  <div className="form-control">
                    <label className="label"><span className="label-text font-bold text-base-content/80">Subject</span></label>
                    <input type="text" className="input input-lg bg-base-200 border-base-300 text-base-content placeholder-base-content/40 w-full focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all rounded-2xl" placeholder="How can we help?" />
                  </div>
                  
                  <div className="form-control">
                    <label className="label"><span className="label-text font-bold text-base-content/80">Message</span></label>
                    <textarea className="textarea textarea-lg bg-base-200 border-base-300 text-base-content placeholder-base-content/40 h-40 w-full focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all rounded-3xl resize-none" placeholder="Type your message here..."></textarea>
                  </div>
                  
                  <button type="button" className="btn btn-primary btn-lg rounded-full w-full shadow-lg shadow-primary/30 hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 text-white font-bold group/btn">
                    Send Message <Send className="h-5 w-5 ml-2 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  </button>
                </form>
              </div>
            </div>
          </FadeIn>
          
        </div>
      </div>
      
      {/* Map Placeholder */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
         <div className="w-full h-[400px] bg-base-300 rounded-[2.5rem] overflow-hidden relative shadow-inner border border-base-200">
           {/* Simulate a map with a gradient and pattern */}
           <div className="absolute inset-0 bg-gradient-to-br from-base-200 to-base-300"></div>
           <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/az-subtle.png')] opacity-30"></div>
           <div className="absolute inset-0 flex items-center justify-center">
             <div className="bg-base-100/90 backdrop-blur-md px-6 py-4 rounded-2xl shadow-xl flex items-center gap-4 hover:-translate-y-1 transition-transform cursor-pointer border border-base-200">
                <div className="bg-primary/20 p-3 rounded-full animate-pulse">
                  <MapPin className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Nucleus Hospital</h4>
                  <p className="text-base-content/70 text-sm font-medium">Click to open in Google Maps</p>
                </div>
             </div>
           </div>
         </div>
      </div>
    </div>
  );
}
