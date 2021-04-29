import { makeAutoObservable } from 'mobx';
import months from './constants/months';
import { FoodWithMeta } from './models/Food';
import { Month } from './models/Month';

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
  30,
  31,
  32,
  33,
  34,
  35,
  36,
  37,
  38,
  39,
  40,
  41,
  42,
  43,
  44,
  45,
  46,
  47,
  48,
  49,
  50,
  51,
  52,
  53,
  54,
  55,
  56,
  57,
  58,
  59,
  60,
  61,
  62,
  63,
  64,
  65,
  66,
  67,
  68,
  69,
  70,
  71,
  72,
  73,
  74,
  75,
  76,
  77,
  78,
  79,
];

const fakeFoods = itemIds.map(
  (itemId): FoodWithMeta => ({
    name: `Name ${itemId}`,
    type: 'fruit',
    asset: 'Image',
    id: `id-${itemId}`,
    month: months[itemId % 12],
  })
);

class FoodStore {
  allFood: FoodWithMeta[] = [];
  fetchingFood = false;
  displayedFood: FoodWithMeta[] = [];

  selectedMonth: Month = months[new Date().getUTCMonth()];
  searchTerm = '';

  constructor() {
    makeAutoObservable(this);
  }

  fetchFood = (): void => {
    this.fetchingFood = true;

    this.allFood = fakeFoods;

    this.displayedFood = fakeFoods.filter(
      (food: FoodWithMeta) => this.selectedMonth === food.month
    );

    this.fetchingFood = false;
  };

  filterFood(): void {
    this.displayedFood = this.allFood.filter(
      (food: FoodWithMeta): boolean =>
        food.name.toLowerCase().includes(this.searchTerm.toLowerCase()) &&
        this.selectedMonth === food.month
    );
  }

  searchFood(searchTerm: string): void {
    this.searchTerm = searchTerm;

    this.filterFood();
  }

  setSelectedMonth(month: Month): void {
    this.selectedMonth = month;
    this.searchTerm = '';

    this.filterFood();
  }
}

export default FoodStore;
