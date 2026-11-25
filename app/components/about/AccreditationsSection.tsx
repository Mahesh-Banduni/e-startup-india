export default function AccreditationsSection() {
  return (
    <section className="py-scale-lg-20 bg-secondary border-y border-outline">
      <div className="max-w-7xl mx-auto px-scale-md-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-scale-md-12 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden border border-outline shadow-xl aspect-[4/3]">
              <img
                src="/images/business-compliance.jpg"
                alt="ISO compliance certifications and DPIIT recognition awards"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="lg:col-span-7 order-1 lg:order-2">
            <span className="font-label text-label-xs uppercase tracking-wider text-primary font-bold bg-white border border-outline px-scale-sm-3 py-1 rounded-full">
              CREDENTIALS &amp; ACCREDITATIONS
            </span>
            <h2 className="font-display font-bold text-headline-xl text-primary mt-scale-sm-3">
              Certified by India&apos;s Leading Regulatory Authorities
            </h2>
            <p className="font-body text-body-md text-muted-gray mt-scale-sm-2 leading-relaxed">
              Our firm practices under stringent statutory accreditations to
              guarantee corporate governance and legal adherence.
            </p>
            <div className="mt-scale-md-8 grid grid-cols-1 sm:grid-cols-2 gap-scale-sm-4">
              {[
                {
                  icon: "lucide:award",
                  iconColor: "text-accent",
                  title: "ISO 9001:2015 Certified",
                  desc: "International Quality Management standard for corporate legal consulting.",
                },
                {
                  icon: "lucide:badge-check",
                  iconColor: "text-tertiary",
                  title: "DPIIT Recognized Facilitator",
                  desc: "Official ecosystem enabler assisting Startup India registrations & grants.",
                },
                {
                  icon: "lucide:building-2",
                  iconColor: "text-primary",
                  title: "ICAI & ICSI Empaneled",
                  desc: "Active council membership ensuring statutory secretarial and audit veracity.",
                },
                {
                  icon: "lucide:shield",
                  iconColor: "text-accent",
                  title: "Bar Council Enrolled",
                  desc: "Corporate legal advocates with standing in High Courts and NCLT benches.",
                },
              ].map((acc) => (
                <div
                  key={acc.title}
                  className="p-scale-sm-4 rounded-xl bg-white border border-outline card-shadow flex items-start gap-scale-sm-3"
                >
                  <div className="w-scale-md-10 h-scale-md-10 rounded-lg bg-secondary text-primary flex items-center justify-center shrink-0">
                    {/* @ts-expect-error iconify-icon is a web component */}
                    <iconify-icon
                      icon={acc.icon}
                      className={`${acc.iconColor} text-headline-sm`}
                    />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-label-sm text-primary">
                      {acc.title}
                    </h4>
                    <p className="font-body text-body-xs text-muted-gray mt-0.5">
                      {acc.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
