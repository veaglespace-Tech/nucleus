'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Menu, X, HeartPulse } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <div className="fixed w-full top-0 z-50 pt-4 px-4 sm:px-6 transition-all duration-300">
      <nav className={`max-w-7xl mx-auto transition-all duration-500 rounded-full ${scrolled ? 'bg-base-100/80 backdrop-blur-2xl shadow-xl shadow-base-300/50 border border-base-200/50 py-2 px-4 md:px-6' : 'bg-transparent py-4 px-2'}`}>
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="bg-gradient-to-br from-primary to-accent p-2 rounded-xl group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-md shadow-primary/20">
                <HeartPulse className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">Nucleus</span>
            </Link>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-1 bg-base-200/50 backdrop-blur-md rounded-full px-2 py-1 border border-base-300/50">
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.name}
                  href={link.path}
                  className={`relative px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                    isActive ? 'text-primary' : 'text-base-content/70 hover:text-primary hover:bg-base-100'
                  }`}
                >
                  {isActive && (
                    <span className="absolute inset-0 bg-primary/10 rounded-full -z-10"></span>
                  )}
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Link href="/admin" className="btn btn-ghost btn-sm rounded-full text-base-content/60 hover:text-primary hover:bg-primary/10 font-medium px-4">
              Admin Login
            </Link>
            <Link href="/contact" className="btn btn-sm border-0 bg-gradient-to-r from-primary to-accent hover:from-primary hover:to-secondary text-white rounded-full px-6 shadow-md shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-0.5 transition-all duration-300">
              Book Appointment
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-full bg-base-200 text-base-content hover:text-primary focus:outline-none transition-colors"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 mt-4 mx-4 bg-base-100/95 backdrop-blur-3xl rounded-[2rem] border border-base-200 p-4 shadow-2xl md:hidden overflow-hidden origin-top animate-in fade-in slide-in-from-top-4 duration-300">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    href={link.path}
                    className={`block px-4 py-3 rounded-2xl text-base font-semibold transition-colors ${
                      isActive ? 'bg-primary/10 text-primary' : 'hover:bg-base-200 text-base-content/80'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <div className="h-px w-full bg-base-200 my-2"></div>
              <Link
                href="/admin"
                className="block px-4 py-3 rounded-2xl text-base font-semibold text-base-content/70 hover:bg-primary/10 hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Admin Login
              </Link>
              <Link href="/contact" onClick={() => setIsOpen(false)} className="btn border-0 bg-gradient-to-r from-primary to-accent text-white rounded-2xl w-full mt-2 shadow-lg shadow-primary/30">
                Book Appointment
              </Link>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
