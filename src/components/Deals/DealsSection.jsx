import "./Deals.css";

import DealCard from "./DealCard";
import deals from "./dealsData";

function DealsSection() {
  return (
    <section className="dealsSection">

      <div className="dealsHeader">

        <h2>🔥 Today's Deals</h2>

        <button>See All</button>

      </div>

      <div className="dealsContainer">

        {deals.map((deal) => (
          <DealCard
            key={deal.id}
            deal={deal}
          />
        ))}

      </div>

    </section>
  );
}

export default DealsSection;