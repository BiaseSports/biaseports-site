// components/TrainingPlansSection.jsx
import Link from "next/link";

export default function TrainingPlansSection() {
  // Monthly plans + services (ids match the /plans/* page slugs)
  const plans = [
    // ---- Monthly Plans ----
    {
      id: "starter",
      name: "Starter (Monthly)",
      price: "$180 / month",
      tagline: "Foundation & consistency",
      highlights: [
        "4 sessions per month",
        "Technical foundations & homework",
        "Progress toward Sock Levels",
      ],
      badge: "",
      group: "monthly",
      cta: "Choose Starter",
    },
    {
      id: "basic",
      name: "Basic (Monthly)",
      price: "$240 / month",
      tagline: "Build & refine",
      highlights: [
        "4 sessions per month + game observation",
        "Position-specific patterns",
        "Monthly action plan",
      ],
      badge: "",
      group: "monthly",
      cta: "Choose Basic",
    },
    {
      id: "trainee",
      name: "Trainee (Monthly)",
      price: "$330 / month",
      tagline: "Acceleration phase",
      highlights: [
        "6 sessions per month + game observation",
        "Advanced technical & tactical refinement",
        "Video feedback & milestones",
      ],
      badge: "Most Popular",
      group: "monthly",
      cta: "Choose Trainee",
    },
    {
      id: "scholar",
      name: "Scholar (Monthly)",
      price: "$420 / month",
      tagline: "Elite habits & leadership",
      highlights: [
        "8 sessions per month + observation + film session",
        "Leadership & mentorship components",
        "Level test prep & recovery guidance",
      ],
      badge: "",
      group: "monthly",
      cta: "Choose Scholar",
    },

    // ---- A la carte / Services ----
    {
      id: "evaluation",
      name: "Evaluation Session",
      price: "$45",
      tagline: "Baseline & roadmap",
      highlights: ["60-min evaluation", "Sock Level baseline", "Training roadmap"],
      badge: "",
      group: "services",
      cta: "Book Evaluation",
    },
    {
      id: "one-on-one",
      name: "Single 1:1 Session",
      price: "$120",
      tagline: "Targeted skill boost",
      highlights: ["60–75 min", "Position-specific tactics", "Take-home drills"],
      badge: "",
      group: "services",
      cta: "Book 1:1",
    },
    {
      id: "private-session",
      name: "Private Session (1–4 players)",
      price: "$90",
      tagline: "Focused & flexible",
      highlights: ["1–4 players • 60 min", "Targeted drills", "At-home plan"],
      badge: "",
      group: "services",
      cta: "Book Private",
    },
    {
      id: "group-session",
      name: "Single Group Session",
      price: "$45",
      tagline: "Compete, learn, repeat",
      highlights: ["75–90 min", "2–6 players", "Small-sided constraints"],
      badge: "",
      group: "services",
      cta: "Join Group",
    },
    {
      id: "parent-player",
      name: "Parent/Player Session (NEW)",
      price: "$100",
      tagline: "Train together",
      highlights: ["60 min", "Parent & player", "Fun competitive challenges"],
      badge: "",
      group: "services",
      cta: "Book Parent/Player",
    },
    {
      id: "soccer-flag",
      name: "Soccer / Flag Football Hybrid (NEW)",
      price: "$75",
      tagline: "Footwork + speed crossover",
      highlights: ["60 min", "Agility & COD", "Explosive first steps"],
      badge: "",
      group: "services",
      cta: "Book Hybrid",
    },
    {
      id: "game-observation",
      name: "Game Observation",
      price: "$60–90 + travel",
      tagline: "Coach eyes on your match",
      highlights: ["Live notes", "Debrief + 3 actions", "Optional timestamps"],
      badge: "",
      group: "services",
      cta: "Schedule Observation",
    },
    {
      id: "film-session",
      name: "Film Session",
      price: "$90",
      tagline: "Clarity from your clips",
      highlights: ["45–60 min review", "Patterns & feedback", "Next-match actions"],
      badge: "",
      group: "services",
      cta: "Book Film Session",
    },
  ];

  const monthly = plans.filter(p => p.group === "monthly");
  const services = plans.filter(p => p.group === "services");

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      {/* Monthly Plans */}
      <h2 className="text-2xl md:text-3xl font-bold">Monthly Plans</h2>
      <p className="mt-2 text-slate-500">Pick the cadence that fits your goals.</p>

      <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {monthly.map(p => (
          <article
            key={p.id}
            className={`relative rounded-2xl border bg-white p-5 transition-transform hover:-translate-y-0.5 ${
              p.badge === "Most Popular"
                ? "border-sky-500 shadow-lg shadow-sky-200"
                : "border-neutral-200 shadow-sm"
            }`}
          >
            {p.badge && (
              <div className="absolute -top-3 left-4 rounded-full bg-black text-white text-xs font-semibold px-3 py-1">
                {p.badge}
              </div>
            )}
            <h3 className="text-lg font-semibold">{p.name}</h3>
            <div className="text-neutral-600 mt-1">{p.price}</div>
            <p className="mt-2 text-neutral-700 text-sm">{p.tagline}</p>

            <ul className="mt-4 space-y-1 text-sm text-neutral-700">
              {p.highlights.map((h, i) => (
                <li key={i} className="flex gap-2">
                  <span>•</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>

            <Link
              href={`/plans/${p.id}`}
              className="mt-5 inline-flex items-center gap-2 rounded-xl border-2 border-neutral-900 bg-neutral-900 text-white px-4 py-2 text-sm font-semibold hover:bg-white hover:text-neutral-900 transition-colors"
            >
              {p.cta}
            </Link>
          </article>
        ))}
      </div>

      {/* Services */}
      <h2 className="mt-12 text-2xl md:text-3xl font-bold">Sessions & Services</h2>
      <p className="mt-2 text-slate-500">Book evaluations, privates, or specialty sessions.</p>

      <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map(p => (
          <article key={p.id} className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm transition-transform hover:-translate-y-0.5">
            <h3 className="text-lg font-semibold">{p.name}</h3>
            <div className="text-neutral-600 mt-1">{p.price}</div>
            <p className="mt-2 text-neutral-700 text-sm">{p.tagline}</p>

            <ul className="mt-4 space-y-1 text-sm text-neutral-700">
              {p.highlights.map((h, i) => (
                <li key={i} className="flex gap-2">
                  <span>•</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>

            <Link
              href={`/plans/${p.id}`}
              className="mt-5 inline-flex items-center gap-2 rounded-xl border-2 border-neutral-900 bg-neutral-900 text-white px-4 py-2 text-sm font-semibold hover:bg-white hover:text-neutral-900 transition-colors"
            >
              {p.cta}
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
