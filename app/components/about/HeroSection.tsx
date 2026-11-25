export default function AboutHeroSection() {
  return (
    <section className="py-scale-lg-24 bg-surface relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-scale-md-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-scale-md-16 items-center">
          {/* Left Column */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-scale-sm-2 bg-secondary border border-outline px-scale-sm-3.5 py-scale-sm-1.5 rounded-full font-label text-label-xs text-primary font-bold mb-scale-sm-4">
              {/* @ts-expect-error iconify-icon is a web component */}
              <iconify-icon icon="lucide:award" className="text-accent" />
              Our Mission &amp; Heritage
            </div>
            <h1 className="font-display font-bold text-display-lg-mobile md:text-headline-xl lg:text-display-lg text-primary tracking-tight leading-tight text-balance">
              Empowering India&apos;s next generation of builders.
            </h1>
            <p className="mt-scale-sm-6 font-body text-body-lg text-muted-gray leading-relaxed text-pretty">
              EStartUp India was founded with one clear ambition: to remove
              the friction, opacity, and bureaucratic latency from launching
              and operating a business in India. Over the last 15+ years, we
              have evolved into India&apos;s foremost corporate consultancy.
            </p>
            <div className="mt-scale-sm-8 grid grid-cols-2 gap-scale-sm-4">
              <div className="p-scale-sm-4 rounded-xl border border-outline bg-secondary">
                <span className="font-display font-bold text-headline-lg text-primary">
                  10,000+
                </span>
                <p className="font-body text-body-xs text-muted-gray mt-1">
                  Startups incorporated across 28 states
                </p>
              </div>
              <div className="p-scale-sm-4 rounded-xl border border-outline bg-secondary">
                <span className="font-display font-bold text-headline-lg text-tertiary">
                  99.4%
                </span>
                <p className="font-body text-body-xs text-muted-gray mt-1">
                  Government filing approval rate
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Leadership Image */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden bg-white border border-outline hero-shadow p-2">
              <div className="rounded-xl overflow-hidden relative aspect-[16/9] bg-surface-variant">
                <img
                  src="/images/business-consulting.jpg"
                  alt="EStartUp India consultants meeting with business founders"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />
              </div>
            </div>
            <div className="absolute -bottom-4 sm:-bottom-5 right-2 sm:-right-3 max-w-[calc(100%-1rem)] bg-white rounded-xl py-scale-sm-3 px-scale-sm-4 card-shadow border border-outline flex items-center gap-scale-sm-3 z-10 shadow-md">
              <div className="w-scale-sm-10 h-scale-sm-10 rounded-full bg-secondary flex items-center justify-center text-primary shrink-0">
                {/* @ts-expect-error iconify-icon is a web component */}
                <iconify-icon
                  icon="lucide:shield-check"
                  className="text-tertiary text-headline-sm"
                />
              </div>
              <div>
                <p className="font-display font-bold text-primary font-label text-label-md">
                  150+ Full-Time Specialists
                </p>
                <p className="font-body text-body-xs text-muted-gray">
                  CAs, CSs, Legal Advocates &amp; Valuers
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
