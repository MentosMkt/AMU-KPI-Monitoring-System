


import { Home, BarChart3, FileText, Download } from "lucide-react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { KPIOverviewCard, VPCard } from "@/components/dashboard/KPICards";
import { QuarterlyComparison, YearlyTrend, KPIStatusDistribution } from "@/components/dashboard/Charts";
import { PerformanceHeatmap } from "@/components/dashboard/Heatmap";
import { TopPerformer, LowestPerformer, TargetVsAchievement } from "@/components/dashboard/PerformanceSummary";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const StrategicDashboard = () => {
  return (
    <DashboardLayout>
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Strategic Performance Dashboard</h1>
          <p className="text-sm text-muted-foreground">University Executive Oversight • Institutional Effectiveness</p>
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          <Select defaultValue="2024">
            <SelectTrigger className="w-28 h-9 text-sm"><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="2024">2024-2025</SelectItem>
              <SelectItem value="2023">2023-2024</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="all">
            <SelectTrigger className="w-32 h-9 text-sm"><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Quarters</SelectItem>
              <SelectItem value="q1">Q1</SelectItem>
              <SelectItem value="q2">Q2</SelectItem>
              <SelectItem value="q3">Q3</SelectItem>
              <SelectItem value="q4">Q4</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="all-cat">
            <SelectTrigger className="w-32 h-9 text-sm"><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="all-cat">All Categories</SelectItem>
              <SelectItem value="academic">Academic</SelectItem>
              <SelectItem value="research">Research</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="sm" className="gap-1.5">
            <FileText className="h-4 w-4" /> PDF
          </Button>
          <Button variant="outline" size="sm" className="gap-1.5">
            <Download className="h-4 w-4" /> Excel
          </Button>
        </div>
      </div>

      {/* Overall KPI Overview */}
      <h2 className="section-title mb-3">Overall University Performance Overview</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <KPIOverviewCard
          title="Overall Score"
          value="82.4%"
          subtitle="Institutional average across all pillars"
          icon={<div className="w-12 h-12 rounded-full border-4 border-emerald-500 flex items-center justify-center text-xs font-bold text-emerald-500">82.4</div>}
          progress={82.4}
          progressColor="bg-emerald-500"
        />
        <KPIOverviewCard
          title="Total KPIs Tracked"
          value="148"
          subtitle="Across all strategic areas"
          icon={<div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center"><BarChart3 className="h-6 w-6 text-primary" /></div>}
        />
        <KPIOverviewCard
          title="Strategic Initiatives"
          value="92"
          subtitle="67 on time, 25 need attention"
          icon={<div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center"><FileText className="h-6 w-6 text-amber-500" /></div>}
        />
        <KPIOverviewCard
          title="Underperforming"
          value="14"
          subtitle="Requires immediate attention"
          icon={<div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center text-destructive font-bold text-lg">!</div>}
          progress={14}
          progressColor="bg-destructive"
        />
      </div>

      {/* VP Performance Comparison */}
      <h2 className="section-title mb-3">Vice Presidents Performance Comparison</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <VPCard
          title="Academic Vice President"
          icon={<Home className="h-5 w-5 text-primary" />}
          healthScore={82}
          healthColor="#3b82f6"
          totalKPIs={54}
          trend="Improving"
          trendDirection="up"
          achieved={30}
          inProgress={19}
          delayed={4}
        />
        <VPCard
          title="Research Vice President"
          icon={<BarChart3 className="h-5 w-5 text-emerald-500" />}
          healthScore={61}
          healthColor="#22c55e"
          totalKPIs={42}
          trend="Improving"
          trendDirection="up"
          achieved={20}
          inProgress={14}
          delayed={8}
        />
        <VPCard
          title="Administrative Vice President"
          icon={<FileText className="h-5 w-5 text-amber-500" />}
          healthScore={73}
          healthColor="#f59e0b"
          totalKPIs={52}
          trend="Declining"
          trendDirection="down"
          achieved={29}
          inProgress={19}
          delayed={4}
        />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">
        <QuarterlyComparison />
        <YearlyTrend />
      </div>

      {/* Status + Heatmap */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 mb-8">
        <div className="lg:col-span-2">
          <KPIStatusDistribution />
        </div>
        <div className="lg:col-span-3">
          <PerformanceHeatmap />
        </div>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <TopPerformer />
        <LowestPerformer />
        <div className="lg:col-span-2">
          <TargetVsAchievement />
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center py-6 border-t border-border mt-4">
        <p className="text-sm font-medium text-foreground">© 2024 University Strategic Performance Management System</p>
        <div className="flex justify-center gap-4 mt-2 text-xs text-muted-foreground">
          <span>Data Integrity Policy</span>
          <span>Methodology</span>
          <span>Contact Strategy Office</span>
        </div>
      </footer>
    </DashboardLayout>
  );
};

export default StrategicDashboard;
