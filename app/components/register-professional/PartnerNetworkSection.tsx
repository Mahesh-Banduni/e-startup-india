export default function PartnerNetworkSection() {
  return (
    <section className="py-scale-lg-20 bg-secondary border-y border-outline">
      <div className="max-w-4xl mx-auto px-scale-md-12">
        <div className="text-center max-w-2xl mx-auto mb-scale-md-14">
          <span className="font-label text-label-xs font-bold uppercase tracking-wider text-primary bg-white border border-outline px-scale-sm-3 py-1 rounded-full">
            Got Questions?
          </span>
          <h2 className="font-display font-bold text-headline-xl text-primary mt-scale-sm-3">
            Frequently Asked Questions (FAQs)
          </h2>
          <p className="font-body text-body-md text-muted-gray mt-scale-sm-2">
            Clear insights regarding registration, credential checks, and network engagement.
          </p>
        </div>
        <div className="space-y-scale-sm-4">
          {[
            { q: "Who can register as a professional?", a: "Chartered Accountants (CA), Company Secretaries (CS), Cost Accountants (CMA), Advocates, GST/Tax practitioners, Trademark attorneys, startup mentors, and experienced corporate business consultants holding active regulatory or institutional credentials." },
            { q: "Is professional registration free?", a: "Yes, registration with EStartUp India is completely free. There are no application fees, subscription costs, or hidden empanelment charges." },
            { q: "What documents are required for registration?", a: "You will need your highest professional qualification certificate, statutory membership/council enrollment card (e.g. ICAI COP, Bar ID), government ID proof (Aadhaar or PAN), and an updated resume/firm brochure." },
            { q: "How long does the verification process take?", a: "Our partner compliance desk usually completes document verification within 24 to 48 business hours, following which an onboarding specialist schedules an alignment call." },
            { q: "Can independent consultants register?", a: "Yes, solo practitioners, independent consultants, and boutique advisory firms can register. You do not need to be employed by a large corporate firm to partner with us." },
            { q: "Can I update my professional information later?", a: "Yes, once your partner account is active, you can update your working locations, service catalog, qualifications, and firm contact information via your partner dashboard or by emailing partners@estartupindia.com." },
            { q: "How will I receive business opportunities?", a: "Client requirements matching your specialization, location, and advisory tier are routed directly to your partner dashboard and registered WhatsApp/email with complete mandate briefs." },
            { q: "Does registration guarantee client opportunities?", a: "Opportunities are matched based on client demand, geographic jurisdiction, specialization, and partner response time. While registration provides access to our network pipeline, client engagement depends on verified mandate suitability." },
          ].map((faq) => (
            <details key={faq.q} className="group bg-white rounded-xl border border-outline py-scale-sm-5 px-scale-sm-4 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer font-display font-bold text-headline-sm text-primary group-hover:text-accent transition-colors">
                <span>{faq.q}</span>
                {/* @ts-expect-error iconify-icon is a web component */}
                <iconify-icon icon="lucide:chevron-down" className="text-primary text-headline-sm group-open:rotate-180 transition-transform" />
              </summary>
              <p className="font-body text-body-sm text-muted-gray mt-scale-sm-3 leading-relaxed pt-scale-sm-3 border-t border-outline">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
