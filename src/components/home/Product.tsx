import { Product as ProductType } from "@/mocks/products";
import {
  CardDescription,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";

export default function Product({ product }: { product: ProductType }) {
  return (
    <section className="p-0 flex flex-col gap-4">
      <header>
        <img src={product.image} alt={product.name} className="w-full h-48 object-cover aspect-square" />
      </header>
      <main className="p-0">
        <CardTitle>{product.name}</CardTitle>
        <CardDescription>{product.description}</CardDescription>
      </main>
      <footer className="p-0 flex justify-end">
        <Button>Add to Cart</Button>
      </footer>
    </section>
  );
}
