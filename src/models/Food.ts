interface Food {
  id: string;
  name: string;
  type: 'vegetable' | 'fruit';
  asset: string | JSX.Element;
}

export default Food;
