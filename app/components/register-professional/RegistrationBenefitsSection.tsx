export default function RegistrationBenefitsSection() {
  return (
    <section className="py-scale-lg-20 bg-white">
      <div className="max-w-7xl mx-auto px-scale-md-12">
        <div className="text-center max-w-3xl mx-auto mb-scale-lg-16">
          <span className="font-label text-label-xs font-bold uppercase tracking-wider text-primary bg-secondary border border-outline px-scale-sm-3 py-1 rounded-full">
            Network Benefits
          </span>
          <h2 className="font-display font-bold text-headline-xl text-primary mt-scale-sm-3">
            Why Register with EStartUp India?
          </h2>
          <p className="font-body text-body-md text-muted-gray mt-scale-sm-2 leading-relaxed">
            Expand your professional advisory footprint with verified,
            high-intent founders across India.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-scale-sm-6 items-stretch">
          {[
            { icon: "lucide:users", iconColor: "text-accent", title: "Connect with Startups and Entrepreneurs", desc: "Gain direct access to early-stage and venture-backed founders needing entity setup, compliance structuring, and legal contracts." },
            { icon: "lucide:network", iconColor: "text-tertiary", title: "Expand Your Professional Network", desc: "Interact with premier chartered accountants, trademark attorneys, and startup mentors across 28 states and union territories." },
            { icon: "lucide:briefcase", iconColor: "text-accent", title: "Get Business and Client Opportunities", desc: "Receive pre-qualified client briefs matched directly to your specialized domains, fee preferences, and geographic jurisdiction." },
            { icon: "lucide:badge-check", iconColor: "text-tertiary", title: "Showcase Your Expertise & Qualifications", desc: "Feature on our verified directory with your ICAI/ICSI/Bar credentials, industry publications, and client recommendation scores." },
            { icon: "lucide:handshake", iconColor: "text-primary", title: "Collaborate with Industry Experts", desc: "Co-counsel on complex cross-border transactions, intellectual property litigation, and venture capital due diligence audits." },
            { icon: "lucide:trending-up", iconColor: "text-tertiary", title: "Grow Your Professional Career", desc: "Scale your firm revenue with recurring statutory retainers and institutional advisory mandates across growing startup hubs." },
          ].map((b) => (
            <article
              key={b.title}
              className="p-scale-sm-6 rounded-xl border border-outline bg-surface card-shadow card-shadow-hover transition-all duration-200"
            >
              <div className="w-scale-md-12 h-scale-md-12 rounded-lg bg-secondary text-primary flex items-center justify-center mb-scale-sm-5">
                {/* @ts-expect-error iconify-icon is a web component */}
                <iconify-icon icon={b.icon} className={`${b.iconColor} text-headline-sm`} />
              </div>
              <h3 className="font-display font-bold text-headline-sm text-primary">{b.title}</h3>
              <p className="font-body text-body-sm text-muted-gray mt-scale-sm-2 leading-relaxed">{b.desc}</p>
            </article>
          ))}

          {/* Benefit 7 (wide) */}
          <article className="p-scale-sm-6 rounded-xl border border-outline bg-surface card-shadow card-shadow-hover transition-all duration-200 md:col-span-2 lg:col-span-2 flex flex-col justify-center">
            <div className="flex items-start gapy-scale-sm-5">
              <div className="w-scale-md-12 h-scale-md-12 rounded-lg bg-secondary text-primary flex items-center justify-center shrink-0">
                {/* @ts-expect-error iconify-icon is a web component */}
                <iconify-icon icon="lucide:award" className="text-accent text-headline-sm" />
              </div>
              <div>
                <h3 className="font-display font-bold text-headline-sm text-primary">Build Credibility and Visibility</h3>
                <p className="font-body text-body-sm text-muted-gray mt-1 leading-relaxed">
                  Co-author founders&apos; legal playbooks, speak on EStartUp India founder webinars, and establish authoritative thought leadership in Indian corporate jurisprudence.
                </p>
              </div>
            </div>
          </article>

          {/* Photo card */}
          <div className="relative rounded-xl overflow-hidden border border-outline shadow-md group aspect-[4/3] lg:aspect-auto">
            <img
              src="/images/startup-founders.jpg"
              alt="EStartUp India partner advisors and founders"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/30 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <span className="inline-flex items-center gap-1.5 px-scale-sm-2.5 py-1 rounded bg-white text-primary font-label text-label-xs font-bold uppercase mb-1.5 shadow-sm">
                {/* @ts-expect-error iconify-icon is a web component */}
                <iconify-icon icon="lucide:sparkles" className="text-tertiary" /> Real Mandates
              </span>
              <p className="font-display font-bold text-body-sm text-white">Direct Founder Collaboration</p>
              <p className="font-body text-body-xs text-white/80">Empowering 10,000+ businesses nationwide</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
