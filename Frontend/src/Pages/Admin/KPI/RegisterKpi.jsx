import { useState } from 'react';
import { Input } from '../../../Components/UI/Input';

import CustomSelect from '../../../Components/UI/CustomSelect';
import Button from '../../../Components/UI/Button';

function RegisterKpi({ setActiveTab }) {
  const [kpiForm, setKpiForm] = useState({
    kpi: '',
    category: '',
    subCategory: '',
    unit: '',
    description: '',
  });

  return (
    <section className="space-y-6">
      <div className="bg-card border border-border rounded-xl p-8 max-w-lg">
        <h2 className="text-xl font-semibold text-foreground mb-6">Add KPI</h2>

        <div className="space-y-4">
          {/* KPI Input */}
          <Input placeholder="KPI" value={kpiForm.kpi} onChange={(e) => setKpiForm({ ...kpiForm, kpi: e.target.value })} className="h-11" />

          {/* Category */}
          <CustomSelect
            placeholder="KPI Category"
            value={kpiForm.category}
            onChange={(value) => setKpiForm({ ...kpiForm, category: value })}
            options={['Financial', 'Operational', 'Customer']}
          />

          {/* Sub Category */}
          <CustomSelect
            placeholder="KPI Sub-Category"
            value={kpiForm.subCategory}
            onChange={(value) => setKpiForm({ ...kpiForm, subCategory: value })}
            options={['Revenue', 'Cost', 'Satisfaction']}
          />

          {/* Unit */}
          <CustomSelect
            placeholder="KPI Unit"
            value={kpiForm.unit}
            onChange={(value) => setKpiForm({ ...kpiForm, unit: value })}
            options={['Percentage', 'Number', 'Currency']}
          />

          {/* Description */}
          <Input
            placeholder="Enter Description"
            value={kpiForm.description}
            onChange={(e) => setKpiForm({ ...kpiForm, description: e.target.value })}
            className="h-11"
          />

          {/* Buttons */}
          <div className="flex gap-3 pt-2">
            <Button
              onClick={() => {
                setKpiForm({
                  kpi: '',
                  category: '',
                  subCategory: '',
                  unit: '',
                  description: '',
                });
                setActiveTab('kpiList');
              }}
              className="bg-primary hover:bg-primary/90"
            >
              Save
            </Button>

            <Button
              onClick={() => {
                setKpiForm({
                  kpi: '',
                  category: '',
                  subCategory: '',
                  unit: '',
                  description: '',
                });
                setActiveTab('kpiList');
              }}
              className="bg-destructive/10 text-destructive border border-destructive/20 hover:bg-destructive/20"
            >
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RegisterKpi;
