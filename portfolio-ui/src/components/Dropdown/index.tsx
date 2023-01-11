import React, { useState, useRef, useEffect } from "react";
import "./styles.css";

interface DropdownProps {
  options: string[];
  onSelect: (option: string) => void;
  value?: string;
}

const Dropdown: React.FC<DropdownProps> = ({ options, onSelect, value }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [selectedOption, setSelectedOption] = React.useState(
    value || options[0]
  );

  const handleOptionChange = (option: string) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="dropdown-container hide-sm">
      <button
        className="dropdown-button d-flex flex-row"
        onClick={toggleDropdown}
      >
        {selectedOption} <i className="uil uil-angle-down"></i>
      </button>
      <ul className={`dropdown-menu ${isOpen ? "open" : ""}`}>
        {options.map((option) => (
          <li
            key={option}
            onClick={() => handleOptionChange(option)}
            className="dropdown-list-item"
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
