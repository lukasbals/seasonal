import { Month } from './Month';

export interface Food {
  name: string;
  type: 'vegetable' | 'fruit';
  asset: string;
  bg: 'full' | 'cropped';
}

export interface FoodWithMeta extends Food {
  id: string;
  month: Month;
}
