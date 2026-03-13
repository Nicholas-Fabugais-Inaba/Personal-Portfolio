import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { Trip } from "@/data/trips";

interface TripGalleryProps {
  trip: Trip;
  onClose: () => void;
}

const TripGallery = ({ trip, onClose }: TripGalleryProps) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const goNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % trip.images.length);
    }
  };

  const goPrev = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + trip.images.length) % trip.images.length);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm overflow-y-auto">
      {/* Header */}
      <div className="sticky top-0 z-10 glass px-6 py-4 flex items-center justify-between">
        <div>
          <h2 className="font-display text-2xl font-bold text-foreground">{trip.name}</h2>
          <p className="text-sm text-muted-foreground">{trip.years} · {trip.images.length} photos</p>
        </div>
        <button
          onClick={onClose}
          className="text-muted-foreground hover:text-foreground transition-colors p-2"
          aria-label="Close gallery"
        >
          <X size={24} />
        </button>
      </div>

      {/* Grid */}
      {trip.images.length > 0 ? (
        <div className="container mx-auto px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {trip.images.map((img, i) => (
              <div
                key={i}
                onClick={() => setSelectedIndex(i)}
                className="aspect-[4/3] rounded-lg overflow-hidden cursor-pointer hover:ring-2 hover:ring-primary transition-all"
              >
                <img
                  src={img}
                  alt={`${trip.name} photo ${i + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center h-[60vh] text-muted-foreground">
          <p>No photos uploaded yet. Add .jpeg or .JPG images to <code className="text-primary">src/assets/trips/{trip.id}/</code></p>
        </div>
      )}

      {/* Lightbox */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-[60] bg-background/98 flex items-center justify-center"
          onClick={() => setSelectedIndex(null)}
        >
          <button
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground p-2 z-10"
            aria-label="Previous"
          >
            <ChevronLeft size={36} />
          </button>

          <img
            src={trip.images[selectedIndex]}
            alt={`${trip.name} photo ${selectedIndex + 1}`}
            className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            onClick={(e) => { e.stopPropagation(); goNext(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground p-2 z-10"
            aria-label="Next"
          >
            <ChevronRight size={36} />
          </button>

          <button
            onClick={() => setSelectedIndex(null)}
            className="absolute top-4 right-4 text-muted-foreground hover:text-foreground p-2"
            aria-label="Close"
          >
            <X size={24} />
          </button>

          <span className="absolute bottom-6 left-1/2 -translate-x-1/2 text-sm text-muted-foreground">
            {selectedIndex + 1} / {trip.images.length}
          </span>
        </div>
      )}
    </div>
  );
};

export default TripGallery;
