export default function EligibleSpecializationsSection() {
  return (
    <section className="py-scale-lg-20 bg-secondary border-y border-outline">
      <div className="max-w-7xl mx-auto px-scale-md-12">
        <div className="text-center max-w-3xl mx-auto mb-scale-md-14">
          <span className="font-label text-label-xs font-bold uppercase tracking-wider text-primary bg-white border border-outline px-scale-sm-3 py-1 rounded-full">
            Eligible Specializations
          </span>
          <h2 className="font-display font-bold text-headline-xl text-primary mt-scale-sm-3">
            Who Can Register?
          </h2>
          <p className="font-body text-body-md text-muted-gray mt-scale-sm-2 leading-relaxed">
            We empanel verified practitioners across 10 vital business and
            regulatory domains:
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-scale-sm-4">
          {[
            { icon: "lucide:calculator", iconColor: "text-accent", title: "Chartered Accountants", sub: "ICAI Accredited" },
            { icon: "lucide:file-text", iconColor: "text-tertiary", title: "Company Secretaries", sub: "ICSI Certified" },
            { icon: "lucide:scale", iconColor: "text-primary", title: "Cost Accountants", sub: "ICMAI Members" },
            { icon: "lucide:gavel", iconColor: "text-accent", title: "Lawyers & Legal", sub: "Bar Council Enrolled" },
            { icon: "lucide:receipt", iconColor: "text-tertiary", title: "Tax Consultants", sub: "GST & Direct Taxes" },
            { icon: "lucide:compass", iconColor: "text-primary", title: "Business Consultants", sub: "Strategy & Entity Design" },
            { icon: "lucide:coins", iconColor: "text-accent", title: "Financial Advisors", sub: "CMA & Capital Models" },
            { icon: "lucide:lightbulb", iconColor: "text-tertiary", title: "Startup Mentors", sub: "Incubation & Scaling" },
            { icon: "lucide:target", iconColor: "text-primary", title: "Marketing Consultants", sub: "Growth & GTM" },
            { icon: "lucide:shield", iconColor: "text-accent", title: "IP Consultants", sub: "Trademarks & Patents" },
          ].map((p) => (
            <div
              key={p.title}
              className="p-scale-sm-4 rounded-xl bg-white border border-outline text-center flex flex-col items-center justify-center hover:border-accent transition-colors"
            >
              <div className={`w-scale-md-10 h-scale-md-10 rounded-full bg-secondary ${p.iconColor} flex items-center justify-center mb-scale-sm-3`}>
                {/* @ts-expect-error iconify-icon is a web component */}
                <iconify-icon icon={p.icon} className="text-headline-sm" />
              </div>
              <h3 className="font-display font-bold text-label-sm text-primary">{p.title}</h3>
              <span className="font-body text-body-xs text-muted-gray mt-1">{p.sub}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
