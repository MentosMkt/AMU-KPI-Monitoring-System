import PerformanceDashboard from '../../Components/Dashboard/PerformanceDashboard';

const config = {
  title: 'Faculty Performance Dashboard',
  subtitle: 'Faculty-level performance and department overview',
  yearOptions: ['2023-2024', '2022-2023'],
  stats: [
    { label: 'Faculty KPIs', value: '24', color: 'primary', progress: 79, subtitle: 'Across 6 departments' },
    { label: 'Departments', value: '6', color: 'blue', subtitle: 'Active departments' },
    { label: 'Staff Members', value: '185', color: 'green' },
    { label: 'Avg Score', value: '79%', color: 'amber', progress: 79 },
  ],
  subUnitLabel: 'Departments',
  subUnits: [
    { name: 'Computer Science', totalKpis: 8, trend: 'Improving', achieved: 6, inProgress: 1, delayed: 1, color: 'primary' },
    { name: 'Information Technology', totalKpis: 6, trend: 'Stable', achieved: 4, inProgress: 2, delayed: 0, color: 'green' },
    { name: 'Software Engineering', totalKpis: 5, trend: 'Improving', achieved: 3, inProgress: 1, delayed: 1, color: 'blue' },
  ],
  quarterlyData: [
    { name: 'Comp. Sci.', q1: 76, q2: 80, q3: 84, q4: 86 },
    { name: 'IT', q1: 72, q2: 76, q3: 80, q4: 81 },
    { name: 'Software Eng.', q1: 68, q2: 72, q3: 76, q4: 78 },
  ],
  yearlyTrend: [
    { year: '2020', score: 64 },
    { year: '2021', score: 68 },
    { year: '2022', score: 72 },
    { year: '2023', score: 76 },
    { year: '2024', score: 79 },
  ],
  statusDistribution: [
    { name: 'Achieved', value: 44, color: 'hsl(142 71% 45%)' },
    { name: 'In Progress', value: 31, color: 'hsl(45 93% 47%)' },
    { name: 'Delayed', value: 16, color: 'hsl(0 84% 60%)' },
    { name: 'Critical', value: 9, color: 'hsl(0 0% 45%)' },
  ],
  heatmap: [
    { pillar: 'Computer Science', q1: 80, q2: 84, q3: 86, q4: 86 },
    { pillar: 'Information Technology', q1: 74, q2: 78, q3: 80, q4: 81 },
    { pillar: 'Software Engineering', q1: 66, q2: 70, q3: 74, q4: 78 },
  ],
  topPerformers: [
    { name: 'Dr. Solomon G.', unit: 'Computer Science', score: 92 },
    { name: 'Ms. Tigist A.', unit: 'IT', score: 88 },
    { name: 'Mr. Kebede H.', unit: 'Software Eng.', score: 85 },
    { name: 'Dr. Abebe T.', unit: 'Computer Science', score: 83 },
  ],
  achievementGap: [
    { name: 'Computer Science', target: 90, actual: 86 },
    { name: 'Information Technology', target: 85, actual: 81 },
    { name: 'Software Engineering', target: 82, actual: 78 },
  ],
};

function FaculityDashboard() {
  return <PerformanceDashboard config={config} />;
}

export default FaculityDashboard;
