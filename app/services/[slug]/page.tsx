import Link from "next/link";
import { notFound } from "next/navigation";
import { services } from "@/app/services/data";

type PageProps = {
  params: {
    slug: string;
  };
};

const accentStyles: Record<string, string> = {
  yellow: "text-yellow-400 bg-yellow-400/10 border-yellow-400/20",
  pink: "text-pink-400 bg-pink-400/10 border-pink-400/20",
  cyan: "text-cyan-400 bg-cyan-400/10 border-cyan-400/20",
  purple: "text-purple-400 bg-purple-400/10 border-purple-400/20",
};

const sideAccent: Record<string, string> = {
  yellow: "from-yellow-400 to-yellow-300",
  pink: "from-pink-400 to-pink-300",
  cyan: "from-cyan-400 to-cyan-300",
  purple: "from-purple-400 to-purple-300",
};

export const dynamicParams = false;

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export default function ServicePage({ params }: PageProps) {
  const service = services.find((item) => item.slug === params.slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="bg-black text-white min-h-screen overflow-hidden">
      <section className="relative overflow-hidden px-6 py-24 sm:px-10 lg:px-16">
        <div
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at top right, ${service.gradientStart}, transparent 28%), radial-gradient(circle at bottom left, ${service.gradientEnd}, transparent 28%)`,
          }}
        />

        <div className="relative max-w-6xl mx-auto">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
            <div className="space-y-8">
              <span
                className={`inline-flex items-center gap-3 rounded-full border px-4 py-2 text-sm font-semibold uppercase tracking-[0.24em] ${accentStyles[service.scheme]}`}
              >
                <span>{service.icon}</span>
                {service.title}
              </span>

              <div className="space-y-6">
                <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
                  {service.title}
                </h1>
                <p className="max-w-3xl text-xl text-gray-300 leading-relaxed">
                  {service.hero}
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_20px_80px_rgba(255,255,255,0.03)]">
                  <h2 className="text-lg font-semibold text-white mb-3">
                    Why it works
                  </h2>
                  <p className="text-gray-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_20px_80px_rgba(255,255,255,0.03)]">
                  <h2 className="text-lg font-semibold text-white mb-3">
                    Your focus
                  </h2>
                  <ul className="space-y-3 text-gray-400">
                    {service.focus.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-1 text-xl text-white">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-yellow-400 to-pink-400 px-8 py-4 font-semibold text-black shadow-2xl shadow-yellow-500/20 transition hover:scale-[1.01]"
                >
                  Start Training
                </Link>
                <Link
                  href="/"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-4 font-semibold text-white transition hover:border-cyan-400/50"
                >
                  Back to Home
                </Link>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/40 backdrop-blur-xl">
              <div className="space-y-6">
                <div className="rounded-3xl border border-white/10 bg-black/60 p-8">
                  <h2 className="text-lg font-semibold text-white mb-4">
                    What you get
                  </h2>
                  <ul className="space-y-4 text-gray-300">
                    {service.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-4">
                        <span
                          className={`mt-1 text-2xl ${accentStyles[service.scheme].split(" ")[0]}`}
                        >
                          ✓
                        </span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div
                  className={`rounded-3xl border border-white/10 bg-gradient-to-br ${sideAccent[service.scheme]} bg-opacity-10 p-8`}
                >
                  <h3 className="text-lg font-semibold text-white mb-4">
                    Performance outcomes
                  </h3>
                  <div className="space-y-4 text-gray-300">
                    {service.outcomes.map((outcome) => (
                      <p
                        key={outcome}
                        className="rounded-2xl border border-white/10 bg-black/40 p-4"
                      >
                        {outcome}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 py-24 px-6 sm:px-10 lg:px-16">
        <div className="max-w-6xl mx-auto grid gap-16 lg:grid-cols-3">
          <div className="space-y-6">
            <span className="text-sm uppercase tracking-[0.3em] text-gray-400">
              Training blueprint
            </span>
            <h2 className="text-4xl font-bold">Built for competitive growth</h2>
            <p className="text-gray-400 leading-relaxed">
              Every plan is designed to accelerate progress in the areas that
              matter most for track and field success.
            </p>
          </div>

          <div className="space-y-6 rounded-3xl border border-white/10 bg-black/40 p-8">
            <h3 className="text-xl font-semibold text-white">Approach</h3>
            <p className="text-gray-400 leading-relaxed">
              We combine analysis, physical preparation, and mental strategy so
              your training stays targeted, sustainable, and championship-ready.
            </p>
          </div>

          <div className="space-y-6 rounded-3xl border border-white/10 bg-black/40 p-8">
            <h3 className="text-xl font-semibold text-white">Your advantage</h3>
            <p className="text-gray-400 leading-relaxed">
              This service delivers clarity, measurable progress, and a
              confident path to your next personal best.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
