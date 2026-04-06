import { Home, Bell, Moon, Sun, Layers, User, Settings, LogOut } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import useTheme from '../../Hooks/useTheme';

import { DropdownMenu, DropdownMenuItem, DropdownMenuSeparator } from '../UI/DropDown'; // adjust path if needed
import { DropdownMenuCheckboxItem } from './DropDown';

const user = {
  isAuthenticated: true,
};

const navLinks = ['About', 'Features', 'Benefits', 'Contact'];

const Navbar = () => {
  const { isDark, toggleTheme } = useTheme();
  const navigate = useNavigate();

  return user.isAuthenticated ? (
    <header className="h-16 bg-card border-b border-border flex items-center justify-between px-6 w-full">
      {/* LEFT */}
      <div className="flex items-center gap-4">
        <button className="p-2 rounded-lg hover:bg-secondary">
          <Home className="w-5 h-5 text-muted-foreground" />
        </button>

        <button className="p-2 rounded-lg hover:bg-secondary" onClick={toggleTheme}>
          {isDark ? <Sun className="w-5 h-5 text-muted-foreground" /> : <Moon className="w-5 h-5 text-muted-foreground" />}
        </button>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-3">
        {/* Notifications */}
        <button className="p-2 rounded-lg hover:bg-muted relative" onClick={() => navigate('/alerts')}>
          <Bell className="w-5 h-5 text-muted-foreground" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-primary rounded-full" />
        </button>
        <div className="h-8 w-px bg-border mx-1" />
        {/* SIMPLE DROPDOWN */}

        <DropdownMenu
          trigger={
            <button className="flex items-center gap-3 rounded-lg p-1.5 hover:bg-muted">
              <div className="text-right">
                <p className="text-sm font-semibold">Mr. Samson Alemu</p>
                <p className="text-xs text-muted-foreground">System Administrator</p>
              </div>

              <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">SA</div>
            </button>
          }
        >
          {/* ✅ PROFILE */}
          <DropdownMenuItem>
            <Link to="profile" className="flex items-center w-full">
              <User className="w-4 h-4 mr-2" />
              My Profile
            </Link>
          </DropdownMenuItem>

          {/* ✅ SETTINGS */}
          <DropdownMenuItem>
            <Link to="configuration" className="flex items-center w-full">
              <Settings className="w-4 h-4 mr-2" />
              Settings
            </Link>
          </DropdownMenuItem>

          <DropdownMenuSeparator />

          {/* ❗ LOGOUT stays button (not link) */}
          <DropdownMenuItem onClick={() => console.log('logout')} className="text-red-500 flex">
            <LogOut className="w-4 h-4 mr-2" />
            Sign Out
          </DropdownMenuItem>
        </DropdownMenu>
      </div>
    </header>
  ) : (
    <nav className="sticky top-0 bg-background border-b">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-16">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
            <Layers className="w-5 h-5 text-white" />
          </div>
          <span className="font-bold">AMU KPI System</span>
        </Link>

        <div className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <a key={link} href={`/#${link.toLowerCase()}`}>
              {link}
            </a>
          ))}
        </div>

        <div className="flex gap-2">
          <button className="border px-3 py-2 rounded">Learn More</button>

          <button className="bg-primary text-white px-3 py-2 rounded">
            <Link to="/signin">Sign In</Link>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
