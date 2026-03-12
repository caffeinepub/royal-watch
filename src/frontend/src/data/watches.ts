export interface Watch {
  id: string;
  name: string;
  image: string;
  price: string;
  priceNum: number;
  specialty: string;
  badge?: string;
}

export const watches: Watch[] = [
  {
    id: "imperial-noir",
    name: "Royal Imperial Noir",
    image: "/assets/generated/watch-imperial-noir.dim_600x600.jpg",
    price: "₹1,85,000",
    priceNum: 185000,
    specialty:
      "Swiss automatic movement, 72-hour power reserve. Black PVD-coated steel case with sapphire crystal glass.",
  },
  {
    id: "azure-royal",
    name: "Azure Royal Moonphase",
    image: "/assets/generated/watch-azure-royal.dim_600x600.jpg",
    price: "₹3,20,000",
    priceNum: 320000,
    specialty:
      "Rose gold case with navy blue sunburst dial. Moon phase complication with diamond hour markers.",
    badge: "Bestseller",
  },
  {
    id: "champagne-chrono",
    name: "Champagne Chronograph",
    image: "/assets/generated/watch-champagne-chrono.dim_600x600.jpg",
    price: "₹2,45,000",
    priceNum: 245000,
    specialty:
      "High-frequency chronograph movement, 1/10th second precision. Champagne dial with gold sub-dials.",
  },
  {
    id: "emerald-diver",
    name: "Emerald Diver Pro",
    image: "/assets/generated/watch-emerald-diver.dim_600x600.jpg",
    price: "₹1,62,000",
    priceNum: 162000,
    specialty:
      "300m water resistance, ceramic rotating bezel. Luminescent hands visible in total darkness.",
  },
  {
    id: "platinum-slim",
    name: "Platinum Slim Élite",
    image: "/assets/generated/watch-platinum-slim.dim_600x600.jpg",
    price: "₹4,75,000",
    priceNum: 475000,
    specialty:
      "Ultra-thin 5.4mm profile, platinum 950 case. Hand-stitched alligator leather strap.",
  },
  {
    id: "gmt-master",
    name: "GMT Master Prestige",
    image: "/assets/generated/watch-gmt-master.dim_600x600.jpg",
    price: "₹2,90,000",
    priceNum: 290000,
    specialty:
      "Dual-timezone display with bi-color ceramic bezel. Jubilee bracelet in 904L stainless steel.",
  },
  {
    id: "tourbillon-sky",
    name: "Tourbillon Skymaster",
    image: "/assets/generated/watch-tourbillon-sky.dim_600x600.jpg",
    price: "₹8,50,000",
    priceNum: 850000,
    specialty:
      "Flying tourbillon with 60-second rotation. Hand-engraved bridges in 18k gold, limited to 50 pieces.",
    badge: "Limited",
  },
  {
    id: "rose-pearl",
    name: "Rose Pearl Lumière",
    image: "/assets/generated/watch-rose-pearl.dim_600x600.jpg",
    price: "₹3,35,000",
    priceNum: 335000,
    specialty:
      "Diamond-pavé bezel with 42 VS1 diamonds. Mother-of-pearl dial with rose gold hands.",
  },
];
