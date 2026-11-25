export default function JourneySection() {
  return (
    <section className="py-scale-lg-20 bg-secondary border-y border-outline">
      <div className="max-w-7xl mx-auto px-scale-lg-12">
        <div className="max-w-2xl mx-auto text-center mb-scale-lg-16">
          <span className="font-label text-label-xs uppercase tracking-wider text-primary font-bold bg-white border border-outline px-scale-sm-3 py-1 rounded-full">
            15+ YEARS OF INSTITUTIONAL EXCELLENCE
          </span>
          <h2 className="font-display font-bold text-headline-xl text-primary mt-scale-sm-3">
            Our Journey &amp; Milestones
          </h2>
          <p className="font-body text-body-md text-muted-gray mt-scale-sm-2">
            From a boutique corporate law practice in Connaught Place to
            India&apos;s premier startup facilitator.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-scale-sm-6">
          {[
            {
              year: "2011 • Inception",
              title: "New Delhi Legal Desk",
              desc: "Founded by senior corporate advocates and company secretaries in Connaught Place to simplify MCA registrations for early tech founders.",
              badge: "First 500 Pvt Ltd Setups",
            },
            {
              year: "2016 • DPIIT Alignment",
              title: "Startup India Mission",
              desc: "Empaneled as an accredited facilitation partner following the launch of the national Startup India initiative, pioneering Section 80-IAC tax holiday filings.",
              badge: "National Facilitator Badge",
            },
            {
              year: "2021 • Digital Cloud Desk",
              title: "Proprietary Filing Stack",
              desc: "Launched automated MCA e-filing pipelines and statutory dashboard, reducing business formation turnaround times by over 60%.",
              badge: "ISO 9001:2015 Audited",
            },
            {
              year: "Present • Pan-India Network",
              title: "Pan-India Scale",
              desc: "Operating across all 28 Indian States with 150+ empaneled chartered accountants, CS practitioners, and trademark attorneys nationwide.",
              badge: "Pan-India Presence",
            },
          ].map((m) => (
            <div
              key={m.year}
              className="p-scale-sm-6 rounded-xl bg-white border border-outline card-shadow flex flex-col justify-between"
            >
              <div>
                <span className="inline-block px-scale-sm-3 py-1 rounded-md bg-secondary text-primary font-mono font-bold text-label-sm border border-outline mb-scale-sm-4">
                  {m.year}
                </span>
                <h3 className="font-display font-bold text-headline-sm text-primary">
                  {m.title}
                </h3>
                <p className="font-body text-body-xs text-muted-gray mt-scale-sm-2 leading-relaxed">
                  {m.desc}
                </p>
              </div>
              <div className="pt-scale-sm-4 mt-scale-sm-6 border-t border-outline flex items-center gap-scale-sm-2 text-primary font-label text-label-xs font-semibold">
                {/* @ts-expect-error iconify-icon is a web component */}
                <iconify-icon icon="lucide:check" className="text-tertiary" />
                <span>{m.badge}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
