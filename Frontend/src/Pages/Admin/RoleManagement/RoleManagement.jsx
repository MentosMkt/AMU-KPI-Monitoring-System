import { Search, SlidersHorizontal, Edit, Trash2 } from "lucide-react";
import { Input } from "../../../Components/UI/Input";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../Components/UI/Table";
import { useState } from "react";
import Button from "../../../Components/UI/Button";
import SearchInput from "../../../Components/UI/SearchInput";

const mockRoles = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  roleName: "Customer",
  description: "Customer",
  roleCategory: "Customer",
  parentRole: "Customer",
}));

const RoleManagement = () => {
  const [activeTab, setActiveTab] = useState("list");
  const [search, setSearch] = useState("");

  const tabs = [
    { key: "list", label: "List of Roles" },
    { key: "addRole", label: "Add Role" },
    { key: "addCategory", label: "Add Role Category" },
  ];

  const filtered = mockRoles.filter((r) =>
    r.roleName.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="flex min-h-screen bg-background">
      <div className="flex-1 flex flex-col">
        <main className="flex-1 p-6 space-y-6">
          <h1 className="text-2xl font-bold text-foreground">
            Role Management
          </h1>

          {/* Tabs */}
          <div className="flex gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-5 py-2 rounded-lg text-sm font-medium border transition-colors ${
                  activeTab === tab.key
                    ? "border-primary text-primary bg-primary/5"
                    : "border-border text-muted-foreground hover:bg-muted"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {activeTab === "list" && (
            <div className="space-y-4">
              {/* Toolbar */}
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-foreground">
                  All Roles {filtered.length}
                </p>
                <div className="flex items-center gap-3">
                  <SearchInput  />
                  <Button
                    size="lg"
                    className="flex items-center justify-center gap-4"
                  >
                    <SlidersHorizontal className="w-4 h-4" />
                    Filters
                  </Button>
                </div>
              </div>

              {/* Table */}
              <div className="border border-border rounded-xl overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-muted/50">
                      <TableHead className="font-semibold text-foreground">
                        Role Name
                      </TableHead>
                      <TableHead className="font-semibold text-foreground">
                        Description
                      </TableHead>
                      <TableHead className="font-semibold text-foreground">
                        Role Category
                      </TableHead>
                      <TableHead className="font-semibold text-foreground">
                        Parent Role
                      </TableHead>
                      <TableHead className="font-semibold text-foreground">
                        Actions
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filtered.map((role) => (
                      <TableRow key={role.id}>
                        <TableCell className="text-muted-foreground">
                          {role.roleName}
                        </TableCell>
                        <TableCell className="text-muted-foreground">
                          {role.description}
                        </TableCell>
                        <TableCell className="text-muted-foreground">
                          {role.roleCategory}
                        </TableCell>
                        <TableCell className="text-muted-foreground">
                          {role.parentRole}
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <button className="p-1 rounded hover:bg-muted text-muted-foreground hover:text-foreground">
                              <Edit className="w-4 h-4" />
                            </button>
                            <button className="p-1 rounded hover:bg-destructive/10 text-muted-foreground hover:text-destructive">
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          )}

          {activeTab === "addRole" && (
            <div className="rounded-2xl border border-border bg-muted/50 p-8">
              <p className="text-muted-foreground text-sm">
                Add Role form coming soon.
              </p>
            </div>
          )}

          {activeTab === "addCategory" && (
            <div className="rounded-2xl border border-border bg-muted/50 p-8">
              <p className="text-muted-foreground text-sm">
                Add Role Category form coming soon.
              </p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default RoleManagement;
