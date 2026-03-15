export interface Trip {
  id: string;
  name: string;
  years: string;
  yearValues: number[];
  description: string;
  locations: string[];
  // Images loaded dynamically from src/assets/trips/{id}/
  images: string[];
}

// Dynamically import all images from a trip folder
function loadTripImages(id: string): string[] {
  const modules = import.meta.glob<{ default: string }>(
    "/src/assets/trips/**/*.{jpg,jpeg,JPG,JPEG,png,PNG}",
    { eager: true }
  );

  const prefix = `/src/assets/trips/${id}/`;
  const images: string[] = [];

  // Sort keys to ensure consistent ordering (first file = cover)
  const sortedKeys = Object.keys(modules).filter(k => k.startsWith(prefix)).sort();
  for (const key of sortedKeys) {
    images.push(modules[key].default);
  }

  return images;
}

export const tripsData: Omit<Trip, "images">[] = [
  {
    id: "nashville",
    name: "Nashville",
    years: "2025 / 2026",
    yearValues: [2025, 2026],
    description: "Road trip down to Nashville for New Year's with friends, exploring Broadway, going to my first shooting range, and playing at Topgolf",
    locations: ["Topgolf", "Broadway", "Gun Range", "Road Trip", "Buc-ee's"],
  },
  {
    id: "japan",
    name: "Japan",
    years: "2025",
    yearValues: [2025],
    description: "Visiting my first country in Asia with amazing food, culture, and history",
    locations: ["Tokyo", "Yokohama", "Kyoto", "Uji", "Nara", "Osaka", "Kobe", "Okayama", "Hiroshima"],
  },
  {
    id: "italy",
    name: "Italy",
    years: "2025",
    yearValues: [2025],
    description: "Incredible food, driving along the Amalfi coast, and watching Pope Leo XIV elected in person",
    locations: ["Florence", "Rome", "Vatican City", "Positano", "Amalfi"],
  },
  {
    id: "seoul",
    name: "Seoul",
    years: "2025",
    yearValues: [2025],
    description: "Roamed the streets of Myeongdong, learnt about the Korean war on the DMZ tour, and experienced a spa treatment",
    locations: ["Myeongdong", "DMZ", "Namsan"],
  },
  {
    id: "philippines",
    name: "Philippines",
    years: "2025",
    yearValues: [2025],
    description: "Island hopping in El Nido and swimming with whale sharks, sea turtles, and sardines in Oslob",
    locations: ["Boracay", "Cebu", "El Nido", "Manila", "Oslob"],
  },
  {
    id: "maine",
    name: "Maine",
    years: "2025",
    yearValues: [2025],
    description: "Solo road trip to see coastal towns and eat delicious lobster rolls",
    locations: ["Cape Elizabeth", "Old Orchard Beach", "Portland"],
  },
  {
    id: "boston",
    name: "Boston",
    years: "2025",
    yearValues: [2025],
    description: "Walked the Harvard campus, watched the Red Sox at Fenway Park, and walked around the Boston Public Garden",
    locations: ["Harvard", "Fenway Park", "Boston Public Garden"],
  },
  {
    id: "montreal",
    name: "Montreal",
    years: "2025",
    yearValues: [2025],
    description: "Hiked Mont Royal, walked around Old Montreal and Downtown, and went on a food tour",
    locations: ["Mont Royal", "Little Italy", "Old Montreal"],
  },
  {
    id: "puntacana",
    name: "Punta Cana",
    years: "2025",
    yearValues: [2025],
    description: "All-inclusive vacation with friends and a full-day excursion to Scape Park",
    locations: ["Scape Park", "Riu Republica", "Boat Party"],
  },
  {
    id: "newyork",
    name: "New York",
    years: "2019, 2023, 2025",
    yearValues: [2019, 2023, 2025],
    description: "The city that never sleeps - visiting friends and family throughout the years",
    locations: ["Brooklyn", "Manhattan", "Jersey City"],
  },
  {
    id: "portugal",
    name: "Portugal",
    years: "2024",
    yearValues: [2024],
    description: "Visited the Algarve, experienced a Port wine tour, and enjoyed beautiful beaches",
    locations: ["Porto", "Nazare", "Peniche", "Albufeira", "Portimao", "Lagos", "Lisbon"],
  },
  {
    id: "amsterdam",
    name: "Amsterdam",
    years: "2024",
    yearValues: [2024],
    description: "Windmills, museums, and relaxing beside the canals",
    locations: ["Anne Frank House", "Rijksmuseum", "Canal Tour", "Red Light District", "Heineken Factory"],
  },
  {
    id: "bc",
    name: "British Columbia",
    years: "2023",
    yearValues: [2023],
    description: "Surfing in Tofino, breathtaking mountain landscapes, and attending my Japanese-side's family reunion",
    locations: ["Tofino", "Vancouver", "Victoria"],
  },
  {
    id: "hawaii",
    name: "Hawaii",
    years: "2022",
    yearValues: [2022],
    description: "Driving the Road to Hana, watching the Haleakala sunrise, and relaxed on beautiful beaches",
    locations: ["Oahu", "Maui", "Hana", "Haleakala"],
  },
];

export const trips: Trip[] = tripsData.map((t) => ({
  ...t,
  images: loadTripImages(t.id),
}));

export const allYears = [2025, 2024, 2023, 2022, 2019];
