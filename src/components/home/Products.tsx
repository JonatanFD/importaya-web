import Product from "./Product";
import { getProducts } from "@/actions/getProducts";

export default async function Products() {
  const products = await getProducts();

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
        {products.map((pro) => (
          <Product key={pro.id} product={{...pro, price: Number(pro.price)}} />
        ))}
      </ul>
    </>
  );
}
