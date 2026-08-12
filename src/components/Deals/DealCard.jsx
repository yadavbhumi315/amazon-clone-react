import { FaStar } from "react-icons/fa";

function DealCard({ deal }) {
  return (
    <div className="dealCard">

      {/* Discount Badge */}
      <span className="discountBadge">
        -{deal.discount}%
      </span>

      {/* Product Image */}
      <div className="dealImage">
        <img
          src={deal.image}
          alt={deal.title}
        />
      </div>

      {/* Product Title */}
      <h3 className="dealTitle">
        {deal.title}
      </h3>

      {/* Rating */}
      <div className="dealRating">
        <FaStar className="starIcon" />
        <span>{deal.rating}</span>
      </div>

      {/* Price */}
      <div className="dealPrice">

        <span className="newPrice">
          ₹{deal.price.toLocaleString()}
        </span>

        <span className="oldPrice">
          ₹{deal.oldPrice.toLocaleString()}
        </span>

      </div>

      {/* Button */}
      <button className="dealButton">
        View Deal
      </button>

    </div>
  );
}

export default DealCard;