import type { Watch } from "@/data/watches";
import { Check, ShoppingCart } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

interface WatchCardProps {
  watch: Watch;
  index: number;
  onAddToCart: (watchId: string) => void;
  isAdding?: boolean;
}

export function WatchCard({
  watch,
  index,
  onAddToCart,
  isAdding,
}: WatchCardProps) {
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    onAddToCart(watch.id);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <motion.div
      data-ocid={`watch.item.${index}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: (index - 1) * 0.08 }}
      className="watch-card-hover group relative flex flex-col bg-card border border-border overflow-hidden"
    >
      {/* Badge */}
      {watch.badge && (
        <div className="absolute top-3 left-3 z-10">
          <span className="gold-gradient text-primary-foreground text-[10px] font-bold tracking-[0.2em] uppercase px-2 py-1">
            {watch.badge}
          </span>
        </div>
      )}

      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-secondary">
        <img
          src={watch.image}
          alt={watch.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        <h3 className="font-display text-lg font-semibold text-foreground mb-1 leading-snug">
          {watch.name}
        </h3>

        {/* Stars */}
        <div className="flex gap-0.5 mb-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <svg
              key={star}
              className="h-3 w-3 fill-gold text-gold"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          ))}
        </div>

        <p className="text-xs text-muted-foreground leading-relaxed mb-4 font-body flex-1">
          {watch.specialty}
        </p>

        <div className="flex items-center justify-between mt-auto">
          <div>
            <p className="text-xs tracking-wider text-muted-foreground uppercase font-body mb-0.5">
              Starting from
            </p>
            <p className="font-display text-xl font-bold gold-text">
              {watch.price}
            </p>
          </div>

          <button
            type="button"
            data-ocid={`watch.add_button.${index}`}
            onClick={handleAdd}
            disabled={isAdding}
            className={`flex items-center gap-2 px-4 py-2 text-xs font-semibold tracking-[0.15em] uppercase font-body transition-all duration-300 ${
              added
                ? "bg-green-700 text-white"
                : "gold-gradient text-primary-foreground hover:opacity-90"
            } disabled:opacity-60`}
            style={{
              clipPath:
                "polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%)",
            }}
          >
            {added ? (
              <>
                <Check className="h-3 w-3" />
                Added
              </>
            ) : (
              <>
                <ShoppingCart className="h-3 w-3" />
                Add to Cart
              </>
            )}
          </button>
        </div>
      </div>
    </motion.div>
  );
}
