'use client';

import { FileText, Activity, MessageSquare, Plus, Edit } from 'lucide-react';
import { useGetServicesQuery, useGetBlogsQuery, useGetReviewsQuery } from '@/store/api/apiSlice';
import Link from 'next/link';
import FadeIn from '@/components/animations/FadeIn';
import StaggerContainer, { StaggerItem } from '@/components/animations/StaggerContainer';

export default function AdminDashboard() {
  const { data: services } = useGetServicesQuery(undefined);
  const { data: blogs } = useGetBlogsQuery(undefined);
  const { data: reviews } = useGetReviewsQuery(undefined);

  const stats = [
    { title: 'Total Services', value: services?.length || 0, icon: Activity, color: 'from-primary/20 to-primary/5', text: 'text-primary' },
    { title: 'Total Blogs', value: blogs?.length || 0, icon: FileText, color: 'from-secondary/20 to-secondary/5', text: 'text-secondary' },
    { title: 'Total Reviews', value: reviews?.length || 0, icon: MessageSquare, color: 'from-accent/20 to-accent/5', text: 'text-accent' },
  ];

  return (
    <div className="space-y-10 p-2 sm:p-4 max-w-7xl mx-auto w-full relative z-10">
      
      <FadeIn delay={0.1} direction="up" className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl md:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent mb-2">Dashboard Overview</h1>
          <p className="text-base-content/70 font-medium">Monitor your hospital's digital presence</p>
        </div>
        <div className="text-sm font-semibold text-primary bg-primary/10 px-5 py-2.5 rounded-full shadow-sm border border-primary/20 flex items-center gap-2">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
          </span>
          Welcome back, Admin
        </div>
      </FadeIn>
      
      {/* Stats Grid */}
      <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <StaggerItem key={i} className="card bg-base-100 shadow-2xl shadow-base-300/50 border border-base-200/60 hover:-translate-y-2 hover:shadow-primary/10 transition-all duration-500 overflow-hidden group cursor-pointer rounded-3xl">
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-40 group-hover:opacity-80 transition-opacity duration-500`}></div>
              <div className="card-body relative z-10 p-8 flex flex-row items-center justify-between">
                <div>
                  <h2 className="card-title text-base-content/70 text-sm font-bold uppercase tracking-wider mb-2">{stat.title}</h2>
                  <p className="text-5xl font-black text-base-content">{stat.value}</p>
                </div>
                <div className={`p-4 rounded-2xl bg-base-100 shadow-lg border border-base-200 ${stat.text} group-hover:scale-110 transition-transform duration-500`}>
                  <Icon className="w-8 h-8" />
                </div>
              </div>
            </StaggerItem>
          );
        })}
      </StaggerContainer>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">
        {/* Recent Activity */}
        <FadeIn delay={0.3} direction="up" className="card bg-base-100 shadow-2xl shadow-base-300/50 border border-base-200/60 rounded-3xl">
          <div className="card-body p-8">
            <h2 className="card-title mb-6 text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-base-content to-base-content/70">Recent Activity</h2>
            <div className="space-y-4">
              {reviews && reviews.length > 0 ? (
                reviews.slice(0, 4).map((review: any) => (
                  <div key={review.id} className="flex items-center gap-5 p-4 rounded-2xl hover:bg-base-200/70 transition-colors border border-transparent hover:border-base-200 cursor-pointer group">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center shrink-0 shadow-inner group-hover:scale-110 transition-transform duration-300">
                      <MessageSquare className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-base-content text-lg leading-tight group-hover:text-primary transition-colors">Review from {review.patientName}</p>
                      <p className="text-sm text-base-content/60 mt-1 flex items-center gap-1">
                        <span className="text-warning">★</span> {review.rating}/5 rating
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <div className="flex flex-col items-center justify-center py-10 text-base-content/40">
                  <Activity className="w-12 h-12 mb-3 opacity-20" />
                  <p className="font-medium">No recent activity yet</p>
                </div>
              )}
            </div>
          </div>
        </FadeIn>
        
        {/* Quick Actions */}
        <FadeIn delay={0.4} direction="up" className="card bg-base-100 shadow-2xl shadow-base-300/50 border border-base-200/60 rounded-3xl">
          <div className="card-body p-8">
            <h2 className="card-title mb-6 text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-base-content to-base-content/70">Quick Actions</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <Link href="/admin/services" className="btn btn-outline border-primary/20 hover:bg-primary hover:text-white h-40 flex flex-col justify-center gap-4 rounded-3xl shadow-sm hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 group">
                <div className="p-4 bg-primary/10 rounded-2xl group-hover:bg-white/20 transition-colors">
                  <Plus className="w-8 h-8 text-primary group-hover:text-white" />
                </div>
                <span className="font-bold text-lg tracking-wide">Manage Services</span>
              </Link>
              <Link href="/admin/blogs" className="btn btn-outline border-secondary/20 hover:bg-secondary hover:text-white h-40 flex flex-col justify-center gap-4 rounded-3xl shadow-sm hover:shadow-xl hover:shadow-secondary/20 transition-all duration-300 group">
                <div className="p-4 bg-secondary/10 rounded-2xl group-hover:bg-white/20 transition-colors">
                  <Edit className="w-8 h-8 text-secondary group-hover:text-white" />
                </div>
                <span className="font-bold text-lg tracking-wide">Manage Blogs</span>
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
