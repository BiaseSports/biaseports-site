import React from "react";
import { Check, Star, Clock, Users, Dumbbell, Video, Award, Zap, Flag, Target } from "lucide-react";

// ---------- Editable data ----------
const slugMap = {
  starter: "starter",
  basic: "basic",
  trainee: "trainee",          
  scholar: "scholar",
  evaluation: "evaluation",
  single_1v1: "one-on-one",
  single_private: "private-session",
  single_group: "group-session",
  parent_player: "parent-player",
  soccer_flag: "soccer-flag",
  game_observation: "game-observation",
  film_session: "film-session",
};

const plans = [
  {
    id: "evaluation",
    name: "Evaluation Session",
    tagline: "Your starting point",
    price: "$45",
    duration: "60 min",
    audience: "New & returning players",
    badge: "Required before packages",
    highlights: [
      "Technical, tactical & physical assessment",
      "Sock Level baseline + goals",
      "Personalized training roadmap",
    ],
    cta: { label: "Book Evaluation", href: "#book-eval" },
    featured: true,
    icon: <Target className="w-5 h-5"/>,
  },
  {
    id: "starter",
    name: "Starter (Monthly)",
    tagline: "Foundation & consistency",
    price: "$180 / month",
    duration: "",
    audience: "",
    badge: "Plan",
    highlights: [
      "Structured drills for core skills",
      "Session cadence tailored to schedule",
      "Progress tracking toward next Sock Level",
    ],
    cta: { label: "Choose Starter", href: "/plans/starter" },
    icon: <Zap className="w-5 h-5"/>,
  },
  {
    id: "basic",
    name: "Basic (Monthly)",
    tagline: "Build & refine",
    price: "$240 / month",
    duration: "",
    audience: "",
    badge: "Plan",
    highlights: [
      "Higher reps & focused corrections",
      "Homework drills + accountability",
      "Position-specific patterns",
    ],
    cta: { label: "Choose Basic", href: "/plans/basic" },
    icon: <Zap className="w-5 h-5"/>,
  },
  {
    id: "trainee",
    name: "Trainee (Monthly)",
    tagline: "Acceleration phase",
    price: "$330 / month",
    duration: "",
    audience: "",
    badge: "Most Popular",
    highlights: [
      "Increased intensity + decision speed",
      "Film moments to review",
      "Milestones toward level tests",
    ],
    cta: { label: "Choose Trainee", href: "/plans/trainee" },
    icon: <Zap className="w-5 h-5"/>,
  },
  {
    id: "scholar",
    name: "Scholar (Monthly)",
    tagline: "Elite habits & leadership",
    price: "$420 / month",
    duration: "",
    audience: "",
    badge: "",
    highlights: [
      "Advanced constraints & scanning",
      "Leadership/mentorship components",
      "Level test prep & gold-star pursuit",
    ],
    cta: { label: "Choose Scholar", href: "/plans/scholar" },
    icon: <Award className="w-5 h-5"/>,
  },
  {
    id: "single_1v1",
    name: "Single 1:1 Session",
    tagline: "Targeted skill boost",
    price: "$120",
    duration: "60–75 min",
    audience: "Players leveling up quickly",
    badge: "",
    highlights: [
      "High-rep technical work & micro-corrections",
      "Position-specific tactics",
      "Clear take-home drills",
    ],
    cta: { label: "Book 1:1", href: "#book-1v1" },
    icon: <Zap className="w-5 h-5"/>,
  },
  {
    id: "single_private",
    name: "Single Private Session",
    tagline: "Solo focused work",
    price: "$90",
    duration: "60 min",
    audience: "1-4 players",
    badge: "",
    highlights: [
      "Core technique & mechanics",
      "Ball mastery & first touch",
      "Customized to your goals",
    ],
    cta: { label: "Book Private", href: "#book-private" },
    icon: <Target className="w-5 h-5"/>,
  },
  {
    id: "single_group",
    name: "Single Group Session",
    tagline: "Compete. Learn. Repeat.",
    price: "$45",
    duration: "75–90 min",
    audience: "2–6 players",
    badge: "",
    highlights: [
      "Rondo/possession shapes & finishing",
      "Decision-speed & scanning under pressure",
      "Small-sided constraints",
    ],
    cta: { label: "Join Group", href: "#book-group" },
    icon: <Users className="w-5 h-5"/>,
  },
  {
    id: "parent_player",
    name: "Parent/Player Session (NEW)",
    tagline: "Build skills together",
    price: "$100",
    duration: "60 min",
    audience: "Parent & player",
    badge: "New",
    highlights: [
      "Joint drills & communication",
      "At-home training routines",
      "Fun competitive challenges",
    ],
    cta: { label: "Book Parent/Player", href: "#book-parent" },
    icon: <Users className="w-5 h-5"/>,
  },
  {
    id: "soccer_flag",
    name: "Soccer / Flag Football Hybrid (NEW)",
    tagline: "Footwork + speed crossover",
    price: "$75",
    duration: "60 min",
    audience: "Multi-sport athletes",
    badge: "New",
    highlights: [
      "Agility & change of direction",
      "Spatial awareness & transition play",
      "Explosive first steps",
    ],
    cta: { label: "Book Hybrid", href: "#book-hybrid" },
    icon: <Dumbbell className="w-5 h-5"/>,
  },
  {
    id: "game_observation",
    name: "Game Observation",
    tagline: "Coach eyes on your match",
    price: "$60–90 + travel",
    duration: "Per match",
    audience: "All levels",
    badge: "",
    highlights: [
      "Live notes on habits & decisions",
      "Post-game debrief & 3 focus actions",
      "Optional video timestamps",
    ],
    cta: { label: "Schedule Observation", href: "#book-observe" },
    icon: <Flag className="w-5 h-5"/>,
  },
  {
    id: "film_session",
    name: "Film Session",
    tagline: "Clarity from your clips",
    price: "$90",
    duration: "45–60 min",
    audience: "Match & highlight analysis",
    badge: "Remote option",
    highlights: [
      "Annotated moments & patterns",
      "Strengths + growth opportunities",
      "Next-match action plan",
    ],
    cta: { label: "Book Film Session", href: "#book-film" },
    icon: <Video className="w-5 h-5"/>,
  },
];

