import { Users, FileText, Activity, MessageSquare, Plus, Edit } from 'lucide-react';

export default function AdminDashboard() {
  const stats = [
    { title: 'Total Services', value: '12', icon: Activity, color: 'from-primary/20 to-primary/5', text: 'text-primary' },
    { title: 'Total Blogs', value: '34', icon: FileText, color: 'from-secondary/20 to-secondary/5', text: 'text-secondary' },
    { title: 'Pending Reviews', value: '5', icon: MessageSquare, color: 'from-accent/20 to-accent/5', text: 'text-accent' },
    { title: 'Total Patients', value: '1,204', icon: Users, color: 'from-info/20 to-info/5', text: 'text-info' },
  ];

  return (
    <div className="space-y-8 p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto w-full">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Dashboard Overview</h1>
        <div className="text-sm font-medium text-base-content/60 bg-base-200 px-4 py-2 rounded-full shadow-inner">
          Welcome back, Admin
        </div>
      </div>
      
      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <div key={i} className="card bg-base-100 shadow-lg shadow-base-300/50 border border-base-200 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer">
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-50 group-hover:opacity-100 transition-opacity duration-300`}></div>
              <div className="card-body relative z-10 p-6 flex flex-row items-center justify-between">
                <div>
                  <h2 className="card-title text-base-content/70 text-sm font-medium mb-1">{stat.title}</h2>
                  <p className="text-4xl font-extrabold">{stat.value}</p>
                </div>
                <div className={`p-4 rounded-2xl bg-base-100 shadow-sm ${stat.text}`}>
                  <Icon className="w-8 h-8" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
        {/* Recent Activity */}
        <div className="card bg-base-100 shadow-lg shadow-base-300/50 border border-base-200">
          <div className="card-body p-6 sm:p-8">
            <h2 className="card-title mb-6 text-xl">Recent Activity</h2>
            <div className="space-y-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-start gap-4 p-4 rounded-2xl hover:bg-base-200/50 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <MessageSquare className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-base-content">New review added by John Doe</p>
                    <p className="text-sm text-base-content/60 mt-1">2 hours ago</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Quick Actions */}
        <div className="card bg-base-100 shadow-lg shadow-base-300/50 border border-base-200">
          <div className="card-body p-6 sm:p-8">
            <h2 className="card-title mb-6 text-xl">Quick Actions</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button className="btn btn-outline border-primary/20 hover:bg-primary hover:text-white h-32 flex flex-col gap-3 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 group">
                <div className="p-3 bg-primary/10 rounded-full group-hover:bg-white/20 transition-colors">
                  <Plus className="w-6 h-6 text-primary group-hover:text-white" />
                </div>
                <span className="font-semibold">Add New Service</span>
              </button>
              <button className="btn btn-outline border-secondary/20 hover:bg-secondary hover:text-white h-32 flex flex-col gap-3 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 group">
                <div className="p-3 bg-secondary/10 rounded-full group-hover:bg-white/20 transition-colors">
                  <Edit className="w-6 h-6 text-secondary group-hover:text-white" />
                </div>
                <span className="font-semibold">Write Blog Post</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
