import { useState } from "react";
import { trips, allYears } from "@/data/trips";
import TripCard from "./TripCard";

const TripsSection = () => {
  const [activeYear, setActiveYear] = useState<number | null>(null);

  const filtered = activeYear
    ? trips.filter((t) => t.yearValues.includes(activeYear))
    : trips;

  return (
    <section id="trips" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            My Travels
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            A collection of adventures from around the globe. Each destination has left an indelible mark on my journey.
          </p>
        </div>

        {/* Year filters */}
        <div className="flex flex-wrap gap-2 mb-10">
          <button
            onClick={() => setActiveYear(null)}
            className={`text-sm font-body font-medium px-4 py-2 rounded-full transition-all ${
              activeYear === null
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground hover:bg-primary/20"
            }`}
          >
            All Years
          </button>
          {allYears.map((year) => (
            <button
              key={year}
              onClick={() => setActiveYear(year)}
              className={`text-sm font-body font-medium px-4 py-2 rounded-full transition-all ${
                activeYear === year
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-primary/20"
              }`}
            >
              {year}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((trip) => (
            <TripCard key={trip.id} trip={trip} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TripsSection;
