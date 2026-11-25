import { Button } from "../ui";

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
          <Button href="/contact" size="lg" className="shadow-md">
            Schedule Founder Call
          </Button>
        </div>
      </div>
    </section>
  );
}
