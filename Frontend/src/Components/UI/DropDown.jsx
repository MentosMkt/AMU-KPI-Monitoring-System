import React, { useState } from 'react';
import { Check } from 'lucide-react';

export const DropdownMenu = ({ trigger, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative inline-block">
      <div onClick={() => setOpen(!open)}>{trigger}</div>

      {open && <div className="absolute mt-2 w-48 rounded-md  bg-white shadow-md z-50">{children}</div>}
    </div>
  );
}; 

export const DropdownMenuItem = ({ children, onClick }) => {
  return (
    <div onClick={onClick} className="px-3 py-2 text-sm cursor-pointer flex items-center gap-3 hover:bg-gray-100">
      {children}
    </div>
  );
};

export const DropdownMenuSeparator = () => {
  return <div className="h-px bg-gray-200 my-1" />;
};

export const DropdownMenuLabel = ({ children }) => {
  return <div className="px-3 py-2 text-xs font-semibold text-gray-500">{children}</div>;
};

export const DropdownMenuCheckboxItem = ({ checked, children, onClick }) => {
  return (
    <div onClick={onClick} className="flex items-center gap-2 px-3 py-2 text-sm cursor-pointer hover:bg-gray-100">
      {checked && <Check className="w-4 h-4" />}
      {children}
    </div>
  );
};
