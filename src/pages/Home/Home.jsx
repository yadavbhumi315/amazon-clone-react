import Hero from "../../components/Hero/Hero";
import CategorySection from "../../components/Category/CategorySection";
import DealsSection from "../../components/Deals/DealsSection";
import ProductSection from "../../components/Product/ProductSection";

function Home() {
  return (
    <>
      <Hero />

      <CategorySection />

      <DealsSection />

      <ProductSection />
    </>
  );
}

export default Home;