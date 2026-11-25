export default function ConsultationSection() {
  return (
    <section id="consultation" className="py-scale-lg-20 bg-white">
      <div className="max-w-7xl mx-auto px-scale-md-12">
        <div className="relative overflow-hidden rounded-2xl bg-primary text-on-primary py-scale-lg-16 px-scale-lg-16 text-center card-shadow">
          <div className="relative z-10 max-w-3xl mx-auto">
        <span className="inline-flex items-center gap-scale-sm-2 px-scale-sm-3 py-1 rounded-full bg-white/10 text-white font-label text-label-xs font-bold border border-white/20 mb-scale-sm-6">
          {/* @ts-expect-error iconify-icon is a web component */}
          <iconify-icon icon="lucide:rocket" className="text-accent" />
          Free 30-Min Consultation
        </span>
        <h2 className="font-display font-bold text-headline-xl-mobile sm:text-headline-xl lg:text-display-lg text-white tracking-tight leading-tight text-balance">Ready to Launch Your Business in India?</h2>
        <p className="mt-scale-sm-4 font-body text-body-lg text-white/80 max-w-xl mx-auto leading-relaxed">Book a free strategy session with a senior CA or CS today and get a clear roadmap for incorporation, compliance, and growth.</p>
        <div className="mt-scale-md-10 flex flex-col sm:flex-row items-center justify-center gap-scale-sm-4">
          <a href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center font-label text-label-lg text-on-accent bg-accent hover:bg-[#E56000] px-scale-sm-8 py-scale-sm-4 rounded-DEFAULT font-bold shadow-lg transition-all text-center">
            <span>Book Free Consultation</span>
            {/* @ts-expect-error iconify-icon is a web component */}
            <iconify-icon icon="lucide:calendar-check-2" className="ml-scale-sm-2" />
          </a>
          <a href="tel:+918881068681" className="w-full sm:w-auto inline-flex items-center justify-center font-label text-label-lg text-white hover:text-accent bg-transparent hover:bg-white/10 border-2 border-white/80 px-scale-sm-8 py-scale-sm-3.5 rounded-DEFAULT font-bold transition-all text-center">
            {/* @ts-expect-error iconify-icon is a web component */}
            <iconify-icon icon="lucide:phone-call" className="mr-scale-sm-2 text-accent" />
            <span>+91 88810 68681</span>
          </a>
        </div>
          </div>
        </div>
      </div>
    </section>
  );
}