const faqs = [
  {
    q: "Do I need an Evaluation first?",
    a: "Yes. Every player begins with an Evaluation Session so we can identify your baseline Sock Level and map your personalized training plan.",
  },
  {
    q: "How are Sock Levels awarded?",
    a: "Levels are earned by passing category tests (first touch, passing, dribbling, shooting, physical, juggling). Some levels include leadership & game IQ criteria. Gold stars recognize near-perfect scores.",
  },
  {
    q: "What should I bring?",
    a: "Ball, cleats/turf shoes, water, and a great attitude. We'll supply cones, mannequins, bands, and goals.",
  },
  {
    q: "Where are sessions held?",
    a: "We train at local fields in Orange County. Exact location is shared in your confirmation email after booking.",
  },
  {
    q: "Can I reschedule?",
    a: "Yes, with 24h notice. Same-day cancellations are considered a session used.",
  },
];

export default function TrainingPlansSection() {
  return (
    <section className="w-full bg-white">
      {/* Header */}
      <div className="mx-auto max-w-6xl px-6 pt-12 pb-6">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-neutral-500">
          <span className="inline-flex items-center gap-1"><Star className="w-4 h-4"/> Programs</span>
          <span>•</span>
          <span>Training Plans</span>
        </div>
        <h1 className="mt-3 text-3xl sm:text-4xl font-bold text-neutral-900">Training Plans that Build Complete Players</h1>
        <p className="mt-3 max-w-2xl text-neutral-600">
          BIASE is more than a training session. It’s a system. Start with your Evaluation, then choose the plan that fits your goals and schedule. Earn your socks. Lead your team.
        </p>
      </div>

      {/* Plans grid */}
      <div className="mx-auto max-w-6xl px-6 pb-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {plans.map((p) => (
          <article key={p.id} className={`relative rounded-2xl border bg-white p-5 transition-transform hover:-translate-y-0.5 ${
    p.badge === "Most Popular"
      ? "border-sky-500 shadow-lg shadow-sky-200"
      : "border-neutral-200 shadow-sm"
  }`}
>
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-2 text-neutral-700">
                <div className="rounded-xl border border-neutral-200 p-2">{p.icon}</div>
                <div>
                  <h3 className="font-semibold text-lg text-neutral-900">{p.name}</h3>
                  <p className="text-sm text-neutral-500">{p.tagline}</p>
                </div>
              </div>
              {p.badge && (
                <span className="text-xs bg-neutral-900 text-white px-2 py-1 rounded-full whitespace-nowrap">{p.badge}</span>
              )}
            </div>

            {p.duration && (
              <div className="mt-4 flex items-center gap-3 text-sm text-neutral-600">
                <Clock className="w-4 h-4"/> <span>{p.duration}</span>
              </div>
            )}

            {p.audience && (
              <div className="mt-3 flex items-center gap-3 text-sm text-neutral-600">
                <Users className="w-4 h-4"/> <span>{p.audience}</span>
              </div>
            )}

            {p.highlights?.length > 0 && (
              <ul className="mt-4 space-y-2">
                {p.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-neutral-700">
                    <Check className="w-4 h-4 mt-0.5"/> <span>{h}</span>
                  </li>
                ))}
              </ul>
            )}

            <div className="mt-5 pt-4 border-t border-neutral-200 flex items-center justify-between">
              <div>
                <div className="text-xs uppercase tracking-wide text-neutral-500">Investment</div>
                <div className="text-lg font-semibold text-neutral-900">{p.price}</div>
              </div>
              <a href={p.cta.href} className="inline-flex items-center gap-2 rounded-xl border-2 border-neutral-900 bg-neutral-900 text-white px-4 py-2 text-sm font-semibold hover:bg-white hover:text-neutral-900 transition-colors">
                {p.cta.label}
              </a>
            </div>
          </article>
        ))}
      </div>

      {/* Sock Levels band */}
      <div className="bg-neutral-950">
        <div className="mx-auto max-w-6xl px-6 py-10 text-white">
          <h2 className="text-xl font-semibold">Sock Level Progression</h2>
          <p className="mt-2 text-sm text-neutral-300 max-w-3xl">
            Levels run from White → Yellow → Orange → Green → Blue → Brown → Black. Each level requires passing category tests (first touch, passing, dribbling, shooting, physical, juggling). Gold stars recognize near-perfect scores.
          </p>
          <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
            {[
              {label: "White", hex: "#ffffff", text: "#111"},
              {label: "Yellow", hex: "#facc15", text: "#111"},
              {label: "Orange", hex: "#fb923c", text: "#111"},
              {label: "Green", hex: "#22c55e", text: "#111"},
              {label: "Blue", hex: "#3b82f6", text: "#fff"},
              {label: "Brown", hex: "#92400e", text: "#fff"},
              {label: "Black", hex: "#111827", text: "#fff"},
            ].map((s) => (
              <div key={s.label} className="rounded-2xl p-4 border border-neutral-800 flex items-center justify-between" style={{background: s.hex, color: s.text}}>
                <span className="text-sm font-semibold">{s.label}</span>
                <span className="text-[10px] uppercase tracking-wider opacity-80">Sock</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQs */}
      <div className="mx-auto max-w-6xl px-6 py-12">
        <h3 className="text-2xl font-bold text-neutral-900">FAQs</h3>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          {faqs.map((f, i) => (
            <details key={i} className="group rounded-2xl border border-neutral-200 p-5 open:shadow-sm">
              <summary className="cursor-pointer list-none font-semibold text-neutral-900 flex items-center justify-between">
                {f.q}
                <span className="ml-4 text-neutral-400 group-open:rotate-45 transition">+</span>
              </summary>
              <p className="mt-3 text-neutral-700 text-sm">{f.a}</p>
            </details>
          ))}
        </div>
      </div>

      {/* CTA band */}
      <div className="bg-neutral-100">
        <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-xl font-semibold text-neutral-900">Ready to get started?</h4>
            <p className="text-neutral-600 text-sm">Begin with your Evaluation, then choose 1:1, Small Group, or the Mastery Track. More than a training session.</p>
          </div>
          <div className="flex gap-3">
            <a href="#book-eval" className="rounded-xl border-2 border-neutral-900 bg-neutral-900 text-white px-4 py-2 text-sm font-semibold hover:bg-white hover:text-neutral-900 transition-colors">Book Evaluation</a>
            <a href="#contact" className="rounded-xl border-2 border-neutral-900 px-4 py-2 text-sm font-semibold hover:bg-neutral-900 hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </div>

      {/* Footer microcopy */}
      <div className="mx-auto max-w-6xl px-6 py-6 text-xs text-neutral-500">
        <p>
          Note: Update each plan’s <span className="font-semibold">price</span> and <span className="font-semibold">CTA links</span> in the data above as needed. Add or remove plans by editing the <code>plans[]</code> array.
        </p>
      </div>
    </section>
  );
}
