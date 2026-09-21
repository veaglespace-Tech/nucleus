export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Dashboard Overview</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: 'Total Services', value: '12', color: 'bg-primary' },
          { title: 'Total Blogs', value: '34', color: 'bg-secondary' },
          { title: 'Pending Reviews', value: '5', color: 'bg-accent' },
          { title: 'Total Patients', value: '1,204', color: 'bg-info' },
        ].map((stat, i) => (
          <div key={i} className="card bg-base-100 shadow-sm border border-base-200">
            <div className="card-body">
              <h2 className="card-title text-base-content/70 text-sm">{stat.title}</h2>
              <p className="text-3xl font-bold">{stat.value}</p>
              <div className={`h-1 w-full rounded-full mt-4 ${stat.color} opacity-80`}></div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
        <div className="card bg-base-100 shadow-sm border border-base-200">
          <div className="card-body">
            <h2 className="card-title mb-4">Recent Activity</h2>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center gap-4 border-b border-base-200 pb-4 last:border-0 last:pb-0">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <div>
                    <p className="font-medium">New review added by John Doe</p>
                    <p className="text-xs text-base-content/50">2 hours ago</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="card bg-base-100 shadow-sm border border-base-200">
          <div className="card-body">
            <h2 className="card-title mb-4">Quick Actions</h2>
            <div className="grid grid-cols-2 gap-4">
              <button className="btn btn-outline btn-primary h-24 flex flex-col gap-2">
                <span>Add Service</span>
              </button>
              <button className="btn btn-outline btn-secondary h-24 flex flex-col gap-2">
                <span>Write Blog</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
