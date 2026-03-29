import { useState } from 'react';
import { Search, SlidersHorizontal, Shield, Plus } from 'lucide-react';
import { Eye, Edit, Trash2, Check } from 'lucide-react';

import CustomSelect from '../../../Components/UI/CustomSelect';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, TablePagination } from '../../../Components/UI/Table';
import SearchInput from '../../../Components/UI/SearchInput';
import Button from '../../../Components/UI/Button';

import * as Switch from '@radix-ui/react-switch';

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

const permissionHeaders = [
  { label: 'View', icon: Eye },
  { label: 'Create', icon: Plus },
  { label: 'Edit', icon: Edit },
  { label: 'Delete', icon: Trash2 },
  { label: 'Approve', icon: Check },
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

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const handleRoleChange = (role) => {
    setSelectedRole(role);
    setPermissions(generatePermissions(role));
  };

  const togglePermission = (index, field) => {
    setPermissions((prev) => prev.map((p, i) => (i === index ? { ...p, [field]: !p[field] } : p)));
  };

  const filteredPermissions = permissions.filter((p) => p.module.toLowerCase().includes(search.toLowerCase()));
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedPermissions = filteredPermissions.slice(startIndex, startIndex + itemsPerPage);

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
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold flex items-center gap-2">
                <Shield className="w-7 h-7 text-primary" />
                Permission Management
              </h1>
              <p className="text-sm text-muted-foreground mt-1">Control access rights across modules</p>
            </div>

            <Button className="bg-primary hover:bg-primary/90 flex items-center gap-2">
              <Plus className="w-4 h-4" />
              Save Changes
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { label: 'Total Roles', value: '6', color: 'bg-primary/10 text-primary' },
              { label: 'System Modules', value: '10', color: 'bg-accent text-accent-foreground' },
              { label: 'Active Permissions', value: '47', color: 'bg-primary/10 text-primary' },
              { label: 'Restricted', value: '13', color: 'bg-destructive/10 text-destructive' },
            ].map((stat) => (
              <div key={stat.label} className="bg-card border border-border rounded-xl p-4">
                <p className="text-sm text-muted-foreground">{stat.label}</p>
                <p className={`text-2xl font-bold mt-1 ${stat.color.split(' ')[1]}`}>{stat.value}</p>
              </div>
            ))}
          </div>

          {/* Tabs */}
          <div className="flex gap-2">
            {tabs.map((tab) => (
              <Button key={tab.key} variant={activeTab === tab.key ? 'default' : 'outline'} size="sm" onClick={() => setActiveTab(tab.key)}>
                {tab.label}
              </Button>
            ))}
          </div>

          {/* Toolbar */}
          <div className="flex items-center justify-between">
            <div className="flex items-Stretch gap-3 ">
              {/* Custom Select */}
              <div className="w-48 h-9">
                <CustomSelect options={roles} value={selectedRole} onChange={handleRoleChange} placeholder="Select Role" />
              </div>

              {/* Search */}

              <SearchInput placeholder="Search modules..." value={search} onChange={setSearch} className="pl-9 h-9 w-56 text-sm" />

              <Button variant="outline" size="sm" className="h-9 flex items-center gap-1">
                <SlidersHorizontal className="w-4 h-4" />
                Filters
              </Button>
            </div>

            <p className="text-sm text-muted-foreground">
              Showing: <span className="font-semibold">{selectedRole}</span>
            </p>
          </div>

          {/* Matrix */}
          {activeTab === 'matrix' && (
            <div>
              <Table>
                <TableHeader>
                  <TableRow className="bg-primary/10">
                    <TableHead className="font-semibold text-foreground w-[250px]">Module</TableHead>

                    {permissionHeaders.map(({ label, icon: Icon }) => (
                      <TableHead key={label} className="font-semibold text-foreground text-center">
                        <div className="flex flex-col items-center gap-1">
                          <Icon className="w-4 h-4" />
                          <span className="text-xs">{label}</span>
                        </div>
                      </TableHead>
                    ))}
                  </TableRow>
                </TableHeader>

                <TableBody>
                  {paginatedPermissions.map((perm, idx) => (
                    <TableRow key={perm.module}>
                      <TableCell className="font-medium">{perm.module}</TableCell>

                      {['view', 'create', 'edit', 'delete', 'approve'].map((field) => (
                        <TableCell key={field} className="text-center">
                          {/* ✅ Proper Radix Switch */}
                          <Switch.Root
                            checked={perm[field]}
                            onCheckedChange={() => togglePermission(idx, field)}
                            className="w-10 h-5 bg-gray-300 rounded-full relative data-[state=checked]:bg-primary transition"
                          >
                            <Switch.Thumb className="block w-4 h-4 bg-white rounded-full shadow transform translate-x-0.5 data-[state=checked]:translate-x-5 transition" />
                          </Switch.Root>
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>

              <TablePagination
                currentPage={currentPage}
                totalItems={filteredPermissions.length}
                itemsPerPage={itemsPerPage}
                onPageChange={setCurrentPage}
              />
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default PermissionManagement;
