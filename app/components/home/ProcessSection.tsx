const processSteps = [
  { num: "01", title: "Free Consultation", desc: "Connect with a senior CA or CS to map your exact requirements, applicable government scheme eligibility, and cost structure." },
  { num: "02", title: "Document Intake", desc: "Upload all required identity and address proofs securely through our encrypted cloud portal—no physical visits, fully paperless." },
  { num: "03", title: "Expert Filing", desc: "Our specialists submit all statutory forms directly to MCA V3, DPIIT, or GST portals with real-time verification and tracking." },
  { num: "04", title: "Delivery & Beyond", desc: "Receive your incorporation certificates, recognition letters, or compliance reports—and stay compliant with our annual retainer service." },
];

export default function ProcessSection() {
  return (
    <section id="process" className="py-scale-lg-24 bg-secondary border-y border-outline">
      <div className="max-w-7xl mx-auto px-scale-md-12">
        <div className="max-w-2xl mx-auto text-center mb-scale-lg-16">
          <div className="inline-flex items-center gap-scale-sm-1.5 px-scale-sm-3 py-1 rounded-full bg-white border border-outline text-primary font-label text-label-xs font-bold uppercase tracking-wider mb-scale-sm-3">
            {/* @ts-expect-error iconify-icon is a web component */}
            <iconify-icon icon="lucide:git-branch" className="text-accent" />
            Our Process
          </div>
          <h2 className="font-display font-bold text-headline-xl-mobile md:text-headline-xl text-primary tracking-tight">How We Help You Grow</h2>
          <p className="mt-scale-sm-3 font-body text-body-md text-muted-gray text-pretty">A streamlined 4-step journey from consultation to fully compliant business operations.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-scale-sm-8">
          {processSteps.map((step) => (
            <div key={step.num} className="bg-white rounded-xl p-scale-sm-6 border border-outline card-shadow flex flex-col">
              <div className="w-scale-md-12 h-scale-md-12 rounded-full bg-primary text-white flex items-center justify-center font-display font-bold text-base sm:text-headline-sm mb-scale-sm-5 shrink-0">{step.num}</div>
              <h3 className="font-display font-bold text-headline-sm text-primary">{step.title}</h3>
              <p className="font-body text-body-sm text-muted-gray mt-scale-sm-3 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-scale-md-12 h-scale-sm-2 rounded-full overflow-hidden timeline-track" />
      </div>
    </section>
  );
}
