import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Food } from '../../models/Food';
import {
  AssetContainer,
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
      <AssetContainer>
        <img src={asset} alt={name} />
      </AssetContainer>
      <NameText data-testid="test-name">{name}</NameText>
    </FoodCardContainer>
  );
};
