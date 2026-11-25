"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer id="contact" className="bg-primary text-white border-t border-primary/30 pt-scale-lg-16 pb-scale-md-8">
      <div className="max-w-7xl mx-auto px-scale-md-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-9 gap-scale-md-12 pb-scale-md-14 border-b border-white/10">
          {/* Column 1: Brand */}
          <div className="md:col-span-2 lg:col-span-4">
            <div className="flex items-center gap-scale-sm-3">
              <div className="w-scale-lg-34 h-scale-lg-34 flex items-center justify-center">
                <img
                  src="/images/white-logo.png"
                  alt="EStartUp India Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              {/* <div className="flex flex-col">
                <span className="font-display font-bold text-headline-sm tracking-tight leading-none text-white">
                  E<span className="text-white">STARTUP</span>{" "}
                  <span className="text-white">INDIA</span>
                </span>
                <span className="font-label text-label-xs text-white/70 uppercase mt-0.5">
                  Innovate • Inspire • Grow
                </span>
              </div> */}
            </div>
            <p className="mt-scale-sm-5 font-body text-body-sm text-white/70 max-w-sm leading-relaxed">
              EStartup India is a premier startup consultancy in India,
              empowering entrepreneurs with seamless company registration,
              Startup India DPIIT recognition, tax compliance, and funding
              guidance.
            </p>
            {/* Social icons */}
            <div className="mt-scale-sm-6 flex items-center gap-scale-sm-3">
              {[
                { icon: "lucide:linkedin", label: "LinkedIn" },
                { icon: "lucide:twitter", label: "Twitter / X" },
                { icon: "lucide:facebook", label: "Facebook" },
                { icon: "lucide:youtube", label: "YouTube" },
              ].map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="w-scale-sm-9 h-scale-sm-9 rounded-lg bg-white/5 hover:bg-accent text-white/80 hover:text-white flex items-center justify-center transition-colors"
                >
                  {/* @ts-expect-error iconify-icon is a web component */}
                  <iconify-icon icon={s.icon} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="font-display font-bold font-label text-label-lg text-white tracking-wide">
              Quick Links
            </h4>
            <ul className="mt-scale-sm-5 space-y-scale-sm-3 font-body text-body-sm text-white/70">
              <li><Link href="/about" className="hover:text-accent transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-accent transition-colors">Our Services</Link></li>
              <li><Link href="/#process" className="hover:text-accent transition-colors">Compliance Guide</Link></li>
              <li><Link href="/contact" className="hover:text-accent transition-colors">Client Reviews</Link></li>
              <li><Link href="/#why-choose-us" className="hover:text-accent transition-colors">Why Choose Us</Link></li>
              <li><Link href="/register-professional" className="hover:text-accent transition-colors">Join as Professional</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact Details */}
          <div className="lg:col-span-3">
            <h4 className="font-display font-bold font-label text-label-lg text-white tracking-wide">
              Contact Details
            </h4>
            <ul className="mt-scale-sm-5 space-y-scale-sm-3 font-body text-body-sm text-white/70">
              <li className="flex items-start gap-scale-sm-3">
                {/* @ts-expect-error iconify-icon is a web component */}
                <iconify-icon icon="lucide:map-pin" className="text-accent shrink-0 mt0.5" />
                <span>EStartUp India Corporate Tower, Connaught Place, New Delhi 110001, India</span>
              </li>
              <li className="flex items-center gap-scale-sm-3">
                {/* @ts-expect-error iconify-icon is a web component */}
                <iconify-icon icon="lucide:mail" className="text-accent shrink-0" />
                <a href="mailto:hello@estartupindia.com" className="hover:text-white transition-colors">
                  hello@estartupindia.com
                </a>
              </li>
              <li className="flex items-center gap-scale-sm-3">
                {/* @ts-expect-error iconify-icon is a web component */}
                <iconify-icon icon="lucide:phone" className="text-accent shrink-0" />
                <a href="tel:+918881068681" className="hover:text-white transition-colors">
                  +91 88810 68681
                </a>
              </li>
              <li className="flex items-center gap-scale-sm-3">
                {/* @ts-expect-error iconify-icon is a web component */}
                <iconify-icon icon="lucide:clock" className="text-accent shrink-0" />
                <span>Mon – Sat: 9:30 AM – 7:00 PM IST</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          {/* <div className="md:col-span-2 lg:col-span-3">
            <h4 className="font-display font-bold font-label text-label-lg text-white tracking-wide">
              Founder Notes, Monthly
            </h4>
            <p className="mt-scale-sm-4 font-body text-body-sm text-white/70 leading-relaxed">
              Essential Indian regulatory updates, tax deadlines, and DPIIT
              scheme alerts delivered directly to your inbox.
            </p>
            <form className="mt-scale-sm-5" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center bg-white/10 rounded-lg p-1 border border-white/20 focus-within:border-accent gap-2 sm:gap-0">
                <input
                  type="email"
                  placeholder="Enter work email"
                  aria-label="Email address for newsletter"
                  className="w-full bg-transparent px-scale-sm-3 py-scale-sm-2 font-body text-body-sm text-white placeholder-white/50 border-0 focus:ring-0 focus:outline-none"
                  required
                />
                <button
                  type="submit"
                  className="bg-accent hover:bg-[#E56000] text-on-accent px-scale-sm-4 py-scale-sm-2 rounded-DEFAULT font-semibold font-label text-label-sm transition-colors shrink-0 text-center"
                >
                  Join
                </button>
              </div>
              <span className="inline-block font-body text-body-xs text-white/50 mt-scale-sm-2">
                Zero spam. Unsubscribe anytime.
              </span>
            </form>
          </div> */}
        </div>

        {/* Bottom Bar */}
        <div className="mt-scale-md-8 flex flex-col sm:flex-row items-center justify-between gap-scale-sm-4 font-body text-body-xs text-white/60 text-center sm:text-left">
          <p>© 2026 EStartUp India. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-x-scale-sm-5 gap-y-scale-sm-3.5">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Refund &amp; Cancellation</a>
            <a href="#" className="hover:text-white transition-colors">Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
