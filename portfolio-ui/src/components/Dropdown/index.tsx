import React, { useState, useRef, useEffect } from "react";
import "./styles.css";

interface DropdownProps {
  options: string[];
}

const Dropdown: React.FC<DropdownProps> = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

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
        En <i className="uil uil-angle-down"></i>
      </button>
      <ul className={`dropdown-menu ${isOpen ? "open" : ""}`}>
        {options.map((option) => (
          <li key={option} className="dropdown-list-item">
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
