export default function VerificationProcessSection() {
  return (
    <section id="how-it-works" className="py-scale-lg-20 bg-white border-t border-outline">
      <div className="max-w-7xl mx-auto px-scale-md-12">
        <div className="text-center max-w-2xl mx-auto mb-scale-lg-16">
          <span className="font-label text-label-xs font-bold uppercase tracking-wider text-primary bg-secondary border border-outline px-scale-sm-3 py-1 rounded-full">
            Transparent Pipeline
          </span>
          <h2 className="font-display font-bold text-headline-xl text-primary mt-scale-sm-3">How It Works</h2>
          <p className="font-body text-body-md text-muted-gray mt-scale-sm-2 leading-relaxed">
            Our 4-step onboarding journey ensures credential excellence and rapid client alignment:
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-scale-sm-6 mb-scale-md-12">
          {[
            { n: 1, color: "bg-primary", title: "Submit Registration", desc: "Complete the professional registration form and upload the required documents, certificates, and ID proofs." },
            { n: 2, color: "bg-accent", title: "Profile Verification", desc: "Our team reviews your submitted information and professional credentials against official council databases (ICAI, ICSI, Bar Council)." },
            { n: 3, color: "bg-tertiary", title: "Onboarding & Approval", desc: "Eligible professionals are contacted for onboarding, partnership agreement execution, and profile directory activation." },
            { n: 4, color: "bg-primary", title: "Start Collaborating", desc: "Explore opportunities to connect with startups and business owners requiring specialized advisory, compliance, and legal filings." },
          ].map((step) => (
            <article key={step.n} className="p-scale-sm-6 rounded-xl border border-outline bg-surface card-shadow relative">
              <div className={`w-scale-md-10 h-scale-md-10 rounded-full ${step.color} text-white font-display font-bold text-label-md flex items-center justify-center mb-scale-sm-5`}>{step.n}</div>
              <h3 className="font-display font-bold text-headline-sm text-primary">{step.title}</h3>
              <p className="font-body text-body-sm text-muted-gray mt-scale-sm-2 leading-relaxed">{step.desc}</p>
            </article>
          ))}
        </div>

        {/* Verification Callout */}
        <div className="rounded-2xl border border-outline bg-surface overflow-hidden shadow-lg grid grid-cols-1 lg:grid-cols-12 items-center">
          <div className="lg:col-span-5 aspect-[4/3] lg:aspect-auto h-full">
            <img
              src="/images/business-compliance.jpg"
              alt="EStartUp India credential audit officers verifying ICAI and Bar Council records"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="lg:col-span-7 p-scale-sm-10 flex flex-col justify-center">
            <div className="inline-flex items-center gap-scale-sm-2 bg-secondary border border-outline px-scale-sm-3 py-1 rounded-full font-label text-label-xs text-primary font-bold mb-scale-sm-3 self-start">
              {/* @ts-expect-error iconify-icon is a web component */}
              <iconify-icon icon="lucide:shield-check" className="text-tertiary" />
              <span>48-Hour Turnaround</span>
            </div>
            <h3 className="font-display font-bold text-headline-md text-primary">Rigorous Council-Backed Verification</h3>
            <p className="font-body text-body-sm text-muted-gray mt-scale-sm-2 leading-relaxed">
              Every applicant undergoes primary credential verification via authorized registrar databases. Once authenticated, your profile is showcased with verified credentials to over 10,000+ venture-backed and bootstrapped founders across India.
            </p>
            <div className="mt-scale-sm-6 flex flex-wrap items-center gap-scale-sm-6 font-body text-body-xs text-charcoal">
              {["Automated COP Validation", "Zero Empanelment Fee", "Dedicated Relationship Desk"].map((item) => (
                <div key={item} className="flex items-center gap-scale-sm-2">
                  {/* @ts-expect-error iconify-icon is a web component */}
                  <iconify-icon icon="lucide:check-circle-2" className="text-tertiary text-body-md" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
