import { Users, BarChart3, Palette, Shield, FolderTree } from "lucide-react";

const modules = [
  { icon: Users, label: "Total Users", desc: "Manage profiles & permissions", change: "+12.5%" },
  { icon: BarChart3, label: "KPIs", desc: "Set and track objectives", change: "+12.5%" },
  { icon: Palette, label: "Themes", desc: "Themes", change: "+12.5%" },
  { icon: Shield, label: "Access", desc: "Security & role restrictions", change: "+12.5%" },
  { icon: FolderTree, label: "Categories", desc: "Organize functional groups", change: "+12.5%" },
];

const QuickActions = () => {
  return (
    <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
      <h3 className="text-base font-bold text-foreground mb-1">Module Quick Actions</h3>
      <p className="text-sm text-muted-foreground mb-4">Manage organizational modules instantly</p>
      <div className="grid grid-cols-5 gap-4">
        {modules.map((mod) => {
          const Icon = mod.icon;
          return (
            <div
              key={mod.label}
              className="bg-card rounded-xl border border-border p-4 hover:shadow-md hover:border-primary/30 transition-all cursor-pointer group"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-lg bg-stat-icon flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-xs font-semibold text-success">{mod.change}</span>
              </div>
              <p className="text-sm font-semibold text-foreground">{mod.label}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{mod.desc}</p>
              <div className="flex gap-2 mt-3">
                <button className="text-[11px] px-3 py-1 rounded-md bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors font-medium">
                  Info
                </button>
                <button className="text-[11px] px-3 py-1 rounded-md bg-success/10 text-success hover:bg-success hover:text-success-foreground transition-colors font-medium">
                  Open
                </button>
                <button className="text-[11px] w-7 h-7 rounded-md bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors font-bold">
                  +
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default QuickActions;
