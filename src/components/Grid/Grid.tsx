import React from 'react';
import Food from '../../models/Food';
import FoodCard from '../FoodCard';
import { GridContainer } from './styled';

export interface GridProps {
  items: Food[];
}

export const Grid: React.FC<GridProps> = ({ items }: GridProps) => {
  return (
    <GridContainer>
      {items.map((item) => (
        <FoodCard
          key={item.id}
          name={item.name}
          type={item.type}
          asset={item.asset}
        />
      ))}
    </GridContainer>
  );
};
