import { Month } from './Month';

export interface Food {
  name: string;
  type: 'vegetable' | 'fruit';
  asset: string | JSX.Element;
}

export interface FoodWithMeta extends Food {
  id: string;
  month: Month;
}
