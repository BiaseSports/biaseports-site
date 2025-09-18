// pages/plans/starter.js
import Link from "next/link";

export default function StarterPlan() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <Link href="/programs" className="text-sm underline">← Back to Programs</Link>
      <h1 className="mt-3 text-3xl font-extrabold">Starter (Monthly)</h1>
      <div className="mt-2 text-neutral-600">$180 / month</div>

      <p className="mt-5 text-neutral-700">
        Foundation & consistency. Structured drills for core skills, session cadence
        tailored to schedule, and progress tracking toward your next Sock Level. Includes <strong>4 sessions per month
      </p>

      <div className="mt-6">
        <h2 className="font-semibold text-lg">What’s included</h2>
        <ul className="mt-2 list-disc pl-5 space-y-1 text-neutral-700">
          <li>Weekly training sessions (customizable cadence)</li>
          <li>Technical foundations: first touch, ball mastery, passing</li>
          <li>Homework drills & accountability</li>
          <li>Progress logged toward Sock Levels</li>
        </ul>
      </div>

      {/* Payment */}
      <section className="mt-10 rounded-2xl border border-neutral-200 p-5">
        <h2 className="text-xl font-semibold">Pay Online</h2>
        <p className="mt-2 text-neutral-700">
          You can pay via <strong>Zelle</strong> or <strong>Venmo</strong>. Please include the player’s name in the memo.
        </p>
        <div className="mt-4 grid sm:grid-cols-2 gap-4">
          <div className="rounded-xl border p-4">
            <h3 className="font-semibold">Zelle</h3>
            <p className="mt-1 text-neutral-700">
              Send to: <a className="underline" href="tel:19492285477"><strong>949.228.5477</strong></a>
            </p>
          </div>
          <div className="rounded-xl border p-4">
            <h3 className="font-semibold">Venmo</h3>
            <p className="mt-1 text-neutral-700">
              Send to: <a className="underline" href="https://venmo.com/u/umoh-edu" target="_blank" rel="noopener noreferrer"><strong>@umoh-edu</strong></a>
            </p>
          </div>
        </div>
        <p className="mt-4 text-sm text-neutral-600">
          <strong>Important:</strong> Training is <u>not reserved</u> until payment is received.
          Please complete the Player Info form after payment.
        </p>
      </section>

      {/* Player Info Form */}
      <section className="mt-10 rounded-2xl border border-neutral-200 p-5">
        <h2 className="text-xl font-semibold">Player Information</h2>
        <p className="mt-2 text-neutral-700">Fill out the form so we can tailor training to your goals.</p>
        <a
          href="https://forms.gle/MFPvsvNndGhjzvst5"
          className="inline-block mt-4 rounded-xl border-2 border-neutral-900 bg-neutral-900 text-white px-5 py-2 font-semibold hover:bg-white hover:text-neutral-900 transition-colors"
          target="_blank" rel="noopener noreferrer"
        >
          Open Player Info Form
        </a>
      </section>
    </main>
  );
}
