import { useState } from 'react';
import { Search, SlidersHorizontal, Edit, Trash2 } from 'lucide-react';
import Button from '../../../Components/UI/Button';

import SearchInput from '../../../Components/UI/SearchInput';

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, TablePagination } from '../../../Components/UI/Table';

import AddRole from './AddRole';
import AddCategory from './AddCategory';
import TabButton from '../../../Components/UI/TabButton';

const mockRoles = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  roleName: 'Customer',
  description: 'Customer',
  roleCategory: 'Customer',
  parentRole: 'Customer',
}));

const RoleManagement = () => {
  const [activeTab, setActiveTab] = useState('list');
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 5;

  const tabs = [
    { key: 'list', label: 'List of Roles' },
    { key: 'addRole', label: 'Add Role' },
    { key: 'addCategory', label: 'Add Role Category' },
  ];

  const filtered = mockRoles.filter((r) => r.roleName.toLowerCase().includes(search.toLowerCase()));

  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedRoles = filtered.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="flex overflow-y-auto  bg-background">
      <div className="flex-1 flex flex-col">
        <main className="flex-1 p-6 space-y-6 ">
          <h1 className="text-2xl font-bold text-foreground">Role Management</h1>

          {/* Tabs */}
          <div className="flex gap-2">
            {tabs.map((tab) => (
              <TabButton key={tab.key} label={tab.label} value={tab.key} activeValue={activeTab} onChange={setActiveTab} />
            ))}
          </div>

          {/* ================= LIST ================= */}
          {activeTab === 'list' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-foreground">All Roles {filtered.length}</p>

                <div className="flex  gap-3 items-stretch">
                  <SearchInput value={search} onChange={setSearch} />

                  <Button size="lg" className="flex items-center gap-2">
                    <SlidersHorizontal className="w-4 h-4" />
                    Filters
                  </Button>
                </div>
              </div>

              <div>
                <Table>
                  <TableHeader>
                    <TableRow className="bg-muted/50">
                      <TableHead>Role Name</TableHead>
                      <TableHead>Description</TableHead>
                      <TableHead>Role Category</TableHead>
                      <TableHead>Parent Role</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>

                  <TableBody>
                    {paginatedRoles.map((role) => (
                      <TableRow key={role.id}>
                        <TableCell>{role.roleName}</TableCell>
                        <TableCell>{role.description}</TableCell>
                        <TableCell>{role.roleCategory}</TableCell>
                        <TableCell>{role.parentRole}</TableCell>

                        <TableCell>
                          <div className="flex gap-2">
                            <button className="p-1 rounded hover:bg-muted">
                              <Edit className="w-4 h-4" />
                            </button>

                            <button className="p-1 rounded hover:bg-destructive/10 text-destructive">
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>

                <TablePagination currentPage={currentPage} totalItems={filtered.length} itemsPerPage={itemsPerPage} onPageChange={setCurrentPage} />
              </div>
            </div>
          )}

          {/* ================= ADD ROLE ================= */}
          {activeTab === 'addRole' && <AddRole setActiveTab={setActiveTab} />}

          {/* ================= ADD CATEGORY ================= */}
          {activeTab === 'addCategory' && <AddCategory setActiveTab={setActiveTab} />}
        </main>
      </div>
    </div>
  );
};

export default RoleManagement;
