import { PRODUCT_MOCK } from "@/mocks/products";
import Product from "./Product";

export default function Products() {
  return (
    <>
      <style>
        {`
          .grid-products {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 1rem;
          }
        `}
      </style>
      <ul className="grid-products p-4">
        {PRODUCT_MOCK.map((pro) => (
          <Product key={pro.id} product={pro} />
        ))}
      </ul>
    </>
  );
}
