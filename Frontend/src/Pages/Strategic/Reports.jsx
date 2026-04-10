import { useState } from 'react';
import { FileText, Settings2 } from 'lucide-react';

import Button from '../../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import Checkbox from '../../components/ui/checkbox';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../../Components/UI/dialog';
import { Table, TableCell, TableHead, TableHeader, TableRow, TableBody } from '../../Components/KPITable/Kpitable';
import { Badge } from '../../Components/UI/Badge';
import { ScrollArea } from '../../Components/UI/scroll-area';

const allDepartments = ['AWTI', 'AMiT', 'CAS', 'CNCS', 'CMHS', 'CoBE', 'CSSH', 'SPBS', 'SoL', 'Sawula'];

const kpiData = [
  { no: '1', kpi: 'Theme I: Learning-Teaching', departmentValues: {}, isTheme: true },
  { no: '1.1.', kpi: 'Access and Equity', departmentValues: {}, isSubTheme: true },
  { no: '1.1.1', kpi: 'Percent of undergraduate students enrollment', departmentValues: {} },
  {
    no: '1.1.2',
    kpi: 'Percent of UG female students',
    departmentValues: { AWTI: '35', AMiT: '35', CAS: '35', CNCS: '35' },
  },
  { no: '', kpi: 'Sub Total', departmentValues: {}, isSubTotal: true },
];

const Reports = () => {
  const [activeDepartments, setActiveDepartments] = useState(allDepartments);
  const [dialogOpen, setDialogOpen] = useState(false);

  const toggleDepartment = (dept) => {
    setActiveDepartments((prev) => (prev.includes(dept) ? prev.filter((d) => d !== dept) : [...prev, dept]));
  };

  const getRowClass = (row) => {
    if (row.isTheme) return 'bg-primary/10 font-bold';
    if (row.isSubTheme) return 'bg-muted/60 font-semibold';
    if (row.isSubTotal) return 'bg-muted/40 font-semibold';
    return 'hover:bg-muted/30';
  };

  return (
    <div className="space-y-8 overflow-y-auto p-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Reports</h1>
          <p className="text-sm text-muted-foreground">Generate and download performance reports</p>
        </div>

        <Button className="flex items-center gap-2">
          <FileText className="w-4 h-4" />
          Generate Report
        </Button>
      </div>

      {/* KPI Table */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
          <div>
            <CardTitle className="text-lg">KPI Performance by Department</CardTitle>
            <p className="text-sm text-muted-foreground mt-1">University-wide KPI targets and departmental breakdown</p>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="secondary" className="text-xs py-2 px-6">
              {activeDepartments.length} Departmentsss
            </Badge>
            <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
              <DialogTrigger asChild>
                <Button variant="outline" size="sm" className="flex items-center gap-2 cursor-pointer">
                  <Settings2 className="w-4 h-4" />
                  Columns
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-xs">
                <DialogHeader>
                  <DialogTitle>Show / Hide Departments</DialogTitle>
                </DialogHeader>
                <div className="space-y-3 pt-2">
                  {allDepartments.map((dept) => (
                    <label key={dept} className="flex items-center gap-3 cursor-pointer">
                      <Checkbox checked={activeDepartments.includes(dept)} onCheckedChange={() => toggleDepartment(dept)} />
                      <span className="text-sm font-medium">{dept}</span>
                    </label>
                  ))}
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <ScrollArea className="w-full">
            <div className="min-w-[900px]">
              <Table>
                <TableHeader>
                  <TableRow className="bg-primary/15">
                    <TableHead className="w-[50px] text-center font-bold text-foreground border-r border-border last:border-r-0">No.</TableHead>
                    <TableHead className="min-w-[200px] font-bold text-foreground border-r border-border last:border-r-0">KPI</TableHead>
                    <TableHead className="w-[50px] text-center font-bold text-foreground border-r border-border last:border-r-0">Unit</TableHead>
                    <TableHead className="w-[70px] text-center font-bold text-foreground border-r border-border last:border-r-0">Weight</TableHead>
                    <TableHead className="w-[90px] text-center font-bold text-foreground border-r border-border last:border-r-0">Base line</TableHead>
                    <TableHead className="w-[80px] text-center font-bold text-foreground border-r border-border last:border-r-0">Target</TableHead>
                    {activeDepartments.map((dept) => (
                      <TableHead
                        key={dept}
                        className="w-[70px] text-center font-bold text-foreground bg-primary/10 border-r border-border last:border-r-0"
                      >
                        {dept}
                      </TableHead>
                    ))}
                    <TableHead className="min-w-[100px] text-center font-bold text-foreground">Remark</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {kpiData.map((row, idx) => (
                    <TableRow key={idx} className={getRowClass(row)}>
                      <TableCell className="text-center text-sm border-r border-border last:border-r-0">{row.no}</TableCell>
                      <TableCell className="text-sm whitespace-pre-line border-r border-border last:border-r-0">{row.kpi}</TableCell>
                      <TableCell className="text-center text-sm border-r border-border last:border-r-0">{row.unit}</TableCell>
                      <TableCell className="text-center text-sm border-r border-border last:border-r-0">{row.weight}</TableCell>
                      <TableCell className="text-center text-sm whitespace-pre-line border-r border-border last:border-r-0">{row.baseline}</TableCell>
                      <TableCell className="text-center text-sm whitespace-pre-line border-r border-border last:border-r-0">{row.target}</TableCell>
                      {activeDepartments.map((dept) => (
                        <TableCell key={dept} className="text-center text-sm border-r border-border last:border-r-0">
                          {row.departmentValues[dept] || ''}
                        </TableCell>
                      ))}
                      <TableCell className="text-center text-sm text-muted-foreground">{row.remark}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
};

export default Reports;
