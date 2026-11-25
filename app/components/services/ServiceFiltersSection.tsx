export default function ServiceFiltersSection() {
  return (
    <section className="bg-secondary border-b border-outline py-scale-sm-6 sticky top-20 z-40">
      <div className="max-w-7xl mx-auto px-scale-md-12 flex flex-col md:flex-row items-center justify-between gap-scale-sm-4">
        <div className="flex flex-wrap items-center gap-scale-sm-2">
          <button className="bg-primary text-white px-scale-sm-4 py-scale-sm-2 rounded-DEFAULT font-label text-label-sm font-semibold transition-colors focus-visible:ring-2 focus-visible:ring-primary">
            All Services (8)
          </button>
          {[
            "Registration & Startups",
            "Compliance & Taxation",
            "Funding & Advisory",
            "Trademark & IP",
          ].map((cat) => (
            <button
              key={cat}
              className="bg-white hover:bg-surface-variant text-charcoal border border-outline px-scale-sm-4 py-scale-sm-2 rounded-DEFAULT font-label text-label-sm font-semibold transition-colors focus-visible:ring-2 focus-visible:ring-primary"
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="relative w-full md:w-72">
          {/* @ts-expect-error iconify-icon is a web component */}
          <iconify-icon
            icon="lucide:search"
            className="absolute left-3.5 top-3 text-muted-gray"
          />
          <input
            type="text"
            placeholder="Search service, e.g. GST..."
            className="w-full bg-white border border-outline rounded-DEFAULT pl-scale-md-10 pr-scale-sm-4 py-scale-sm-2 font-body text-body-sm text-charcoal placeholder-muted-gray focus:outline-none focus:border-accent focus-visible:ring-2 focus-visible:ring-primary"
          />
        </div>
      </div>
    </section>
  );
}
