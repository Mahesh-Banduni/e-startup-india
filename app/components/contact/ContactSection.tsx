"use client";
import { Button, Input, Label, Select, Textarea } from "../ui";

export default function ContactSection() {
  return (
    <section className="py-scale-lg-16 bg-surface relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-scale-md-12">
        <div className="max-w-3xl mb-scale-md-12">
          <div className="inline-flex items-center gap-scale-sm-2 bg-secondary border border-outline px-scale-sm-3.5 py-1.5 rounded-full font-label text-label-xs text-primary font-bold mb-scale-sm-4">
            {/* @ts-expect-error iconify-icon is a web component */}
            <iconify-icon icon="lucide:headset" className="text-accent" />
            Dedicated Startup Helpdesk
          </div>
          <h1 className="font-display font-bold text-display-lg-mobile md:text-headline-xl lg:text-display-lg text-primary tracking-tight leading-tight text-balance">
            Talk to an experienced business consultant today.
          </h1>
          <p className="mt-scale-sm-4 font-body text-body-lg text-muted-gray leading-relaxed text-pretty">
            Have questions about incorporating in India, DPIIT criteria, or
            tax filings? Get immediate clarity from our registered advocates
            and chartered accountants.
          </p>
        </div>

        {/* 2-COLUMN MAIN CONTACT LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-scale-md-12 items-start">
          {/* LEFT COLUMN: Consultation Form */}
          <div
            id="consultation-form"
            className="lg:col-span-7 bg-white rounded-2xl border border-outline p-scale-md-10 card-shadow"
          >
            <h2 className="font-display font-bold text-headline-sm text-primary mb-scale-sm-2">
              Book a Free 30-Minute Consultation
            </h2>
            <p className="font-body text-body-sm text-muted-gray mb-scale-md-8">
              Fill in your details and an assigned business consultant will
              connect with you via phone or Google Meet within 2 hours.
            </p>

            <form
              className="space-y-scale-sm-6"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-scale-sm-6">
                <div>
                  <Label htmlFor="founder-name">
                    Founder Name *
                  </Label>
                  <Input
                    id="founder-name"
                    type="text"
                    placeholder="e.g. Rahul Sharma"
                    required
                    variant="secondary"
                  />
                </div>
                <div>
                  <Label htmlFor="work-email">
                    Work Email *
                  </Label>
                  <Input
                    id="work-email"
                    type="email"
                    placeholder="rahul@venture.com"
                    required
                    variant="secondary"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-scale-sm-6">
                <div>
                  <Label htmlFor="phone-number">
                    Phone Number *
                  </Label>
                  <div className="flex items-center bg-secondary border border-outline rounded-DEFAULT focus-within:border-accent focus-within:ring-2 focus-within:ring-primary">
                    <span className="px-scale-sm-3 text-body-sm font-semibold text-muted-gray border-r border-outline">
                      +91
                    </span>
                    <Input
                      id="phone-number"
                      type="tel"
                      placeholder="98765 43210"
                      required
                      variant="unstyled"
                      className="w-full bg-transparent px-scale-sm-3 py-scale-sm-3 font-body text-body-sm text-charcoal placeholder-muted-gray focus:outline-none"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="service-interest">
                    Primary Service of Interest
                  </Label>
                  <Select id="service-interest" variant="secondary">
                    <option>Private Limited Incorporation</option>
                    <option>Startup India (DPIIT) Registration</option>
                    <option>Trademark &amp; IP Protection</option>
                    <option>GST &amp; Annual ROC Compliance</option>
                    <option>Seed Fund &amp; Investment Advisory</option>
                    <option>Other Corporate Inquiry</option>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="startup-query">
                  Startup Details or Query
                </Label>
                <Textarea
                  id="startup-query"
                  rows={4}
                  placeholder="Tell us briefly about your venture, business model, or current filing roadblock..."
                  variant="secondary"
                />
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-scale-sm-4 pt-scale-sm-2">
                <div className="flex items-center gap-scale-sm-2">
                  {/* @ts-expect-error iconify-icon is a web component */}
                  <iconify-icon
                    icon="lucide:lock"
                    className="text-tertiary"
                  />
                  <span className="font-body text-body-xs text-muted-gray">
                    100% Confidential • Non-Disclosure Bound
                  </span>
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full font-bold shadow-md shadow-accent/20 sm:w-auto"
                >
                  <span>Submit Request</span>
                  {/* @ts-expect-error iconify-icon is a web component */}
                  <iconify-icon icon="lucide:send" />
                </Button>
              </div>
            </form>
          </div>

          {/* RIGHT COLUMN: Office Details */}
          <div className="lg:col-span-5 flex flex-col gap-scale-sm-8">
            {/* Office Image */}
            <div className="rounded-2xl overflow-hidden bg-white border border-outline card-shadow p-scale-sm-2">
              <div className="rounded-xl overflow-hidden aspect-[4/3] bg-surface-variant relative">
                <img
                  src="/images/business-planning.jpg"
                  alt="EStartUp India consultants planning a startup strategy with clients"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
              </div>
            </div>

            {/* Contact Cards */}
            <div className="bg-secondary rounded-2xl p-scale-sm-7 border border-outline space-y-scale-sm-6">
              {/* Address */}
              <div className="flex items-start gap-scale-sm-4">
                <div className="w-scale-md-11 h-scale-md-11 rounded-lg bg-white border border-outline flex items-center justify-center text-primary shrink-0">
                  {/* @ts-expect-error iconify-icon is a web component */}
                  <iconify-icon
                    icon="lucide:map-pin"
                    className="text-accent text-headline-sm"
                  />
                </div>
                <div>
                  <h3 className="font-display font-bold font-label text-label-md text-primary">
                    National Corporate Headquarters
                  </h3>
                  <p className="font-body text-body-sm text-muted-gray mt-1 leading-relaxed">
                    EStartUp India Corporate Tower, 4th Floor, Barakhamba
                    Road, Connaught Place, New Delhi 110001, India
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap4">
                <div className="w-scale-md-11 h-scale-md-11 rounded-lg bg-white border border-outline flex items-center justify-center text-primary shrink-0">
                  {/* @ts-expect-error iconify-icon is a web component */}
                  <iconify-icon
                    icon="lucide:phone-call"
                    className="text-accent text-headline-sm"
                  />
                </div>
                <div>
                  <h3 className="font-display font-bold font-label text-label-md text-primary">
                    Toll-Free Founder Helpline
                  </h3>
                  <p className="font-body text-body-sm text-charcoal font-semibold mt-1">
                    +91 88810 68681
                  </p>
                  <p className="font-body text-body-xs text-muted-gray">
                    Monday through Saturday, 9:30 AM – 7:00 PM IST
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-scale-sm-4">
                <div className="w-scale-md-11 h-scale-md-11 rounded-lg bg-white border border-outline flex items-center justify-center text-primary shrink-0">
                  {/* @ts-expect-error iconify-icon is a web component */}
                  <iconify-icon
                    icon="lucide:mail"
                    className="text-accent text-headline-sm"
                  />
                </div>
                <div>
                  <h3 className="font-display font-bold font-label text-label-md text-primary">
                    Email Inquiries
                  </h3>
                  <p className="font-body text-body-sm text-charcoal font-semibold mt-1">
                    hello@estartupindia.com
                  </p>
                  <p className="font-body text-body-xs text-muted-gray">
                    Average response time: Under 45 minutes
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
