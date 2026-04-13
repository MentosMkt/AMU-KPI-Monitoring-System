import PerformanceDashboard from '../../Components/Dashboard/PerformanceDashboard';

const config = {
  title: 'My Performance Dashboard',
  subtitle: 'Track your personal KPI performance and goals',
  yearOptions: ['2023-2024', '2022-2023'],
  stats: [
    { label: 'Assigned KPIs', value: '5', color: 'primary', progress: 85, subtitle: 'Personal objectives' },
    { label: 'Completed', value: '3', color: 'green', progress: 60 },
    { label: 'My Score', value: '85%', color: 'green', progress: 85 },
    { label: 'Ranking', value: '#4', color: 'amber', subtitle: 'Out of 32 staff' },
  ],
  subUnitLabel: 'KPI Categories',
  subUnits: [
    { name: 'Research & Publication', totalKpis: 2, trend: 'Improving', achieved: 2, inProgress: 0, delayed: 0, color: 'green' },
    { name: 'Teaching & Learning', totalKpis: 2, trend: 'Stable', achieved: 1, inProgress: 1, delayed: 0, color: 'primary' },
    { name: 'Community Service', totalKpis: 1, trend: 'Improving', achieved: 0, inProgress: 1, delayed: 0, color: 'blue' },
  ],
  quarterlyData: [
    { name: 'Research', q1: 70, q2: 78, q3: 85, q4: 90 },
    { name: 'Teaching', q1: 75, q2: 78, q3: 80, q4: 82 },
    { name: 'Service', q1: 60, q2: 70, q3: 80, q4: 88 },
  ],
  yearlyTrend: [
    { year: '2020', score: 68 },
    { year: '2021', score: 72 },
    { year: '2022', score: 78 },
    { year: '2023', score: 82 },
    { year: '2024', score: 85 },
  ],
  statusDistribution: [
    { name: 'Achieved', value: 50, color: 'hsl(142 71% 45%)' },
    { name: 'In Progress', value: 30, color: 'hsl(45 93% 47%)' },
    { name: 'Delayed', value: 10, color: 'hsl(0 84% 60%)' },
    { name: 'Excellent', value: 10, color: 'hsl(220 70% 50%)' },
  ],
  heatmap: [
    { pillar: 'Research', q1: 72, q2: 80, q3: 86, q4: 90 },
    { pillar: 'Teaching', q1: 76, q2: 78, q3: 80, q4: 82 },
    { pillar: 'Service', q1: 58, q2: 68, q3: 78, q4: 88 },
  ],
  topPerformers: [
    { name: 'Faculty Research', unit: 'Best area of performance', score: 90 },
    { name: 'Course Delivery', unit: 'Teaching quality', score: 82 },
    { name: 'Community Service', unit: 'Outreach', score: 88 },
  ],
  achievementGap: [
    { name: 'Research Publications', target: 95, actual: 90 },
    { name: 'Course Delivery', target: 88, actual: 82 },
    { name: 'Student Mentoring', target: 80, actual: 75 },
  ],
};

function StaffDashboard() {
  return <PerformanceDashboard config={config} />;
}

export default StaffDashboard;
