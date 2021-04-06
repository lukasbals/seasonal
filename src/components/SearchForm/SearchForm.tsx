import React, { FormEvent, useRef, useState } from 'react';
import SearchSymbol from '../../assets/SearchSymbol';
import ClearCircle from '../../assets/ClearCircle';
import { StyledInput, StyledForm } from './styled';

export interface SearchFormProps {
  placeholder: string;
  onSubmit?: (event: FormEvent<HTMLFormElement>) => void;
}

export const SearchForm: React.FC<SearchFormProps> = ({
  placeholder,
  onSubmit,
}: SearchFormProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState('');

  return (
    <StyledForm
      onSubmit={onSubmit}
      className={value.length > 0 ? 'clear-icon-visible' : ''}
    >
      <SearchSymbol />
      <StyledInput
        type="text"
        name="search"
        placeholder={placeholder}
        value={value}
        onChange={(event) => setValue(event.target.value)}
        ref={inputRef}
      />
      <ClearCircle
        onClick={() => {
          setValue('');
          inputRef.current?.focus();
        }}
      />
    </StyledForm>
  );
};
