import "./MenuBar.css";
import { useCategory } from "../../context/CategoryContext";

const menus = [
  "All",
  "Electronics",
  "Fashion",
  "Shoes",
];

function MenuBar() {
  const { category, setCategory } = useCategory();

  return (
    <div className="menuBar">
      {menus.map((item, index) => (
        <button
          key={item}
          onClick={() => setCategory(item)}
          className={`menuItem ${
            category === item ? "activeMenu" : ""
          }`}
        >
          {index === 0 ? "☰ All" : item}
        </button>
      ))}
    </div>
  );
}

export default MenuBar;