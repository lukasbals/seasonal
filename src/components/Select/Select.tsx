import React, { useState } from 'react';
import CaretDown from '../../assets/CaretDown';
import Check from '../../assets/Check';
import {
  DropdownButton,
  DropdownContainer,
  Label,
  SelectButton,
  SelectContainer,
} from './styled';

export interface Item {
  id: string;
  name: string | JSX.Element;
}

export interface SelectProps {
  id: string;
  label?: string | JSX.Element;
  values: Item[];
  selectedValueId: string;
  onChange: (selection: string) => void;
}

export const Select: React.FC<SelectProps> = ({
  id,
  label,
  values,
  selectedValueId,
  onChange,
}: SelectProps) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleSelect = (selection: string) => {
    setDropdownOpen(false);
    onChange(selection);
  };

  return (
    <SelectContainer>
      {label && <Label htmlFor={id}>{label}:</Label>}

      <SelectButton
        id={id}
        onClick={toggleDropdown}
        dropdownOpen={dropdownOpen}
      >
        {values.find((value) => selectedValueId === value.id)?.name}
        <CaretDown />
      </SelectButton>

      <DropdownContainer dropdownOpen={dropdownOpen}>
        {values.map((value) => (
          <DropdownButton
            key={value.id}
            onClick={() => handleSelect(value.id)}
            active={value.id === selectedValueId}
          >
            {value.name}
            {value.id === selectedValueId && <Check />}
          </DropdownButton>
        ))}
      </DropdownContainer>
    </SelectContainer>
  );
};
