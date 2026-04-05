import { Target, TrendingUp, Building2, Users, ArrowUpRight, ArrowDownRight } from 'lucide-react';

import { Card, CardContent, CardHeader, CardTitle } from '../../Components/UI/Card';
import { Progress } from '../../Components/UI/progress';

const stats = [
  { icon: Target, label: 'University KPIs', value: '156', change: '+8.2%', up: true },
  { icon: TrendingUp, label: 'Avg. Achievement', value: '78.5%', change: '+3.1%', up: true },
  { icon: Building2, label: 'Active Faculties', value: '12', change: '0%', up: true },
  { icon: Users, label: 'Total Staff', value: '2,450', change: '-1.2%', up: false },
];

const kpiProgress = [
  { name: 'Research Output', current: 82 },
  { name: 'Student Satisfaction', current: 91 },
  { name: 'Community Service', current: 65 },
  { name: 'Academic Quality', current: 74 },
  { name: 'Infrastructure Dev.', current: 58 },
];

const StrategicDashboard = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-foreground">Strategic Office Dashboard</h1>
        <p className="text-sm text-muted-foreground">University-wide KPI monitoring and strategic oversight</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-4">
        {stats.map((s) => {
          const Icon = s.icon;

          return (
            <Card key={s.label}>
              <CardContent className="p-5">
                <div className="flex items-start justify-between">
                  <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>

                  <span className={`flex items-center gap-1 text-xs font-medium ${s.up ? 'text-emerald-600' : 'text-destructive'}`}>
                    {s.up ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                    {s.change}
                  </span>
                </div>

                <p className="mt-3 text-2xl font-bold text-foreground">{s.value}</p>
                <p className="text-sm text-muted-foreground">{s.label}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* KPI Progress */}
      <Card>
        <CardHeader>
          <CardTitle>University KPI Progress</CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          {kpiProgress.map((k) => (
            <div key={k.name} className="space-y-1.5">
              <div className="flex justify-between text-sm">
                <span className="text-foreground font-medium">{k.name}</span>
                <span className="text-muted-foreground">{k.current}%</span>
              </div>

              <Progress value={k.current} className="h-2" />
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default StrategicDashboard;
