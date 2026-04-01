function StatCard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {[
        { label: 'Total Roles', value: '6', color: 'bg-primary/10 text-primary' },
        { label: 'System Modules', value: '10', color: 'bg-accent text-accent-foreground' },
        { label: 'Active Permissions', value: '47', color: 'bg-primary/10 text-primary' },
        { label: 'Restricted', value: '13', color: 'bg-destructive/10 text-destructive' },
      ].map((stat) => (
        <div key={stat.label} className="bg-card border border-border rounded-xl p-4">
          <p className="text-sm text-muted-foreground">{stat.label}</p>
          <p className={`text-2xl font-bold mt-1 ${stat.color.split(' ')[1]}`}>{stat.value}</p>
        </div>
      ))}
    </div>
  );
}

export default StatCard;
