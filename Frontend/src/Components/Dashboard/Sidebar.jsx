import { NavLink, useLocation } from 'react-router-dom';
import { GraduationCap } from 'lucide-react';
import { roleNavigation } from '../../Config/roleNavigation';

const Sidebar = () => {
  const location = useLocation();

  // Temporary role detection based on URL path
  let role = 'staff'; // default
  if (location.pathname.startsWith('/department-chair')) role = 'departmentChair';
  else if (location.pathname.startsWith('/faculty-admin')) role = 'facultyAdmin';
  else if (location.pathname.startsWith('/higher-institution')) role = 'higherInstitution';
  else if (location.pathname.startsWith('/vice-president')) role = 'vicePresident';
  else if (location.pathname.startsWith('/admin')) role = 'systemAdmin';
  else if (location.pathname.startsWith('/strategic-office')) role = 'strategicOffice';
  else role = 'staff';

  const navSections = roleNavigation[role];

  return (
    <div className="w-64 min-h-screen bg-card border-r border-border flex flex-col">
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

                const isDashboard = item.label === 'Dashboard';

                return (
                  <NavLink
                    key={item.label}
                    to={item.path} // relative path
                    end={isDashboard} // only dashboard uses exact match
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
    </div>
  );
};

export default Sidebar;
