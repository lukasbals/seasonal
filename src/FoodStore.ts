import { makeAutoObservable } from 'mobx';
import Food from './models/Food';

const itemIds = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
  26,
  27,
  28,
  29,
];

const fakeFoods = itemIds.map(
  (itemId): Food => ({
    name: `Name ${itemId}`,
    type: 'fruit',
    asset: 'Image',
    id: `id-${itemId}`,
  })
);

class FoodStore {
  allFood: Food[] = [];
  fetchingFood = false;
  displayedFood: Food[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  fetchFood = (): void => {
    this.fetchingFood = true;
    this.allFood = fakeFoods;
    this.displayedFood = fakeFoods;
    this.fetchingFood = false;
  };

  searchFood(searchTerm: string): void {
    this.displayedFood = this.allFood.filter((food: Food): boolean =>
      food.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}

export default FoodStore;
