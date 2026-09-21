'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X, HeartPulse } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <nav className="bg-base-100/90 backdrop-blur-xl border-b border-primary/10 shadow-sm sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="bg-gradient-to-br from-primary to-accent p-2 rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-primary/20">
                <HeartPulse className="h-7 w-7 text-white" />
              </div>
              <span className="text-2xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">Nucleus</span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className={`text-lg font-medium transition-colors hover:text-primary ${
                  pathname === link.path ? 'text-primary' : 'text-base-content/80'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link href="/admin" className="text-lg font-medium transition-colors text-base-content/80 hover:text-primary">
              Admin
            </Link>
            <Link href="/contact" className="btn border-0 bg-gradient-to-r from-primary to-accent hover:from-primary hover:to-secondary text-white rounded-full px-8 shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-0.5 transition-all duration-300">
              Book Appointment
            </Link>
          </div>
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-base-content hover:text-primary focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-base-100 border-t border-base-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-base-200"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/admin"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-base-200"
              onClick={() => setIsOpen(false)}
            >
              Admin
            </Link>
            <Link href="/contact" className="block px-3 py-2 btn btn-primary w-full mt-4">Book Appointment</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
