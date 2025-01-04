import { useState } from "react";

interface DropdownProps {
  options: { label: string; value: string }[];
  value: { label: string; value: string } | null;
  onChange: (option: { label: string; value: string } | null) => void;
}

const Dropdown = ({ options, value, onChange }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  function handleDropdownOpen() {
    setIsOpen(!isOpen);
  }

  function handleOptionClick(option: { label: string; value: string }) {
    setIsOpen(false);
    onChange(option);
  }

  return (
    <div className="relative">
      <div
        onClick={handleDropdownOpen}
        className="border border-gray-700 p-2 rounded-lg hover:border-primary cursor-pointer flex items-center"
      >
        <span className="pr-3 text-primary font-semibold">
          {value?.label || "Media"}
        </span>
        <span className="text-primary">{isOpen ? "▲" : "▼"}</span>
      </div>
      {isOpen && (
        <div className="absolute z-10 border rounded-lg shadow-lg mt-2 w-full cursor-pointer p-3 bg-gray-700 border-gray-700">
          {options.map((option) => (
            <div
              onClick={() => handleOptionClick(option)}
              key={option.value}
              className="w-full h-full hover:bg-gray-400"
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
