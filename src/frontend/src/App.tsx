import { CartDrawer } from "@/components/CartDrawer";
import { CollectionSection } from "@/components/CollectionSection";
import { Footer } from "@/components/Footer";
import { HeritageSection } from "@/components/HeritageSection";
import { HeroSection } from "@/components/HeroSection";
import { Navbar } from "@/components/Navbar";
import { Toaster } from "@/components/ui/sonner";
import {
  useAddToCart,
  useCartCount,
  useCartItems,
  useClearCart,
  useRemoveFromCart,
} from "@/hooks/useQueries";
import { useState } from "react";
import { toast } from "sonner";

export default function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [addingId, setAddingId] = useState<string | undefined>();

  const { data: cartItems = [] } = useCartItems();
  const { data: cartCount = BigInt(0) } = useCartCount();
  const addToCart = useAddToCart();
  const removeFromCart = useRemoveFromCart();
  const clearCart = useClearCart();

  const handleAddToCart = async (watchId: string) => {
    setAddingId(watchId);
    try {
      await addToCart.mutateAsync(watchId);
      toast.success("Added to cart!", {
        description: "Your timepiece has been added to your cart.",
      });
    } catch {
      toast.error("Failed to add to cart");
    } finally {
      setAddingId(undefined);
    }
  };

  const handleRemove = async (watchId: string) => {
    try {
      await removeFromCart.mutateAsync(watchId);
    } catch {
      toast.error("Failed to remove item");
    }
  };

  const handleClear = async () => {
    try {
      await clearCart.mutateAsync();
      toast.info("Cart cleared");
    } catch {
      toast.error("Failed to clear cart");
    }
  };

  const handleCheckout = async () => {
    try {
      await clearCart.mutateAsync();
      setCartOpen(false);
      toast.success("Order placed successfully!", {
        description: "Our team will contact you shortly.",
        duration: 5000,
      });
    } catch {
      toast.error("Checkout failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Toaster
        theme="dark"
        position="top-right"
        toastOptions={{
          style: {
            background: "oklch(0.12 0 0)",
            border: "1px solid oklch(0.72 0.12 75 / 0.4)",
            color: "oklch(0.95 0.02 85)",
          },
        }}
      />

      <Navbar
        cartCount={Number(cartCount)}
        onCartOpen={() => setCartOpen(true)}
      />

      <main>
        <HeroSection />
        <CollectionSection onAddToCart={handleAddToCart} addingId={addingId} />
        <HeritageSection />
      </main>

      <Footer />

      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        cartItems={cartItems}
        onRemove={handleRemove}
        onClear={handleClear}
        onCheckout={handleCheckout}
        isLoading={clearCart.isPending}
      />
    </div>
  );
}
