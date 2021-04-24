import React from 'react';
import YellowBadge from '../../assets/YellowBadge';
import Food from '../../models/Food';
import Button from '../Button';
import FoodCard from '../FoodCard';
import { EmptyContainer, EmptyText, GridContainer } from './styled';

export interface GridProps {
  items: Food[];
  emptyText: string | JSX.Element;
  emptyActionText?: string | JSX.Element;
  onEmptyAction?: () => void;
}

export const Grid: React.FC<GridProps> = ({
  items,
  emptyText,
  emptyActionText,
  onEmptyAction,
}: GridProps) => {
  return (
    <>
      {items.length === 0 ? (
        <EmptyContainer>
          <YellowBadge />
          <EmptyText>{emptyText}</EmptyText>
          {emptyActionText && (
            <Button
              label={emptyActionText}
              onClick={onEmptyAction}
              type="link"
            />
          )}
        </EmptyContainer>
      ) : (
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
      )}
    </>
  );
};
