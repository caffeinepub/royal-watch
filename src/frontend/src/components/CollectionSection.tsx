import { watches } from "@/data/watches";
import { motion } from "motion/react";
import { WatchCard } from "./WatchCard";

interface CollectionSectionProps {
  onAddToCart: (watchId: string) => void;
  addingId?: string;
}

export function CollectionSection({
  onAddToCart,
  addingId,
}: CollectionSectionProps) {
  return (
    <section id="collection" className="py-24 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-[0.5em] uppercase text-muted-foreground font-body mb-3">
            Handcrafted Excellence
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="gold-text">OUR</span>{" "}
            <span className="text-foreground">COLLECTION</span>
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-20 gold-gradient opacity-60" />
            <p className="text-muted-foreground font-body text-sm max-w-md">
              Each timepiece is a testament to centuries of horological mastery
            </p>
            <div className="h-px w-20 gold-gradient opacity-60" />
          </div>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {watches.map((watch, i) => (
            <WatchCard
              key={watch.id}
              watch={watch}
              index={i + 1}
              onAddToCart={onAddToCart}
              isAdding={addingId === watch.id}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
