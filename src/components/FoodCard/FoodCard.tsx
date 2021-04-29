import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Food } from '../../models/Food';
import {
  Dot,
  FoodCardContainer,
  NameText,
  TypeContainer,
  TypeText,
} from './styled';

export const FoodCard: React.FC<Food> = ({
  type = 'vegetable',
  asset,
  name = '',
}: Food) => {
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
