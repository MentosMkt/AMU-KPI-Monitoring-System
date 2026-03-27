"use client";

import { useState } from "react";

export default function SimpleCheckbox() {
  const [checked, setChecked] = useState(false);

  return (
    <div className="flex items-center gap-8">
      {/* Empty Checkbox */}
      <div
        onClick={() => setChecked(!checked)}
        className="w-7 h-7 border-2 border-gray-400 rounded-md cursor-pointer hover:border-gray-500 transition-colors"
      />

      {/* Checked Checkbox */}
      <div
        onClick={() => setChecked(!checked)}
        className="w-7 h-7 bg-green-500 rounded-md flex items-center justify-center cursor-pointer"
      >
        <span className="text-white text-2xl leading-none">✓</span>
      </div>
    </div>
  );
}
