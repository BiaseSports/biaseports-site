import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold">BIASE Sports</h1>
      <p className="mt-3 text-neutral-600">More than a training session.</p>
      <Link href="/programs" className="mt-6 inline-block rounded-xl border-2 border-neutral-900 px-4 py-2 font-semibold hover:bg-neutral-900 hover:text-white transition-colors">
        View Programs
      </Link>
    </main>
  );
}
