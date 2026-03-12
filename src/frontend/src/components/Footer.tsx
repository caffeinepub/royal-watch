export function Footer() {
  const year = new Date().getFullYear();
  const utm = encodeURIComponent(window.location.hostname);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-background border-t border-border py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <div className="flex items-center gap-3">
              <img
                src="/assets/uploads/IMG-20260312-WA0000-1.jpg"
                alt="Royal Watch"
                className="h-10 w-10 object-contain rounded-full"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
              <span className="font-display font-bold text-lg tracking-[0.15em] gold-text">
                ROYAL WATCH
              </span>
            </div>
            <p className="text-xs tracking-[0.4em] uppercase text-muted-foreground font-body">
              LUXURIOUS
            </p>
            <p className="text-xs text-muted-foreground font-body max-w-xs text-center md:text-left">
              Where time becomes a statement of distinction.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-8 text-sm">
            {[
              { label: "Collection", id: "collection" },
              { label: "Heritage", id: "heritage" },
              { label: "Contact", id: "contact" },
            ].map((link) => (
              <button
                type="button"
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="text-muted-foreground hover:text-gold transition-colors font-body text-xs tracking-[0.15em] uppercase"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground font-body">
          <p>© {year} Royal Watch. All rights reserved.</p>
          <p>
            Built with love using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${utm}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
