import { Search, Home, Bell, Moon, Sun } from 'lucide-react';
import { Link } from 'react-router-dom';
import useTheme from '../../Hooks/useTheme';

import { Layers } from 'lucide-react';

const user = {
  isAuthenticated: true,
};

const navLinks = ['About', 'Features', 'Benefits', 'Contact'];

const Navbar = () => {
  const { isDark, toggleTheme } = useTheme();

  return user.isAuthenticated ? (
    <header className="h-16 bg-card border-b border-border flex items-center justify-between px-6 shrink-0 w-full">
      <div className="flex items-center gap-4">
        <button className="p-2 rounded-lg hover:bg-secondary transition-colors active:scale-[0.97]">
          <Home className="w-5 h-5 text-muted-foreground" />
        </button>
        <button
          className="p-2 rounded-lg hover:bg-secondary transition-colors active:scale-[0.97]"
          onClick={toggleTheme}
          aria-label="Toggle dark mode"
        >
          {isDark ? <Sun className="w-5 h-5 text-muted-foreground" /> : <Moon className="w-5 h-5 text-muted-foreground" />}
        </button>
      </div>

      {/* <div className="flex-1 max-w-md mx-8">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search across modules and users"
            className="w-full h-10 pl-10 pr-4 rounded-xl bg-secondary text-sm text-foreground placeholder:text-muted-foreground border-none outline-none focus:ring-2 focus:ring-ring transition-shadow"
          />
        </div>
      </div> */}

      <div className="flex items-center gap-3">
        <button className="relative p-2 rounded-lg hover:bg-secondary transition-colors active:scale-[0.97] cursor-pointer">
          <Bell className="w-5 h-5 text-muted-foreground" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-destructive rounded-full" />
        </button>
        <div className="h-8 w-px bg-border" />
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center text-sm font-semibold text-primary">SA</div>
          <div className="text-right hidden sm:block">
            <p className="text-sm font-semibold text-foreground leading-tight">Mr. Samson Alemu</p>
            <p className="text-xs text-muted-foreground">System Administrator</p>
          </div>
        </div>
      </div>
    </header>
  ) : (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/60">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-16">
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center shadow-md shadow-primary/20 transition-transform group-hover:scale-105 group-active:scale-95">
            <Layers className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="font-bold text-foreground text-base tracking-tight">AMU KPI System</span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`/#${link.toLowerCase()}`}
              className="px-3.5 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-accent/50"
            >
              {link}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2.5">
          {/* Navbar Buttons as normal buttons */}
          <button className="hidden sm:inline-flex px-3 py-2 text-sm rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-colors">
            <a href="#about">Learn More</a>
          </button>
          <button className="px-3 py-2 text-sm rounded-md bg-primary text-primary-foreground shadow-md shadow-primary/20 hover:bg-primary/90 transition-colors">
            <Link to="/signin">Sign In</Link>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
