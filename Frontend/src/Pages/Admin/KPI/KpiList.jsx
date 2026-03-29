import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell, TablePagination } from '../../../Components/UI/Table';
import { SlidersHorizontal, Plus } from 'lucide-react';
import SearchInput from '../../../Components/UI/SearchInput';
import { useState } from 'react';
function KpiList() {
  const [kpiSearch, setKpiSearch] = useState('');
  const [unitSearch, setUnitSearch] = useState('');
  const [categorySearch, setCategorySearch] = useState('');

  const [kpiPage, setKpiPage] = useState(1);
  const [unitPage, setUnitPage] = useState(1);
  const [categoryPage, setCategoryPage] = useState(1);

  const itemsPerPage = 8;

  const kpiData = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    description: 'Customer',
    roleName: 'Customer',
    roleType: 'Customer',
    parentRole: 'Customer',
  }));

  const unitData = Array.from({ length: 30 }, (_, i) => ({
    id: i + 1,
    name: 'Customer',
    description: 'Customer',
  }));

  const categoryData = Array.from({ length: 9 }, (_, i) => ({
    id: i + 1,
    name: 'Customer',
    description: 'Customer',
    parentCategory: 'Customer',
  }));

  const filteredKpiData = kpiData.filter((row) => row.description.toLowerCase().includes(kpiSearch.toLowerCase()));
  const filteredUnitData = unitData.filter((row) => row.name.toLowerCase().includes(unitSearch.toLowerCase()));
  const filteredCategoryData = categoryData.filter((row) => row.name.toLowerCase().includes(categorySearch.toLowerCase()));

  const kpiStart = (kpiPage - 1) * itemsPerPage;
  const unitStart = (unitPage - 1) * itemsPerPage;
  const categoryStart = (categoryPage - 1) * itemsPerPage;

  const paginatedKpiData = filteredKpiData.slice(kpiStart, kpiStart + itemsPerPage);
  const paginatedUnitData = filteredUnitData.slice(unitStart, unitStart + itemsPerPage);
  const paginatedCategoryData = filteredCategoryData.slice(categoryStart, categoryStart + itemsPerPage);

  return (
    <div className="flex flex-col gap-12">
      {/* KPI Table */}
      <section className="space-y-3">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold">
            All KPIs <span className="text-[theme(colors-muted-foreground)]">115</span>
          </h2>

          <div className="flex items-stretch gap-2 ">
            <SearchInput onChange={setKpiSearch} value={kpiSearch} />

            <button className="flex items-center gap-1.5 h-9 px-3 text-sm border border-[theme(colors.border)] rounded text-[theme(colors-muted-foreground)] hover:bg-[theme(colors.secondary)]">
              <SlidersHorizontal className="w-4 h-4" />
              Filters
            </button>

            <button className="flex items-center gap-1.5 h-9 px-3 text-sm border border-[theme(colors.border)] rounded-md text-[theme(colors-muted-foreground)] hover:bg-[theme(colors.secondary)]">
              <Plus className="w-4 h-4" />
              Add
            </button>
          </div>
        </div>

        <div >
          <Table className="border-none">
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
              {paginatedKpiData.map((row) => (
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

        <TablePagination currentPage={kpiPage} totalItems={filteredKpiData.length} itemsPerPage={itemsPerPage} onPageChange={setKpiPage} />
      </section>

      {/* Units */}
      <section className="space-y-3 rounded">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold ">
            All Units <span className="text-[theme(colors-muted-foreground)]">11</span>
          </h2>
          <div className="flex items-stretch gap-2 p-2 rounded">
            <SearchInput onChange={setUnitSearch} value={unitSearch} />

            <button className="flex items-center gap-1.5 h-9 px-3 text-sm border border-(--colors.border)] rounded-md text-[theme(colors-muted-foreground)] hover:bg-[theme(colors.secondary)]">
              <SlidersHorizontal className="w-4 h-4" />
              Filters
            </button>

            <button className="flex items-center gap-1.5 h-9 px-3 text-sm border border-[theme(colors.border)] rounded-md text-[theme(colors-muted-foreground)] hover:bg-[theme(colors.secondary)]">
              <Plus className="w-4 h-4" />
              Add
            </button>
          </div>
        </div>

        <div >
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Description</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {paginatedUnitData.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.description}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <TablePagination currentPage={unitPage} totalItems={filteredUnitData.length} itemsPerPage={itemsPerPage} onPageChange={setUnitPage} />
      </section>

      {/* Categories */}
      <section className="space-y-3 ">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold">KPI Category</h2>
          <div className="flex items-stretch gap-2">
            <SearchInput onChange={setCategorySearch} value={categorySearch} />

            <button className="flex items-center gap-1.5 h-9 px-3 text-sm border border-[theme(colors.border)] rounded-md text-[theme(colors-muted-foreground)] hover:bg-[theme(colors.secondary)]">
              <SlidersHorizontal className="w-4 h-4" />
              Filters
            </button>

            <button className="flex items-center gap-1.5 h-9 px-3 text-sm border border-[theme(colors.border)] rounded-md text-[theme(colors-muted-foreground)] hover:bg-[theme(colors.secondary)]">
              <Plus className="w-4 h-4" />
              Add
            </button>
          </div>
        </div>

        <div >
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Parent Category</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {paginatedCategoryData.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.description}</TableCell>
                  <TableCell>{row.parentCategory}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <TablePagination
          currentPage={categoryPage}
          totalItems={filteredCategoryData.length}
          itemsPerPage={itemsPerPage}
          onPageChange={setCategoryPage}
        />
      </section>
    </div>
  );
}

export default KpiList;
