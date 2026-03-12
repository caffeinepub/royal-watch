import { Award, Crown, Gem } from "lucide-react";
import { motion } from "motion/react";

const founders = [
  { name: "DHRUV CHIKHALIYA", role: "Co-Founder", initials: "DC" },
  { name: "SACHI GADIYA", role: "Co-Founder", initials: "SG" },
  { name: "TEJAS PRAJAPATI", role: "Co-Founder", initials: "TP" },
  { name: "PRINCE MADALIYA", role: "Chief Executive Officer", initials: "PM" },
];

const pillars = [
  {
    icon: Crown,
    title: "Royal Heritage",
    desc: "Every Royal Watch is born from a tradition of excellence dating back to the finest Swiss ateliers.",
  },
  {
    icon: Gem,
    title: "Precious Materials",
    desc: "We source only the rarest metals, gemstones, and materials — nothing less than perfection.",
  },
  {
    icon: Award,
    title: "Master Craftsmanship",
    desc: "Each timepiece takes over 200 hours of hand-finishing by master watchmakers.",
  },
];

export function HeritageSection() {
  return (
    <>
      {/* Heritage Section */}
      <section id="heritage" className="py-24 px-4 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <p className="text-xs tracking-[0.5em] uppercase text-muted-foreground font-body mb-3">
              Since 2026
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              <span className="text-foreground">OUR</span>{" "}
              <span className="gold-text">LEGACY</span>
            </h2>
            <p className="text-muted-foreground font-body max-w-2xl mx-auto leading-relaxed text-base">
              Royal Watch was founded with a singular vision: to create
              timepieces that transcend mere function and become heirlooms. Our
              watches are more than instruments — they are declarations of who
              you are.
            </p>
          </motion.div>

          {/* Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="text-center p-8 border border-border bg-card"
              >
                <div
                  className="inline-flex items-center justify-center w-14 h-14 mb-5 gold-gradient"
                  style={{
                    clipPath:
                      "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                  }}
                >
                  <pillar.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">
                  {pillar.title}
                </h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">
                  {pillar.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Founders */}
          <div id="about">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h3 className="font-display text-3xl md:text-4xl font-bold mb-2">
                <span className="gold-text">THE VISIONARIES</span>
              </h3>
              <p className="text-muted-foreground font-body text-sm tracking-wider">
                The minds behind the crown
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {founders.map((founder, i) => (
                <motion.div
                  key={founder.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="text-center"
                >
                  <div className="relative mx-auto mb-4 w-20 h-20 md:w-24 md:h-24">
                    {/* Outer ring */}
                    <div className="absolute inset-0 rounded-full border-2 border-gold opacity-60" />
                    <div className="absolute inset-1 rounded-full gold-gradient flex items-center justify-center">
                      <span className="font-display text-lg md:text-xl font-bold text-primary-foreground">
                        {founder.initials}
                      </span>
                    </div>
                  </div>
                  <h4 className="font-display text-sm md:text-base font-semibold text-foreground leading-tight">
                    {founder.name}
                  </h4>
                  <p className="text-xs text-muted-foreground font-body tracking-wider uppercase mt-1">
                    {founder.role}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact / Divider */}
      <section
        id="contact"
        className="py-20 px-4 bg-background border-t border-border text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            <span className="gold-text">CONTACT US</span>
          </h2>
          <p className="text-muted-foreground font-body mb-8 leading-relaxed">
            For bespoke commissions, authorised retail inquiries, or private
            appointments, our concierge team is at your service.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm font-body text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="gold-text font-semibold">Email</span>
              <span>concierge@royalwatch.in</span>
            </div>
            <div className="h-4 w-px bg-border hidden sm:block" />
            <div className="flex items-center gap-2">
              <span className="gold-text font-semibold">Phone</span>
              <span>+91 98765 43210</span>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}
