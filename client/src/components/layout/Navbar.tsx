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
    <div className="fixed w-full top-0 z-50 pt-4 px-4 sm:px-6 transition-all duration-500">
      <nav className={`max-w-7xl mx-auto transition-all duration-500 rounded-full ${scrolled ? 'bg-base-100/70 backdrop-blur-3xl shadow-2xl shadow-base-300/50 border border-base-200/50 py-3 px-4 md:px-8' : 'bg-transparent py-5 px-4 md:px-8'}`}>
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-3 group relative">
              <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="bg-gradient-to-br from-primary via-secondary to-accent p-2.5 rounded-2xl group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500 shadow-xl shadow-primary/20 relative z-10">
                <HeartPulse className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent relative z-10">Nucleus</span>
            </Link>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-1 bg-base-100/50 backdrop-blur-xl rounded-full px-3 py-1.5 border border-base-300/30 shadow-inner">
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.name}
                  href={link.path}
                  className={`relative px-5 py-2 rounded-full text-sm font-bold transition-all duration-300 group overflow-hidden ${
                    isActive ? 'text-primary' : 'text-base-content/70 hover:text-primary'
                  }`}
                >
                  <span className={`absolute inset-0 bg-primary/10 rounded-full -z-10 transition-transform duration-300 ${isActive ? 'scale-100' : 'scale-0 group-hover:scale-100'}`}></span>
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/admin" className="text-sm font-bold text-base-content/50 hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-primary after:transition-all after:duration-300">
              Admin
            </Link>
            <Link href="/contact" className="btn border-0 bg-gradient-to-r from-primary via-secondary to-accent hover:from-primary hover:to-secondary text-white rounded-full px-8 shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/50 hover:-translate-y-1 transition-all duration-300 font-bold tracking-wide">
              Book Appointment
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-3 rounded-full bg-base-100 shadow-md text-base-content hover:text-primary focus:outline-none transition-all duration-300 active:scale-90 border border-base-200"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 mt-6 mx-2 bg-base-100/95 backdrop-blur-3xl rounded-[2.5rem] border border-base-200/60 p-6 shadow-2xl md:hidden overflow-hidden origin-top animate-in fade-in zoom-in-95 duration-300">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => {
                const isActive = pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    href={link.path}
                    className={`block px-5 py-4 rounded-3xl text-lg font-bold transition-all duration-300 ${
                      isActive ? 'bg-gradient-to-r from-primary/10 to-transparent text-primary border-l-4 border-primary' : 'hover:bg-base-200 text-base-content/80 border-l-4 border-transparent'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <div className="h-px w-full bg-gradient-to-r from-transparent via-base-300 to-transparent my-4"></div>
              <Link
                href="/admin"
                className="block px-5 py-4 rounded-3xl text-lg font-bold text-base-content/60 hover:bg-base-200 transition-colors text-center"
                onClick={() => setIsOpen(false)}
              >
                Admin Access
              </Link>
              <Link href="/contact" onClick={() => setIsOpen(false)} className="btn border-0 bg-gradient-to-r from-primary to-accent text-white rounded-3xl w-full h-14 mt-4 shadow-xl shadow-primary/30 font-bold text-lg">
                Book Appointment
              </Link>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
