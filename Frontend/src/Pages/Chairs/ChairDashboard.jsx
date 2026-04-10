import PerformanceDashboard from '../../Components/Dashboard/PerformanceDashboard';

const config = {
  title: 'Department Chair Dashboard',
  subtitle: 'Manage department KPIs and staff performance',
  yearOptions: ['2023-2024', '2022-2023'],
  stats: [
    { label: 'Dept. KPIs', value: '18', color: 'primary', progress: 82, subtitle: 'Active department KPIs' },
    { label: 'Staff Members', value: '32', color: 'blue', subtitle: 'In your department' },
    { label: 'Completed', value: '14', color: 'green', progress: 78 },
    { label: 'Avg Score', value: '82%', color: 'green', progress: 82 },
  ],
  subUnitLabel: 'Staff Groups',
  subUnits: [
    { name: 'Senior Lecturers', totalKpis: 8, trend: 'Improving', achieved: 6, inProgress: 1, delayed: 1, color: 'primary' },
    { name: 'Lecturers', totalKpis: 6, trend: 'Stable', achieved: 4, inProgress: 2, delayed: 0, color: 'green' },
    { name: 'Assistant Lecturers', totalKpis: 4, trend: 'Improving', achieved: 2, inProgress: 1, delayed: 1, color: 'blue' },
  ],
  quarterlyData: [
    { name: 'Sr. Lecturers', q1: 78, q2: 82, q3: 86, q4: 90 },
    { name: 'Lecturers', q1: 72, q2: 76, q3: 80, q4: 82 },
    { name: 'Asst. Lecturers', q1: 60, q2: 66, q3: 72, q4: 76 },
  ],
  yearlyTrend: [
    { year: '2020', score: 66 },
    { year: '2021', score: 70 },
    { year: '2022', score: 75 },
    { year: '2023', score: 79 },
    { year: '2024', score: 82 },
  ],
  statusDistribution: [
    { name: 'Achieved', value: 46, color: 'hsl(142 71% 45%)' },
    { name: 'In Progress', value: 28, color: 'hsl(45 93% 47%)' },
    { name: 'Delayed', value: 16, color: 'hsl(0 84% 60%)' },
    { name: 'Critical', value: 10, color: 'hsl(0 0% 45%)' },
  ],
  heatmap: [
    { pillar: 'Sr. Lecturers', q1: 82, q2: 86, q3: 88, q4: 90 },
    { pillar: 'Lecturers', q1: 74, q2: 78, q3: 80, q4: 82 },
    { pillar: 'Asst. Lecturers', q1: 58, q2: 64, q3: 70, q4: 76 },
  ],
  topPerformers: [
    { name: 'Dr. Abebe T.', unit: 'Senior Lecturer', score: 92 },
    { name: 'Mr. Kebede H.', unit: 'Lecturer', score: 85 },
    { name: 'Dr. Solomon G.', unit: 'Senior Lecturer', score: 88 },
    { name: 'Ms. Tigist A.', unit: 'Lecturer', score: 78 },
    { name: 'Mr. Dawit M.', unit: 'Assistant Lecturer', score: 71 },
  ],
  achievementGap: [
    { name: 'Sr. Lecturers', target: 92, actual: 88 },
    { name: 'Lecturers', target: 85, actual: 80 },
    { name: 'Asst. Lecturers', target: 78, actual: 72 },
  ],
};

function ChairDashboard() {
  return <PerformanceDashboard config={config} />;
}

export default ChairDashboard;
