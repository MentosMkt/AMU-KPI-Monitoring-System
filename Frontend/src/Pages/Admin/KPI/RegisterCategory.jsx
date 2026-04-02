import { useState } from 'react';
import { Input } from '../../../Components/UI/Input';
import CustomSelect from '../../../Components/UI/CustomSelect';
import Button from '../../../Components/UI/Button';

function RegisterCategory({ setActiveTab }) {
  const [categoryForm, setCategoryForm] = useState({
    name: '',
    description: '',
    parentCategory: '',
  });

  const options = ['Financial', 'Operational', 'Customer'];

  return (
    <section className="space-y-6">
      <div className="bg-card border border-border rounded-xl p-8 max-w-lg">
        <h2 className="text-xl font-semibold text-foreground mb-6">Add KPI Category</h2>

        <div className="space-y-4">
          {/* Name */}
          <Input
            placeholder="Category Name"
            value={categoryForm.name}
            onChange={(e) => setCategoryForm({ ...categoryForm, name: e.target.value })}
            className="h-11"
          />

          {/* Description */}
          <Input
            placeholder="Enter Description"
            value={categoryForm.description}
            onChange={(e) =>
              setCategoryForm({
                ...categoryForm,
                description: e.target.value,
              })
            }
            className="h-11"
          />

          {/* ✅ Custom Select */}
          <CustomSelect
            options={options}
            value={categoryForm.parentCategory}
            placeholder="Parent Category"
            onChange={(value) =>
              setCategoryForm({
                ...categoryForm,
                parentCategory: value,
              })
            }
          />

          {/* Buttons */}
          <div className="flex gap-3 pt-2">
            <Button
              onClick={() => {
                setCategoryForm({
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
                setCategoryForm({
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

export default RegisterCategory;
