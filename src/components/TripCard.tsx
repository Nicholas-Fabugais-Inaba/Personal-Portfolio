import type { Trip } from "@/data/trips";
import { ImageIcon } from "lucide-react";

interface TripCardProps {
  trip: Trip;
  onClick: () => void;
}

const TripCard = ({ trip, onClick }: TripCardProps) => {
  const coverImage = trip.images[0];

  return (
    <div
      onClick={onClick}
      className="group relative rounded-xl overflow-hidden bg-card border border-border hover:border-primary/30 transition-all duration-500 cursor-pointer"
    >
      {/* Image */}
      <div className="relative h-56 md:h-64 overflow-hidden">
        {coverImage ? (
          <img
            src={coverImage}
            alt={trip.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-secondary text-muted-foreground">
            <ImageIcon size={48} className="mb-2 opacity-40" />
            <span className="text-sm">No photos yet</span>
          </div>
        )}
        <div className="absolute inset-0 card-overlay" />
        <span className="absolute top-4 right-4 text-xs font-body font-semibold bg-primary text-primary-foreground px-3 py-1 rounded-full">
          {trip.years}
        </span>
        {trip.images.length > 0 && (
          <span className="absolute bottom-4 left-4 text-xs font-body font-medium bg-background/70 text-foreground px-2.5 py-1 rounded-full backdrop-blur-sm">
            {trip.images.length} photo{trip.images.length !== 1 ? "s" : ""}
          </span>
        )}
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
