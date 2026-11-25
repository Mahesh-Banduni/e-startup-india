export default function PartnerAnnouncementBar() {
  return (
    <aside className="bg-primary text-on-primary border-b border-primary/20 px-scale-md-12">
    <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-scale-sm-2 font-body text-body-xs">
      <div className="flex items-center gap-scale-sm-6">
        <a
          href="tel:+918881068681"
          className="flex items-center gap-scale-sm-2 hover:text-accent transition-colors font-medium"
        >
          {/* @ts-expect-error iconify-icon is a web component */}
          <iconify-icon icon="lucide:phone-call" className="text-accent" />
          <span>+91 88810 68681</span>
        </a>
        <span className="hidden md:inline-block text-white/70">•</span>
        <a
          href="mailto:partners@estartupindia.com"
          className="hidden md:flex items-center gap-scale-sm-2 hover:text-accent transition-colors font-medium"
        >
          {/* @ts-expect-error iconify-icon is a web component */}
          <iconify-icon icon="lucide:mail" className="text-accent" />
          <span>partners@estartupindia.com</span>
        </a>
      </div>
      <div className="flex items-center gap-scale-sm-5 text-white/90">
        <span className="flex items-center gap-1.5 font-medium">
          {/* @ts-expect-error iconify-icon is a web component */}
          <iconify-icon icon="lucide:briefcase" className="text-accent" />
          Professional Partner Network Portal
        </span>
        <span className="hidden md:inline-block text-white/70">•</span>
        <span className="flex items-center gap-1.5 font-medium">
          {/* @ts-expect-error iconify-icon is a web component */}
          <iconify-icon icon="lucide:shield-check" className="text-white" />
          Verified Credentials
        </span>
      </div>
    </div>
  </aside>
  );
}
