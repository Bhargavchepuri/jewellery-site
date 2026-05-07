export default function Home() {
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
    <main className="mx-auto w-full max-w-6xl px-5 py-8 text-deepcharcoal sm:px-8 lg:px-12">
      <section className="glow-ring relative overflow-hidden rounded-3xl border border-rosegold/30 bg-gradient-to-br from-[#FFF8EC] via-[#F7F4EE] to-[#F1E5D4] px-6 py-16 sm:px-10 lg:px-14">
        <div className="absolute -right-14 -top-10 h-44 w-44 rounded-full bg-rosegold/20 blur-2xl" />
        <div className="absolute -bottom-16 -left-10 h-52 w-52 rounded-full bg-champagne/50 blur-2xl" />
        <p className="mb-4 text-sm tracking-[0.2em] text-rosegold">AURUM JEWEL HOUSE</p>
        <h1 className="max-w-3xl text-4xl leading-tight sm:text-5xl lg:text-6xl" style={{ fontFamily: "var(--font-playfair)" }}>
          Jewellery that turns celebrations into lifelong memories
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-8 text-deepcharcoal/80 sm:text-lg">
          Discover handcrafted gold, diamond, and traditional collections for weddings, gifting, and everyday elegance. Visit our local store or message us for custom designs.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a href="#collections" className="rounded-full bg-deepcharcoal px-6 py-3 text-sm font-semibold text-white transition hover:bg-black">
            Explore Collections
          </a>
          <a href="#testimonials" className="rounded-full border border-rosegold/50 bg-white/80 px-6 py-3 text-sm font-semibold text-rosegold transition hover:bg-white">
            Customer Stories
          </a>
        </div>
      </section>

      <section id="collections" className="pt-16">
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm tracking-[0.16em] text-rosegold">FEATURED COLLECTIONS</p>
            <h2 className="mt-2 text-3xl sm:text-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
              Crafted for every occasion
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-deepcharcoal/70">
            Each piece is selected for quality, purity, and timeless style.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {collections.map((collection) => (
            <article key={collection.name} className="rounded-2xl border border-rosegold/20 bg-white/80 p-6 backdrop-blur transition hover:-translate-y-1 hover:shadow-halo">
              <div className="mb-4 h-1.5 w-14 rounded-full bg-rosegold/70" />
              <h3 className="text-2xl" style={{ fontFamily: "var(--font-playfair)" }}>
                {collection.name}
              </h3>
              <p className="mt-3 text-sm leading-7 text-deepcharcoal/80">{collection.description}</p>
              <p className="mt-5 text-sm font-semibold tracking-wide text-rosegold">{collection.price}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="testimonials" className="pb-10 pt-16">
        <p className="text-sm tracking-[0.16em] text-rosegold">TESTIMONIALS</p>
        <h2 className="mt-2 text-3xl sm:text-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
          Loved by local families
        </h2>
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {testimonials.map((item) => (
            <blockquote key={item.name} className="rounded-2xl border border-rosegold/20 bg-white/85 p-6 leading-7 text-deepcharcoal/90">
              <p>"{item.quote}"</p>
              <footer className="mt-5 border-t border-rosegold/20 pt-4 text-sm">
                <span className="font-semibold text-deepcharcoal">{item.name}</span>
                <span className="ml-2 text-deepcharcoal/70">{item.place}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </section>
    </main>
  );
}
