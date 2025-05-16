import ProductList from "@/components/shared/products/product-list";
import { getLatestProducts } from "@/lib/actions/product.actions";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Home"
};

const HomePage = async () => {
    try {
        const latestProducts = await getLatestProducts();
        return (
            <>
                <ProductList data={latestProducts} title='Latest Arrivals' />
            </>
        );
    } catch (err) {
        console.error("🔥 Error in HomePage:", err);
        throw err;
    }
};


export default HomePage;