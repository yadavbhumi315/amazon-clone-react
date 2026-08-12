import ProductCard from "./ProductCard";
import products from "../../data/products";

import { useSearch } from "../../context/SearchContext";
import { useCategory } from "../../context/CategoryContext";

function ProductSection() {
  const { search } = useSearch();
  const { category } = useCategory();

  const filteredProducts = products.filter((product) => {
    // Search Filter
    const matchesSearch = product.title
      .toLowerCase()
      .includes(search.toLowerCase());

    // Category Filter
    const matchesCategory =
      category === "All" || product.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <section className="max-w-7xl mx-auto py-12 px-4">

      <div className="flex items-center justify-between mb-8">

        <h2 className="text-3xl font-bold">
          Our Products
        </h2>

        {category !== "All" && (
          <span className="bg-yellow-400 px-4 py-2 rounded-full font-semibold">
            {category}
          </span>
        )}

      </div>

      {filteredProducts.length === 0 ? (
        <div className="text-center py-16">

          <h2 className="text-2xl font-bold text-gray-700">
            No Products Found
          </h2>

          <p className="text-gray-500 mt-3">
            Try another search or category.
          </p>

        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}

        </div>
      )}

    </section>
  );
}

export default ProductSection;