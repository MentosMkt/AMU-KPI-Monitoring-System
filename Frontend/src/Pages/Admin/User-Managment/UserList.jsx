import { Search, UserPlus } from "lucide-react";
import { useState } from "react";

import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "../../../Components/UI/Table";
import { Input } from "../../../Components/UI/Input";

// Custom Select component
const CustomSelect = ({
  options,
  value,
  onChange,
  placeholder,
  width = "w-full",
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={`relative ${width} `}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full px-3 h-full  text-sm text-left bg-white border border-gray-300 rounded-xl flex justify-between items-center focus:outline-none focus:ring-1 focus:ring-green-500"
      >
        {value || placeholder}
        <svg
          className={`w-4 h-4 mr-2 transition-transform ${open ? "rotate-180" : ""}`}
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
        <ul className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-md max-h-60 overflow-auto">
          {options.map((opt) => (
            <li
              key={opt}
              onClick={() => {
                onChange(opt);
                setOpen(false);
              }}
              className="cursor-pointer px-3 py-1 text-sm hover:bg-blue-100 flex justify-between items-center"
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

const mockUsers = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  firstName: "Abebe",
  middleName: "Kebede",
  lastName: "Tadesse",
  email: `user${i + 1}@amu.edu.et`,
  role: "Lecturer",
  roleCategory: "Academic",
  joinedDate: "2024-09-15",
}));

function UserList({ setSearchQuery, searchQuery, setActiveTab }) {
  const [selectedRole, setSelectedRole] = useState("");
  const [selectedRoleCategory, setSelectedRoleCategory] = useState("");

  const uniqueRoles = ["All Roles", ...new Set(mockUsers.map((u) => u.role))];
  const uniqueCategories = [
    "All Categories",
    ...new Set(mockUsers.map((u) => u.roleCategory)),
  ];

  const filteredUsers = mockUsers.filter((u) => {
    const matchesSearch = `${u.firstName} ${u.lastName} ${u.email}`
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesRole = selectedRole === "" || u.role === selectedRole;
    const matchesCategory =
      selectedRoleCategory === "" || u.roleCategory === selectedRoleCategory;
    return matchesSearch && matchesRole && matchesCategory;
  });

  return (
    <>
      <div className="flex justify-between mb-4">
        <h2 className="text-lg font-semibold">
          All users ({mockUsers.length})
        </h2>

        <div className="flex gap-3 items-stretch">
          <div className="relative w-full flex-1 items-stretch">
            {/* Icon */}
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />

            {/* Input */}
            <input
              type="text"
              placeholder="Search..."
              className="
          
          pl-10 pr-4 py-2.5
          rounded-xl
          border border-gray-300
          bg-white
          text-sm
          outline-none

          transition-all duration-200

          focus:border-green-500
          focus:ring-2 focus:ring-green-100
          focus:shadow-sm

          hover:border-gray-400
        "
            />
          </div>

          <CustomSelect
            options={uniqueRoles}
            value={selectedRole === "" ? "All Roles" : selectedRole}
            onChange={(val) => setSelectedRole(val === "All Roles" ? "" : val)}
            placeholder="All Roles"
            width="w-40 h-full"
          />

          <CustomSelect
            options={uniqueCategories}
            value={
              selectedRoleCategory === ""
                ? "All Categories"
                : selectedRoleCategory
            }
            onChange={(val) =>
              setSelectedRoleCategory(val === "All Categories" ? "" : val)
            }
            placeholder="All Categories"
            width="w-40"
          />

          <button
            onClick={() => setActiveTab("add")}
            className="flex items-center gap-2 px-3  bg-blue-600 text-white rounded text-sm"
          >
            <UserPlus className="w-4 h-4" />
            Add User
          </button>
        </div>
      </div>

      <Table>
        <TableHeader className="[&_th]:text-black">
          <TableRow>
            <TableHead>First Name</TableHead>
            <TableHead>Middle Name</TableHead>
            <TableHead>Last Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Role Category</TableHead>
            <TableHead>Joined Date</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {filteredUsers.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.firstName}</TableCell>
              <TableCell>{user.middleName}</TableCell>
              <TableCell>{user.lastName}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell>{user.roleCategory}</TableCell>
              <TableCell>{user.joinedDate}</TableCell>
              <TableCell>
                <button className="text-sm text-blue-600">View</button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}

export default UserList;
