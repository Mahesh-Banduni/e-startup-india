"use client";
import { useState } from "react";
import { Button, Input, Label, Select, Textarea } from "../ui";

export default function RegistrationFormSection() {
  const [currentStep, setCurrentStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const goToStep = (step: number) => {
    setCurrentStep(step);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const steps = [
    { n: 1, label: "Personal" },
    { n: 2, label: "Professional" },
    { n: 3, label: "Business" },
    { n: 4, label: "Services & Docs" },
    { n: 5, label: "Declaration" },
  ];
  return (
    <section id="registration-form" className="py-scale-lg-24 bg-surface">
      <div className="max-w-5xl mx-auto px-scale-md-12">
        <div className="text-center max-w-2xl mx-auto mb-scale-md-12">
          <span className="font-label text-label-xs font-bold uppercase tracking-wider text-primary bg-secondary border border-outline px-scale-sm-3 py-1 rounded-full">
            Application Portal
          </span>
          <h2 className="font-display font-bold text-headline-xl text-primary mt-scale-sm-3">
            Professional Registration Form
          </h2>
          <p className="font-body text-body-md text-muted-gray mt-scale-sm-2 leading-relaxed">
            Please complete all details accurately. Credential checks are
            completed within 48 business hours.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-outline card-shadow overflow-hidden">
          {/* Step Progress Indicator */}
          {!submitted && (
            <div className="bg-secondary border-b border-outline px-scale-sm-6 py-scale-sm-5">
              <div className="grid grid-cols-2 md:grid-cols-5 gap-scale-sm-2">
                {steps.map((s) => {
                  const isDone = s.n < currentStep;
                  const isActive = s.n === currentStep;
                  return (
                    <div
                      key={s.n}
                      className={`flex items-center gap-scale-sm-2 font-label text-label-xs font-bold ${isActive || isDone ? "text-primary" : "text-muted-gray"}`}
                    >
                      <span
                        className={`w-scale-sm-6 h-scale-sm-6 rounded-full flex items-center justify-center text-label-xs ${
                          isDone
                            ? "bg-tertiary text-white"
                            : isActive
                            ? "bg-primary text-white"
                            : "bg-white border border-outline text-muted-gray"
                        }`}
                      >
                        {isDone ? "✓" : s.n}
                      </span>
                      <span>{s.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="p-scale-md-10">
            {/* SUCCESS STATE */}
            {submitted && (
              <div className="text-center py12 px6">
                <div className="w-scale-md-16 h-scale-md-16 rounded-full bg-secondary text-tertiary flex items-center justify-center mx-auto mb-scale-sm-5 border border-outline">
                  {/* @ts-expect-error iconify-icon is a web component */}
                  <iconify-icon icon="lucide:check" className="text-headline-lg" />
                </div>
                <h3 className="font-display font-bold text-headline-md text-primary">
                  Registration Submitted Successfully!
                </h3>
                <p className="font-body text-body-md text-muted-gray max-w-lg mx-auto mt-scale-sm-2 leading-relaxed">
                  Thank you for applying to join the EStartUp India
                  Professional Partner Network. Your application ID is{" "}
                  <strong className="text-primary font-mono font-bold">
                    ESI-PRO-2026-8941
                  </strong>
                  . Our credential verification team will review your council
                  registrations and contact you within 48 business hours.
                </p>
                <div className="mt-scale-sm-8 flex flex-col sm:flex-row justify-center gap-scale-sm-4">
                  <Button
                    href="/"
                    variant="light"
                    size="sm"
                    className="font-semibold"
                  >
                    Return to Home
                  </Button>
                  <Button
                    href="/services"
                    size="sm"
                    className="font-bold"
                  >
                    Explore Services Catalog
                  </Button>
                </div>
              </div>
            )}

            {/* STEP 1: PERSONAL INFORMATION */}
            {!submitted && currentStep === 1 && (
              <div>
                <div className="mb-scale-sm-6 pb-scale-sm-4 border-b border-outline">
                  <h3 className="font-display font-bold text-headline-sm text-primary">A. Personal Information</h3>
                  <p className="font-body text-body-xs text-muted-gray mt-1">Primary contact points for correspondence and verification.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-scale-sm-6">
                  <div>
                    <Label htmlFor="fullName">Full Name <span className="text-primary font-bold">*</span></Label>
                    <Input id="fullName" type="text" name="fullName" placeholder="e.g. Adv. Rajesh Sharma" required />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address <span className="text-primary font-bold">*</span></Label>
                    <Input id="email" type="email" name="email" placeholder="rajesh@sharmalegal.in" required />
                  </div>
                  <div>
                    <Label htmlFor="mobileNumber">Mobile Number (WhatsApp Enabled) <span className="text-primary font-bold">*</span></Label>
                    <div className="flex items-center">
                      <span className="inline-flex items-center px-scale-sm-3.5 py-scale-sm-3 rounded-l-DEFAULT border border-r-0 border-outline bg-secondary text-primary font-semibold text-label-sm">+91</span>
                      <Input id="mobileNumber" type="tel" name="mobileNumber" placeholder="98765 43210" pattern="[0-9]{10}" required className="rounded-r-DEFAULT" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="alternateNumber">Alternate Contact Number</Label>
                    <Input id="alternateNumber" type="tel" name="alternateNumber" placeholder="Landline / Office Number" />
                  </div>
                </div>
                <div className="mt-scale-sm-8 flex justify-end">
                  <Button type="button" onClick={() => goToStep(2)} size="md" className="px-scale-sm-6 font-bold">
                    <span>Next: Professional Info</span>
                    {/* @ts-expect-error iconify-icon is a web component */}
                    <iconify-icon icon="lucide:arrow-right" />
                  </Button>
                </div>
              </div>
            )}

            {/* STEP 2: PROFESSIONAL INFORMATION */}
            {!submitted && currentStep === 2 && (
              <div>
                <div className="mb-scale-sm-6 pb-scale-sm-4 border-b border-outline">
                  <h3 className="font-display font-bold text-headline-sm text-primary">B. Professional Information</h3>
                  <p className="font-body text-body-xs text-muted-gray mt-1">Credentials, council registrations, and experience tenure.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-scale-sm-6">
                  <div>
                    <Label htmlFor="professionalCategory">Professional Category <span className="text-accent">*</span></Label>
                    <Select id="professionalCategory" name="professionalCategory" required>
                      <option value="">Select Category</option>
                      <option value="CA">Chartered Accountant (CA)</option>
                      <option value="CS">Company Secretary (CS)</option>
                      <option value="CMA">Cost Accountant (CMA)</option>
                      <option value="Lawyer">Lawyer &amp; Legal Consultant</option>
                      <option value="Tax">Tax Consultant</option>
                      <option value="Business">Business Consultant</option>
                      <option value="Financial">Financial Advisor</option>
                      <option value="Mentor">Startup Mentor</option>
                      <option value="Marketing">Marketing Consultant</option>
                      <option value="IP">Intellectual Property (IP) Consultant</option>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="qualification">Highest Qualification <span className="text-accent">*</span></Label>
                    <Input id="qualification" type="text" name="qualification" placeholder="e.g. FCA, FCS, LL.M, MBA Finance" required />
                  </div>
                  <div>
                    <Label htmlFor="specialization">Primary Specialization <span className="text-accent">*</span></Label>
                    <Input id="specialization" type="text" name="specialization" placeholder="e.g. Corporate Taxation, M&A, ROC Filings" required />
                  </div>
                  <div>
                    <Label htmlFor="yearsExperience">Total Years of Experience <span className="text-accent">*</span></Label>
                    <Select id="yearsExperience" name="yearsExperience" required>
                      <option value="">Select Experience Range</option>
                      <option value="1-3">1 to 3 Years</option>
                      <option value="3-5">3 to 5 Years</option>
                      <option value="5-10">5 to 10 Years</option>
                      <option value="10+">10+ Years (Senior Practice)</option>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="membershipNumber">Membership / Registration Number <span className="text-accent">*</span></Label>
                    <Input id="membershipNumber" type="text" name="membershipNumber" placeholder="e.g. ICAI MRN 512345 / Bar Enrollment D/123/2012" required />
                  </div>
                  <div>
                    <Label htmlFor="currentOrg">Current Organization / Firm Name <span className="text-accent">*</span></Label>
                    <Input id="currentOrg" type="text" name="currentOrg" placeholder="e.g. Sharma & Associates Chartered Accountants" required />
                  </div>
                </div>
                <div className="mt-scale-sm-8 flex flex-col-reverse sm:flex-row sm:justify-between gap-scale-sm-3">
                  <Button type="button" onClick={() => goToStep(1)} variant="light" size="md" className="px-scale-sm-5 text-charcoal hover:text-primary">
                    {/* @ts-expect-error iconify-icon is a web component */}
                    <iconify-icon icon="lucide:arrow-left" />
                    <span>Back</span>
                  </Button>
                  <Button type="button" onClick={() => goToStep(3)} size="md" className="px-scale-sm-6 font-bold">
                    <span>Next: Business Information</span>
                    {/* @ts-expect-error iconify-icon is a web component */}
                    <iconify-icon icon="lucide:arrow-right" />
                  </Button>
                </div>
              </div>
            )}

            {/* STEP 3: BUSINESS INFORMATION */}
            {!submitted && currentStep === 3 && (
              <div>
                <div className="mb-scale-sm-6 pb-scale-sm-4 border-b border-outline">
                  <h3 className="font-display font-bold text-headline-sm text-primary">C. Business &amp; Practice Information</h3>
                  <p className="font-body text-body-xs text-muted-gray mt-1">Physical office presence and digital verification profiles.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-scale-sm-6">
                  <div className="md:col-span-2">
                    <Label htmlFor="firmName">Company / Firm Registered Name <span className="text-accent">*</span></Label>
                    <Input id="firmName" type="text" name="firmName" placeholder="e.g. Apex Corporate Consultants LLP" required />
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="officeAddress">Office Address <span className="text-accent">*</span></Label>
                    <Input id="officeAddress" type="text" name="officeAddress" placeholder="Suite 402, Barakhamba Road, Connaught Place" required />
                  </div>
                  <div>
                    <Label htmlFor="city">City <span className="text-accent">*</span></Label>
                    <Input id="city" type="text" name="city" placeholder="New Delhi" required />
                  </div>
                  <div>
                    <Label htmlFor="state">State <span className="text-accent">*</span></Label>
                    <Select id="state" name="state" required>
                      <option value="">Select State / UT</option>
                      <option value="Delhi">Delhi</option>
                      <option value="Maharashtra">Maharashtra</option>
                      <option value="Karnataka">Karnataka</option>
                      <option value="Telangana">Telangana</option>
                      <option value="Tamil Nadu">Tamil Nadu</option>
                      <option value="Gujarat">Gujarat</option>
                      <option value="Uttar Pradesh">Uttar Pradesh</option>
                      <option value="Haryana">Haryana</option>
                      <option value="West Bengal">West Bengal</option>
                      <option value="Other">Other State / UT</option>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="pinCode">PIN Code <span className="text-accent">*</span></Label>
                    <Input id="pinCode" type="text" name="pinCode" placeholder="110001" pattern="[0-9]{6}" required />
                  </div>
                  <div>
                    <Label htmlFor="website">Website URL</Label>
                    <Input id="website" type="url" name="website" placeholder="https://www.yourfirm.in" />
                  </div>
                  <div>
                    <Label htmlFor="linkedin">LinkedIn Profile</Label>
                    <Input id="linkedin" type="url" name="linkedin" placeholder="https://linkedin.com/in/yourprofile" />
                  </div>
                </div>
                <div className="mt-scale-sm-8 flex flex-col-reverse sm:flex-row sm:justify-between gap-scale-sm-3">
                  <Button type="button" onClick={() => goToStep(2)} variant="light" size="md" className="px-scale-sm-5 text-charcoal hover:text-primary">
                    {/* @ts-expect-error iconify-icon is a web component */}
                    <iconify-icon icon="lucide:arrow-left" />
                    <span>Back</span>
                  </Button>
                  <Button type="button" onClick={() => goToStep(4)} size="md" className="px-scale-sm-6 font-bold">
                    <span>Next: Services &amp; Documents</span>
                    {/* @ts-expect-error iconify-icon is a web component */}
                    <iconify-icon icon="lucide:arrow-right" />
                  </Button>
                </div>
              </div>
            )}

            {/* STEP 4: SERVICES & DOCUMENTS */}
            {!submitted && currentStep === 4 && (
              <div>
                <div className="mb-scale-sm-6 pb-scale-sm-4 border-b border-outline">
                  <h3 className="font-display font-bold text-headline-sm text-primary">D. Services Offered</h3>
                  <p className="font-body text-body-xs text-muted-gray mt-1">Select all professional services you offer.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-scale-sm-3 mb-scale-sm-8">
                  {["Accounting & Auditing", "Company Registration", "GST Registration & Filing", "Income Tax Filing", "Legal Consultancy", "Company Compliance", "Trademark Registration", "Business Consultancy", "Funding Consultancy", "Other Services"].map((svc) => (
                    <Label key={svc} variant="plain" className="flex items-center gap-scale-sm-3 p-scale-sm-3.5 rounded-lg border border-outline bg-surface hover:bg-secondary cursor-pointer transition-colors">
                      <Input variant="unstyled" type="checkbox" name="services" value={svc} className="rounded text-accent focus:ring-accent border-outline" />
                      <span className="font-body text-body-sm text-charcoal font-medium">{svc}</span>
                    </Label>
                  ))}
                </div>

                <div className="mb-scale-sm-6 pb-scale-sm-4 border-b border-outline">
                  <h3 className="font-display font-bold text-headline-sm text-primary">E. Document Upload (PDF / JPG / PNG, Max 10MB)</h3>
                  <p className="font-body text-body-xs text-muted-gray mt-1">Uploaded documents are stored in 256-bit encrypted vaults for verification officers only.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-scale-sm-6 mb-scale-sm-8">
                  {[
                    { icon: "lucide:file-badge", iconColor: "text-accent", label: "Professional Certificate", required: true, hint: "Degree / Council Passing Certificate" },
                    { icon: "lucide:id-card", iconColor: "text-tertiary", label: "Government ID Proof", required: true, hint: "Aadhaar Card / PAN Card / Passport" },
                    { icon: "lucide:award", iconColor: "text-primary", label: "Professional Membership Certificate", required: false, hint: "COP or Council Enrollment Letter" },
                    { icon: "lucide:building", iconColor: "text-primary", label: "Company / Firm Registration Certificate", required: false, hint: "ROC Certificate / Partnership Deed (if applicable)" },
                  ].map((doc, index) => (
                    <div key={doc.label} className="p-scale-sm-4 rounded-xl border border-dashed border-outline bg-surface hover:bg-secondary/40 transition-colors">
                      <div className="flex items-center gap-scale-sm-3 mb-scale-sm-2">
                        {/* @ts-expect-error iconify-icon is a web component */}
                        <iconify-icon icon={doc.icon} className={`${doc.iconColor} text-headline-sm`} />
                        <Label htmlFor={`document-${index}`} variant="plain" className="font-label text-label-sm font-semibold text-charcoal">
                          {doc.label} {doc.required && <span className="text-primary font-bold">*</span>}
                        </Label>
                      </div>
                      <Input id={`document-${index}`} variant="unstyled" type="file" required={doc.required} className="w-full font-body text-body-xs text-muted-gray file:mr4 file:py-scale-sm-2 file:px-scale-sm-4 file:rounded-DEFAULT file:border-0 file:text-label-xs file:font-semibold file:bg-primary file:text-white hover:file:bg-primary/90" />
                      <span className="block font-body text-body-xs text-muted-gray mt-1.5">{doc.hint}</span>
                    </div>
                  ))}
                  <div className="p-scale-sm-4 rounded-xl border border-dashed border-outline bg-surface hover:bg-secondary/40 transition-colors md:col-span-2">
                    <div className="flex items-center gap-scale-sm-3 mb-scale-sm-2">
                      {/* @ts-expect-error iconify-icon is a web component */}
                      <iconify-icon icon="lucide:file-text" className="text-accent text-headline-sm" />
                      <Label htmlFor="profile-resume" variant="plain" className="font-label text-label-sm font-semibold text-charcoal">Profile / Resume <span className="text-primary font-bold">*</span></Label>
                    </div>
                    <Input id="profile-resume" variant="unstyled" type="file" required className="w-full font-body text-body-xs text-muted-gray file:mr4 file:py-scale-sm-2 file:px-scale-sm-4 file:rounded-DEFAULT file:border-0 file:text-label-xs file:font-semibold file:bg-primary file:text-white hover:file:bg-primary/90" />
                    <span className="block font-body text-body-xs text-muted-gray mt-1.5">Detailed curriculum vitae / firm practice brochure</span>
                  </div>
                </div>

                <div className="mt-scale-sm-8 flex flex-col-reverse sm:flex-row sm:justify-between gap-scale-sm-3">
                  <Button type="button" onClick={() => goToStep(3)} variant="light" size="md" className="px-scale-sm-5 text-charcoal hover:text-primary">
                    {/* @ts-expect-error iconify-icon is a web component */}
                    <iconify-icon icon="lucide:arrow-left" />
                    <span>Back</span>
                  </Button>
                  <Button type="button" onClick={() => goToStep(5)} size="md" className="px-scale-sm-6 font-bold">
                    <span>Next: Additional Info &amp; Declaration</span>
                    {/* @ts-expect-error iconify-icon is a web component */}
                    <iconify-icon icon="lucide:arrow-right" />
                  </Button>
                </div>
              </div>
            )}

            {/* STEP 5: DECLARATION */}
            {!submitted && currentStep === 5 && (
              <div>
                <div className="mb-scale-sm-6 pb-scale-sm-4 border-b border-outline">
                  <h3 className="font-display font-bold text-headline-sm text-primary">F. Additional Information</h3>
                  <p className="font-body text-body-xs text-muted-gray mt-1">Provide specific focus areas and operational preferences.</p>
                </div>
                <div className="space-y-scale-sm-6 mb-scale-sm-8">
                  <div>
                    <Label htmlFor="bio">Brief Professional Introduction <span className="text-accent">*</span></Label>
                    <Textarea id="bio" name="bio" rows={3} required placeholder="Describe your primary practice expertise, landmark assignments, and value proposition for Indian founders (100-250 words)..." />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-scale-sm-6">
                    <div>
                      <Label htmlFor="expertiseAreas">Specific Areas of Expertise <span className="text-accent">*</span></Label>
                      <Input id="expertiseAreas" type="text" name="expertiseAreas" placeholder="e.g. VC Term Sheets, Section 80-IAC, Secretarial Audits" required />
                    </div>
                    <div>
                      <Label htmlFor="preferredLocations">Preferred Working Locations <span className="text-accent">*</span></Label>
                      <Input id="preferredLocations" type="text" name="preferredLocations" placeholder="e.g. Delhi NCR, Remote / Pan-India, Mumbai" required />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="comments">Additional Comments / Client Preferences</Label>
                    <Textarea id="comments" name="comments" rows={2} placeholder="Any specific advisory arrangements, retainer expectations, or languages spoken..." />
                  </div>
                </div>

                <div className="mb-scale-sm-6 pb-scale-sm-4 border-b border-outline">
                  <h3 className="font-display font-bold text-headline-sm text-primary">G. Professional Declaration</h3>
                  <p className="font-body text-body-xs text-muted-gray mt-1">Please confirm statutory veracity before final submission.</p>
                </div>
                <div className="space-y-scale-sm-4 mb-scale-sm-8 py-scale-sm-5 rounded-xl bg-secondary/50 border border-outline">
                  <Label variant="plain" className="flex items-start gap-scale-sm-3 cursor-pointer">
                    <Input variant="unstyled" type="checkbox" name="declarationAccurate" required className="mt-1 rounded text-accent focus:ring-accent border-outline" />
                    <span className="font-body text-body-sm text-charcoal">
                      I confirm that the information provided in this registration form and all uploaded credential documents are true, accurate, and valid to the best of my knowledge.
                    </span>
                  </Label>
                  <Label variant="plain" className="flex items-start gap-scale-sm-3 cursor-pointer">
                    <Input variant="unstyled" type="checkbox" name="declarationTerms" required className="mt-1 rounded text-accent focus:ring-accent border-outline" />
                    <span className="font-body text-body-sm text-charcoal">
                      I agree to the{" "}
                      <a href="#" className="text-primary font-bold underline hover:text-accent">Terms and Conditions</a>,{" "}
                      <a href="#" className="text-primary font-bold underline hover:text-accent">Privacy Policy</a>, and understand that empanelment is subject to credential verification and onboarding approval.
                    </span>
                  </Label>
                </div>

                <div className="mt-scale-sm-8 flex flex-col-reverse sm:flex-row sm:justify-between sm:items-center gap-scale-sm-3">
                  <Button type="button" onClick={() => goToStep(4)} variant="light" size="md" className="px-scale-sm-5 text-charcoal hover:text-primary">
                    {/* @ts-expect-error iconify-icon is a web component */}
                    <iconify-icon icon="lucide:arrow-left" />
                    <span>Back</span>
                  </Button>
                  <Button type="submit" size="lg" className="font-bold shadow-md">
                    {/* @ts-expect-error iconify-icon is a web component */}
                    <iconify-icon icon="lucide:check-circle" />
                    <span>Register as a Professional</span>
                  </Button>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
