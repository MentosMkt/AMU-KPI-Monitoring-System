import PerformanceDashboard from '../../Components/Dashboard/PerformanceDashboard';

const config = {
  title: 'Institution Performance Dashboard',
  subtitle: 'Faculty and office performance monitoring — AMiT',
  yearOptions: ['2023-2024', '2022-2023'],

  stats: [
    {
      label: 'Institution KPIs',
      value: '35',
      color: 'primary',
      progress: 76,
      subtitle: 'Across 5 faculties',
    },
    {
      label: 'Total Staff',
      value: '420',
      color: 'blue',
      subtitle: 'Active members',
    },
    {
      label: 'Achieved',
      value: '24',
      color: 'green',
      progress: 69,
    },
    {
      label: 'Delayed',
      value: '5',
      color: 'red',
      progress: 14,
    },
  ],

  subUnitLabel: 'Faculties & Offices',

  subUnits: [
    {
      name: 'Faculty of Mechanical Engineering',
      totalKpis: 10,
      trend: 'Improving',
      achieved: 7,
      inProgress: 2,
      delayed: 1,
      color: 'primary',
    },
    {
      name: 'Faculty of Electrical Engineering',
      totalKpis: 9,
      trend: 'Stable',
      achieved: 6,
      inProgress: 2,
      delayed: 1,
      color: 'blue',
    },
    {
      name: 'Faculty of Software & Computing',
      totalKpis: 12,
      trend: 'Improving',
      achieved: 9,
      inProgress: 2,
      delayed: 1,
      color: 'green',
    },
    {
      name: 'Faculty of Civil Engineering',
      totalKpis: 8,
      trend: 'Declining',
      achieved: 4,
      inProgress: 2,
      delayed: 2,
      color: 'amber',
    },
  ],

  quarterlyData: [
    { name: 'Mechanical', q1: 72, q2: 76, q3: 80, q4: 84 },
    { name: 'Electrical', q1: 70, q2: 74, q3: 76, q4: 78 },
    { name: 'Software & Computing', q1: 80, q2: 84, q3: 87, q4: 90 },
    { name: 'Civil', q1: 62, q2: 66, q3: 68, q4: 70 },
  ],

  yearlyTrend: [
    { year: '2020', score: 60 },
    { year: '2021', score: 65 },
    { year: '2022', score: 70 },
    { year: '2023', score: 74 },
    { year: '2024', score: 76 },
  ],

  statusDistribution: [
    { name: 'Achieved', value: 40, color: 'hsl(142 71% 45%)' },
    { name: 'In Progress', value: 32, color: 'hsl(45 93% 47%)' },
    { name: 'Delayed', value: 18, color: 'hsl(0 84% 60%)' },
    { name: 'Critical', value: 10, color: 'hsl(0 0% 45%)' },
  ],

  heatmap: [
    { pillar: 'Mechanical Eng.', q1: 74, q2: 78, q3: 82, q4: 84 },
    { pillar: 'Electrical Eng.', q1: 70, q2: 74, q3: 76, q4: 78 },
    { pillar: 'Software & Computing', q1: 82, q2: 86, q3: 88, q4: 90 },
    { pillar: 'Civil Eng.', q1: 60, q2: 64, q3: 68, q4: 70 },
  ],

  topPerformers: [
    { name: 'Dr. Abebe T.', unit: 'Software & Computing', score: 92 },
    { name: 'Dr. Hana M.', unit: 'Mechanical Eng.', score: 87 },
    { name: 'Mr. Kebede H.', unit: 'Electrical Eng.', score: 82 },
    { name: 'Dr. Sara W.', unit: 'Civil Eng.', score: 78 },
  ],

  achievementGap: [
    { name: 'Software & Computing', target: 92, actual: 90 },
    { name: 'Mechanical Eng.', target: 88, actual: 84 },
    { name: 'Electrical Eng.', target: 82, actual: 78 },
    { name: 'Civil Eng.', target: 80, actual: 70 },
  ],
};

function HigherInstitutionsDashboard() {
  return <PerformanceDashboard config={config} />;
}

export default HigherInstitutionsDashboard;
