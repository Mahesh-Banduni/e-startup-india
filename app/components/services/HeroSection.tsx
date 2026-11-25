export default function ServicesHeroSection() {
  return (
    <section className="bg-primary text-white py-scale-lg-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-scale-md-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-scale-md-12 items-center">
          {/* Hero Text Left */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-scale-sm-2 bg-white/10 border border-white/20 text-white px-scale-sm-3.5 py-scale-sm-1.5 rounded-full font-label text-label-xs uppercase tracking-wider mb-scale-sm-4">
              {/* @ts-expect-error iconify-icon is a web component */}
              <iconify-icon icon="lucide:layers" className="text-accent" />
              Comprehensive Enterprise Services
            </div>
            <h1 className="font-display font-bold text-display-lg-mobile md:text-headline-xl lg:text-display-lg tracking-tight text-white text-balance leading-tight">
              Services Catalog &amp; Startup Solutions
            </h1>
            <p className="mt-scale-sm-4 font-body text-body-lg text-white/80 max-w-2xl leading-relaxed text-pretty">
              Explore India&apos;s most trusted suite of business
              registration, tax filing, trademark protection, and investment
              readiness services—all backed by 150+ full-time chartered
              accountants and advocates.
            </p>
            <div className="mt-scale-sm-8 flex flex-wrap items-center gap-scale-sm-6 font-body text-body-xs text-white/70">
              <span className="flex items-center gap-1.5">
                {/* @ts-expect-error iconify-icon is a web component */}
                <iconify-icon
                  icon="lucide:check-circle"
                  className="text-tertiary"
                />{" "}
                100% Online Tracking
              </span>
              <span className="flex items-center gap-1.5">
                {/* @ts-expect-error iconify-icon is a web component */}
                <iconify-icon
                  icon="lucide:check-circle"
                  className="text-tertiary"
                />{" "}
                Fixed Transparent Pricing
              </span>
              <span className="flex items-center gap-1.5">
                {/* @ts-expect-error iconify-icon is a web component */}
                <iconify-icon
                  icon="lucide:check-circle"
                  className="text-tertiary"
                />{" "}
                Dedicated Senior CA &amp; CS
              </span>
            </div>
          </div>

          {/* Hero Image Right */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden bg-white/10 border border-white/20 hero-shadow p-scale-sm-2">
              <div className="rounded-xl overflow-hidden aspect-[4/3] bg-primary relative">
                <img
                  src="/images/business-registration.jpg"
                  alt="Senior chartered consultant presenting company incorporation paperwork"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
              </div>
            </div>
            <div className="absolute -bottom-4 -left-3 bg-white text-charcoal rounded-xl py-scale-sm-3 px-scale-sm-4 card-shadow border border-outline flex items-center gap-scale-sm-3 z-10">
              <div className="w-scale-md-10 h-scale-md-10 rounded-full bg-secondary flex items-center justify-center text-primary">
                {/* @ts-expect-error iconify-icon is a web component */}
                <iconify-icon
                  icon="lucide:file-check"
                  className="text-tertiary text-headline-sm"
                />
              </div>
              <div>
                <p className="font-display font-bold text-primary font-label text-label-md">
                  MCA &amp; DPIIT Approved
                </p>
                <p className="font-body text-body-xs text-muted-gray">
                  Direct Ministry API Integration
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
