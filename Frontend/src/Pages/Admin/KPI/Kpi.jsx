import { useState } from "react";
import { Search, SlidersHorizontal, Plus } from "lucide-react";

import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "../../../Components/UI/Table";

import SearchInput from "../../../Components/UI/SearchInput";

const kpiData = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  description: "Customer",
  roleName: "Customer",
  roleType: "Customer",
  parentRole: "Customer",
}));

const unitData = Array.from({ length: 3 }, (_, i) => ({
  id: i + 1,
  name: "Customer",
  description: "Customer",
}));

const categoryData = Array.from({ length: 9 }, (_, i) => ({
  id: i + 1,
  name: "Customer",
  description: "Customer",
  parentCategory: "Customer",
}));

const KpiManagement = () => {
  const [activeTab, setActiveTab] = useState("list");
  const [kpiSearch, setKpiSearch] = useState("");
  const [unitSearch, setUnitSearch] = useState("");
  const [categorySearch, setCategorySearch] = useState("");
  console.log(kpiSearch);
  const tabs = [
    { key: "list", label: "Lists" },
    { key: "kpi", label: "Register KPI" },
    { key: "category", label: "Register KPI Category" },
    { key: "unit", label: "Register Unit" },
  ];

  return (
    <div className="flex-1 overflow-y-auto bg-background ">
      <div className="flex-1 flex flex-col">
        <main className="flex-1 p-6 space-y-8 overflow-y-auto">
          <h1 className="text-2xl font-bold">KPI Management</h1>

          {/* Tabs */}
          <div className="flex gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-4 py-2 text-sm rounded-md border ${
                  activeTab === tab.key
                    ? "bg-blue-600 text-white"
                    : "bg-white border-gray-300"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* KPI Table */}
          <section className="space-y-3">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold">
                All KPIs <span className="text-gray-500">115</span>
              </h2>

              <div className="flex items-center gap-2">
                <SearchInput
                  onChange={(e) => setKpiSearch(e.target.value)}
                  value={kpiSearch}
                />

                <button className="flex items-center gap-1.5 h-9 px-3 text-sm border border-gray-300 rounded-md text-gray-600 hover:bg-gray-100">
                  <SlidersHorizontal className="w-4 h-4" />
                  Filters
                </button>

                <button className="flex items-center gap-1.5 h-9 px-3 text-sm border border-gray-300 rounded-md text-gray-600 hover:bg-gray-100">
                  <Plus className="w-4 h-4" />
                  Add
                </button>
              </div>
            </div>

            <div className="border border-gray-200 rounded overflow-hidden shadow-xl">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Kpi</TableHead>
                    <TableHead>Kpi Category</TableHead>
                    <TableHead>Kpi Sub-Catagory</TableHead>
                    <TableHead>Kpi Unit</TableHead>
                    <TableHead>Description</TableHead>
                  </TableRow>
                </TableHeader>

                <TableBody>
                  {kpiData.map((row) => (
                    <TableRow key={row.id}>
                      <TableCell>{row.description}</TableCell>
                      <TableCell>{row.roleName}</TableCell>
                      <TableCell>{row.roleType}</TableCell>
                      <TableCell>{row.parentRole}</TableCell>
                      <TableCell>View</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </section>

          {/* Units */}
          <section className="space-y-3">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold">
                All Units <span className="text-gray-500">11</span>
              </h2>
              <div className="flex items-center gap-2">
                <SearchInput
                  onChange={(e) => setUnitSearch(e.target.value)}
                  value={unitSearch}
                />

                <button className="flex items-center gap-1.5 h-9 px-3 text-sm border border-gray-300 rounded-md text-gray-600 hover:bg-gray-100">
                  <SlidersHorizontal className="w-4 h-4" />
                  Filters
                </button>

                <button className="flex items-center gap-1.5 h-9 px-3 text-sm border border-gray-300 rounded-md text-gray-600 hover:bg-gray-100">
                  <Plus className="w-4 h-4" />
                  Add
                </button>
              </div>
            </div>

            <div className="border rounded-xl overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Description</TableHead>
                  </TableRow>
                </TableHeader>

                <TableBody>
                  {unitData.map((row) => (
                    <TableRow key={row.id}>
                      <TableCell>{row.name}</TableCell>
                      <TableCell>{row.description}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </section>

          {/* Categories */}
          <section className="space-y-3">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold">KPI Category</h2>
              <div className="flex items-center gap-2">
                <SearchInput
                  onChange={(e) => setCategorySearch(e.target.value)}
                  value={categorySearch}
                />

                <button className="flex items-center gap-1.5 h-9 px-3 text-sm border border-gray-300 rounded-md text-gray-600 hover:bg-gray-100">
                  <SlidersHorizontal className="w-4 h-4" />
                  Filters
                </button>

                <button className="flex items-center gap-1.5 h-9 px-3 text-sm border border-gray-300 rounded-md text-gray-600 hover:bg-gray-100">
                  <Plus className="w-4 h-4" />
                  Add
                </button>
              </div>
            </div>

            <div className="border rounded-xl overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Parent Category</TableHead>
                  </TableRow>
                </TableHeader>

                <TableBody>
                  {categoryData.map((row) => (
                    <TableRow key={row.id}>
                      <TableCell>{row.name}</TableCell>
                      <TableCell>{row.description}</TableCell>
                      <TableCell>{row.parentCategory}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </section>





          
        </main>
      </div>
    </div>
  );
};

export default KpiManagement;
