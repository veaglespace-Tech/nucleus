'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Activity, LayoutDashboard, FileText, Star, LogOut, Settings, HeartPulse, Home } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '@/store/slices/authSlice';
import { RootState } from '@/store';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const dispatch = useDispatch();
  const router = useRouter();
  
  // const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

  // In a real app, protect these routes:
  // useEffect(() => {
  //   if (!isAuthenticated && pathname !== '/admin/login') {
  //     router.push('/admin/login');
  //   }
  // }, [isAuthenticated, pathname, router]);

    const navItems = [
      { name: 'Dashboard', path: '/admin', icon: LayoutDashboard, color: 'text-primary' },
      { name: 'Services', path: '/admin/services', icon: Activity, color: 'text-secondary' },
      { name: 'Blogs', path: '/admin/blogs', icon: FileText, color: 'text-accent' },
      { name: 'Reviews', path: '/admin/reviews', icon: Star, color: 'text-warning' },
    ];

  if (pathname === '/admin/login') {
    return <>{children}</>;
  }

  const handleLogout = () => {
    dispatch(logout());
    router.push('/admin/login');
  };

  return (
    <div className="flex h-screen bg-base-200/50 overflow-hidden font-sans">
      {/* Sidebar */}
      <aside className="w-72 bg-base-100 shadow-2xl shadow-base-300/50 hidden md:flex flex-col border-r border-base-200/50 relative z-20">
        <div className="p-8 border-b border-base-200/50">
          <Link href="/" className="flex items-center gap-3 group hover:opacity-90 transition-opacity">
            <div className="p-2.5 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
              <HeartPulse className="h-7 w-7 text-primary group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h2 className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">Admin Panel</h2>
          </Link>
        </div>
        
        <div className="flex-1 overflow-y-auto py-6">
          <nav className="space-y-3 px-4">
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={item.name}
                  href={item.path}
                  className={`flex items-center px-5 py-3.5 rounded-2xl transition-all duration-300 group relative overflow-hidden ${
                    isActive
                      ? 'bg-gradient-to-r from-primary/10 to-transparent text-primary font-bold shadow-sm'
                      : 'text-base-content/70 hover:bg-base-200/80 hover:text-base-content font-medium'
                  }`}
                >
                  {isActive && <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-primary rounded-r-full"></div>}
                  <item.icon className={`h-5 w-5 mr-4 transition-transform duration-300 group-hover:scale-110 ${isActive ? 'text-primary' : 'text-base-content/50 group-hover:' + item.color}`} />
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>
        
        <div className="p-6 border-t border-base-200/50 flex flex-col gap-3 bg-base-100">
          <Link
            href="/"
            className="flex items-center w-full px-5 py-3.5 text-base-content/80 hover:bg-base-200 hover:text-base-content rounded-2xl transition-all duration-300 font-medium group"
          >
            <div className="p-2 bg-base-200 rounded-lg group-hover:bg-base-300 transition-colors mr-3">
              <Home className="h-4 w-4" />
            </div>
            Back to Website
          </Link>
          <button
            onClick={handleLogout}
            className="flex items-center w-full px-5 py-3.5 text-error hover:bg-error/10 hover:shadow-sm rounded-2xl transition-all duration-300 font-medium group"
          >
            <div className="p-2 bg-error/10 rounded-lg group-hover:bg-error/20 transition-colors mr-3">
              <LogOut className="h-4 w-4" />
            </div>
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden relative z-10">
        {/* Decorative blur in background */}
        <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-primary/5 rounded-full blur-3xl -z-10 pointer-events-none translate-x-1/3 -translate-y-1/3"></div>

        {/* Mobile Header */}
        <header className="md:hidden bg-base-100/80 backdrop-blur-md shadow-sm border-b border-base-200/50 p-4 flex justify-between items-center sticky top-0 z-30">
          <Link href="/" className="flex items-center gap-2">
            <HeartPulse className="h-6 w-6 text-primary" />
            <h2 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">Admin Panel</h2>
          </Link>
          <button className="btn btn-square btn-ghost text-base-content/70 hover:text-primary transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          </button>
        </header>
        
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-10">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
