import { Button } from "../ui";

export default function HomeHeroSection() {
  return (
    <section className="relative overflow-hidden bg-surface pt-scale-lg-16 pb-scale-lg-24">
      <div className="max-w-7xl mx-auto px-scale-md-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-scale-lg-14 items-center">
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="inline-flex items-center gap-scale-sm-2 self-start bg-secondary border border-outline text-charcoal px-scale-sm-3.5 py-scale-sm-1.5 rounded-full font-label text-label-xs mb-scale-sm-6">
              <span className="flex w-scale-sm-2 h-scale-sm-2 rounded-full bg-accent shrink-0" />
              <span className="text-primary font-bold">India&apos;s Leading Startup Growth Partner</span>
              <span className="text-tertiary font-bold hidden xs:inline">• 100% Digital</span>
            </div>
            <h1 className="">
              Your All-in-One Partner to{" "}
              <span className="underline decoration-accent underline-offset-8">Launch &amp; Grow</span>{" "}
              Your Business in India.
            </h1>
            <p className="mt-scale-md-6 max-w-xl para-text-1">
              From Private Limited company incorporation and Startup India (DPIIT) recognition to GST filings, trademark IP protection, and funding strategy—our verified specialists handle complex legalities so you can focus on building.
            </p>
            <div className="mt-scale-md-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-scale-sm-4">
              <Button href="#consultation" size="lg" className="active:scale-[0.98] shadow-lg shadow-accent/25 text-center hover:shadow-xl hover:shadow-accent/30">
                <span>Start Your Journey</span>
                {/* @ts-expect-error iconify-icon is a web component */}
                <iconify-icon icon="lucide:arrow-up-right" />
              </Button>
              <Button href="/contact" variant="primary-outline" size="lg" className="active:scale-[0.98] font-bold text-center shadow-sm">
                {/* @ts-expect-error iconify-icon is a web component */}
                <iconify-icon icon="lucide:calendar-check-2" className="text-accent" />
                <span>Book Free Consultation</span>
              </Button>
            </div>
            <div className="mt-scale-md-10 pt-scale-sm-7 border-t border-outline flex flex-col sm:flex-row sm:items-center gap-scale-sm-4 sm:gap-scale-sm-6">
              <div className="flex -space-x-2.5">
                {["/images/founder-priya.jpg","/images/founder-arjun.jpg","/images/founder-sneha.jpg","/images/founder-rahul.jpg"].map((src, i) => (
                  <img key={i} src={src} alt="Indian startup founder" className="w-scale-md-10 h-scale-md-10 rounded-full border-2 border-white object-cover shadow-sm" />
                ))}
              </div>
              <div>
                <div className="flex items-center gap-scale-sm-1 text-primary">
                  {/* @ts-expect-error iconify-icon is a web component */}
                  {[...Array(5)].map((_, i) => <iconify-icon key={i} icon="lucide:star" className="text-accent text-sm sm:text-base" />)}
                  <span className="text-primary font-bold font-label text-label-sm ml-scale-sm-1.5">4.8 / 5.0</span>
                </div>
                <p className="font-body text-body-sm text-charcoal font-medium mt-0.5">
                  Trusted by <span className="font-bold text-primary">10,000+ Indian Startups</span> &amp; SMEs
                </p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-6 relative mt-scale-sm-4 lg:mt-0">
            <div className="relative rounded-2xl overflow-hidden bg-white border border-outline hero-shadow p-scale-sm-2">
              <div className="rounded-xl overflow-hidden relative aspect-[4/3] bg-surface-variant">
                <img src="/images/startup-founders.jpg" alt="Startup founders collaborating around a table" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />
              </div>
            </div>
            <div className="absolute -bottom-4 sm:-bottom-6 left-2 sm:left-4 max-w-[calc(100%-1rem)] bg-white rounded-xl p-scale-sm-4 card-shadow border border-outline flex items-center gap-scale-sm-3.5 z-10 shadow-md">
              <div className="w-scale-md-11 h-scale-md-11 rounded-lg bg-secondary text-tertiary flex items-center justify-center shrink-0">
                {/* @ts-expect-error iconify-icon is a web component */}
                <iconify-icon icon="lucide:shield-check" className="text-tertiary" />
              </div>
              <div>
                <div className="flex items-center gap-scale-sm-1.5">
                  <span className="text-tertiary font-bold font-label text-label-xs uppercase tracking-wider">DPIIT Recognized</span>
                  <span className="w-scale-sm-1.5 h-scale-sm-1.5 rounded-full bg-tertiary" />
                </div>
                <p className="font-display font-bold text-primary text-headline-sm leading-tight mt-0.5">100% Digital Workflow</p>
                <p className="font-body text-body-xs text-muted-gray">Zero physical office visits needed</p>
              </div>
            </div>
            <div className="absolute -top-4 sm:-top-5 right-2 sm:-right-3 max-w-[calc(100%-1rem)] bg-white rounded-xl py-scale-sm-3 px-scale-sm-4 card-shadow border border-outline flex items-center gap-scale-sm-3 z-10 shadow-md">
              <div className="w-scale-sm-9 h-scale-sm-9 rounded-full bg-secondary flex items-center justify-center text-primary shrink-0">
                {/* @ts-expect-error iconify-icon is a web component */}
                <iconify-icon icon="lucide:trophy" className="text-accent" />
              </div>
              <div>
                <p className="font-display font-bold text-primary font-label text-label-md leading-tight">#1 Startup Consultant</p>
                <p className="font-body text-body-xs text-muted-gray">Government Scheme Facilitation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
