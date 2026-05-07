export default function Home() {
  const whatsappNumber = "917842827355";
  const whatsappMessage = encodeURIComponent(
    "Hello, I would like to know more about your jewellery collections."
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const collections = [
    {
      name: "Bridal Heritage",
      description: "Intricate gold sets crafted for weddings and family celebrations.",
      price: "From Rs. 35,000",
    },
    {
      name: "Everyday Spark",
      description: "Lightweight rings and pendants made for daily elegance.",
      price: "From Rs. 4,500",
    },
    {
      name: "Temple Classics",
      description: "Traditional motifs inspired by South Indian temple artistry.",
      price: "From Rs. 22,000",
    },
    {
      name: "Diamond Signature",
      description: "Minimal diamond pieces for milestone gifts and anniversaries.",
      price: "From Rs. 18,000",
    },
  ];

  const testimonials = [
    {
      quote:
        "I bought a bridal necklace set here and the finish was beautiful. Everyone asked where I got it.",
      name: "Sravani R.",
      place: "Warangal",
    },
    {
      quote:
        "Their daily wear collection is elegant and affordable. The team helped me pick exactly what I needed.",
      name: "Kiran M.",
      place: "Hanamkonda",
    },
    {
      quote:
        "Quick service, genuine quality, and custom sizing done perfectly. Highly recommended for local families.",
      name: "Ayesha F.",
      place: "Kazipet",
    },
  ];

  return (
    <main className="mx-auto w-full max-w-6xl px-5 py-8 text-ink sm:px-8 lg:px-12">
      <section className="glow-ring relative overflow-hidden rounded-3xl border border-gold/25 bg-gradient-to-br from-[#FFF8EC] via-[#FBF8F1] to-[#F1E5D4] px-6 py-16 sm:px-10 lg:px-14">
        <div className="absolute -right-14 -top-10 h-44 w-44 rounded-full bg-gold/20 blur-2xl" />
        <div className="absolute -bottom-16 -left-10 h-52 w-52 rounded-full bg-champagne/50 blur-2xl" />
        <p className="mb-4 text-sm tracking-[0.2em] text-gold">AURUM JEWEL HOUSE</p>
        <h1 className="max-w-3xl text-4xl leading-tight sm:text-5xl lg:text-6xl" style={{ fontFamily: "var(--font-playfair)" }}>
          Jewellery that turns celebrations into lifelong memories
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-8 text-ink/80 sm:text-lg">
          Discover handcrafted gold, diamond, and traditional collections for weddings, gifting, and everyday elegance. Visit our local store or message us for custom designs.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a href="#collections" className="rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition hover:bg-black">
            Explore Collections
          </a>
          <a href={whatsappLink} target="_blank" rel="noreferrer" className="rounded-full border border-gold/50 bg-white/80 px-6 py-3 text-sm font-semibold text-gold transition hover:bg-white">
            Chat on WhatsApp
          </a>
          <a href="#contact" className="rounded-full border border-gold/30 bg-white/80 px-6 py-3 text-sm font-semibold text-ink transition hover:bg-white">
            Customer Stories
          </a>
        </div>
      </section>

      <section id="collections" className="pt-16">
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm tracking-[0.16em] text-gold">FEATURED COLLECTIONS</p>
            <h2 className="mt-2 text-3xl sm:text-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
              Crafted for every occasion
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-ink/70">
            Each piece is selected for quality, purity, and timeless style.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {collections.map((collection) => (
            <article key={collection.name} className="rounded-2xl border border-gold/20 bg-white/80 p-6 backdrop-blur transition hover:-translate-y-1 hover:shadow-halo">
              <div className="mb-4 h-1.5 w-14 rounded-full bg-gold/80" />
              <h3 className="text-2xl" style={{ fontFamily: "var(--font-playfair)" }}>
                {collection.name}
              </h3>
              <p className="mt-3 text-sm leading-7 text-ink/80">{collection.description}</p>
              <p className="mt-5 text-sm font-semibold tracking-wide text-gold">{collection.price}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="testimonials" className="pb-10 pt-16">
        <p className="text-sm tracking-[0.16em] text-gold">TESTIMONIALS</p>
        <h2 className="mt-2 text-3xl sm:text-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
          Loved by local families
        </h2>
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {testimonials.map((item) => (
            <blockquote key={item.name} className="rounded-2xl border border-gold/20 bg-white/85 p-6 leading-7 text-ink/90 shadow-soft">
              <p>"{item.quote}"</p>
              <footer className="mt-5 border-t border-gold/20 pt-4 text-sm">
                <span className="font-semibold text-ink">{item.name}</span>
                <span className="ml-2 text-ink/70">{item.place}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      <section id="contact" className="pb-14 pt-6">
        <div className="grid gap-5 rounded-3xl border border-gold/20 bg-white/80 p-6 shadow-soft lg:grid-cols-[1.2fr_0.8fr] lg:p-8">
          <div>
            <p className="text-sm tracking-[0.16em] text-gold">CONTACT & STORE</p>
            <h2 className="mt-2 text-3xl" style={{ fontFamily: "var(--font-playfair)" }}>
              Visit us for personal guidance and custom orders
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-ink/75">
              We help customers with bridal selections, gold exchange, gift ideas, and custom jewellery requests. Reach out on WhatsApp or visit the store during opening hours.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={whatsappLink} target="_blank" rel="noreferrer" className="rounded-full bg-gold px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#a97931]">
                WhatsApp Us
              </a>
              <a href="tel:+917842827355" className="rounded-full border border-gold/30 bg-transparent px-6 py-3 text-sm font-semibold text-ink transition hover:bg-white">
                Call Now
              </a>
            </div>
          </div>

          <div className="rounded-2xl bg-[#fcf8ef] p-5">
            <p className="text-sm font-semibold tracking-wide text-gold">Store details</p>
            <dl className="mt-4 space-y-4 text-sm leading-7 text-ink/80">
              <div>
                <dt className="font-semibold text-ink">Address</dt>
                <dd>Shop No. 7, Main Road, Near Market Circle, Your City</dd>
              </div>
              <div>
                <dt className="font-semibold text-ink">Hours</dt>
                <dd>Mon-Sat: 10:00 AM - 8:30 PM</dd>
              </div>
              <div>
                <dt className="font-semibold text-ink">Phone</dt>
                <dd>+91 78428 27355</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </main>
  );
}
