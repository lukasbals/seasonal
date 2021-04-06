import React, { FormEvent, useEffect, useRef, useState } from 'react';
import SearchSymbol from '../../assets/SearchSymbol';
import ClearCircle from '../../assets/ClearCircle';
import { StyledInput, StyledForm } from './styled';

export interface SearchFormProps {
  placeholder: string;
  onChange: (value: string) => void;
}

export const SearchForm: React.FC<SearchFormProps> = ({
  placeholder,
  onChange,
}: SearchFormProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState('');

  const onSubmitInternal = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  useEffect(() => {
    onChange(value);
  }, [value]);

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
        onChange={(event) => setValue(event.target.value)}
        ref={inputRef}
      />
      <ClearCircle
        onClick={() => {
          inputRef.current?.focus();
          setValue('');
        }}
      />
    </StyledForm>
  );
};
