interface Supplier {
  id: string;
  name: string;
  email: string;
  phone: string;
}

export const SUPPLIER_MOCK: Supplier[] = [
  {
    id: '1',
    name: 'Mateo GAA',
    email: 'supplier1@example.com',
    phone: '1234567890',
  },
  {
    id: '2',
    name: 'CURI GAY',
    email: 'supplier2@example.com',
    phone: '0987654321',
  },
];
