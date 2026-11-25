import Link from "next/link";

const services = [
  {
    img: "/images/business-registration.jpg",
    alt: "Business Registration Services",
    title: "Business Registration Services",
    desc: "Complete incorporation for Private Limited, LLP, OPC, and Partnership entities with fast-track MCA approvals, DIN, and corporate bank accounts.",
  },
  {
    img: "/images/startup-founders.jpg",
    alt: "Startup India Registration",
    title: "Startup India Registration",
    desc: "DPIIT recognition certification, Section 80-IAC 3-year income tax holiday, angel tax exemption, and fast-track access to government procurement tenders.",
  },
  {
    img: "/images/business-compliance.jpg",
    alt: "Business Compliance Services",
    title: "Business Compliance Services",
    desc: "End-to-end statutory compliance management, ROC annual filings, director KYC disclosures, board resolutions, and secretarial audit certifications.",
  },
  {
    img: "/images/tax-advisory.jpg",
    alt: "Taxation and GST Services",
    title: "Taxation and GST Services",
    desc: "Monthly GSTR-1 & GSTR-3B filings, annual GST audits, corporate income tax returns (ITR-6), TDS compliance, and proactive advance tax planning.",
  },
  {
    img: "/images/funding-advisory.jpg",
    alt: "Funding and Investment Assistance",
    title: "Funding and Investment Assistance",
    desc: "Investor-grade cap table structuring, Startup India Seed Fund (SISFS) grant applications, financial valuations, and VC term-sheet negotiation support.",
  },
  {
    img: "/images/business-planning.jpg",
    alt: "Business Plan and Project Report Services",
    title: "Business Plan and Project Report Services",
    desc: "Detailed Project Reports (DPR), bank loan CMA data formulations, institutional financial feasibility models, and investor-ready strategic pitch presentations.",
  },
  {
    img: "/images/intellectual-property.jpg",
    alt: "Trademark and Intellectual Property Services",
    title: "Trademark and Intellectual Property Services",
    desc: "Comprehensive brand name and logo trademark registration (™), international copyright filing, patent advisory, and legal objection defense.",
  },
  {
    img: "/images/business-consulting.jpg",
    alt: "Business Consultancy and Advisory Services",
    title: "Business Consultancy and Advisory Services",
    desc: "Strategic growth advisory with seasoned CAs and CSs covering corporate restructuring, cross-border entity operations, and risk management frameworks.",
  },
];

export default function ServicesDirectorySection() {
  return (
    <section className="py-scale-lg-16 bg-white">
      <div className="max-w-7xl mx-auto px-scale-md-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-scale-sm-4 mb-scale-md-10 pb-scale-sm-6 border-b border-outline">
          <div>
            <span className="font-label text-label-xs font-bold uppercase tracking-wider text-primary bg-secondary border border-outline px-scale-sm-3 py-1 rounded-full">
              Core Offerings
            </span>
            <h2 className="font-display font-bold text-headline-xl text-primary mt-scale-sm-2">
              Comprehensive Startup &amp; Enterprise Services
            </h2>
            <p className="font-body text-body-sm text-muted-gray mt-1">
              End-to-end legal, regulatory, taxation, and advisory solutions
              tailored for Indian businesses.
            </p>
          </div>
          <div className="text-right shrink-0">
            <span className="font-label text-label-sm font-semibold text-charcoal bg-secondary border border-outline px-scale-sm-4 py-scale-sm-2 rounded-full inline-flex items-center gap-scale-sm-2">
              <span className="w-scale-sm-2 h-scale-sm-2 rounded-full bg-tertiary" />
              Showing 8 Professional Solutions
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-scale-sm-6">
          {services.map((svc) => (
            <article
              key={svc.title}
              className="bg-white rounded-xl border border-outline overflow-hidden card-shadow card-shadow-hover transition-all duration-200 flex flex-col justify-between group"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-surface-variant border-b border-outline">
                <img
                  src={svc.img}
                  alt={svc.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-scale-sm-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display font-bold text-headline-sm text-primary leading-tight">
                    {svc.title}
                  </h3>
                  <p className="font-body text-body-sm text-muted-gray mt-scale-sm-2.5 leading-relaxed">
                    {svc.desc}
                  </p>
                </div>
                <div className="mt-scale-sm-6 pt-scale-sm-4 border-t border-outline">
                  <Link
                    href="/contact"
                    className="w-full inline-flex items-center justify-center font-label text-label-sm text-on-accent bg-accent hover:bg-[#E56000] px-scale-sm-4 py-scale-sm-2.5 rounded-DEFAULT font-bold transition-colors focus-visible:ring-2 focus-visible:ring-primary"
                  >
                    <span>View More</span>
                    {/* @ts-expect-error iconify-icon is a web component */}
                    <iconify-icon
                      icon="lucide:arrow-right"
                      className="ml-1.5"
                    />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
