import { useState } from 'react';
import { SlidersHorizontal, Shield, Plus } from 'lucide-react';

import CustomSelect from '../../../Components/UI/CustomSelect';

import SearchInput from '../../../Components/UI/SearchInput';
import Button from '../../../Components/UI/Button';
import PermissionTable from './PermissionTable';
import StatCard from './StatCard';
import Header from './Header';
import Toolbar from './Toolbar';

const modules = [
  'KPI Management',
  'KPI Evaluation',
  'KPI Reporting',
  'User Management',
  'Role Management',
  'Configuration',
  'Audit Log',
  'Alerts & Notifications',
  'Personal Profile',
  'System Settings',
];

const roles = ['Admin', 'Manager', 'Department Head', 'Employee', 'Auditor', 'HR Officer'];

const generatePermissions = (role) =>
  modules.map((module) => ({
    module,
    view: true,
    create: role === 'Admin' || role === 'Manager',
    edit: role === 'Admin' || role === 'Manager',
    delete: role === 'Admin',
    approve: role === 'Admin' || role === 'Department Head',
  }));

const PermissionManagement = () => {
  const [activeTab, setActiveTab] = useState('matrix');
  const [selectedRole, setSelectedRole] = useState('Admin');
  const [search, setSearch] = useState('');
  const [permissions, setPermissions] = useState(generatePermissions('Admin'));

  const handleRoleChange = (role) => {
    setSelectedRole(role);
    setPermissions(generatePermissions(role));
  };

  const tabs = [
    { key: 'matrix', label: 'Permission Matrix' },
    { key: 'byRole', label: 'By Role' },
    { key: 'byModule', label: 'By Module' },
  ];

  return (
    <div className="flex flex-1 overflow-y-auto bg-background">
      <div className="flex-1 flex flex-col">
        <main className="flex-1 p-6 space-y-6 overflow-y-auto">
          {/* Header */}
          <Header />

          {/* Stats */}
          <StatCard />

          {/* Tabs */}
          <div className="flex gap-2">
            {tabs.map((tab) => (
              <Button key={tab.key} variant={activeTab === tab.key ? 'default' : 'outline'} size="sm" onClick={() => setActiveTab(tab.key)}>
                {tab.label}
              </Button>
            ))}
          </div>

          {/* Toolbar */}
          <Toolbar selectedRole={selectedRole} setSearch={setSearch} handleRoleChange={handleRoleChange} search={search} roles={roles} />

          {/* Matrix */}
          {activeTab === 'matrix' && <PermissionTable permissions={permissions} setPermissions={setPermissions} search={search} />}
        </main>
      </div>
    </div>
  );
};

export default PermissionManagement;
