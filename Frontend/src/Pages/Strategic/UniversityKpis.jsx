import { Badge } from '../../Components/UI/Badge';
import { Card, CardHeader, CardTitle , CardContent , } from '../../Components/UI/Card';
import { Progress } from '../../Components/UI/progress';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../Components/UI/Table';

const kpis = [
  { id: 1, name: 'Research Publication Count', category: 'Research', weight: 15, target: '50 papers', actual: '42 papers', achievement: 84 },
  { id: 2, name: 'Student Graduation Rate', category: 'Academic', weight: 20, target: '90%', actual: '87%', achievement: 97 },
  { id: 3, name: 'Community Service Hours', category: 'Service', weight: 10, target: '5,000 hrs', actual: '3,200 hrs', achievement: 64 },
  { id: 4, name: 'Faculty Satisfaction Index', category: 'HR', weight: 10, target: '85%', actual: '79%', achievement: 93 },
  { id: 5, name: 'International Collaboration', category: 'Research', weight: 15, target: '20 MoUs', actual: '18 MoUs', achievement: 90 },
];

const UniversityKpis = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-foreground">University KPIs</h1>
        <p className="text-sm text-muted-foreground">Track and manage university-wide key performance indicators</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-5 text-center">
            <p className="text-3xl font-bold text-primary">78.5%</p>
            <p className="text-sm text-muted-foreground mt-1">Overall Achievement</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-5 text-center">
            <p className="text-3xl font-bold text-foreground">156</p>
            <p className="text-sm text-muted-foreground mt-1">Active KPIs</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-5 text-center">
            <p className="text-3xl font-bold text-emerald-600">12</p>
            <p className="text-sm text-muted-foreground mt-1">On Track</p>
          </CardContent>
        </Card>
      </div>

      {/* KPI Table */}
      <Card>
        <CardHeader>
          <CardTitle>KPI Details</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>KPI Name</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Weight</TableHead>
                <TableHead>Target</TableHead>
                <TableHead>Actual</TableHead>
                <TableHead>Achievement</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {kpis.map((k) => (
                <TableRow key={k.id}>
                  <TableCell className="font-medium">{k.name}</TableCell>
                  <TableCell>
                    <Badge variant="secondary">{k.category}</Badge>
                  </TableCell>
                  <TableCell>{k.weight}%</TableCell>
                  <TableCell>{k.target}</TableCell>
                  <TableCell>{k.actual}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Progress value={k.achievement} className="h-2 w-20" />
                      <span className="text-sm font-medium">{k.achievement}%</span>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default UniversityKpis;
