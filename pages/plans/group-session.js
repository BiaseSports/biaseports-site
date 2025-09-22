// pages/plans/group-session.js
import Link from "next/link";

export default function GroupSession() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <Link href="/programs" className="text-sm underline">← Back to Programs</Link>
      <h1 className="mt-3 text-3xl font-extrabold">Single Group Session</h1>
      <div className="mt-2 text-neutral-600">$45</div>

      <p className="mt-5 text-neutral-700">
        Compete, learn, repeat. Rondo/possession shapes and decision-speed under pressure.
        Great for 2–6 players.
      </p>

      <div className="mt-6">
        <h2 className="font-semibold text-lg">What’s included</h2>
        <ul className="mt-2 list-disc pl-5 space-y-1 text-neutral-700">
          <li>75–90 min session</li>
          <li>2–6 players</li>
          <li>Small-sided constraints</li>
        </ul>
      </div>

      <Payment />
      <PlayerForm />
    </main>
  );
}

// Reuse helpers
function Payment(){return(<section className="mt-10 rounded-2xl border border-neutral-200 p-5"><h2 className="text-xl font-semibold">Pay Online</h2><p className="mt-2 text-neutral-700">Pay via <strong>Zelle</strong> or <strong>Venmo</strong>. Include the player’s name in the memo.</p><div className="mt-4 grid sm:grid-cols-2 gap-4"><PayBox title="Zelle" value="949.228.5477" href="tel:19492285477"/><PayBox title="Venmo" value="@umoh-edu" href="https://venmo.com/u/umoh-edu" external/></div><p className="mt-4 text-sm text-neutral-600"><strong>Important:</strong> Training is <u>not reserved</u> until payment is received.</p></section>);}
function PayBox({title,value,href,external}){return(<div className="rounded-xl border p-4"><h3 className="font-semibold">{title}</h3><p className="mt-1 text-neutral-700">Send to: <a className="underline" href={href} {...(external?{target:"_blank",rel:"noopener noreferrer"}:{})}><strong>{value}</strong></a></p></div>);}
function PlayerForm(){return(<section className="mt-10 rounded-2xl border border-neutral-200 p-5"><h2 className="text-xl font-semibold">Player Information</h2><p className="mt-2 text-neutral-700">Fill out the form so we can tailor training to your goals.</p><a href="https://forms.gle/MFPvsvNndGhjzvst5" className="inline-block mt-4 rounded-xl border-2 border-neutral-900 bg-neutral-900 text-white px-5 py-2 font-semibold hover:bg-white hover:text-neutral-900 transition-colors" target="_blank" rel="noopener noreferrer">Open Player Info Form</a></section>);}
