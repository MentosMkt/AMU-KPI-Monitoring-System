const activities = [
  {
    user: "Admin User",
    action: "Mark Moderate",
    description: "Updated permissions",
    time: "2 mins ago",
    status: "Active",
  },
  {
    user: "Admin User",
    action: "Mark Moderate",
    description: "Created new KPI",
    time: "15 mins ago",
    status: "Active",
  },
  {
    user: "Admin User",
    action: "Mark Moderate",
    description: "Modified role",
    time: "1 hour ago",
    status: "Active",
  },
];

const ActivityLog = ({
  title = "Recent System Activity",
  actionLabel = "Download Log",
  actionVariant = "outline",
}) => {
  return (
    <div
      className="bg-card rounded-xl border border-border p-6 animate-fade-in"
      style={{ animationDelay: "0.3s" }}
    >
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-base font-bold text-foreground">{title}</h3>
          <p className="text-sm text-muted-foreground">
            Real-time log of administrative changes
          </p>
        </div>
        <button
          className={`text-sm px-4 py-2 rounded-lg font-medium transition-colors ${
            actionVariant === "destructive"
              ? "bg-destructive text-destructive-foreground hover:bg-destructive/90"
              : "border border-border text-foreground hover:bg-muted"
          }`}
        >
          {actionLabel}
        </button>
      </div>

      <div className="overflow-hidden rounded-lg border border-border">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-muted">
              <th className="text-left py-2.5 px-4 text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                Admin User
              </th>
              <th className="text-left py-2.5 px-4 text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                Action Performed
              </th>
              <th className="text-left py-2.5 px-4 text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                Time
              </th>
              <th className="text-left py-2.5 px-4 text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {activities.map((a, i) => (
              <tr
                key={i}
                className="border-t border-border hover:bg-muted/50 transition-colors"
              >
                <td className="py-2.5 px-4">
                  <div>
                    <p className="font-medium text-foreground text-xs">
                      {a.user}
                    </p>
                    <p className="text-[11px] text-muted-foreground">
                      {a.action}
                    </p>
                  </div>
                </td>
                <td className="py-2.5 px-4 text-xs text-muted-foreground">
                  {a.description}
                </td>
                <td className="py-2.5 px-4 text-xs text-muted-foreground">
                  {a.time}
                </td>
                <td className="py-2.5 px-4">
                  <span className="text-[11px] px-2 py-0.5 rounded-full bg-success/10 text-success font-medium">
                    {a.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ActivityLog;
