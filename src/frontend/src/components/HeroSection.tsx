import { ChevronDown } from "lucide-react";
import { motion } from "motion/react";

export function HeroSection() {
  const scrollToCollection = () => {
    document
      .getElementById("collection")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background decorative rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="absolute rounded-full border border-border opacity-20"
          style={{ width: "600px", height: "600px" }}
        />
        <div
          className="absolute rounded-full border border-border opacity-10"
          style={{ width: "900px", height: "900px" }}
        />
        <div
          className="absolute rounded-full border border-border opacity-5"
          style={{ width: "1200px", height: "1200px" }}
        />
        {/* Gold radial glow */}
        <div
          className="absolute rounded-full opacity-10"
          style={{
            width: "500px",
            height: "500px",
            background:
              "radial-gradient(circle, oklch(0.72 0.12 75) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8 flex justify-center"
        >
          <img
            src="/assets/uploads/IMG-20260312-WA0000-1.jpg"
            alt="Royal Watch"
            className="h-24 w-24 md:h-32 md:w-32 object-contain rounded-full"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
        </motion.div>

        {/* Tagline above */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-sm tracking-[0.5em] uppercase text-muted-foreground mb-4 font-body"
        >
          Est. 2026 &nbsp;·&nbsp; India
        </motion.p>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-display font-bold text-6xl md:text-8xl lg:text-9xl tracking-[0.1em] mb-4"
        >
          <span className="gold-text">ROYAL</span>
          <br />
          <span className="text-foreground">WATCH</span>
        </motion.h1>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex items-center justify-center gap-4 mb-6"
        >
          <div className="h-px flex-1 max-w-24 gold-gradient opacity-60" />
          <p className="text-base md:text-lg tracking-[0.6em] uppercase font-body gold-text font-semibold">
            LUXURIOUS
          </p>
          <div className="h-px flex-1 max-w-24 gold-gradient opacity-60" />
        </motion.div>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="text-base md:text-lg text-muted-foreground mb-10 max-w-md mx-auto font-body leading-relaxed"
        >
          Crafted for those who demand excellence.
          <br />
          Where time becomes art.
        </motion.p>

        {/* CTA */}
        <motion.button
          data-ocid="hero.primary_button"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          onClick={scrollToCollection}
          className="inline-flex items-center gap-3 gold-gradient text-primary-foreground font-body font-semibold tracking-[0.2em] uppercase text-sm px-10 py-4 transition-all duration-300 hover:opacity-90"
          style={{
            clipPath:
              "polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)",
          }}
        >
          Explore Collection
          <ChevronDown className="h-4 w-4" />
        </motion.button>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
          className="w-0.5 h-8 bg-gradient-to-b from-transparent to-gold opacity-60"
        />
      </motion.div>
    </section>
  );
}
