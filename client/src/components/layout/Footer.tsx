import Link from 'next/link';
import { HeartPulse, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-neutral text-neutral-content">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <HeartPulse className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold text-white">Nucleus Hospital</span>
            </Link>
            <p className="text-neutral-content/80 text-sm">
              Providing world-class healthcare services with advanced technology and compassionate care. Your health is our priority.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Specialties</h3>
            <ul className="space-y-2">
              <li><Link href="/services" className="hover:text-primary transition-colors">Cardiology</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Neurology</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Orthopedics</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Pediatrics</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm">123 Health Avenue, Medical District, City - 400001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm">+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm">info@nucleushospital.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-neutral-content/20 mt-12 pt-8 text-center text-sm text-neutral-content/60">
          <p>&copy; {new Date().getFullYear()} Nucleus Hospital. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
