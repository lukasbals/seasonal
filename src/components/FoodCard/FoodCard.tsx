import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Food } from '../../models/Food';
import {
  AssetContainer,
  Dot,
  FoodCardContainer,
  FullAssetContainer,
  NameText,
  TypeContainer,
  TypeText,
} from './styled';

export const FoodCard: React.FC<Food> = ({
  type = 'vegetable',
  asset,
  name = '',
  bg = 'cropped',
}: Food) => {
  return (
    <FoodCardContainer className={bg}>
      <TypeContainer>
        <Dot type={type} />
        <TypeText>
          <FormattedMessage id={`foodCard.${type}`} />
        </TypeText>
      </TypeContainer>
      {bg !== 'full' ? (
        <AssetContainer>
          <img src={asset} alt={name} />
        </AssetContainer>
      ) : (
        <FullAssetContainer>
          <img src={asset} alt={name} />
        </FullAssetContainer>
      )}
      <NameText data-testid="test-name">{name}</NameText>
    </FoodCardContainer>
  );
};
