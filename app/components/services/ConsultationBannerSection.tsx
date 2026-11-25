import Link from "next/link";

export default function ConsultationBannerSection() {
  return (
    <section className="py-scale-lg-20 bg-primary text-white text-center">
      <div className="max-w-4xl mx-auto px-scale-md-12">
        <h2 className="font-display font-bold text-headline-xl text-white">
          Need a Custom Multi-Service Retainer?
        </h2>
        <p className="mt-scale-sm-4 font-body text-body-md text-white/80 max-w-xl mx-auto">
          Our senior chartered accountants and corporate lawyers structure
          comprehensive annual packages for high-growth ventures.
        </p>
        <div className="mt-scale-md-8 flex flex-col sm:flex-row justify-center gap-scale-sm-4">
          <Link
            href="/contact"
            className="font-label text-label-md text-on-accent bg-accent hover:bg-[#E56000] px-scale-sm-8 py-scale-sm-3.5 rounded-DEFAULT font-bold shadow-md"
          >
            Schedule Founder Call
          </Link>
        </div>
      </div>
    </section>
  );
}
