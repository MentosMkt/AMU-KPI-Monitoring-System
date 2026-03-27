import { Search } from "lucide-react";

const SearchInput = ({
  value,
  onChange,
  placeholder = "Search...",
  className = "",
}) => {
  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />

      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`pl-9 h-9 border border-gray-400 rounded-lg w-full focus:outline-none focus:ring-1 focus:ring-green-500 ${className}`}
      />
    </div>
  );
};

export default SearchInput;
