import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import keynoteSessions2025 from "../../data/keynoteSessions2025";

export default function KeynoteSessions2025() {
  const [spotlightIndex, setSpotlightIndex] = useState(0);
  const spotlight = keynoteSessions2025[spotlightIndex];

  const moveSpotlight = (direction) => {
    setSpotlightIndex(
      (spotlightIndex + direction + keynoteSessions2025.length) %
        keynoteSessions2025.length
    );
  };

  return (
    <main className="bg-slate-50 text-slate-900">
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl bg-[#0b1735] p-6 text-center text-white shadow-xl sm:p-10">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-sky-300">
            ICRAECCT 2025 - Keynote Series
          </p>
          <div className="mt-4 flex flex-col items-center gap-8">
            <div className="max-w-4xl">
              <h1 className="text-3xl font-bold sm:text-5xl">
                Ideas That Inspire Innovation
              </h1>
              <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-slate-300">
                International keynote speakers sharing insights across AI,
                cybersecurity, cloud computing, and emerging technologies.
              </p>
              <div className="mt-8 border-t border-white/20 pt-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-sky-300">
                  Keynote spotlight
                </p>
                <img
                  src={spotlight.image}
                  alt={spotlight.name}
                  className="mx-auto mb-4 h-24 w-24 rounded-full border-2 border-sky-300 object-cover"
                />
                <h2 className="mt-2 text-2xl font-bold">{spotlight.name}</h2>
                <p className="mt-1 text-slate-300">
                  {[spotlight.designation, spotlight.affiliation, spotlight.location]
                    .filter(Boolean)
                    .join(" · ")}
                </p>
                <p className="mt-4 text-xl font-semibold text-white">
                  {spotlight.title}
                </p>
                <p className="mt-2 text-sky-300">
                  {spotlight.category} · {spotlight.date}
                </p>
              </div>
            </div>
            <div className="flex shrink-0 items-center gap-3">
              <button
                type="button"
                aria-label="Previous 2025 keynote spotlight"
                onClick={() => moveSpotlight(-1)}
                className="rounded-full border border-white/30 p-3 transition hover:bg-white/10"
              >
                <FaArrowLeft />
              </button>
              <span className="min-w-16 text-center text-sm text-slate-300">
                {spotlightIndex + 1} / {keynoteSessions2025.length}
              </span>
              <button
                type="button"
                aria-label="Next 2025 keynote spotlight"
                onClick={() => moveSpotlight(1)}
                className="rounded-full border border-white/30 p-3 transition hover:bg-white/10"
              >
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
