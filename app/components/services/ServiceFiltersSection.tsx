import { Button, Input } from "../ui";

export default function ServiceFiltersSection() {
  return (
    <section className="bg-secondary border-b border-outline py-scale-sm-6 sticky top-20 z-40">
      <div className="max-w-7xl mx-auto px-scale-md-12 flex flex-col md:flex-row items-center justify-between gap-scale-sm-4">
        <div className="flex flex-wrap items-center gap-scale-sm-2">
          <Button type="button" size="sm" variant="selected">
            All Services (8)
          </Button>
          {[
            "Registration & Startups",
            "Compliance & Taxation",
            "Funding & Advisory",
            "Trademark & IP",
          ].map((cat) => (
            <Button
              key={cat}
              type="button"
              variant="secondary"
              size="sm"
            >
              {cat}
            </Button>
          ))}
        </div>
        <div className="relative w-full md:w-72">
          {/* @ts-expect-error iconify-icon is a web component */}
          <iconify-icon
            icon="lucide:search"
            className="absolute left-3.5 top-3 text-muted-gray"
          />
          <Input
            type="text"
            placeholder="Search service, e.g. GST..."
            className="pl-scale-md-10 pr-scale-sm-4 py-scale-sm-2"
          />
        </div>
      </div>
    </section>
  );
}
