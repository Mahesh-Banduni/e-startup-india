"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About Us" },
  { href: "/register-professional", label: "Join as Professional" },
  { href: "/#process", label: "How We Help" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 glass-header border-b border-outline transition-all duration-200">
      <div className="max-w-7xl mx-auto px-scale-md-12 h-scale-md-22 flex items-center justify-between">
        {/* BRAND LOGO */}
        <Link
          href="/"
          className="flex items-center gap-scale-sm-3.5 group shrink-0"
          aria-label="EStartUp India Homepage"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div className="w-scale-lg-22 h-scale-lg-22 flex items-center justify-center">
            <img
              src="/images/logo.png"
              alt="EStartUp India Logo"
              className="w-full h-full object-contain"
            />
          </div>
          {/* <div className="flex flex-col">
            <div className="flex items-center font-display font-extrabold text-base sm:text-headline-sm tracking-tight leading-none text-primary">
              <span>E</span>
              <span className="text-primary">STARTUP</span>
              <span className="text-tertiary ml-scale-sm-1.5">INDIA</span>
            </div>
            <span className="font-label text-[10px] sm:text-label-xs text-muted-gray uppercase mt-scale-sm-1 tracking-wider">
              Innovate • Inspire • Grow
            </span>
          </div> */}
        </Link>

        {/* CENTER NAVIGATION LINKS (DESKTOP) */}
        <nav className="hidden lg:flex items-center gap-scale-md-8 font-label text-label-md text-charcoal">
          {navLinks.map((link) => {
            const isActive =
              link.href !== "/"
                ? pathname === link.href || pathname.startsWith(link.href + "/")
                : pathname === "/";
            return (
              <Link
                key={link.href}
                href={link.href}
                className={
                  isActive
                    ? "text-primary font-bold border-b-2 border-accent pb-1"
                    : "hover:text-accent transition-colors"
                }
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* RIGHT ACTIONS */}
        <div className="flex items-center gap-scale-sm-4">
          <Link
            href="/contact"
            className="hidden sm:inline-flex font-label text-label-md text-primary font-semibold hover:text-accent transition-colors px-scale-sm-3 py-scale-sm-2"
          >
            Sign In
          </Link>
          <Button
            href="/contact"
            size="md"
            className="text-xs sm:text-label-md active:scale-95 shadow-md shadow-accent/20 shrink-0"
          >
            <span>Get Started</span>
            {/* @ts-expect-error iconify-icon is a web component */}
            <iconify-icon icon="lucide:arrow-right" className="text-sm sm:text-base" />
          </Button>

          {/* MOBILE MENU TOGGLE BUTTON */}
          <Button
            type="button"
            variant="secondary"
            size="sm"
            className="lg:hidden p2 rounded-lg"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {/* @ts-expect-error iconify-icon is a web component */}
            <iconify-icon
              icon={mobileMenuOpen ? "lucide:x" : "lucide:menu"}
              className="text-xl sm:text-2xl"
            />
          </Button>
        </div>
      </div>

      {/* MOBILE NAVIGATION DRAWER */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-outline bg-white/98 backdrop-blur-lg px-scale-sm-6 py-scale-sm-4 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-scale-sm-2 font-label text-body-md text-charcoal">
            {navLinks.map((link) => {
              const isActive =
                link.href !== "/"
                  ? pathname === link.href || pathname.startsWith(link.href + "/")
                  : pathname === "/";
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-scale-sm-3 py-scale-sm-2.5 rounded-lg transition-colors font-medium ${
                    isActive
                      ? "bg-secondary text-primary font-bold border-l-4 border-accent pl-scale-sm-3"
                      : "hover:bg-secondary hover:text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
          <div className="mt-scale-sm-4 pt-scale-sm-4 border-t border-outline flex flex-col sm:flex-row gap-scale-sm-2.5">
            <Button
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              variant="secondary"
              size="sm"
              className="text-center"
            >
              Sign In
            </Button>
            <Button
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              size="sm"
              className="text-center shadow-sm"
            >
              Book Free Consultation
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
