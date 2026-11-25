import { Button } from "../ui";

export default function ProfessionalNetworkSection() {
  return (
    <section className="py-scale-lg-20 bg-white">
      <div className="max-w-7xl mx-auto px-scale-lg-12">
        <div className="rounded-2xl bg-primary text-white p-scale-md-14 relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 opacity-10 pointer-events-none">
            {/* @ts-expect-error iconify-icon is a web component */}
            <iconify-icon
              icon="lucide:network"
              className="text-[320px] text-white"
            />
          </div>
          <div className="max-w-3xl relative z-10">
            <span className="inline-flex items-center gap2 px3 py1 rounded-full bg-white/10 text-white font-label text-label-xs font-bold border border-white/20 mb-scale-sm-4">
              {/* @ts-expect-error iconify-icon is a web component */}
              <iconify-icon
                icon="lucide:handshake"
                className="text-accent"
              />
              Pan-India Partner Ecosystem
            </span>
            <h2 className="font-display font-bold text-headline-xl text-white">
              Are You a Practicing CA, CS, or Corporate Attorney?
            </h2>
            <p className="mt-scale-sm-4 font-body text-body-md text-white/80 leading-relaxed">
              Join EStartUp India&apos;s verified professional referral and
              advisory network. Empanel your independent practice to
              collaborate on high-growth startup mandates across 28 states
              with zero joining fees.
            </p>
            <div className="mt-scale-sm-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-scale-sm-4">
              <Button
                href="/register-professional"
                size="lg"
                className="font-bold shadow-lg text-center"
              >
                <span>Join as a Professional</span>
                {/* @ts-expect-error iconify-icon is a web component */}
                <iconify-icon icon="lucide:arrow-right" />
              </Button>
              <Button
                href="/contact"
                variant="dark-outline"
                size="md"
                className="border-white/20 bg-white/10 text-center hover:bg-white/20"
              >
                <span>Partner Desk Inquiry</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
