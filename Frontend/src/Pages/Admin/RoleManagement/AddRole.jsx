import { useState } from 'react';

import { Input } from '../../../Components/UI/Input';
import Button from '../../../Components/UI/Button';
import CustomSelect from '../../../Components/UI/CustomSelect';

function AddRole({ setActiveTab }) {
  const [checked, setChecked] = useState(false);
  const [roleForm, setRoleForm] = useState({
    category: '',
    roleName: '',
    description: '',
    parentRole: '',
    extraMeasure: false,
  });

  const handleRoleSave = () => {
    console.log('Save role:', roleForm);
    setRoleForm({
      category: '',
      roleName: '',
      description: '',
      parentRole: '',
      extraMeasure: false,
    });
    setActiveTab('list');
  };

  return (
    <div className="rounded-2xl border border-border bg-muted/50 p-8 max-w-md space-y-5">
      <h2 className="text-lg font-semibold">Add Role</h2>

      {/* Role Category */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-600">Role Category</label>
        <CustomSelect
          options={['2', '3', '5']}
          value={roleForm.category}
          onChange={(val) => setRoleForm({ ...roleForm, category: val })}
          placeholder="Select Role Category"
        />
      </div>

      {/* Role Name */}
      <Input placeholder="Enter Role" value={roleForm.roleName} onChange={(e) => setRoleForm({ ...roleForm, roleName: e.target.value })} />

      {/* Description */}
      <Input
        placeholder="Enter Description"
        value={roleForm.description}
        onChange={(e) => setRoleForm({ ...roleForm, description: e.target.value })}
      />

      {/* Parent Role */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-600">Parent Role</label>
        <CustomSelect
          options={['Admin', 'Customer', 'Staff']}
          value={roleForm.parentRole}
          onChange={(val) => setRoleForm({ ...roleForm, parentRole: val })}
          placeholder="Select Parent Role"
        />
      </div>

      {/* Checkbox */}
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
          className="w-5 h-5 text-green-500 border-gray-300 rounded "
        />
        <span className="text-xs">Extra Measure</span>
      </div>

      {/* Buttons */}
      <div className="flex gap-3 pt-2">
        <Button onClick={handleRoleSave}>Save</Button>
        <Button variant="outline" onClick={() => setActiveTab('list')}>
          Cancel
        </Button>
      </div>
    </div>
  );
}

export default AddRole;
