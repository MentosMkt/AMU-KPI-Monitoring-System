import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../Components/UI/Card';
import Button from '../../Components/UI/Button';
import { Badge } from '../../Components/UI/Badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../Components/UI/ProfileButtonTab';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../Components/UI/Table';
import { ScrollArea } from '../../Components/UI/scroll-area';
import { ListChecks, Send, Search, Filter } from 'lucide-react';
import { Input } from '../../Components/UI/Input';
import MultiSelect from '../../Components/UI/MultiSelect';
import { themes, kpiList, vicePresidents } from './kpiData';

const RegisteredKpis = () => {
  const [activeTab, setActiveTab] = useState('list');

  const [search, setSearch] = useState('');
  const [themeFilter, setThemeFilter] = useState('all');

  // Assignment state
  const [selectedVPs, setSelectedVPs] = useState([]);
  const [selectedThemes, setSelectedThemes] = useState([]);
  const [selectedKpis, setSelectedKpis] = useState([]);

  const filteredKpis = kpiList.filter((k) => {
    const matchesSearch = k.kpi.toLowerCase().includes(search.toLowerCase()) || k.no.includes(search);
    const matchesTheme = themeFilter === 'all' || k.theme === themeFilter;
    return matchesSearch && matchesTheme;
  });

  const assignableKpis = kpiList.filter((k) => selectedThemes.length === 0 || selectedThemes.includes(k.theme));

  const toggleVP = (id) => setSelectedVPs((prev) => (prev.includes(id) ? prev.filter((v) => v !== id) : [...prev, id]));
  const toggleTheme = (t) => setSelectedThemes((prev) => (prev.includes(t) ? prev.filter((v) => v !== t) : [...prev, t]));

  const selectAllVPs = () => {
    const ids = vicePresidents.map((vp) => vp.id);
    setSelectedVPs((prev) => (prev.length === ids.length ? [] : ids));
  };

  const selectAllThemes = () => {
    setSelectedThemes((prev) => (prev.length === themes.length ? [] : [...themes]));
  };

  const handleAssign = () => {
    if (selectedVPs.length === 0 || selectedKpis.length === 0) {
      console.log('Selection Required', 'Please select at least one Vice President and one KPI.');
      return;
    }
    const vpNames = vicePresidents
      .filter((v) => selectedVPs.includes(v.id))
      .map((v) => v.label)
      .join(', ');
    console.log('KPIs Assigned Successfully', `${selectedKpis.length} KPI(s) assigned to ${vpNames}.`);
    setSelectedVPs([]);
    setSelectedThemes([]);
    setSelectedKpis([]);
  };

  const getThemeBadgeColor = (theme) => {
    if (theme.includes('Learning')) return 'bg-blue-500/15 text-blue-700 dark:text-blue-400 border-blue-500/20';
    if (theme.includes('Research')) return 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border-emerald-500/20';
    if (theme.includes('Community')) return 'bg-amber-500/15 text-amber-700 dark:text-amber-400 border-amber-500/20';
    return 'bg-purple-500/15 text-purple-700 dark:text-purple-400 border-purple-500/20';
  };

  return (
    <div className="space-y-6 overflow-y-auto p-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Registered KPIs</h1>
        <p className="text-sm text-muted-foreground">View all registered KPIs and assign them to Vice Presidents</p>
      </div>

      <Tabs defaultValue="list" className="w-full ">
        <TabsList className="flex justify-center w-full max-w-sm gap-2">
          <TabsTrigger value="list" className="flex items-center gap-2 px-4 py-2">
            <ListChecks className="w-4 h-4" /> List of KPIs
          </TabsTrigger>
          <TabsTrigger value="assign" className="flex items-center gap-2 px-4 py-2">
            <Send className="w-4 h-4" /> Assign KPIs
          </TabsTrigger>
        </TabsList>

        {/* LIST TAB */}
        <TabsContent value="list" className="space-y-4 mt-4">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input placeholder="Search KPIs..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-9" />
            </div>
            <div className="flex gap-2 flex-wrap">
              <Button variant={themeFilter === 'all' ? 'default' : 'outline'} size="sm" onClick={() => setThemeFilter('all')}>
                All Themes
              </Button>
              {themes.map((t) => (
                <Button key={t} variant={themeFilter === t ? 'default' : 'outline'} size="sm" onClick={() => setThemeFilter(t)} className="text-xs">
                  {t.replace('Theme ', '').split(':')[0]}
                </Button>
              ))}
            </div>
          </div>

          <Card>
            <CardContent className="p-0">
              <ScrollArea className="w-full">
                <div className="min-w-[800px]">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-primary/10">
                        <TableHead className="w-[60px] text-center font-bold text-foreground border-r">No.</TableHead>
                        <TableHead className="min-w-[250px] font-bold text-foreground border-r">KPI</TableHead>
                        <TableHead className="min-w-[180px] font-bold text-foreground border-r">Theme</TableHead>
                        <TableHead className="min-w-[120px] font-bold text-foreground border-r">Sub-Theme</TableHead>
                        <TableHead className="w-[60px] text-center font-bold text-foreground border-r">Unit</TableHead>
                        <TableHead className="w-[70px] text-center font-bold text-foreground border-r">Weight</TableHead>
                        <TableHead className="w-[90px] text-center font-bold text-foreground border-r">Baseline</TableHead>
                        <TableHead className="w-[80px] text-center font-bold text-foreground border-r">Target</TableHead>
                        <TableHead className="min-w-[120px] font-bold text-foreground">Remark</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredKpis.map((row) => (
                        <TableRow key={row.id} className="hover:bg-muted/30">
                          <TableCell className="text-center border-r text-sm font-medium">{row.no}</TableCell>
                          <TableCell className="border-r text-sm">{row.kpi}</TableCell>
                          <TableCell className="border-r">
                            <Badge variant="outline" className={`text-xs ${getThemeBadgeColor(row.theme)}`}>
                              {row.theme.replace('Theme ', '').split(':')[0].trim()}
                            </Badge>
                          </TableCell>
                          <TableCell className="border-r text-sm text-muted-foreground">{row.subTheme}</TableCell>
                          <TableCell className="text-center border-r text-sm">{row.unit}</TableCell>
                          <TableCell className="text-center border-r text-sm font-medium">{row.weight}</TableCell>
                          <TableCell className="text-center border-r text-sm">{row.baseline}</TableCell>
                          <TableCell className="text-center border-r text-sm">{row.target}</TableCell>
                          <TableCell className="text-sm text-muted-foreground">{row.remark}</TableCell>
                        </TableRow>
                      ))}
                      {filteredKpis.length === 0 && (
                        <TableRow>
                          <TableCell colSpan={9} className="text-center py-8 text-muted-foreground">
                            No KPIs found matching your criteria.
                          </TableCell>
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </div>
              </ScrollArea>
            </CardContent>
          </Card>

          <div className="flex justify-between items-center text-sm text-muted-foreground">
            <span>
              Showing {filteredKpis.length} of {kpiList.length} KPIs
            </span>
            <Badge variant="secondary">{themes.length} Themes</Badge>
          </div>
        </TabsContent>

        {/* ASSIGN TAB */}
        <TabsContent value="assign" className="space-y-6 mt-4">
          {/* Step 1: Select VPs */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold">1</span>
                Select Vice President(s)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <MultiSelect options={vicePresidents} value={selectedVPs} onChange={setSelectedVPs} placeholder="Select Vice Presidents..." />
            </CardContent>
          </Card>

          {/* Step 2: Select Themes */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold">2</span>
                Select Theme(s)
                <span className="text-xs text-muted-foreground font-normal ml-1">(filters KPIs below)</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <MultiSelect options={themes} value={selectedThemes} onChange={setSelectedThemes} placeholder="Select Themes..." />
            </CardContent>
          </Card>

          {/* Step 3: Select KPIs */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold">3</span>
                Select KPI(s)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <MultiSelect
                options={assignableKpis.map((kpi) => ({
                  id: kpi.id,
                  label: `${kpi.no}: ${kpi.kpi} (${kpi.unit}, Weight: ${kpi.weight})`,
                }))}
                value={selectedKpis}
                onChange={setSelectedKpis}
                placeholder="Select KPIs..."
              />
              {assignableKpis.length === 0 && (
                <p className="text-center py-4 text-muted-foreground text-sm">No KPIs available for the selected themes.</p>
              )}
            </CardContent>
          </Card>

          {/* Summary & Assign */}
          <Card className="border-primary/30 bg-primary/5">
            <CardContent className="p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <p className="text-sm font-semibold text-foreground">Assignment Summary</p>
                <p className="text-xs text-muted-foreground">
                  {selectedVPs.length} VP(s) · {selectedThemes.length} Theme(s) · {selectedKpis.length} KPI(s)
                </p>
              </div>
              <Button onClick={handleAssign} className="gap-2" disabled={selectedVPs.length === 0 || selectedKpis.length === 0}>
                <Send className="w-4 h-4" /> Assign KPIs
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default RegisteredKpis;
