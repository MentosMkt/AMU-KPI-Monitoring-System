import { useState } from 'react';
import { Input } from '../../../Components/UI/Input';
import CustomSelect from '../../../Components/UI/CustomSelect';

const roleCategories = ['Academic', 'Administrative', 'Support', 'Management'];
const roles = ['Lecturer', 'Professor', 'Dean', 'HOD', 'Admin', 'Registrar'];

function AddUser({ setActiveTab }) {
  const [formData, setFormData] = useState({
    roleCategory: '',
    role: '',
    firstName: '',
    middleName: '',
    lastName: '',
    email: '',
    username: '',
  });

  const handleFormChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    console.log('Save user:', formData);
    setActiveTab('list');
  };

  const handleCancel = () => {
    setActiveTab('list');
  };

  return (
    <div className="mx-auto py-8 border border-gray-200/40 rounded p-4 shadow-all shadow">
      {/* Subtle Header */}
      <div className="mb-10">
        <h2 className="text-xl font-semibold text-foreground ">Add New User</h2>
        <p className="text-foreground text-xs mt-2">Fill in the details to create a new user account</p>
      </div>

      <div className="space-y-10">
        {/* Role Assignment */}
        <div>
          <h3 className="text-sm font-medium text-foreground  mb-4 flex items-center gap-2">
            <span className="text-blue-600">●</span>
            Role Assignment
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-foreground ">Role Category</label>
              <CustomSelect
                options={roleCategories}
                value={formData.roleCategory}
                onChange={(val) => handleFormChange('roleCategory', val)}
                placeholder="Select Role Category"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-foreground ">Role</label>
              <CustomSelect options={roles} value={formData.role} onChange={(val) => handleFormChange('role', val)} placeholder="Select Role" />
            </div>
          </div>
        </div>

        {/* Personal Information */}
        <div>
          <h3 className="text-sm font-medium text-foreground  mb-4 flex items-center gap-2">
            <span className="text-emerald-600">●</span>
            Personal Information
          </h3>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-foreground  mb-3">Full Name</label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Input placeholder="First Name" onChange={(e) => handleFormChange('firstName', e.target.value)} />
              <Input placeholder="Middle Name" onChange={(e) => handleFormChange('middleName', e.target.value)} />
              <Input placeholder="Last Name" onChange={(e) => handleFormChange('lastName', e.target.value)} />
            </div>
          </div>
        </div>

        {/* Account Information */}
        <div>
          <h3 className="text-sm font-medium text-foreground  mb-4 flex items-center gap-2">
            <span className="text-violet-600">●</span>
            Account Information
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-foreground ">Email Address</label>
              <Input type="email" placeholder="user@example.com" onChange={(e) => handleFormChange('email', e.target.value)} />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-foreground ">Username</label>
              <Input placeholder="username" onChange={(e) => handleFormChange('username', e.target.value)} />
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end gap-4 mt-12 pt-8 border-t border-gray-200">
        <button
          onClick={handleCancel}
          className="px-8 py-2 rounded hover:bg-red-500 hover:text-white cursor-pointer font-medium transition border text-foreground  border-red-500"
        >
          Cancel
        </button>
        <button
          onClick={handleSave}
          className=" hover:bg-blue-700 hover:text-white cursor-pointer text-foreground  border border-blue-400 font-medium rounded transition shadow-sm px-8"
        >
          Save User
        </button>
      </div>
    </div>
  );
}

export default AddUser;
