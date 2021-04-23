interface Food {
  id: string;
  name: string;
  type: 'vegetable' | 'fruit';
  asset: JSX.Element;
}

export default Food;
