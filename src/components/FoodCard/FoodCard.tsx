import React from 'react';
import { FormattedMessage } from 'react-intl';
import {
  Dot,
  FoodCardContainer,
  NameText,
  TypeContainer,
  TypeText,
} from './styled';

export interface FoodCardProps {
  type: 'vegetable' | 'fruit';
  asset: JSX.Element;
  name?: string;
}

export const FoodCard: React.FC<FoodCardProps> = ({
  type = 'vegetable',
  asset,
  name = '',
}: FoodCardProps) => {
  return (
    <FoodCardContainer>
      <TypeContainer>
        <Dot type={type} />
        <TypeText>
          <FormattedMessage id={`foodCard.${type}`} />
        </TypeText>
      </TypeContainer>
      <div>{asset}</div>
      <NameText>{name}</NameText>
    </FoodCardContainer>
  );
};
