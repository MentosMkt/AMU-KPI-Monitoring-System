import { useState } from "react";
import {
  LayoutDashboard,
  Target,
  Users,
  UserCog,
  Shield,
  Settings,
  Bell,
  GraduationCap,
  ChevronRight,
} from "lucide-react";

// Navigation Data
const navGroups = [
  {
    title: "System Overview",
    items: [{ label: "Dashboard", icon: LayoutDashboard, active: true }],
  },
  {
    title: "KPI Management",
    items: [{ label: "KPI", icon: Target }],
  },
  {
    title: "User & Access Management",
    items: [
      { label: "Role Management", icon: Shield },
      { label: "User Management", icon: Users },
      { label: "Permission", icon: UserCog },
    ],
  },
  {
    title: "System Configuration",
    items: [
      { label: "Configuration", icon: Settings },
      { label: "Alert and Notification", icon: Bell },
    ],
  },
];

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState("Dashboard");

  return (
    <div className="w-64 h-screen bg- border-r border-border flex flex-col shrink-0 overflow-y-auto">
      {/* Logo */}
      <div className="p-6 border-b border-border">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
            <GraduationCap className="w-5 h-5 text-primary-foreground" />
          </div>
          <div>
            <h2 className="text-sm font-bold text-foreground leading-tight">
              ArbaMinch University
            </h2>
            <p className="text-xs text-muted-foreground">AMU KPI SYSTEM</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4 space-y-6">
        {navGroups.map((group) => (
          <div key={group.title}>
            <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground px-3 mb-2">
              {group.title}
            </p>

            <div className="space-y-1">
              {group.items.map((item) => {
                const isActive = activeItem === item.label;

                return (
                  <button
                    key={item.label}
                    onClick={() => setActiveItem(item.label)}
                    className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 group
                      ${
                        isActive
                          ? "bg-[theme(colors.primary)] text-[theme(colors.primary-foreground)] shadow-md shadow-[theme(colors.primary)/20]"
                          : "text-[theme(colors.foreground)] hover:bg-[theme(colors.secondary)] active:scale-[0.98]"
                      }`}
                  >
                    <span className="flex items-center gap-3">
                      <item.icon
                        className={`w-4 h-4 ${
                          isActive
                            ? "text-[theme(colors.primary-foreground)]"
                            : "text-[theme(colors.foreground)] group-hover:text-[theme(colors.primary)]"
                        }`}
                      />
                      {item.label}
                    </span>

                    <ChevronRight
                      className={`w-3.5 h-3.5 transition-opacity ${
                        isActive
                          ? "opacity-80"
                          : "opacity-0 group-hover:opacity-40"
                      }`}
                    />
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
