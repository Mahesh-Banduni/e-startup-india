export default function RegisterProfessionalHeroSection() {
  return (
    <section className="py-scale-lg-20 bg-surface relative overflow-hidden border-b border-outline">
      <div className="max-w-7xl mx-auto px-scale-md-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-scale-md-14 items-center">
          {/* Hero Left */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-scale-sm-2 bg-secondary border border-outline px-scale-sm-3.5 py-1.5 rounded-full font-label text-label-xs text-primary font-bold mb-scale-sm-4">
              <span className="w2 h2 rounded-full bg-tertiary" />
              Independent Consultant &amp; Referral Partner Network
            </div>
            <h1 className="font-display font-bold text-display-lg-mobile md:text-headline-xl lg:text-display-lg text-primary tracking-tight leading-tight text-balance">
              Register as a Professional with EStartUp India
            </h1>
            <p className="mt-scale-sm-5 font-body text-body-lg text-muted-gray leading-relaxed text-pretty">
              Join our professional network and connect with entrepreneurs,
              startups and businesses looking for expert guidance and
              professional services.
            </p>
            <div className="mt-scale-sm-6 p-scale-sm-4 rounded-xl border border-outline bg-secondary/60 flex items-start gap-scale-sm-3.5 max-w-2xl">
              {/* @ts-expect-error iconify-icon is a web component */}
              <iconify-icon
                icon="lucide:info"
                className="text-accent text-headline-sm shrink-0 mt-0.5"
              />
              <div className="font-body text-body-xs text-charcoal leading-relaxed">
                <span className="font-bold text-primary">
                  Engagement Model:
                </span>{" "}
                EStartUp India operates an accredited{" "}
                <strong>
                  External Referral &amp; Advisory Partnership Network
                </strong>
                . Registered professionals collaborate on client advisory
                cases, regulatory retainers, and specialized mandates as
                verified independent partners, retaining their independent
                practice.
              </div>
            </div>
            <div className="mt-scale-sm-8 flex flex-wrap items-center gap-scale-sm-4">
              <a
                href="#registration-form"
                className="inline-flex items-center font-label text-label-md text-on-accent bg-accent hover:bg-[#E56000] px-scale-sm-7 py-scale-sm-3.5 rounded-DEFAULT font-bold shadow-md transition-all focus-visible:ring-2 focus-visible:ring-primary"
              >
                <span>Register Now</span>
                {/* @ts-expect-error iconify-icon is a web component */}
                <iconify-icon
                  icon="lucide:arrow-down"
                  className="ml-scale-sm-2"
                />
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center font-label text-label-md text-primary hover:text-accent bg-white border border-outline hover:border-accent px-scale-sm-6 py-scale-sm-3.5 rounded-DEFAULT font-semibold transition-all focus-visible:ring-2 focus-visible:ring-primary"
              >
                <span>How Verification Works</span>
                {/* @ts-expect-error iconify-icon is a web component */}
                <iconify-icon
                  icon="lucide:chevron-right"
                  className="ml1"
                />
              </a>
            </div>
            <div className="mt-scale-sm-10 pt-scale-sm-8 border-t border-outline grid grid-cols-3 gap-scale-sm-6 max-w-lg">
              {[
                { val: "150+", label: "Empaneled CAs & CSs", color: "text-primary" },
                { val: "10,000+", label: "Served Startups", color: "text-tertiary" },
                { val: "28", label: "States Covered", color: "text-primary" },
              ].map((s) => (
                <div key={s.label}>
                  <span className={`font-display font-bold text-headline-md ${s.color}`}>
                    {s.val}
                  </span>
                  <p className="font-body text-body-xs text-muted-gray mt-0.5">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Right */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-outline shadow-xl bg-surface-variant aspect-[4/3]">
              <img
                src="/images/intellectual-property.jpg"
                alt="Indian legal advisor representing a professional advisory practice"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 p-scale-sm-4 rounded-xl bg-white/95 backdrop-blur-md border border-outline shadow-lg">
                <div className="flex items-center gap-scale-sm-3">
                  <div className="w-scale-md-10 h-scale-md-10 rounded-full bg-secondary text-accent flex items-center justify-center shrink-0">
                    {/* @ts-expect-error iconify-icon is a web component */}
                    <iconify-icon
                      icon="lucide:check-circle-2"
                      className="text-headline-sm"
                    />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-body-sm text-primary">
                      Direct Client Engagements
                    </h4>
                    <p className="font-body text-body-xs text-muted-gray">
                      Zero platform joining fees • Transparent fee payouts
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
