import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

function HeaderBottom() {
  const menuItems = [
    { name: "Fresh", path: "/fresh" },
    { name: "MX Player", path: "/mx-player" },
    { name: "Sell", path: "/sell" },
    { name: "Best Sellers", path: "/best-sellers" },
    { name: "Today's Deals", path: "/deals" },
    { name: "Mobiles", path: "/mobiles" },
    { name: "Electronics", path: "/electronics" },
    { name: "Fashion", path: "/fashion" },
    { name: "Customer Service", path: "/customer-service" },
    { name: "Prime", path: "/prime" },
  ];

  return (
    <div className="bg-[#232F3E] text-white h-10 flex items-center px-6 overflow-x-auto whitespace-nowrap">
      <Link
        to="/"
        className="flex items-center gap-2 font-semibold hover:border border-white px-2 py-1 mr-4"
      >
        <FaBars />
        All
      </Link>

      {menuItems.map((item) => (
        <Link
          key={item.name}
          to={item.path}
          className="px-3 py-1 hover:border border-white text-sm"
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
}

export default HeaderBottom;