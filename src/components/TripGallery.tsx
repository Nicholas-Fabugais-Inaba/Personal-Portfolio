import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { Trip } from "@/data/trips";

interface TripGalleryProps {
  trip: Trip;
  onClose: () => void;
}

const TripGallery = ({ trip, onClose }: TripGalleryProps) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Lock body scroll when gallery is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  // Lock/unlock lightbox-specific scroll
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "Escape") setSelectedIndex(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex]);

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
    <div className="fixed inset-0 z-50 bg-background overflow-y-auto">
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
          className="fixed inset-0 z-[60] flex items-center justify-center"
          onClick={() => setSelectedIndex(null)}
        >
          {/* Blurred background */}
          <div className="absolute inset-0 bg-background/80 backdrop-blur-md" />

          {/* Previous button */}
          <button
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-card/80 hover:bg-card text-foreground rounded-full p-3 backdrop-blur-sm border border-border transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft size={28} />
          </button>

          {/* Image */}
          <img
            src={trip.images[selectedIndex]}
            alt={`${trip.name} photo ${selectedIndex + 1}`}
            className="relative z-10 max-w-[90vw] max-h-[85vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Next button */}
          <button
            onClick={(e) => { e.stopPropagation(); goNext(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-card/80 hover:bg-card text-foreground rounded-full p-3 backdrop-blur-sm border border-border transition-colors"
            aria-label="Next"
          >
            <ChevronRight size={28} />
          </button>

          {/* Close button */}
          <button
            onClick={() => setSelectedIndex(null)}
            className="absolute top-4 right-4 z-20 bg-card/80 hover:bg-card text-foreground rounded-full p-3 backdrop-blur-sm border border-border transition-colors"
            aria-label="Close"
          >
            <X size={20} />
          </button>

          {/* Counter */}
          <span className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 text-sm text-foreground bg-card/80 backdrop-blur-sm px-4 py-2 rounded-full border border-border">
            {selectedIndex + 1} / {trip.images.length}
          </span>
        </div>
      )}
    </div>
  );
};

export default TripGallery;
