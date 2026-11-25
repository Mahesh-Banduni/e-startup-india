export default function CoreValuesSection() {
  return (
    <section className="py-scale-lg-20 bg-secondary border-y border-outline">
      <div className="max-w-7xl mx-auto px-scale-md-12">
        <div className="max-w-2xl mx-auto text-center mb-scale-lg-16">
          <span className="font-label text-label-xs uppercase tracking-wider text-primary font-bold">
            OUR GUIDING PRINCIPLES
          </span>
          <h2 className="font-display font-bold text-headline-xl text-primary mt-scale-sm-2">
            The Values That Drive Our Firm
          </h2>
          <p className="font-body text-body-md text-muted-gray mt-scale-sm-2">
            How we maintain institutional trust while innovating on speed.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-scale-sm-8">
          {[
            {
              icon: "lucide:eye",
              iconColor: "text-accent",
              title: "Radical Transparency",
              desc: "No hidden fees, no surprise government costs, and no vague timelines. Every founder receives upfront cost breakdowns and real-time dashboard tracking.",
            },
            {
              icon: "lucide:sparkles",
              iconColor: "text-tertiary",
              title: "Institutional Rigor",
              desc: "We treat startup compliance with the precision of a top-tier corporate legal desk. Every submission is double-vetted to eliminate statutory rejection risks.",
            },
            {
              icon: "lucide:zap",
              iconColor: "text-accent",
              title: "Founder-First Velocity",
              desc: "Speed matters in business. We leverage proprietary cloud intake workflows to compress typical 3-week MCA registration cycles down to mere business days.",
            },
          ].map((val) => (
            <div
              key={val.title}
              className="bg-white rounded-xl p-scale-sm-8 border border-outline card-shadow"
            >
              <div className="w-scale-md-12 h-scale-md-12 rounded-lg bg-secondary text-primary flex items-center justify-center mb-scale-sm-6">
                {/* @ts-expect-error iconify-icon is a web component */}
                <iconify-icon
                  icon={val.icon}
                  className={`${val.iconColor} text-headline-sm`}
                />
              </div>
              <h3 className="font-display font-bold text-headline-sm text-primary">
                {val.title}
              </h3>
              <p className="font-body text-body-sm text-muted-gray mt-scale-sm-3 leading-relaxed">
                {val.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
