import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, BarChart, Bar, ResponsiveContainer } from 'recharts';
import { FiHome, FiUsers, FiSettings, FiBell } from 'react-icons/fi';

const data = [
  { name: 'Jan', value: 60 },
  { name: 'Feb', value: 65 },
  { name: 'Mar', value: 62 },
  { name: 'Apr', value: 75 },
  { name: 'May', value: 72 },
  { name: 'Jun', value: 85 },
];

const barData = [
  { name: 'Completed', value: 80 },
  { name: 'Pending', value: 40 },
  { name: 'Overdue', value: 20 },
];

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-[theme(colors-background)] text-[theme(colors-foreground)]">
      {/* Sidebar */}
      <div className="w-64 bg-[theme(colors-card)] shadow-lg p-4">
        <h2 className="text-xl font-bold mb-6">AMU KPI SYSTEM</h2>

        <nav className="space-y-4">
          <div className="flex items-center gap-2 text-blue-600">
            <FiHome /> Dashboard
          </div>
          <div className="flex items-center gap-2">
            <FiUsers /> Users
          </div>
          <div className="flex items-center gap-2">
            <FiSettings /> Settings
          </div>
        </nav>
      </div>

      {/* Main */}
      <div className="flex-1 p-6 overflow-y-auto">
        {/* Navbar */}
        <div className="flex justify-between items-center mb-6">
          <input type="text" placeholder="Search..." className="border p-2 rounded w-1/3" />
          <div className="flex items-center gap-4">
            <FiBell />
            <div className="font-semibold">System Administrator</div>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          {[1, 2, 3, 4].map((_, i) => (
            <div key={i} className="bg-[theme(colors-card)] p-4 rounded-xl shadow hover:shadow-md transition">
              <h4 className="text-[theme(colors-muted-foreground)]">Total Users</h4>
              <p className="text-2xl font-bold">1250</p>
              <span className="text-green-500 text-sm">+12.5%</span>
            </div>
          ))}
        </div>

        {/* Charts */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          {/* Line Chart */}
          <div className="col-span-2 bg-[theme(colors-card)] p-4 rounded-xl shadow">
            <h3 className="mb-4 font-semibold">KPI Performance Trend</h3>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="value" stroke="#3b82f6" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Bar Chart */}
          <div className="bg-[theme(colors-card)] p-4 rounded-xl shadow">
            <h3 className="mb-4 font-semibold">Status</h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={barData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#6366f1" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          {['Users', 'KPIs', 'Themes', 'Access'].map((item, i) => (
            <div key={i} className="bg-[theme(colors-card)] p-4 rounded-xl shadow hover:scale-105 transition">
              <h4 className="font-semibold">{item}</h4>
              <p className="text-sm text-[theme(colors-muted-foreground)]">Manage {item}</p>
            </div>
          ))}
        </div>

        {/* Table */}
        <div className="bg-[theme(colors-card)] p-4 rounded-xl shadow">
          <h3 className="mb-4 font-semibold">Recent Activity</h3>
          <table className="w-full text-left bg-[theme(colors-card)] text-[theme(colors-card-foreground)]">
            <thead>
              <tr className="text-[theme(colors-muted-foreground)] text-sm">
                <th>User</th>
                <th>Action</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-[theme(colors-border)]">
                <td>Admin</td>
                <td>Updated KPI</td>
                <td>Today</td>
              </tr>
              <tr className="border-t border-[theme(colors-border)]">
                <td>Manager</td>
                <td>Created User</td>
                <td>Yesterday</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
