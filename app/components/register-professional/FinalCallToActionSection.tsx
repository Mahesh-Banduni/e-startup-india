import Link from "next/link";

export default function FinalCallToActionSection() {
  return (
    <section className="py-scale-lg-20 bg-white">
      <div className="max-w-5xl mx-auto px-scale-md-12">
        <div className="rounded-2xl bg-secondary border border-outline p-scale-sm-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-scale-sm-8 items-center">
            <div className="lg:col-span-4 aspect-[4/3] rounded-xl overflow-hidden border border-outline shadow-md">
              <img
                src="/images/business-registration.jpg"
                alt="EStartUp India dedicated partner relations officer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="lg:col-span-5">
              <span className="font-label text-label-xs font-bold uppercase tracking-wider text-primary bg-white border border-outline px-scale-sm-3 py-1 rounded-full">
                Partner Support Desk
              </span>
              <h2 className="font-display font-bold text-headline-lg text-primary mt-scale-sm-2">
                Need Help with Registration?
              </h2>
              <p className="font-body text-body-md text-muted-gray mt-scale-sm-2 leading-relaxed">
                Have questions about joining our network? Speak with our empanelment desk for guidance on council validation.
              </p>
              <div className="mt-scale-sm-5 space-y-scale-sm-3 font-body text-body-sm">
                <a href="mailto:partners@estartupindia.com" className="flex items-center gap-scale-sm-2.5 text-primary hover:text-accent font-semibold transition-colors">
                  <div className="w-scale-sm-8 h-scale-sm-8 rounded-full bg-white border border-outline flex items-center justify-center text-accent">
                    {/* @ts-expect-error iconify-icon is a web component */}
                    <iconify-icon icon="lucide:mail" />
                  </div>
                  <span>partners@estartupindia.com</span>
                </a>
                <a href="tel:+918881068681" className="flex items-center gap-scale-sm-2.5 text-primary hover:text-accent font-semibold transition-colors">
                  <div className="w-scale-sm-8 h-scale-sm-8 rounded-full bg-white border border-outline flex items-center justify-center text-accent">
                    {/* @ts-expect-error iconify-icon is a web component */}
                    <iconify-icon icon="lucide:phone-call" />
                  </div>
                  <span>+91 88810 68681</span>
                </a>
              </div>
            </div>
            <div className="lg:col-span-3 text-left lg:text-right flex flex-col items-start lg:items-end justify-center">
              <span className="font-label text-label-xs text-muted-gray block mb-scale-sm-3 font-medium">
                Monday to Saturday • 9 AM - 7 PM
              </span>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center font-label text-label-md text-on-accent bg-accent hover:bg-[#E56000] px-scale-sm-7 py-scale-sm-3.5 rounded-DEFAULT font-bold shadow-md transition-all focus-visible:ring-2 focus-visible:ring-primary w-full sm:w-auto"
              >
                <span>Contact Desk</span>
                {/* @ts-expect-error iconify-icon is a web component */}
                <iconify-icon icon="lucide:arrow-right" className="ml-scale-sm-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
