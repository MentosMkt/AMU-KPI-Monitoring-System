import { LayoutDashboard, BarChart3, Shield, Users, Lock, Settings, Bell, GraduationCap } from 'lucide-react';

import { NavLink } from 'react-router-dom';

// ✅ Fixed paths
const navSections = [
  {
    label: 'System Overview',
    items: [{ icon: LayoutDashboard, label: 'Dashboard', path: '/admin' }],
  },
  {
    label: 'KPI Management',
    items: [{ icon: BarChart3, label: 'KPI', path: 'kpi' }],
  },
  {
    label: 'User & Access Management',
    items: [
      { icon: Shield, label: 'Role Management', path: 'role-management' },
      { icon: Users, label: 'User Management', path: 'user-management' },
      { icon: Lock, label: 'Permission', path: 'permission' }, // ✅ fixed
    ],
  },
  {
    label: 'System Configuration',
    items: [
      { icon: Settings, label: 'Configuration', path: 'configuration' },
      { icon: Bell, label: 'Alert and Notification', path: 'alert-notification' },
    ],
  },
];

const Sidebar = () => {
  return (
    <aside className="w-64 min-h-screen bg-card border-r border-border flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-border">
        <div className="flex flex-col items-center gap-2">
          <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center">
            <GraduationCap className="w-8 h-8 text-primary" />
          </div>
          <div className="text-center">
            <h2 className="font-bold text-foreground text-sm">ArbaMinch University</h2>
            <p className="text-xs text-muted-foreground font-medium">AMU KPI SYSTEM</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4 space-y-5 overflow-y-auto scrollbar-thin">
        {navSections.map((section) => (
          <div key={section.label}>
            <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider px-3 mb-2">{section.label}</p>

            <div className="space-y-1">
              {section.items.map((item) => {
                const Icon = item.icon;

                return (
                  <NavLink
                    key={item.label}
                    to={item.path}
                    end={item.path === '/admin'} // ✅ only for dashboard exact match
                    className={({ isActive }) =>
                      `w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-150 ${
                        isActive ? 'bg-accent text-primary' : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                      }`
                    }
                  >
                    <Icon className="w-4.5 h-4.5" />
                    <span>{item.label}</span>
                  </NavLink>
                );
              })}
            </div>
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
