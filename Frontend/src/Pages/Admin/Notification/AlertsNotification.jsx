import { useState } from 'react';
import { RefreshCw, CheckCheck, Calendar, Search, Filter, Check, ChevronDown } from 'lucide-react';
import { Badge } from '../../../Components/UI/Badge';

/* -------------------- Custom Select -------------------- */
const CustomSelect = ({ options = [], value, onChange, placeholder = 'Select...', className = '' }) => {
  const [open, setOpen] = useState(false);

  const selectedLabel = options.find((opt) => opt.value === value)?.label || placeholder;

  return (
    <div className={`relative ${className}`}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full px-3 h-9 text-xs text-left bg-card border border-border rounded-md flex justify-between items-center"
      >
        {selectedLabel}
        <ChevronDown className="w-4 h-4" />
      </button>

      {open && (
        <ul className="absolute z-10 w-full mt-1 bg-card border border-border rounded-md shadow-md max-h-60 overflow-auto">
          {options.map((opt) => (
            <li
              key={opt.value}
              onClick={() => {
                onChange(opt.value);
                setOpen(false);
              }}
              className="cursor-pointer px-3 py-2 text-xs hover:bg-accent/30 flex justify-between items-center"
            >
              {opt.label}
              {value === opt.value && <Check className="w-4 h-4 text-primary" />}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};


/* -------------------- Simple Button -------------------- */
const Button = ({ children, className = '', ...props }) => {
  return (
    <button className={`px-3 py-2 rounded-md text-sm font-medium ${className}`} {...props}>
      {children}
    </button>
  );
};

/* -------------------- Simple Input -------------------- */
const Input = ({ className = '', ...props }) => {
  return <input className={`border border-border rounded-md px-3 py-2 text-sm ${className}`} {...props} />;
};

/* -------------------- Data -------------------- */
const initialNotifications = [
  {
    id: 1,
    title: 'KPI Submitted for Approval',
    description: 'Dr. Tesfaye submitted "Research Publication Q1" for review.',
    date: 'Feb 26, 2026 – 10:45 AM',
    priority: 'High Priority',
    read: false,
  },
  {
    id: 2,
    title: 'New Member Onboarding',
    description: 'Sarah Johnson completed onboarding.',
    date: 'Feb 26, 2026 – 09:12 AM',
    priority: 'Medium Priority',
    read: false,
  },
];

const priorityColor = {
  'High Priority': 'border-red-500 text-red-600 bg-red-50',
  'Medium Priority': 'border-orange-400 text-orange-600 bg-orange-50',
  'Low Priority': 'border-green-500 text-green-600 bg-green-50',
};

const borderColor = {
  'High Priority': 'border-l-red-500',
  'Medium Priority': 'border-l-orange-400',
  'Low Priority': 'border-l-green-500',
};

/* -------------------- Main Component -------------------- */
const AlertsNotifications = () => {
  const [notifications, setNotifications] = useState(initialNotifications);
  const [search, setSearch] = useState('');

  const [priority, setPriority] = useState('all');
  const [date, setDate] = useState('all');
  const [type, setType] = useState('7days');

  const markAllRead = () => setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));

  const filtered = notifications.filter((n) => {
    const matchesSearch = n.title.toLowerCase().includes(search.toLowerCase()) || n.description.toLowerCase().includes(search.toLowerCase());

    const matchesPriority = priority === 'all' || n.priority === priority;

    return matchesSearch && matchesPriority;
  });

  return (
    <div className="flex min-h-screen bg-background">
      <main className="flex-1 p-8 overflow-auto">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold">Alert & Notifications</h1>
            <p className="text-sm text-muted-foreground mt-1">Monitor and manage notifications</p>
          </div>

          <div className="flex gap-3">
            <Button className="border flex items-center gap-2">
              <RefreshCw className="w-4 h-4" /> Refresh
            </Button>

            <Button onClick={markAllRead} className="bg-blue-600 text-white flex items-center gap-2">
              <CheckCheck className="w-4 h-4" /> Mark All
            </Button>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-3 mb-8">
          {/* Priority */}
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-gray-500" />
            <span className="text-xs">Priority :</span>

            <CustomSelect
              value={priority}
              onChange={setPriority}
              className="w-36"
              options={[
                { label: 'All', value: 'all' },
                { label: 'High Priority', value: 'High Priority' },
                { label: 'Medium Priority', value: 'Medium Priority' },
                { label: 'Low Priority', value: 'Low Priority' },
              ]}
            />
          </div>

          {/* Date */}
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-gray-500" />
            <span className="text-xs">Date :</span>

            <CustomSelect
              value={date}
              onChange={setDate}
              className="w-36"
              options={[
                { label: 'Today', value: 'today' },
                { label: 'This Week', value: 'week' },
                { label: 'This Month', value: 'month' },
              ]}
            />
          </div>

          {/* Type */}
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-gray-500" />
            <span className="text-xs">Type :</span>

            <CustomSelect
              value={type}
              onChange={setType}
              className="w-36"
              options={[
                { label: 'Last 7 Days', value: '7days' },
                { label: 'Last 30 Days', value: '30days' },
                { label: 'All Time', value: 'all' },
              ]}
            />
          </div>

          {/* Search */}
          <div className="relative ml-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input placeholder="Search" className="pl-9 h-9 w-36 text-xs" value={search} onChange={(e) => setSearch(e.target.value)} />
          </div>
        </div>

        {/* List */}
        <div>
          {filtered.map((n) => (
            <div key={n.id} className={`flex justify-between border-l-4 ${borderColor[n.priority]} border-b px-4 py-3`}>
              <div>
                <h3 className="font-semibold text-sm">{n.title}</h3>
                <p className="text-xs text-gray-500">{n.description}</p>

                <div className="flex gap-3 mt-2">
                  <span className="text-xs flex items-center gap-1">
                    <Calendar className="w-3 h-3" /> {n.date}
                  </span>

                  <Badge className={`text-[10px] ${priorityColor[n.priority]}`}>{n.priority}</Badge>
                </div>
              </div>

              <Badge
                onClick={() => setNotifications((prev) => prev.map((x) => (x.id === n.id ? { ...x, read: true } : x)))}
                className={`cursor-pointer w- ${n.read ? 'bg-gray-200 text-gray-500' : 'bg-blue-100 text-blue-600'}`}
              >
                {n.read ? 'Read' : 'Unread'}
              </Badge>
            </div>
          ))}
        </div>



      </main>
    </div>
  );
};

export default AlertsNotifications;
