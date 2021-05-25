import Prismic from '@prismicio/client';
import ApiSearchResponse from '@prismicio/client/types/ApiSearchResponse';
import { CLIENT } from '../constants/api';
import types from '../constants/types';
import { FoodWithMeta } from '../models/Food';
import { Language } from '../models/Language';
import { Month } from '../models/Month';
import { Region } from '../models/Region';

const enrichData = (data: ApiSearchResponse, month: Month): FoodWithMeta[] => {
  const enrichedData: FoodWithMeta[] = [];
  data.results.forEach((result) => {
    enrichedData.push({
      type: types.includes(result.data.type) ? result.data.type : 'fruit',
      name: result.data.name,
      asset: result.data.asset.url,
      id: result.uid || result.id,
      month: month,
    });
  });
  return enrichedData;
};

const fetchFood = async (
  month: Month,
  lang: Language,
  region: Region
): Promise<FoodWithMeta[]> => {
  try {
    const data: ApiSearchResponse = await CLIENT.query(
      [
        Prismic.Predicates.at('document.type', 'food'),
        Prismic.Predicates.at(`my.food.months.${month}`, true),
        Prismic.Predicates.at('my.food.region', region),
      ],
      { pageSize: 100, lang: lang.langWithCountry }
    );

    return enrichData(data, month);
  } catch (error) {
    console.error(
      `Something went wrong while fetching the data for the month ${month} and the language ${lang.langWithCountry}.`
    );
  }
  return [];
};

export default fetchFood;
