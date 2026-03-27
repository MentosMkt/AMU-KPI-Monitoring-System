import { Users, BarChart3, Palette, Shield, Activity } from "lucide-react";
import StatCard from "../components/StatCard";
import KpiChart from "../components/KpiChart";
import QuickActions from "../components/QuickActions";
import ActivityLog from "../components/ActivityLog";

const stats = [
  { icon: Users, label: "Total Users", value: "1,250", change: "+12.5%" },
  { icon: BarChart3, label: "Total KPIs", value: "1,250", change: "+12.5%" },
  { icon: Palette, label: "Total Themes", value: "1,250", change: "+12.5%" },
  { icon: Shield, label: "Total Roles", value: "1,250", change: "+12.5%" },
  { icon: Activity, label: "Active KPIs", value: "1,250", change: "+12.5%" },
];

function AdminDashboard() {
  return (
    <main className="flex-1 p-6 overflow-y-auto">
      {/* Title Row */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-foreground">
            Executive Dashboard
          </h1>
          <p className="text-sm text-muted-foreground">
            Monitor Operational excellence and manage organizational assets
          </p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 text-sm font-medium rounded-lg border border-border text-foreground hover:bg-muted transition-colors">
            Export Data
          </button>
          <button className="px-4 py-2 text-sm font-medium rounded-lg border border-border text-foreground hover:bg-muted transition-colors">
            History
          </button>
        </div>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-5 gap-4 mb-6">
        {stats.map((s) => (
          <StatCard key={s.label} {...s} />
        ))}
      </div>

      {/* KPI Chart */}
      <div className="mb-6">
        <KpiChart />
      </div>

      {/* Quick Actions */}
      <div className="mb-6">
        <QuickActions />
      </div>

      {/* Activity Logs */}
      <div className="grid grid-cols-2 gap-4">
        <ActivityLog
          title="Recent System Activity"
          actionLabel="Download Log"
          actionVariant="outline"
        />
        <ActivityLog
          title="Recent System Activity"
          actionLabel="Review All"
          actionVariant="destructive"
        />
      </div>
    </main>
  );
}

export default AdminDashboard;
