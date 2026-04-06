const StatCard = ({ icon: Icon, label, value, change }) => {
  return (
    <div className="bg-card rounded-xl border border-border p-5 flex items-center justify-between animate-fade-in hover:shadow-md transition-shadow">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-xl bg-stat-icon flex items-center justify-center">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <div>
          <p className="text-xs text-muted-foreground font-medium">{label}</p>
          <p className="text-2xl font-bold text-foreground">{value}</p>
        </div>
      </div>
      <span className="text-xs font-semibold text-success bg-success/10 px-2 py-1 rounded-full">
        {change}
      </span>
    </div>
  );
};

export default StatCard;
