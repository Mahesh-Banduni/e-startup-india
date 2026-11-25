"use client";
import { useRef, useState } from "react";

const serviceCards = [
  {
    title: "Business Registration Services",
    description:
      "Complete incorporation for Private Limited, LLP, OPC, and Partnership entities with fast-track MCA approvals, DIN, and corporate bank accounts.",
    image:
      "/images/business-registration.jpg",
    alt: "Business Registration Services",
    category: "registration",
  },
  {
    title: "Startup India Registration",
    description:
      "DPIIT recognition certification, Section 80-IAC 3-year income tax holiday, angel tax exemption, and fast-track access to government procurement tenders.",
    image:
      "/images/startup-founders.jpg",
    alt: "Startup India Registration",
    category: "registration",
  },
  {
    title: "Business Compliance Services",
    description:
      "End-to-end statutory compliance management, ROC annual filings, director KYC disclosures, board resolutions, and secretarial audit certifications.",
    image:
      "/images/business-compliance.jpg",
    alt: "Business Compliance Services",
    category: "compliance",
  },
  {
    title: "Taxation and GST Services",
    description:
      "Monthly GSTR-1 & GSTR-3B filings, annual GST audits, corporate income tax returns (ITR-6), TDS compliance, and proactive advance tax planning.",
    image:
      "/images/tax-advisory.jpg",
    alt: "Taxation and GST Services",
    category: "compliance",
  },
  {
    title: "Funding and Investment Assistance",
    description:
      "Investor-grade cap table structuring, Startup India Seed Fund (SISFS) grant applications, financial valuations, and VC term-sheet negotiation support.",
    image:
      "/images/funding-advisory.jpg",
    alt: "Funding and Investment Assistance",
    category: "funding",
  },
  {
    title: "Business Plan and Project Report Services",
    description:
      "Detailed Project Reports (DPR), bank loan CMA data formulations, institutional financial feasibility models, and investor-ready strategic pitch presentations.",
    image:
      "/images/business-planning.jpg",
    alt: "Business Plan Services",
    category: "funding",
  },
  {
    title: "Trademark and Intellectual Property Services",
    description:
      "Comprehensive brand name and logo trademark registration (™), international copyright filing, patent advisory, and legal objection defense.",
    image:
      "/images/intellectual-property.jpg",
    alt: "Trademark and IP Services",
    category: "ip",
  },
  {
    title: "Business Consultancy and Advisory Services",
    description:
      "Strategic growth advisory with seasoned CAs and CSs covering corporate restructuring, cross-border entity operations, and risk management frameworks.",
    image:
      "/images/business-consulting.jpg",
    alt: "Business Consultancy Services",
    category: "funding",
  },
];

