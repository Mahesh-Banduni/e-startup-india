export default function CorporateInfrastructureSection() {
  return (
    <section className="py-scale-lg-20 bg-white">
      <div className="max-w-7xl mx-auto px-scale-md-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-scale-lg-16 items-center">
          <div className="lg:col-span-6">
            <span className="font-label text-label-xs uppercase tracking-wider text-primary font-bold bg-secondary border border-outline px-scale-sm-3 py-1 rounded-full">
              CORPORATE INFRASTRUCTURE
            </span>
            <h2 className="font-display font-bold text-headline-xl text-primary mt-scale-sm-3">
              Institutional Capacity Built for Serious Founders
            </h2>
            <p className="font-body text-body-md text-muted-gray mt-scale-sm-3 leading-relaxed">
              Operating out of state-of-the-art corporate offices in
              Connaught Place, New Delhi, our multi-disciplinary firm houses
              dedicated desks for ROC Corporate Filings, Direct Taxes, IP
              Litigation, and Capital Advisory.
            </p>
            <div className="mt-scale-sm-8 space-y-scale-sm-4 font-body text-body-sm">
              {[
                {
                  icon: "lucide:server",
                  iconColor: "text-accent",
                  title: "256-Bit Encrypted Data Vaults",
                  desc: "Statutory documents, Aadhaar cards, and financial audits are hosted on sovereign Indian cloud clusters with strict privilege separation.",
                },
                {
                  icon: "lucide:cpu",
                  iconColor: "text-tertiary",
                  title: "Direct MCA V3 & GSTN API Integration",
                  desc: "Direct algorithmic reconciliation against Ministry of Corporate Affairs and GSTN servers guarantees zero manual filing lag.",
                },
                {
                  icon: "lucide:headset",
                  iconColor: "text-primary",
                  title: "Dedicated Relationship Managers",
                  desc: "Every incorporated entity is paired with an assigned CS or CA for lifetime annual compliances, AGM filings, and GST returns.",
                },
              ].map((f) => (
                <div
                  key={f.title}
                  className="flex items-start gap-scale-sm-3.5 p-scale-sm-3.5 rounded-lg border border-outline bg-surface"
                >
                  {/* @ts-expect-error iconify-icon is a web component */}
                  <iconify-icon
                    icon={f.icon}
                    className={`${f.iconColor} text-headline-sm shrink-0 mt-0.5`}
                  />
                  <div>
                    <h4 className="font-display font-bold text-label-md text-primary">
                      {f.title}
                    </h4>
                    <p className="text-body-xs text-muted-gray mt-0.5">
                      {f.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-6 mt-scale-sm-6 lg:mt-0">
            <div className="relative rounded-2xl overflow-hidden border border-outline shadow-xl aspect-[16/9] lg:aspect-[4/3]">
              <img
                src="/images/intellectual-property.jpg"
                alt="Modern corporate facilities of EStartUp India in Connaught Place New Delhi"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
              <div className="absolute bottom-3 sm:bottom-5 left-3 sm:left-5 right-3 sm:right-5 p-scale-sm-4 rounded-xl bg-white/95 backdrop-blur-md border border-outline shadow-lg">
                <div className="flex items-center justify-between gap-scale-sm-3 font-body">
                  <div>
                    <h5 className="font-display font-bold text-body-sm text-primary">
                      Connaught Place Corporate Floor
                    </h5>
                    <p className="text-body-xs text-muted-gray">
                      New Delhi 110001 • 150+ In-House Practitioners
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1 text-tertiary font-bold font-label text-label-xs bg-secondary px-scale-sm-2.5 py-1 rounded shrink-0">
                    {/* @ts-expect-error iconify-icon is a web component */}
                    <iconify-icon icon="lucide:radio" /> Active HQ
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
