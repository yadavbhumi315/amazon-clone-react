import CategoryCard from "./CategoryCard";
import categoryData from "./categoryData";

function CategorySection() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10">

      {/* Heading */}
      <div className="flex items-center justify-between mb-8">

        <h2 className="text-3xl font-bold">
          Shop by Category
        </h2>

        <button className="text-blue-600 hover:text-orange-500 font-semibold">
          See All →
        </button>

      </div>

      {/* Category Grid */}
      <div
        className="
          grid
          grid-cols-2
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          gap-6
        "
      >

        {categoryData.map((item) => (
          <CategoryCard
            key={item.id}
            item={item}
          />
        ))}

      </div>

    </section>
  );
}

export default CategorySection;