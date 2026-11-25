import { describe, expect, it } from "vitest";
import { trips } from "@/data/trips";
import bostonPhoto from "@/assets/trips/boston/ZZ-boston-10.jpeg.asset.json";

describe("uploaded trip photos", () => {
  it("adds the first upload to Boston after its nine existing photos", () => {
    const boston = trips.find((trip) => trip.id === "boston");
    expect(boston?.images).toHaveLength(10);
    expect(boston?.images[9]).toBe(bostonPhoto.url);
  });

  it("adds the other nine uploads to Madeira after its eleven existing photos", () => {
    const madeira = trips.find((trip) => trip.id === "madeira");
    const uploads = import.meta.glob<{ default: { url: string } }>(
      "/src/assets/trips/madeira/*.asset.json", { eager: true }
    );
    const urls = Object.keys(uploads).sort().map((key) => uploads[key].default.url);
    expect(urls).toHaveLength(9);
    expect(madeira?.images).toHaveLength(20);
    expect(madeira?.images.slice(11)).toEqual(urls);
  });
});