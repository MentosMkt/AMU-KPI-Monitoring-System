import { Search } from 'lucide-react';

const SearchInput = ({ value, onChange, placeholder = 'Search...', className = '' }) => {
  return (
    <div className="relative ">
      <Search className="absolute left-3 top-1/2 -translate-1/2 w-4 h-4 text-gray-400" />

      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)} // ✅ FIX HERE
        placeholder={placeholder}
        className={`pl-6 h-full  border border-gray-400 rounded-lg  focus:outline-none focus:ring-1 focus:ring-green-500 ${className}`}
      />
    </div>
  );
};

export default SearchInput;
