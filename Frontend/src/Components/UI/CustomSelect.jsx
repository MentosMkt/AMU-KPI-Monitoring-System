import { useState } from 'react';

function CustomSelect({ options, value, onChange, placeholder }) {
  const [open, setOpen] = useState(false);
  
  return (
    <div className="relative w-full">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full h-full px-4 py-2 text-left text-xs min-w-40 bg-card border border-border rounded-md flex justify-between items-center"
      >
        {value || placeholder}
        <svg
          className={`w-4 h-4 transition-transform ${open ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <ul className="absolute z-10 w-full mt-1 bg-card border border-border rounded-md shadow-md max-h-60 overflow-auto">
          {options.map((opt) => (
            <li
              key={opt}
              onClick={() => {
                onChange(opt);
                setOpen(false);
              }}
              className="cursor-pointer px-4 py-2 hover:bg-muted flex justify-between items-center"
            >
              {opt}
              {value === opt && (
                <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CustomSelect;
