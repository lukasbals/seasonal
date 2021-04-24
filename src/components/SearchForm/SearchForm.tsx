import React, { FormEvent, useRef } from 'react';
import SearchSymbol from '../../assets/SearchSymbol';
import ClearCircle from '../../assets/ClearCircle';
import { StyledInput, StyledForm } from './styled';

export interface SearchFormProps {
  placeholder: string;
  onChange: (value: string) => void;
  value: string;
}

export const SearchForm: React.FC<SearchFormProps> = ({
  placeholder,
  onChange,
  value,
}: SearchFormProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const onSubmitInternal = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <StyledForm
      onSubmit={onSubmitInternal}
      className={value.length > 0 ? 'clear-icon-visible' : ''}
    >
      <SearchSymbol />
      <StyledInput
        type="text"
        name="search"
        placeholder={placeholder}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        ref={inputRef}
      />
      <ClearCircle
        onClick={() => {
          inputRef.current?.focus();
          onChange('');
        }}
      />
    </StyledForm>
  );
};
