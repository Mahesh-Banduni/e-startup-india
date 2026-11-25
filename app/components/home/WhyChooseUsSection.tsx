import { Button } from "../ui";

const whyPoints = [
  { icon: "lucide:zap", iconColor: "text-accent", title: "7-Day Pvt Ltd Incorporation", desc: "India's fastest MCA company registration through direct API integration with the Ministry of Corporate Affairs V3 portal." },
  { icon: "lucide:shield-check", iconColor: "text-tertiary", title: "ISO 9001:2015 Quality Assured", desc: "Every statutory submission undergoes dual-layer expert review before filing, ensuring a 99.4% government approval rate." },
  { icon: "lucide:users", iconColor: "text-primary", title: "150+ In-House Specialists", desc: "Full-time Chartered Accountants, Company Secretaries, Trademark Attorneys, and DPIIT-accredited facilitators—all under one roof." },
  { icon: "lucide:layout-dashboard", iconColor: "text-accent", title: "Real-Time Filing Dashboard", desc: "Track every document, government response, and compliance deadline in a secure, founder-facing client portal." },
];

export default function WhyChooseUsSection() {
  return (
    <section id="why-choose-us" className="py-scale-lg-24 bg-white">
      <div className="max-w-7xl mx-auto px-scale-md-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-scale-lg-16 items-center">
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-scale-sm-1.5 px-scale-sm-3 py-1 rounded-full bg-secondary border border-outline text-primary font-label text-label-xs font-bold uppercase tracking-wider mb-scale-sm-4">
              {/* @ts-expect-error iconify-icon is a web component */}
              <iconify-icon icon="lucide:award" className="text-accent" />
              Our Advantage
            </div>
            <h2 className="font-display font-bold text-headline-xl-mobile md:text-headline-xl text-primary tracking-tight">Why 10,000+ Founders Choose EStartUp India</h2>
            <p className="mt-scale-sm-4 font-body text-body-md text-muted-gray leading-relaxed text-pretty">We combine institutional legal rigor with the speed and transparency that modern Indian entrepreneurs demand.</p>
            <div className="mt-scale-sm-8">
              <Button href="/about" size="lg" className="font-bold shadow-md">
                <span>Read Our Story</span>
                {/* @ts-expect-error iconify-icon is a web component */}
                <iconify-icon icon="lucide:arrow-right" />
              </Button>
            </div>
          </div>
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-scale-sm-6 mt-scale-sm-6 lg:mt-0">
            {whyPoints.map((point) => (
              <div key={point.title} className="bg-white rounded-xl p-scale-sm-6 border border-outline card-shadow card-shadow-hover transition-all duration-200">
                <div className="w-scale-md-12 h-scale-md-12 rounded-lg bg-secondary flex items-center justify-center mb-scale-sm-4">
                  {/* @ts-expect-error iconify-icon is a web component */}
                  <iconify-icon icon={point.icon} className={`${point.iconColor} text-headline-sm`} />
                </div>
                <h3 className="font-display font-bold text-headline-sm text-primary">{point.title}</h3>
                <p className="font-body text-body-sm text-muted-gray mt-scale-sm-2 leading-relaxed">{point.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
