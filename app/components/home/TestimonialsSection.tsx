const testimonials = [
  { name: "Arjun Mehta", role: "Co-Founder, NexaTech Solutions", avatar: "/images/founder-arjun.jpg", rating: 5, text: "EStartUp India incorporated our Private Limited company within 6 days and handled DPIIT recognition seamlessly. Their portal is incredibly transparent—we knew the exact status at every step." },
  { name: "Priya Kapoor", role: "Founder, GreenLeaf Foods", avatar: "/images/founder-priya.jpg", rating: 5, text: "Their GST advisory team saved us ₹3.2 lakh in potential penalties during our first annual filing. Dedicated CA support and prompt responses make them our go-to compliance partner." },
  { name: "Rahul Singh", role: "CTO, FinVault India", avatar: "/images/founder-rahul.jpg", rating: 5, text: "Trademark registration was done in record time. The legal team handled our government objections with expertise. 10,000+ startups trust them—now I understand why." },
  { name: "Sneha Patel", role: "CEO, MedBridge Diagnostics", avatar: "/images/founder-sneha.jpg", rating: 5, text: "SISFS seed fund application and angel tax exemption were navigated expertly. The consultants truly understand startup-specific regulatory nuances." },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-scale-lg-24 bg-secondary border-y border-outline overflow-hidden">
      <div className="max-w-7xl mx-auto px-scale-md-12">
        <div className="max-w-2xl mx-auto text-center mb-scale-lg-16">
          <div className="inline-flex items-center gap-scale-sm-1.5 px-scale-sm-3 py-1 rounded-full bg-white border border-outline text-primary font-label text-label-xs font-bold uppercase tracking-wider mb-scale-sm-3">
            {/* @ts-expect-error iconify-icon is a web component */}
            <iconify-icon icon="lucide:star" className="text-accent" />
            Client Stories
          </div>
          <h2 className="font-display font-bold text-headline-xl-mobile md:text-headline-xl text-primary tracking-tight">What Founders Are Saying</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-scale-sm-6">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-white rounded-xl p-scale-sm-6 border border-outline card-shadow flex flex-col gap-scale-sm-4">
              <div className="flex items-center gap-1 text-accent">
                {/* @ts-expect-error iconify-icon is a web component */}
                {[...Array(t.rating)].map((_, i) => <iconify-icon key={i} icon="lucide:star" />)}
              </div>
              <p className="font-body text-body-sm text-muted-gray leading-relaxed flex-1">&ldquo;{t.text}&rdquo;</p>
              <div className="flex items-center gap-scale-sm-3 pt-scale-sm-4 border-t border-outline">
                <img src={t.avatar} alt={t.name} className="w-scale-md-10 h-scale-md-10 rounded-full object-cover border-2 border-outline shrink-0" />
                <div>
                  <p className="font-display font-bold font-label text-label-md text-primary">{t.name}</p>
                  <p className="font-body text-body-xs text-muted-gray">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
