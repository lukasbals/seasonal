import { makeAutoObservable } from 'mobx';
import fetchFood from './api/fetchFood';
import months from './constants/months';
import { FoodWithMeta } from './models/Food';
import { Language } from './models/Language';
import { Month } from './models/Month';
import { Region } from './models/Region';

class FoodStore {
  allFood: FoodWithMeta[] = []; // All foods of one month
  fetchingFood = false;
  displayedFood: FoodWithMeta[] = [];

  selectedMonth: Month = months[new Date().getUTCMonth()];
  searchTerm = '';
  selectedRegion: Region = 'austria';

  // When multiple languages are supported this could be set dynamically
  selectedLanguage: Language = {
    langWithCountry: 'de-AT',
    lang: 'de',
  };

  constructor() {
    makeAutoObservable(this);
  }

  //
  // Setters
  //
  setFood = (allFood: FoodWithMeta[]): void => {
    this.allFood = allFood;
  };

  setFetchingFood = (fetchingFood: boolean): void => {
    this.fetchingFood = fetchingFood;
  };

  //
  // Class methods
  //
  filterFood = (): void => {
    this.displayedFood = this.allFood.filter((food: FoodWithMeta): boolean =>
      food.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  };

  // Fetch food per month
  fetchFood = async (): Promise<void> => {
    this.setFetchingFood(true);

    const fetchedFood = await fetchFood(
      this.selectedMonth,
      this.selectedLanguage,
      this.selectedRegion
    );

    this.setFood(fetchedFood);
    this.filterFood();

    this.setFetchingFood(false);
  };

  searchFood = (searchTerm: string): void => {
    this.searchTerm = searchTerm;

    this.filterFood();
  };

  setSelectedMonth = async (month: Month): Promise<void> => {
    this.selectedMonth = month;
    this.searchTerm = '';

    await this.fetchFood();
  };

  setSelectedRegion = async (region: Region): Promise<void> => {
    this.selectedRegion = region;
    this.searchTerm = '';

    await this.fetchFood();
  };
}

export default FoodStore;
