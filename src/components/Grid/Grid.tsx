import React from 'react';
import YellowBadge from '../../assets/YellowBadge';
import { FoodWithMeta } from '../../models/Food';
import Button from '../Button';
import FoodCard from '../FoodCard';
import {
  EmptyContainer,
  EmptyText,
  GridContainer,
  LoadingCard,
} from './styled';

export interface GridProps {
  items: FoodWithMeta[];
  emptyText: string | JSX.Element;
  emptyActionText?: string;
  onEmptyAction?: () => void;
  loading?: boolean;
}

const loadingCardIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

export const Grid: React.FC<GridProps> = ({
  items,
  emptyText,
  emptyActionText,
  loading = false,
  onEmptyAction,
}: GridProps) => {
  if (loading) {
    return (
      <GridContainer>
        {loadingCardIds.map((id) => (
          <LoadingCard key={id} />
        ))}
      </GridContainer>
    );
  }
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
              bg={item.bg}
            />
          ))}
        </GridContainer>
      )}
    </>
  );
};