export default function HomeServicesSection() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [isMarqueePaused, setIsMarqueePaused] = useState(false);
  const marqueeViewportRef = useRef<HTMLDivElement>(null);
  const marqueeTrackRef = useRef<HTMLDivElement>(null);

  const filteredServices = activeFilter === "all" ? serviceCards : serviceCards.filter((s) => s.category === activeFilter);
  const displayServices = [...filteredServices, ...filteredServices];

  function scrollCarousel(distance: number) {
    if (!marqueeViewportRef.current || !marqueeTrackRef.current) return;
    marqueeTrackRef.current.style.animationPlayState = "paused";
    marqueeViewportRef.current.scrollBy({ left: distance, behavior: "smooth" });
    if (!isMarqueePaused) {
      setTimeout(() => { if (marqueeTrackRef.current) marqueeTrackRef.current.style.animationPlayState = "running"; }, 700);
    }
  }

  function toggleMarquee() {
    if (!marqueeTrackRef.current) return;
    const paused = !isMarqueePaused;
    setIsMarqueePaused(paused);
    marqueeTrackRef.current.style.animationPlayState = paused ? "paused" : "running";
  }
  return (
    <section id="services" className="py-scale-lg-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-scale-md-12">
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-scale-sm-1.5 px-scale-sm-3 py-1 rounded-full bg-secondary border border-outline text-tertiary font-label text-label-xs font-bold uppercase tracking-wider mb-scale-sm-3">
            {/* @ts-expect-error iconify-icon is a web component */}
            <iconify-icon icon="lucide:sparkles" />
            End-to-End Startup Solutions
          </div>
          <h2 className="font-display font-bold text-headline-xl-mobile md:text-headline-xl text-primary tracking-tight">Our Services</h2>
          <p className="mt-scale-sm-3 font-body text-body-md text-muted-gray text-pretty">Comprehensive corporate incorporation, tax structuring, regulatory approvals, and advisory built for modern high-growth companies.</p>
        </div>
        <div className="mt-scale-sm-8 flex flex-col md:flex-row items-center justify-between gap-scale-sm-4 pb-scale-sm-4 border-b border-outline">
          <div className="flex flex-wrap items-center justify-center gap-scale-sm-2">
            {[{ key: "all", label: "All Services (8)" },{ key: "registration", label: "Registration" },{ key: "compliance", label: "Compliance & Tax" },{ key: "funding", label: "Funding & Plans" },{ key: "ip", label: "Trademark & IP" }].map((f) => (
              <button key={f.key} type="button" onClick={() => setActiveFilter(f.key)} className={activeFilter === f.key ? "bg-primary text-white px-scale-sm-3.5 py-scale-sm-1.5 rounded-full font-label text-label-xs font-semibold transition-colors" : "bg-white hover:bg-surface-variant text-charcoal border border-outline px-scale-sm-3.5 py-scale-sm-1.5 rounded-full font-label text-label-xs font-semibold transition-colors"}>{f.label}</button>
            ))}
          </div>
          <div className="flex items-center justify-between sm:justify-end w-full md:w-auto gap-scale-sm-3 shrink-0">
            <div className="flex items-center gap-scale-sm-1.5 bg-secondary border border-outline p-1 rounded-full">
              <button type="button" onClick={() => scrollCarousel(-344)} aria-label="Previous service" className="w-scale-sm-8 h-scale-sm-8 rounded-full bg-white hover:bg-primary hover:text-white text-primary border border-outline flex items-center justify-center transition-colors">
                {/* @ts-expect-error iconify-icon is a web component */}
                <iconify-icon icon="lucide:chevron-left" />
              </button>
              <button type="button" onClick={toggleMarquee} aria-label="Pause or play auto-scroll" className="w-scale-sm-8 h-scale-sm-8 rounded-full bg-white hover:bg-surface-variant text-charcoal border border-outline flex items-center justify-center transition-colors">
                {/* @ts-expect-error iconify-icon is a web component */}
                <iconify-icon icon={isMarqueePaused ? "lucide:play" : "lucide:pause"} />
              </button>
              <button type="button" onClick={() => scrollCarousel(344)} aria-label="Next service" className="w-scale-sm-8 h-scale-sm-8 rounded-full bg-white hover:bg-primary hover:text-white text-primary border border-outline flex items-center justify-center transition-colors">
                {/* @ts-expect-error iconify-icon is a web component */}
                <iconify-icon icon="lucide:chevron-right" />
              </button>
            </div>
            <a href="/services" className="inline-flex items-center gap-scale-sm-2 font-label text-label-sm font-bold text-on-accent bg-accent hover:bg-[#E56000] px-scale-sm-4 py-scale-sm-2 rounded-DEFAULT transition-all shadow-xs">
              <span>View All</span>
              {/* @ts-expect-error iconify-icon is a web component */}
              <iconify-icon icon="lucide:arrow-right" />
            </a>
          </div>
        </div>
      </div>
      <div ref={marqueeViewportRef} className="mt-scale-md-12 w-full overflow-x-auto service-carousel-scroll marquee-container marquee-mask py-scale-sm-4">
        <div ref={marqueeTrackRef} className="animate-marquee flex gap-scale-sm-6 items-stretch">
          {displayServices.map((card, idx) => (
            <article key={`${card.title}-${idx}`} className="w-[320px] shrink-0 bg-white rounded-xl border border-outline overflow-hidden card-shadow card-shadow-hover transition-all duration-200 flex flex-col justify-between group">
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-surface-variant border-b border-outline">
                <img src={card.image} alt={card.alt} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
              </div>
              <div className="p-scale-sm-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display font-bold text-headline-sm text-primary leading-tight group-hover:text-accent transition-colors">{card.title}</h3>
                  <p className="mt-scale-sm-2.5 font-body text-body-sm text-muted-gray leading-relaxed">{card.description}</p>
                </div>
                <div className="mt-scale-sm-6 pt-scale-sm-4 border-t border-outline">
                  <a href="/services" className="w-full inline-flex items-center justify-center font-label text-label-sm text-on-accent bg-accent hover:bg-[#E56000] px-scale-sm-4 py-scale-sm-2.5 rounded-DEFAULT font-bold transition-colors">
                    <span>View More</span>
                    {/* @ts-expect-error iconify-icon is a web component */}
                    <iconify-icon icon="lucide:arrow-right" className="ml-scale-sm-1.5" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
