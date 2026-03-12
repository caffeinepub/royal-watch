import type { CartItem } from "@/backend.d";
import { ScrollArea } from "@/components/ui/scroll-area";
import { watches } from "@/data/watches";
import { ArrowRight, ShoppingBag, Trash2, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onRemove: (watchId: string) => void;
  onClear: () => void;
  onCheckout: () => void;
  isLoading?: boolean;
}

export function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onRemove,
  onClear,
  onCheckout,
  isLoading,
}: CartDrawerProps) {
  const enrichedItems = cartItems.map((item) => {
    const watch = watches.find((w) => w.id === item.watchId);
    return { ...item, watch };
  });

  const total = enrichedItems.reduce((sum, item) => {
    const price = item.watch?.priceNum ?? 0;
    return sum + price * Number(item.quantity);
  }, 0);

  const formatPrice = (n: number) => `₹${n.toLocaleString("en-IN")}`;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
          />

          {/* Drawer */}
          <motion.div
            data-ocid="cart.panel"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 bottom-0 z-50 w-full max-w-md bg-card border-l border-border flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-border">
              <div className="flex items-center gap-3">
                <ShoppingBag className="h-5 w-5 text-gold" />
                <h2 className="font-display text-xl font-semibold">
                  Your Cart
                </h2>
                {cartItems.length > 0 && (
                  <span className="gold-gradient text-primary-foreground text-xs font-bold px-2 py-0.5 rounded-full">
                    {cartItems.length}
                  </span>
                )}
              </div>
              <button
                type="button"
                data-ocid="cart.close_button"
                onClick={onClose}
                className="p-2 hover:text-gold transition-colors"
                aria-label="Close cart"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Items */}
            {cartItems.length === 0 ? (
              <div
                data-ocid="cart.empty_state"
                className="flex-1 flex flex-col items-center justify-center gap-4 text-muted-foreground"
              >
                <ShoppingBag className="h-16 w-16 opacity-20" />
                <p className="font-body text-sm tracking-wider uppercase">
                  Your cart is empty
                </p>
                <p className="font-body text-xs text-center max-w-xs">
                  Add a timepiece from our collection to begin your journey.
                </p>
              </div>
            ) : (
              <ScrollArea className="flex-1 px-6">
                <div className="py-4 space-y-4">
                  {enrichedItems.map((item, idx) => (
                    <div
                      key={item.watchId}
                      data-ocid={`cart.item.${idx + 1}`}
                      className="flex gap-4 py-4 border-b border-border last:border-0"
                    >
                      {/* Image */}
                      <div className="w-20 h-20 bg-secondary rounded-sm overflow-hidden flex-shrink-0">
                        {item.watch && (
                          <img
                            src={item.watch.image}
                            alt={item.watch.name}
                            className="w-full h-full object-cover"
                          />
                        )}
                      </div>

                      {/* Info */}
                      <div className="flex-1 min-w-0">
                        <h4 className="font-display text-sm font-semibold leading-snug mb-1">
                          {item.watch?.name ?? item.watchId}
                        </h4>
                        <p className="gold-text font-display text-base font-bold">
                          {item.watch?.price ?? "N/A"}
                        </p>
                        <p className="text-xs text-muted-foreground font-body mt-1">
                          Qty: {Number(item.quantity)}
                        </p>
                      </div>

                      {/* Remove */}
                      <button
                        type="button"
                        onClick={() => onRemove(item.watchId)}
                        className="p-1.5 hover:text-destructive transition-colors self-start"
                        aria-label={`Remove ${item.watch?.name}`}
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            )}

            {/* Footer */}
            {cartItems.length > 0 && (
              <div className="border-t border-border px-6 py-5 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground font-body tracking-wider uppercase">
                    Total
                  </span>
                  <span className="font-display text-2xl font-bold gold-text">
                    {formatPrice(total)}
                  </span>
                </div>

                <button
                  type="button"
                  data-ocid="cart.submit_button"
                  onClick={onCheckout}
                  disabled={isLoading}
                  className="w-full flex items-center justify-center gap-3 gold-gradient text-primary-foreground font-body font-semibold tracking-[0.2em] uppercase text-sm py-4 transition-all duration-300 hover:opacity-90 disabled:opacity-60"
                >
                  Proceed to Checkout
                  <ArrowRight className="h-4 w-4" />
                </button>

                <button
                  type="button"
                  onClick={onClear}
                  disabled={isLoading}
                  className="w-full text-center text-xs text-muted-foreground hover:text-destructive font-body tracking-wider uppercase transition-colors py-2"
                >
                  Clear Cart
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
