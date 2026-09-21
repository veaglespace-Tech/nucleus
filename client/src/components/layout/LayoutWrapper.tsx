'use client';

import { usePathname } from 'next/navigation';
import Navbar from './Navbar';
import Footer from './Footer';
import { ReactNode } from 'react';

export default function LayoutWrapper({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isAdminDashboard = pathname.startsWith('/admin') && pathname !== '/admin/login';

  if (isAdminDashboard) {
    return <main className="flex-grow bg-base-200">{children}</main>;
  }

  return (
    <>
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </>
  );
}
