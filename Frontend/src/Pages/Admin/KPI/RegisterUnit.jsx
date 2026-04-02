import { useState } from 'react';
import { Input } from '../../../Components/UI/Input';
import CustomSelect from '../../../Components/UI/CustomSelect';
import Button from '../../../Components/UI/Button';

function RegisterUnit({ setActiveTab }) {
  const [unitForm, setUnitForm] = useState({
    name: '',
    description: '',
    parentCategory: '',
  });

  const options = ['Percentage', 'Number', 'Currency'];

  return (
    <section className="space-y-6">
      <div className="bg-card border border-border rounded-xl p-8 max-w-lg">
        <h2 className="text-xl font-semibold text-foreground mb-6">Add Unit</h2>

        <div className="space-y-4">
          {/* Name */}
          <Input
            placeholder="Unit Name"
            value={unitForm.name}
            onChange={(e) => setUnitForm({ ...unitForm, name: e.target.value })}
            className="h-11"
          />

          {/* Description */}
          <Input
            placeholder="Enter Description"
            value={unitForm.description}
            onChange={(e) => setUnitForm({ ...unitForm, description: e.target.value })}
            className="h-11"
          />

          {/* ✅ Custom Select */}
          <CustomSelect
            options={options}
            value={unitForm.parentCategory}
            placeholder="Parent Category"
            onChange={(value) => setUnitForm({ ...unitForm, parentCategory: value })}
          />

          {/* Buttons */}
          <div className="flex gap-3 pt-2">
            <Button
              onClick={() => {
                setUnitForm({
                  name: '',
                  description: '',
                  parentCategory: '',
                });
                setActiveTab('kpiList');
              }}
              className="bg-primary hover:bg-primary/90"
            >
              Save
            </Button>

            <Button
              variant="outline"
              onClick={() => {
                setUnitForm({
                  name: '',
                  description: '',
                  parentCategory: '',
                });
                setActiveTab('kpiList');
              }}
              className="bg-destructive/10 text-destructive border-destructive/20 hover:bg-destructive/20"
            >
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RegisterUnit;
