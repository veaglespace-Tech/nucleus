import Link from 'next/link';
import { HeartPulse, Mail, MapPin, Phone, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-neutral text-neutral-content relative overflow-hidden pt-20 pb-10">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Newsletter Section */}
        <div className="bg-base-100/5 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 md:p-12 mb-16 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="md:w-1/2">
            <h3 className="text-3xl font-extrabold text-white mb-2">Subscribe to our Newsletter</h3>
            <p className="text-neutral-content/70">Get the latest health tips, news, and exclusive offers delivered directly to your inbox.</p>
          </div>
          <div className="md:w-1/2 w-full">
            <div className="relative flex items-center">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="input input-lg w-full rounded-full bg-black/20 border-white/20 text-white placeholder:text-white/40 focus:border-primary focus:ring-1 focus:ring-primary pr-36 backdrop-blur-sm"
              />
              <button className="btn btn-primary rounded-full absolute right-2 hover:scale-105 transition-transform duration-300">
                Subscribe <ArrowRight className="h-4 w-4 ml-1" />
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">
          {/* Brand Col */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="bg-gradient-to-br from-primary to-accent p-2.5 rounded-2xl group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500 shadow-lg shadow-primary/20">
                <HeartPulse className="h-7 w-7 text-white" />
              </div>
              <span className="text-3xl font-black text-white tracking-tight">Nucleus</span>
            </Link>
            <p className="text-neutral-content/70 leading-relaxed">
              Providing world-class healthcare services with advanced technology and compassionate care. Your health is our priority.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white hover:-translate-y-1 transition-all duration-300 text-neutral-content">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white hover:-translate-y-1 transition-all duration-300 text-neutral-content">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white hover:-translate-y-1 transition-all duration-300 text-neutral-content">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white hover:-translate-y-1 transition-all duration-300 text-neutral-content">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
            </div>
          </div>
          
          {/* Links Col */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white relative inline-block after:absolute after:bottom-0 after:left-0 after:w-1/2 after:h-0.5 after:bg-primary pb-2">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link href="/" className="text-neutral-content/80 hover:text-primary hover:translate-x-2 transition-all duration-300 flex items-center gap-2"><ArrowRight className="h-3 w-3" /> Home</Link></li>
              <li><Link href="/about" className="text-neutral-content/80 hover:text-primary hover:translate-x-2 transition-all duration-300 flex items-center gap-2"><ArrowRight className="h-3 w-3" /> About Us</Link></li>
              <li><Link href="/services" className="text-neutral-content/80 hover:text-primary hover:translate-x-2 transition-all duration-300 flex items-center gap-2"><ArrowRight className="h-3 w-3" /> Services</Link></li>
              <li><Link href="/blog" className="text-neutral-content/80 hover:text-primary hover:translate-x-2 transition-all duration-300 flex items-center gap-2"><ArrowRight className="h-3 w-3" /> Health Blog</Link></li>
            </ul>
          </div>
          
          {/* Specialties Col */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white relative inline-block after:absolute after:bottom-0 after:left-0 after:w-1/2 after:h-0.5 after:bg-secondary pb-2">Specialties</h3>
            <ul className="space-y-4">
              <li><Link href="/services" className="text-neutral-content/80 hover:text-secondary hover:translate-x-2 transition-all duration-300 flex items-center gap-2"><ArrowRight className="h-3 w-3" /> Cardiology</Link></li>
              <li><Link href="/services" className="text-neutral-content/80 hover:text-secondary hover:translate-x-2 transition-all duration-300 flex items-center gap-2"><ArrowRight className="h-3 w-3" /> Neurology</Link></li>
              <li><Link href="/services" className="text-neutral-content/80 hover:text-secondary hover:translate-x-2 transition-all duration-300 flex items-center gap-2"><ArrowRight className="h-3 w-3" /> Orthopedics</Link></li>
              <li><Link href="/services" className="text-neutral-content/80 hover:text-secondary hover:translate-x-2 transition-all duration-300 flex items-center gap-2"><ArrowRight className="h-3 w-3" /> Pediatrics</Link></li>
            </ul>
          </div>
          
          {/* Contact Col */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white relative inline-block after:absolute after:bottom-0 after:left-0 after:w-1/2 after:h-0.5 after:accent pb-2">Contact Us</h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-4 group">
                <div className="bg-white/5 p-2 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <span className="text-sm text-neutral-content/80 leading-relaxed pt-1">123 Health Avenue, Medical District, City - 400001</span>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="bg-white/5 p-2 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <span className="text-sm text-neutral-content/80 pt-1">+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="bg-white/5 p-2 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <span className="text-sm text-neutral-content/80 pt-1">info@nucleushospital.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-neutral-content/60">&copy; {new Date().getFullYear()} Nucleus Hospital. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-neutral-content/60">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
