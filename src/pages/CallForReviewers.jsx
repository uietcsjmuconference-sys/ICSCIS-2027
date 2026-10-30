export default function CallForReviewers() {
  return (
    <main className="bg-slate-50 px-4 py-16 text-slate-900 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-4xl rounded-3xl bg-white p-8 text-center shadow-lg sm:p-12">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-sky-700">
          ICSCIS 2027
        </p>
        <h1 className="mt-3 text-3xl font-bold sm:text-4xl">
          Call for Reviewers
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
          Join the ICSCIS 2027 reviewer community and contribute your expertise
          to the peer-review process. Researchers, academicians, and industry
          professionals are invited to express their interest in reviewing
          research submissions.
        </p>
        <a
          href="https://forms.gle/sZcHFBQfVqnPKYcKA"
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex rounded-lg bg-[#1B305C] px-7 py-3 font-semibold text-white transition hover:bg-sky-800"
        >
          Apply as a Reviewer
        </a>
      </section>
    </main>
  );
}
