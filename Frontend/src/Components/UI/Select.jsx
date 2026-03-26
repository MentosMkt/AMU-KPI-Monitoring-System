import { Check, ChevronDown } from "lucide-react";
import { useState } from "react";

const fruits = ["Apple", "Banana", "Blueberry", "Grapes", "Pineapple"];

const CustomSelect = () => {
  const [selected, setSelected] = useState("Banana");
  const [open, setOpen] = useState(false);

  return (
    <div className="relative w-64">
      {/* Select button */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full px-4 py-2 text-left bg-card border border-border rounded-md flex justify-between items-center"
      >
        {selected}
        <ChevronDown className="w-4 h-4" />
      </button>

      {/* Dropdown */}
      {open && (
        <ul className="absolute z-10 w-full mt-1 bg-card border border-border rounded-md shadow-md max-h-60 overflow-auto">
          {fruits.map((fruit) => (
            <li
              key={fruit}
              onClick={() => {
                setSelected(fruit);
                setOpen(false);
              }}
              className="cursor-pointer px-4 py-2 hover:bg-accent/30 flex justify-between items-center"
            >
              {fruit}
              {selected === fruit && <Check className="w-4 h-4 text-primary" />}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomSelect;
