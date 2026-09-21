'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Activity, LayoutDashboard, FileText, Star, LogOut, Settings, HeartPulse } from 'lucide-react';
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
    { name: 'Dashboard', path: '/admin', icon: LayoutDashboard },
    { name: 'Services', path: '/admin/services', icon: Activity },
    { name: 'Blogs', path: '/admin/blogs', icon: FileText },
    { name: 'Reviews', path: '/admin/reviews', icon: Star },
  ];

  if (pathname === '/admin/login') {
    return <>{children}</>;
  }

  const handleLogout = () => {
    dispatch(logout());
    router.push('/admin/login');
  };

  return (
    <div className="flex h-screen bg-base-200 overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 bg-base-100 shadow-xl hidden md:flex flex-col">
        <div className="p-6 border-b border-base-200">
          <Link href="/" className="flex items-center gap-2 group hover:opacity-80 transition-opacity">
            <HeartPulse className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
            <h2 className="text-2xl font-bold text-primary">Admin Panel</h2>
          </Link>
        </div>
        
        <div className="flex-1 overflow-y-auto py-4">
          <nav className="space-y-1 px-3">
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={item.name}
                  href={item.path}
                  className={`flex items-center px-4 py-3 rounded-xl transition-colors ${
                    isActive
                      ? 'bg-primary text-primary-content font-medium shadow-md'
                      : 'text-base-content/70 hover:bg-base-200 hover:text-base-content'
                  }`}
                >
                  <item.icon className="h-5 w-5 mr-3" />
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>
        
        <div className="p-4 border-t border-base-200">
          <button
            onClick={handleLogout}
            className="flex items-center w-full px-4 py-3 text-error hover:bg-error/10 rounded-xl transition-colors font-medium"
          >
            <LogOut className="h-5 w-5 mr-3" />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Mobile Header */}
        <header className="md:hidden bg-base-100 shadow-sm border-b border-base-200 p-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <HeartPulse className="h-5 w-5 text-primary" />
            <h2 className="text-xl font-bold text-primary">Admin Panel</h2>
          </Link>
          <button className="btn btn-square btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          </button>
        </header>
        
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          <div className="max-w-6xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
