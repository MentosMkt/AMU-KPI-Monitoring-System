import { Search, Home, Bell, Moon } from "lucide-react";

const Navbar = () => {
  return (
    <header className="h-16 bg-card border-b border-border flex items-center justify-between px-6 shrink-0 w-full">
      <div className="flex items-center gap-4">
        <button className="p-2 rounded-lg hover:bg-secondary transition-colors active:scale-[0.97]">
          <Home className="w-5 h-5 text-muted-foreground" />
        </button>
        <button className="p-2 rounded-lg hover:bg-secondary transition-colors active:scale-[0.97]">
          <Moon className="w-5 h-5 text-muted-foreground" />
        </button>
      </div>

      <div className="flex-1 max-w-md mx-8">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search across modules and users"
            className="w-full h-10 pl-10 pr-4 rounded-xl bg-secondary text-sm text-foreground placeholder:text-muted-foreground border-none outline-none focus:ring-2 focus:ring-ring transition-shadow"
          />
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button className="relative p-2 rounded-lg hover:bg-secondary transition-colors active:scale-[0.97] cursor-pointer">
          <Bell className="w-5 h-5 text-muted-foreground" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-destructive rounded-full" />
        </button>
        <div className="h-8 w-px bg-border" />
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center text-sm font-semibold text-primary">
            SA
          </div>
          <div className="text-right hidden sm:block">
            <p className="text-sm font-semibold text-foreground leading-tight">
              Mr. Samson Alemu
            </p>
            <p className="text-xs text-muted-foreground">
              System Administrator
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
