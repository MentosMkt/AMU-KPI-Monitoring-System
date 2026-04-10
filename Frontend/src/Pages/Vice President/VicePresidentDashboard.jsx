import PerformanceDashboard from '../../Components/Dashboard/PerformanceDashboard';

const config = {
  title: 'Vice President Performance Dashboard',
  subtitle: 'Sector-level monitoring and higher institution oversight',

  yearOptions: ['2023-2024', '2022-2023'],

  stats: [
    {
      label: 'Sector KPIs',
      value: '48',
      color: 'primary',
      progress: 75,
      subtitle: '+5% this quarter',
    },
    {
      label: 'Pending Approvals',
      value: '7',
      color: 'amber',
      subtitle: 'Requires attention',
    },
    {
      label: 'Achieved',
      value: '34',
      color: 'green',
      progress: 71,
    },
    {
      label: 'Delayed',
      value: '6',
      color: 'red',
      progress: 12,
    },
  ],

  subUnitLabel: 'Higher Institutions',

  subUnits: [
    {
      name: 'AMiT (ArbaMinch Institute of Technology)',
      totalKpis: 18,
      trend: 'Improving',
      achieved: 13,
      inProgress: 3,
      delayed: 2,
      color: 'primary',
    },
    {
      name: 'AWTI (ArbaMinch Water Technology Institute)',
      totalKpis: 14,
      trend: 'Stable',
      achieved: 9,
      inProgress: 3,
      delayed: 2,
      color: 'blue',
    },
    {
      name: 'College of Natural Sciences',
      totalKpis: 12,
      trend: 'Improving',
      achieved: 8,
      inProgress: 3,
      delayed: 1,
      color: 'green',
    },
    {
      name: 'School of Law',
      totalKpis: 8,
      trend: 'Declining',
      achieved: 4,
      inProgress: 2,
      delayed: 2,
      color: 'amber',
    },
  ],

  quarterlyData: [
    { name: 'AMiT', q1: 78, q2: 82, q3: 86, q4: 89 },
    { name: 'AWTI', q1: 70, q2: 74, q3: 76, q4: 80 },
    { name: 'College of Nat. Sci.', q1: 72, q2: 75, q3: 78, q4: 81 },
    { name: 'School of Law', q1: 60, q2: 64, q3: 66, q4: 68 },
  ],

  yearlyTrend: [
    { year: '2020', score: 65 },
    { year: '2021', score: 70 },
    { year: '2022', score: 74 },
    { year: '2023', score: 78 },
    { year: '2024', score: 81 },
  ],

  statusDistribution: [
    { name: 'Achieved', value: 45, color: 'hsl(142 71% 45%)' },
    { name: 'In Progress', value: 30, color: 'hsl(45 93% 47%)' },
    { name: 'Delayed', value: 15, color: 'hsl(0 84% 60%)' },
    { name: 'Critical', value: 10, color: 'hsl(0 0% 45%)' },
  ],

  heatmap: [
    { pillar: 'AMiT', q1: 80, q2: 85, q3: 88, q4: 89 },
    { pillar: 'AWTI', q1: 72, q2: 76, q3: 78, q4: 80 },
    { pillar: 'College of Nat. Sci.', q1: 74, q2: 76, q3: 79, q4: 81 },
    { pillar: 'School of Law', q1: 58, q2: 62, q3: 65, q4: 68 },
  ],

  topPerformers: [
    { name: 'AMiT', unit: 'Institute of Technology', score: 89 },
    { name: 'College of Nat. Sci.', unit: 'Natural Sciences', score: 81 },
    { name: 'AWTI', unit: 'Institute of Technology', score: 80 },
    { name: 'School of Law', unit: 'Law & Governance', score: 68 },
  ],

  achievementGap: [
    { name: 'AMiT', target: 92, actual: 89 },
    { name: 'AWTI', target: 85, actual: 80 },
    { name: 'College of Nat. Sci.', target: 85, actual: 81 },
    { name: 'School of Law', target: 80, actual: 68 },
  ],
};

function VicePresidentDashboard() {
  return <PerformanceDashboard config={config} />;
}

export default VicePresidentDashboard;
