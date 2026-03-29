import { Search, UserPlus } from 'lucide-react';
import { useState } from 'react';

import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from '../../../Components/UI/Table';

import SearchInput from '../../../Components/UI/SearchInput';
import CustomSelect from '../../../Components/UI/CustomSelect';

// Custom Select component
// const CustomSelect = ({ options, value, onChange, placeholder, width = 'w-full' }) => {
//   const [open, setOpen] = useState(false);

//   return (
//     <div className={`relative ${width} `}>
//       <button
//         type="button"
//         onClick={() => setOpen(!open)}
//         className="w-full px-3 h-full text-sm text-left bg-[theme(colors.card)] border border-[theme(colors.border)] rounded-xl flex justify-between items-center focus:outline-none focus:ring-1 focus:ring-ring"
//       >
//         {value || placeholder}
//         <svg
//           className={`w-4 h-4 mr-2 transition-transform ${open ? 'rotate-180' : ''}`}
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="2"
//           viewBox="0 0 24 24"
//         >
//           <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
//         </svg>
//       </button>

//       {open && (
//         <ul className="absolute z-10 w-full mt-1 bg-[theme(colors.card)] border border-[theme(colors.border)] rounded-lg shadow-md max-h-60 overflow-auto">
//           {options.map((opt) => (
//             <li
//               key={opt}
//               onClick={() => {
//                 onChange(opt);
//                 setOpen(false);
//               }}
//               className="cursor-pointer px-3 py-1 text-sm hover:bg-blue-100 flex justify-between items-center"
//             >
//               {opt}
//               {value === opt && (
//                 <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
//                 </svg>
//               )}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

const mockUsers = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  firstName: 'Abebe',
  middleName: 'Kebede',
  lastName: 'Tadesse',
  email: `user${i + 1}@amu.edu.et`,
  role: 'Lecturer',
  roleCategory: 'Academic',
  joinedDate: '2024-09-15',
}));

function UserList({ searchQuery, setActiveTab }) {
  const [selectedRole, setSelectedRole] = useState('');
  const [selectedRoleCategory, setSelectedRoleCategory] = useState('');

  const uniqueRoles = ['All Roles', ...new Set(mockUsers.map((u) => u.role))];
  const uniqueCategories = ['All Categories', ...new Set(mockUsers.map((u) => u.roleCategory))];

  const filteredUsers = mockUsers.filter((u) => {
    const matchesSearch = `${u.firstName} ${u.lastName} ${u.email}`.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRole = selectedRole === '' || u.role === selectedRole;
    const matchesCategory = selectedRoleCategory === '' || u.roleCategory === selectedRoleCategory;
    return matchesSearch && matchesRole && matchesCategory;
  });

  return (
    <>
      <div className="flex justify-between mb-4">
        <h2 className="text-lg font-semibold">All users ({mockUsers.length})</h2>

        <div className="flex gap-3 items-stretch h-10 ">
          {/* Input */}
          <SearchInput />

          <CustomSelect
            options={uniqueRoles}
            value={selectedRole === '' ? 'All Roles' : selectedRole}
            onChange={(val) => setSelectedRole(val === 'All Roles' ? '' : val)}
            placeholder="All Roles"
            width="w-40 h-full"
          />

          <CustomSelect
            options={uniqueCategories}
            value={selectedRoleCategory === '' ? 'All Categories' : selectedRoleCategory}
            onChange={(val) => setSelectedRoleCategory(val === 'All Categories' ? '' : val)}
            placeholder="All Categories"
            width="w-80"
          />

          <button
            onClick={() => setActiveTab('add')}
            className="flex min-w-36  items-center gap-2 px-3  bg-blue-600 text-white rounded text-xs justify-center"
          >
            <UserPlus className="w-4 h-4" />
            Add User
          </button>
        </div>
      </div>

      <Table>
        <TableHeader>
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
