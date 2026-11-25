const faqs = [
  { q: "How long does Private Limited Company registration take?", a: "With our direct MCA V3 API integration, standard Pvt Ltd incorporation typically completes within 5–7 business days, subject to government processing times and document completeness." },
  { q: "What documents are required for DPIIT Startup India recognition?", a: "You'll need the Certificate of Incorporation, Memorandum of Association, PAN of the company, founder IDs, a brief description of the innovation or scalable business model, and a self-certification of eligibility criteria under DPIIT guidelines." },
  { q: "Can EStartUp India handle multi-state GST compliance?", a: "Yes. Our GST practice wing manages GST registrations across all 28 Indian states, monthly GSTR-1/3B filings, annual GST audits, and handles GST notices and scrutiny responses." },
  { q: "Do you offer post-incorporation annual compliance packages?", a: "Absolutely. Every incorporated entity is offered a comprehensive Annual Compliance Package covering ROC filings, board meeting minutes, director KYC, income tax returns, and AGM compliances at a fixed annual retainer." },
];

export default function FaqSection() {
  return (
    <section className="py-scale-lg-24 bg-white">
      <div className="max-w-4xl mx-auto px-scale-md-12">
        <div className="text-center mb-scale-md-14">
          <div className="inline-flex items-center gap-1.5 px-scale-sm-3 py-1 rounded-full bg-secondary border border-outline text-primary font-label text-label-xs font-bold uppercase tracking-wider mb-scale-sm-3">
            {/* @ts-expect-error iconify-icon is a web component */}
            <iconify-icon icon="lucide:help-circle" className="text-accent" />
            Frequently Asked
          </div>
          <h2 className="font-display font-bold text-headline-xl-mobile md:text-headline-xl text-primary tracking-tight">Common Questions</h2>
        </div>
        <div className="space-y-scale-sm-4">
          {faqs.map((faq) => (
            <details key={faq.q} className="group bg-secondary border border-outline rounded-xl overflow-hidden">
              <summary className="flex items-center justify-between p-scale-sm-6 cursor-pointer font-label text-base sm:text-label-lg font-semibold text-primary list-none gap-scale-sm-3">
                <span>{faq.q}</span>
                {/* @ts-expect-error iconify-icon is a web component */}
                <iconify-icon icon="lucide:chevron-down" className="shrink-0 transition-transform duration-200 group-open:rotate-180 text-muted-gray ml-scale-sm-2" />
              </summary>
              <div className="faq-content px-scale-sm-6 pb-scale-sm-6 font-body text-body-sm sm:text-body-md text-muted-gray leading-relaxed">{faq.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
