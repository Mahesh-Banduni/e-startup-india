export default function LeadershipSection() {
  return (
    <section className="py-scale-lg-20 bg-white">
      <div className="max-w-7xl mx-auto px-scale-lg-12">
        <div className="max-w-2xl mx-auto text-center mb-scale-lg-16">
          <span className="font-label text-label-xs uppercase tracking-wider text-primary font-bold">
            MEET THE LEADERSHIP
          </span>
          <h2 className="font-display font-bold text-headline-xl text-primary mt-scale-sm-2">
            Executive Counsel &amp; Practice Leads
          </h2>
          <p className="font-body text-body-md text-muted-gray mt-scale-sm-2">
            Decades of combined expertise across the Ministry of Corporate
            Affairs, DPIIT, and Direct Tax Boards.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-scale-sm-6">
          {[
            {
              img: "/images/founder-arjun.jpg",
              name: "Vikram Malhotra, FCA",
              role: "Managing Partner & Tax Lead",
              roleColor: "text-primary",
              bio: "Former Big-4 Director with 18+ years structuring cross-border Indian entity setups.",
            },
            {
              img: "/images/founder-priya.jpg",
              name: "Pooja Sen, FCS",
              role: "Head of Corporate Governance",
              roleColor: "text-tertiary",
              bio: "Company Secretary specializing in DPIIT recognitions and MCA filings.",
            },
            {
              img: "/images/founder-rahul.jpg",
              name: "Adv. Arjun Dave",
              role: "Principal IP & Counsel",
              roleColor: "text-primary",
              bio: "Intellectual property litigator managing 2,500+ registered trademarks.",
            },
            {
              img: "/images/founder-sneha.jpg",
              name: "Neha Singhania",
              role: "Director of Venture Growth",
              roleColor: "text-tertiary",
              bio: "Ex-VC operating partner assisting startups with pitch readiness and SISFS grants.",
            },
          ].map((member) => (
            <article
              key={member.name}
              className="bg-white rounded-xl border border-outline p-scale-sm-6 text-center card-shadow card-shadow-hover transition-all duration-200"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-scale-lg-24 h-scale-lg-24 rounded-full mx-auto object-cover border-2 border-outline mb-scale-sm-4"
              />
              <h3 className="font-display font-bold font-label text-label-lg text-primary">
                {member.name}
              </h3>
              <p
                className={`font-label text-label-xs ${member.roleColor} font-bold mt-1`}
              >
                {member.role}
              </p>
              <p className="font-body text-body-xs text-muted-gray mt-scale-sm-3 leading-relaxed">
                {member.bio}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
