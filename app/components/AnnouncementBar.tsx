
"use client";

export default function AnnouncementBar() {
  return (
    <aside className="bg-primary text-on-primary border-b border-primary/20 px-scale-md-12 py-scale-sm-2 overflow-hidden">
      <div className="max-w-7xl mx-auto font-body text-body-xs">

        {/* Mobile: Automatic marquee */}
        <div className="sm:hidden overflow-hidden whitespace-nowrap">
          <div className="flex w-max animate-marquee items-center gap-8">
            <span className="flex items-center gap-2 font-medium">
              {/* @ts-expect-error iconify-icon is a web component */}
              <iconify-icon icon="lucide:phone-call" className="text-accent" />
              +91 88810 68681
            </span>

            <span className="flex items-center gap-2 font-medium">
              {/* @ts-expect-error iconify-icon is a web component */}
              <iconify-icon icon="lucide:mail" className="text-accent" />
              hello@estartupindia.com
            </span>

            <span className="flex items-center gap-2 font-medium">
              {/* @ts-expect-error iconify-icon is a web component */}
              <iconify-icon icon="lucide:shield-check" />
              ISO 9001:2015 Certified Consultancy
            </span>

            <span className="flex items-center gap-2 font-medium">
              {/* @ts-expect-error iconify-icon is a web component */}
              <iconify-icon icon="lucide:badge-percent" className="text-accent" />
              DPIIT Recognized Startup Facilitator
            </span>

            {/* Duplicate content for seamless scrolling */}
            <span className="flex items-center gap-2 font-medium">
              {/* @ts-expect-error iconify-icon is a web component */}
              <iconify-icon icon="lucide:phone-call" className="text-accent" />
              +91 88810 68681
            </span>

            <span className="flex items-center gap-2 font-medium">
              {/* @ts-expect-error iconify-icon is a web component */}
              <iconify-icon icon="lucide:mail" className="text-accent" />
              hello@estartupindia.com
            </span>

            <span className="flex items-center gap-2 font-medium">
              {/* @ts-expect-error iconify-icon is a web component */}
              <iconify-icon icon="lucide:shield-check" />
              ISO 9001:2015 Certified Consultancy
            </span>

            <span className="flex items-center gap-2 font-medium">
              {/* @ts-expect-error iconify-icon is a web component */}
              <iconify-icon icon="lucide:badge-percent" className="text-accent" />
              DPIIT Recognized Startup Facilitator
            </span>
          </div>
        </div>

        {/* Desktop: Original static layout */}
        <div className="hidden sm:flex items-center justify-between gap-scale-sm-2">
          <div className="flex items-center gap-scale-md-6">
            <a href="tel:+918881068681" className="flex items-center gap-2 hover:text-accent transition-colors font-medium">
              {/* @ts-expect-error iconify-icon is a web component */}
              <iconify-icon icon="lucide:phone-call" className="text-accent" />
              +91 88810 68681
            </a>

            <span className="hidden md:inline-block text-white/70">•</span>

            <a href="mailto:hello@estartupindia.com" className="hidden md:flex items-center gap-2 hover:text-accent transition-colors font-medium">
              {/* @ts-expect-error iconify-icon is a web component */}
              <iconify-icon icon="lucide:mail" className="text-accent" />
              hello@estartupindia.com
            </a>
          </div>

          <div className="flex items-center gap-5 text-white/90">
            <span className="flex items-center gap-2 font-medium">
              {/* @ts-expect-error iconify-icon is a web component */}
              <iconify-icon icon="lucide:shield-check" />
              ISO 9001:2015 Certified Consultancy
            </span>

            <span className="hidden lg:inline-block text-white/70">•</span>

            <span className="hidden lg:flex items-center gap-2 font-medium">
              {/* @ts-expect-error iconify-icon is a web component */}
              <iconify-icon icon="lucide:badge-percent" className="text-accent" />
              DPIIT Recognized Startup Facilitator
            </span>
          </div>
        </div>
      </div>
    </aside>
  );
}
