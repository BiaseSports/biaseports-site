// pages/plans/scholar.js
import Link from "next/link";

export default function ScholarPlan() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <Link href="/programs" className="text-sm underline">
        ← Back to Programs
      </Link>

      <h1 className="mt-3 text-3xl font-extrabold">Scholar (Monthly)</h1>
      <div className="mt-2 text-neutral-600">$420 / month</div>

     <p className="mt-5 text-neutral-700">
  Elite habits & leadership. Advanced constraints, leadership/mentorship components,
  and focused prep for level tests and gold-star performance.&nbsp;
  Includes <strong>8 sessions per month</strong> plus <strong>game observation</strong> and a{" "}
  <strong>film session</strong>.
</p>


      <div className="mt-6">
        <h2 className="font-semibold text-lg">What’s included</h2>
        <ul className="mt-2 list-disc pl-5 space-y-1 text-neutral-700">
  <li><strong>8 sessions per month</strong> + <strong>game observation</strong> + <strong>film session</strong></li>
  <li>Advanced tactical scenarios & high-intensity constraints</li>
  <li>Leadership & mentorship components on and off the field</li>
  <li>Level test preparation & gold-star pursuit</li>
  <li>Customized homework, recovery, and prehab guidance</li>
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
              Send to:{" "}
              <a className="underline" href="https://venmo.com/u/umoh-edu" target="_blank" rel="noopener noreferrer">
                <strong>@umoh-edu</strong>
              </a>
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
          target="_blank"
          rel="noopener noreferrer"
        >
          Open Player Info Form
        </a>
      </section>
    </main>
  );
}
