import { useParams } from 'react-router-dom';

import {
  User,
  Mail,
  Phone,
  MapPin,
  Building2,
  Calendar,
  Award,
  TrendingUp,
  BarChart3,
  Shield,
  Clock,
  Star,
  Target,
  BookOpen,
  Briefcase,
  Lock,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../../Components/UI/Card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../Components/UI/ProfileButtonTab';
import { Badge } from '../../Components/UI/Badge';

const CURRENT_USER_ID = 'self';

const userData = {
  id: 'self',
  name: 'Mr. Samson Alemu',
  initials: 'SA',
  email: 'samson.alemu@amu.edu.et',
  phone: '+251 912 345 678',
  role: 'System Administrator',
  department: 'Information Technology',
  location: 'Arba Minch, Ethiopia',
  joinDate: 'Jan 15, 2022',
  status: 'Active',
  bio: 'Experienced system administrator with expertise in KPI management systems, IT infrastructure, and organizational process improvement.',

  dateOfBirth: 'March 12, 1990',
  emergencyContact: '+251 911 222 333',
  nationalId: 'ET-1990-XXXX-XXXX',
  address: 'Arba Minch, Gamo Zone, SNNPR, Ethiopia',
  bankAccount: 'CBE - ****4521',

  overallScore: 87,
  completedKpis: 24,
  pendingKpis: 4,
  overdueKpis: 1,
  kpiTrend: '+8.3%',

  kpiBreakdown: [
    { category: 'Teaching', score: 92, weight: 30 },
    { category: 'Research', score: 85, weight: 25 },
    { category: 'Community Service', score: 78, weight: 20 },
    { category: 'Administration', score: 90, weight: 15 },
    { category: 'Professional Dev', score: 88, weight: 10 },
  ],

  recentActivity: [
    { action: 'KPI Report Submitted', date: '2 hours ago', type: 'success' },
    { action: 'Profile Updated', date: '1 day ago', type: 'info' },
    { action: 'Performance Review Completed', date: '3 days ago', type: 'success' },
    { action: 'Training Certificate Uploaded', date: '1 week ago', type: 'info' },
    { action: 'Leave Request Approved', date: '2 weeks ago', type: 'warning' },
  ],

  achievements: [
    { title: 'Top Performer Q3', icon: Award, color: 'text-yellow-500' },
    { title: '100% KPI Completion', icon: Target, color: 'text-green-500' },
    { title: '5 Year Service', icon: Star, color: 'text-blue-500' },
    { title: 'Training Champion', icon: BookOpen, color: 'text-purple-500' },
  ],
};

const UserProfile = () => {
  const { userId } = useParams();
  const isSelf = !userId || userId === CURRENT_USER_ID;

  return (
    <div className="flex flex-1 overflow-y-auto bg-background">
      <div className="flex-1 flex flex-col min-w-0">
        <main className="flex-1 p-6 overflow-y-auto">
          {/* Profile Header */}
          <div className="mb-6">
            <Card className="border-border bg-card overflow-hidden">
              <div className="h-32 bg-gradient-to-r from-primary/20 via-primary/10 to-accent/20" />
              <CardContent className="relative pt-0 pb-6 px-6">
                <div className="flex flex-col sm:flex-row items-start sm:items-end gap-4 -mt-12">
                  <div className="w-24 h-24 rounded-full bg-primary/10 border-4 border-card flex items-center justify-center text-primary font-bold text-2xl shadow-lg">
                    {userData.initials}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <h1 className="text-2xl font-bold text-foreground">{userData.name}</h1>
                      <Badge variant="outline" className="bg-green-500/10 text-green-600 border-green-500/30 text-xs">
                        {userData.status}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground text-sm">{userData.role}</p>
                    <div className="flex flex-wrap gap-4 mt-2 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Building2 className="w-3.5 h-3.5" />
                        {userData.department}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {userData.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        Joined {userData.joinDate}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-bold text-primary">{userData.overallScore}%</p>
                    <p className="text-xs text-muted-foreground">Overall Performance</p>
                    <Badge variant="outline" className="mt-1 bg-green-500/10 text-green-600 border-green-500/30 text-xs">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      {userData.kpiTrend}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Tabs */}
          <Tabs defaultValue="overview">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="performance">Performance</TabsTrigger>
              {isSelf && <TabsTrigger value="personal">Personal</TabsTrigger>}
              <TabsTrigger value="activity">Activity</TabsTrigger>
            </TabsList>

            {/* Overview */}
            <TabsContent value="overview">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* About */}
                <Card className="lg:col-span-2 border-border bg-card">
                  <CardHeader>
                    <CardTitle className="text-base flex items-center gap-2">
                      <User className="w-4 h-4 text-primary" />
                      About
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-6">{userData.bio}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <InfoRow icon={Mail} label="Email" value={userData.email} />
                      <InfoRow icon={Phone} label="Phone" value={userData.phone} />
                      <InfoRow icon={Shield} label="Role" value={userData.role} />
                      <InfoRow icon={Building2} label="Department" value={userData.department} />
                    </div>
                  </CardContent>
                </Card>

                {/* Achievements */}
                <Card className="border-border bg-card">
                  <CardHeader>
                    <CardTitle className="text-base flex items-center gap-2">
                      <Award className="w-4 h-4 text-primary" />
                      Achievements
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {userData.achievements.map((a, i) => (
                      <div key={i} className="flex items-center gap-3 p-2.5 rounded-lg bg-muted/50">
                        <a.icon className={`w-5 h-5 ${a.color}`} />
                        <span className="text-sm font-medium text-foreground">{a.title}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* KPI Stats Cards */}
                <div className="lg:col-span-3 grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <StatMini icon={Target} label="Completed KPIs" value={userData.completedKpis} color="text-green-500" />
                  <StatMini icon={Clock} label="Pending KPIs" value={userData.pendingKpis} color="text-yellow-500" />
                  <StatMini icon={BarChart3} label="Overdue KPIs" value={userData.overdueKpis} color="text-red-500" />
                  <StatMini icon={TrendingUp} label="Performance Trend" value={userData.kpiTrend} color="text-primary" />
                </div>
              </div>
            </TabsContent>

            {/* Performance */}
            <TabsContent value="performance">
              <Card>
                <CardHeader>
                  <CardTitle>Performance</CardTitle>
                </CardHeader>

                <CardContent>
                  <h1>Hello</h1>
                  {/* {userData.kpiBreakdown.map((kpi, i) => (
                    <div key={i} className="mb-4">
                      <div className="flex justify-between text-sm">
                        <span>{kpi.category}</span>
                        <span>{kpi.score}%</span>
                      </div>
                      <Progress value={kpi.score} />
                    </div>
                  ))} */}
                </CardContent>
              </Card>
            </TabsContent>

            {/* Personal */}
            {isSelf && (
              <TabsContent value="personal">
                <Card className="border-border bg-card">
                  <CardHeader>
                    <CardTitle className="text-base flex items-center gap-2">
                      <Lock className="w-4 h-4 text-primary" />
                      Personal Information
                      <Badge variant="outline" className="ml-2 text-xs bg-yellow-500/10 text-yellow-600 border-yellow-500/30">
                        Private
                      </Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <InfoRow icon={Calendar} label="Date of Birth" value={userData.dateOfBirth} />
                      <InfoRow icon={Phone} label="Emergency Contact" value={userData.emergencyContact} />
                      <InfoRow icon={Shield} label="National ID" value={userData.nationalId} />
                      <InfoRow icon={MapPin} label="Full Address" value={userData.address} />
                      <InfoRow icon={Briefcase} label="Bank Account" value={userData.bankAccount} />
                      <InfoRow icon={Mail} label="Personal Email" value="samson.personal@gmail.com" />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            )}

            {/* Activity */}
            <TabsContent value="activity">
              <Card className="border-border bg-card">
                <CardHeader>
                  <CardTitle className="text-base flex items-center gap-2">
                    <Clock className="w-4 h-4 text-primary" />
                    Recent Activity
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-1">
                    {userData.recentActivity.map((act, i) => (
                      <div key={i} className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                        <div
                          className={`w-2.5 h-2.5 rounded-full ${
                            act.type === 'success' ? 'bg-green-500' : act.type === 'warning' ? 'bg-yellow-500' : 'bg-blue-500'
                          }`}
                        />
                        <div className="flex-1">
                          <p className="text-sm font-medium text-foreground">{act.action}</p>
                          <p className="text-xs text-muted-foreground">{act.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
};

const InfoRow = ({ icon: Icon, label, value }) => (
  <div className="flex items-start gap-3">
    <div className="p-2 rounded-lg bg-muted">
      <Icon className="w-4 h-4 text-primary" />
    </div>
    <div>
      <p className="text-xs text-muted-foreground">{label}</p>
      <p className="text-sm font-medium text-foreground">{value}</p>
    </div>
  </div>
);

const StatMini = ({ icon: Icon, label, value, color }) => (
  <Card className="border-border bg-card">
    <CardContent className="p-4 flex items-center gap-3">
      <div className="p-2 rounded-lg bg-muted">
        <Icon className={`w-5 h-5 ${color}`} />
      </div>
      <div>
        <p className="text-lg font-bold text-foreground">{value}</p>
        <p className="text-xs text-muted-foreground">{label}</p>
      </div>
    </CardContent>
  </Card>
);

export default UserProfile;
