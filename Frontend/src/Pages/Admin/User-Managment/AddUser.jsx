import { useState } from "react";

// Custom Input component
const Input = ({ className, ...props }) => {
  return (
    <input
      className={`flex h-11 w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-base placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
      {...props}
    />
  );
};

// Custom Select component
const CustomSelect = ({ options, value, onChange, placeholder }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative w-full">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full px-4 py-3 text-left bg-white border border-gray-300 rounded-xl flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {value || placeholder}
        <svg
          className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {open && (
        <ul className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-xl shadow-md max-h-60 overflow-auto">
          {options.map((opt) => (
            <li
              key={opt}
              onClick={() => {
                onChange(opt);
                setOpen(false);
              }}
              className="cursor-pointer px-4 py-2 hover:bg-blue-100 flex justify-between items-center"
            >
              {opt}
              {value === opt && (
                <svg
                  className="w-4 h-4 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const roleCategories = ["Academic", "Administrative", "Support", "Management"];
const roles = ["Lecturer", "Professor", "Dean", "HOD", "Admin", "Registrar"];

function AddUser({ setActiveTab }) {
  const [formData, setFormData] = useState({
    roleCategory: "",
    role: "",
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    username: "",
  });

  const handleFormChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    console.log("Save user:", formData);
    setActiveTab("list");
  };

  const handleCancel = () => {
    setActiveTab("list");
  };

  return (
    <div className="mx-auto py-8 border border-gray-200 p-4 shadow-all shadow">
      {/* Subtle Header */}
      <div className="mb-10">
        <h2 className="text-3xl font-semibold text-gray-900">Add New User</h2>
        <p className="text-gray-500 mt-2">
          Fill in the details to create a new user account
        </p>
      </div>

      <div className="space-y-10">
        {/* Role Assignment */}
        <div>
          <h3 className="text-lg font-medium text-gray-800 mb-4 flex items-center gap-2">
            <span className="text-blue-600">●</span>
            Role Assignment
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-600">
                Role Category
              </label>
              <CustomSelect
                options={roleCategories}
                value={formData.roleCategory}
                onChange={(val) => handleFormChange("roleCategory", val)}
                placeholder="Select Role Category"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-600">
                Role
              </label>
              <CustomSelect
                options={roles}
                value={formData.role}
                onChange={(val) => handleFormChange("role", val)}
                placeholder="Select Role"
              />
            </div>
          </div>
        </div>

        {/* Personal Information */}
        <div>
          <h3 className="text-lg font-medium text-gray-800 mb-4 flex items-center gap-2">
            <span className="text-emerald-600">●</span>
            Personal Information
          </h3>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-600 mb-3">
              Full Name
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Input
                placeholder="First Name"
                onChange={(e) => handleFormChange("firstName", e.target.value)}
              />
              <Input
                placeholder="Middle Name"
                onChange={(e) => handleFormChange("middleName", e.target.value)}
              />
              <Input
                placeholder="Last Name"
                onChange={(e) => handleFormChange("lastName", e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Account Information */}
        <div>
          <h3 className="text-lg font-medium text-gray-800 mb-4 flex items-center gap-2">
            <span className="text-violet-600">●</span>
            Account Information
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-600">
                Email Address
              </label>
              <Input
                type="email"
                placeholder="user@example.com"
                onChange={(e) => handleFormChange("email", e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-600">
                Username
              </label>
              <Input
                placeholder="username"
                onChange={(e) => handleFormChange("username", e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end gap-4 mt-12 pt-8 border-t border-gray-200">
        <button
          onClick={handleCancel}
          className="px-8 py-2 rounded hover:bg-red-500 hover:text-white cursor-pointer font-medium transition border text-black border-red-500"
        >
          Cancel
        </button>
        <button
          onClick={handleSave}
          className=" hover:bg-blue-700 hover:text-white cursor-pointer text-black border border-blue-400 font-medium rounded transition shadow-sm px-8"
        >
          Save User
        </button>
      </div>
    </div>
  );
}

export default AddUser;
