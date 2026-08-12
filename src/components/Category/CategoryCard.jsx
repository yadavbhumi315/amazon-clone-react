import { useCategory } from "../../context/CategoryContext";

function CategoryCard({ item }) {
  const { setCategory } = useCategory();

  const handleClick = () => {
    setCategory(item.category);

    window.scrollTo({
      top: 650,
      behavior: "smooth",
    });
  };

  return (
    <div
      onClick={handleClick}
      className="
        bg-white
        rounded-xl
        shadow-md
        hover:shadow-xl
        hover:-translate-y-2
        transition-all
        duration-300
        cursor-pointer
        overflow-hidden
      "
    >
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-48 object-cover"
      />

      <div className="p-4">
        <h3 className="text-lg font-bold mb-2">
          {item.title}
        </h3>

        <button
          className="
            text-blue-600
            font-semibold
            hover:text-orange-500
          "
        >
          Shop Now →
        </button>
      </div>
    </div>
  );
}

export default CategoryCard;