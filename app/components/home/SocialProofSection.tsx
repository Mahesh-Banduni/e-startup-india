export default function SocialProofSection() {
  return (
    <section className="bg-secondary border-y border-outline py-scale-md-10">
      <div className="max-w-7xl mx-auto px-scale-md-12">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-outline">
          {[
            { value: "10,000+", label: "Clients Served", sub: "Startups, LLPs & Pvt Ltd" },
            { value: "150+", label: "Expert Consultants", sub: "CAs, CSs, and Legal Advocates" },
            { value: "15+", label: "Years Experience", sub: "Navigating Indian Regulatory Laws" },
            { value: "4.8/5", label: "Customer Rating", sub: null, stars: true },
          ].map((m) => (
            <div key={m.label} className="py-scale-sm-2 px-scale-sm-8 text-center flex flex-col items-center justify-center">
              <span className="font-display font-bold text-headline-xl text-primary tracking-tight">{m.value}</span>
              {m.stars && (
                <div className="flex items-center gap-1 text-accent mt-1">
                  {/* @ts-expect-error iconify-icon is a web component */}
                  {[...Array(5)].map((_, i) => <iconify-icon key={i} icon="lucide:star" className="text-xs sm:text-sm" />)}
                </div>
              )}
              <span className="font-label text-label-md text-charcoal font-semibold mt-1">{m.label}</span>
              {m.sub && <span className="font-body text-body-xs text-muted-gray mt-0.5">{m.sub}</span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
