import { CardDescription, CardTitle } from "../ui/card";
import { Button } from "../ui/button";

export default function Product({
    product,
}: {
    product: {
        id: bigint;
        name: string;
        description: string;
        price: number;
        stock_quantity: number;
        category_id: bigint;
        supplier_id: bigint;
    };
}) {
    return (
        <section className="p-0 flex flex-col gap-4">
            <header></header>
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
