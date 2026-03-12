import { ShoppingBag } from "lucide-react";

interface NavbarProps {
  cartCount: number;
  onCartOpen: () => void;
}

export function Navbar({ cartCount, onCartOpen }: NavbarProps) {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src="/assets/uploads/IMG-20260312-WA0000-1.jpg"
              alt="Royal Watch Logo"
              className="h-10 w-10 md:h-12 md:w-12 object-contain rounded-full"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
            <div>
              <div className="font-display font-bold text-lg md:text-xl tracking-[0.15em] gold-text">
                ROYAL WATCH
              </div>
              <div className="text-[10px] tracking-[0.3em] text-muted-foreground uppercase hidden sm:block">
                Luxurious
              </div>
            </div>
          </div>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            {[
              { label: "Collection", id: "collection" },
              { label: "Heritage", id: "heritage" },
              { label: "About", id: "about" },
              { label: "Contact", id: "contact" },
            ].map((link) => (
              <button
                type="button"
                key={link.id}
                data-ocid="nav.link"
                onClick={() => scrollTo(link.id)}
                className="text-sm tracking-[0.15em] uppercase text-muted-foreground hover:text-gold transition-colors duration-200 font-body"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Cart */}
          <button
            type="button"
            data-ocid="cart.open_modal_button"
            onClick={onCartOpen}
            className="relative p-2 hover:text-gold transition-colors duration-200"
            aria-label="Open cart"
          >
            <ShoppingBag className="h-6 w-6" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center">
                {cartCount > 9 ? "9+" : cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
