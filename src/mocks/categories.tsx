interface Category {
  id: string;
  name: CategoryName;
}

export type CategoryName = "Electronics" | "Clothing" | "Home & Kitchen";

export const CATEGORY_MOCK: Category[] = [
  {
    id: '1',
    name: 'Electronics',
  },
  {
    id: '2',
    name: 'Clothing',
  },
  {
    id: '3',
    name: 'Home & Kitchen',
  },
];
