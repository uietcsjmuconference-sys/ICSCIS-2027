import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight, FaTimes } from "react-icons/fa";
import keynoteSessions from "../../data/keynoteSessions";

const galleryImages = Array.from({ length: 22 }, (_, index) => {
  const number = String(index + 1).padStart(2, "0");
  return {
    src: `/images/alvaro-rocha-keynote/slide-${number}.png`,
    alt: `Prof. Álvaro Rocha keynote presentation slide ${index + 1}`,
  };
});

const renderOptionalField = (label, value) =>
  value ? (
    <p>
      <span className="font-semibold text-slate-700">{label}: </span>
      {value}
    </p>
  ) : null;

export default function KeynoteSessions() {
  const [spotlightIndex, setSpotlightIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const spotlight = keynoteSessions[spotlightIndex];

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") setSelectedImage(null);
      if (selectedImage === null) return;
      if (event.key === "ArrowRight") {
        setSelectedImage((selectedImage + 1) % galleryImages.length);
      }
      if (event.key === "ArrowLeft") {
        setSelectedImage(
          (selectedImage - 1 + galleryImages.length) % galleryImages.length
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage]);

  const moveSpotlight = (direction) => {
    setSpotlightIndex(
      (spotlightIndex + direction + keynoteSessions.length) %
        keynoteSessions.length
    );
  };

  return (
    <main className="bg-slate-50 text-slate-900">
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl bg-[#0b1735] p-6 text-center text-white shadow-xl sm:p-10">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-sky-300">
            ICSCIS 2026 - Keynote Series
          </p>
          <div className="mt-4 flex flex-col items-center gap-8">
            <div className="max-w-4xl">
              <h1 className="text-3xl font-bold sm:text-5xl">
                Ideas That Shape Tomorrow
              </h1>
              <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-slate-300">
                Global experts sharing insights on sustainable computing,
                agentic AI, financial security, and intelligent systems.
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
                <p className="mt-2 text-sky-300">{spotlight.category}</p>
              </div>
            </div>
            <div className="flex shrink-0 items-center gap-3">
              <button
                type="button"
                aria-label="Previous keynote spotlight"
                onClick={() => moveSpotlight(-1)}
                className="rounded-full border border-white/30 p-3 transition hover:bg-white/10"
              >
                <FaArrowLeft />
              </button>
              <span className="min-w-16 text-center text-sm text-slate-300">
                {spotlightIndex + 1} / {keynoteSessions.length}
              </span>
              <button
                type="button"
                aria-label="Next keynote spotlight"
                onClick={() => moveSpotlight(1)}
                className="rounded-full border border-white/30 p-3 transition hover:bg-white/10"
              >
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-14">
          <div className="mb-6 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-sky-700">
              Global experts
            </p>
            <h2 className="mt-2 text-3xl font-bold">All keynote speakers</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {keynoteSessions.map((session) => (
              <article
                key={session.id}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <img
                  src={session.image}
                  alt={session.name}
                  loading="lazy"
                  className="mx-auto h-24 w-24 rounded-full border-4 border-sky-50 object-cover"
                />
                <p className="mt-4 text-xs font-bold uppercase tracking-wide text-sky-700">
                  {session.category}
                </p>
                <h3 className="mt-2 text-xl font-bold">{session.name}</h3>
                <div className="mt-2 space-y-1 text-sm leading-6 text-slate-600">
                  {renderOptionalField("Designation", session.designation)}
                  {renderOptionalField("Affiliation", session.affiliation)}
                  {renderOptionalField("Location", session.location)}
                </div>
                <p className="mt-4 border-t border-slate-100 pt-4 font-semibold leading-7 text-slate-900">
                  {session.title}
                </p>
              </article>
            ))}
          </div>
        </div>

        <section className="mt-14 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-sky-700">
              ICSCIS 2026 - Keynote Sessions
            </p>
            <h2 className="mt-2 text-3xl font-bold">Insights from Global Experts</h2>
            <p className="mt-3 text-lg font-semibold text-slate-800">
              Prof. Álvaro Rocha
            </p>
            <p className="mt-1 text-slate-600">
              Digital Health Maturity Models and their Role in Transforming Care
              Systems
            </p>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((image, index) => (
              <button
                type="button"
                key={image.src}
                onClick={() => setSelectedImage(index)}
                className="group overflow-hidden rounded-xl border border-slate-200 bg-slate-100 text-left focus:outline-none focus:ring-2 focus:ring-sky-600"
                aria-label={`View presentation slide ${index + 1}`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="aspect-video w-full object-cover transition duration-300 group-hover:scale-105"
                />
              </button>
            ))}
          </div>
        </section>

      </section>

      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/95 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Keynote presentation image preview"
          onClick={() => setSelectedImage(null)}
        >
          <button
            type="button"
            aria-label="Close image preview"
            onClick={() => setSelectedImage(null)}
            className="absolute right-5 top-5 rounded-full bg-white/10 p-3 text-white hover:bg-white/20"
          >
            <FaTimes />
          </button>
          <button
            type="button"
            aria-label="Previous presentation slide"
            onClick={(event) => {
              event.stopPropagation();
              setSelectedImage(
                (selectedImage - 1 + galleryImages.length) % galleryImages.length
              );
            }}
            className="absolute left-3 rounded-full bg-white/10 p-3 text-white hover:bg-white/20 sm:left-8"
          >
            <FaArrowLeft />
          </button>
          <img
            src={galleryImages[selectedImage].src}
            alt={galleryImages[selectedImage].alt}
            className="max-h-[90vh] max-w-[90vw] object-contain"
            onClick={(event) => event.stopPropagation()}
          />
          <button
            type="button"
            aria-label="Next presentation slide"
            onClick={(event) => {
              event.stopPropagation();
              setSelectedImage((selectedImage + 1) % galleryImages.length);
            }}
            className="absolute right-3 rounded-full bg-white/10 p-3 text-white hover:bg-white/20 sm:right-8"
          >
            <FaArrowRight />
          </button>
        </div>
      )}
    </main>
  );
}
