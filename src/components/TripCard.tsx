import type { Trip } from "@/data/trips";

interface TripCardProps {
  trip: Trip;
}

const TripCard = ({ trip }: TripCardProps) => {
  return (
    <div className="group relative rounded-xl overflow-hidden bg-card border border-border hover:border-primary/30 transition-all duration-500">
      {/* Image */}
      <div className="relative h-56 md:h-64 overflow-hidden">
        <img
          src={trip.image}
          alt={trip.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 card-overlay" />
        <span className="absolute top-4 right-4 text-xs font-body font-semibold bg-primary text-primary-foreground px-3 py-1 rounded-full">
          {trip.years}
        </span>
      </div>

      {/* Content */}
      <div className="p-5 space-y-3">
        <h3 className="font-display text-xl font-bold text-foreground">
          {trip.name}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
          {trip.description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {trip.locations.map((loc) => (
            <span
              key={loc}
              className="text-xs font-body bg-secondary text-secondary-foreground px-2.5 py-1 rounded-full"
            >
              {loc}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TripCard;
