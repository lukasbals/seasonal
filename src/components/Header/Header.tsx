import React from 'react';
import { Heading, HeaderSection, StyledHeader } from './styled';

export interface HeaderProps {
  heading: string | JSX.Element;
  left?: string | JSX.Element;
  right?: string | JSX.Element;
}

export const Header: React.FC<HeaderProps> = ({
  heading,
  left = '',
  right = '',
}: HeaderProps) => (
  <StyledHeader>
    <HeaderSection>{left}</HeaderSection>
    <HeaderSection>
      <Heading>{heading}</Heading>
    </HeaderSection>
    <HeaderSection>{right}</HeaderSection>
  </StyledHeader>
);
