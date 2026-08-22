export default function Footer() {
  return <footer id="contact" className="px-4 pb-4">
    <div className="section-shell rounded-2xl bg-[#eaf5ba] px-6 py-10 text-center md:px-12 md:py-12">
      <p className="eyebrow mb-3">Have a project in mind?</p>
      <h2 className="display text-3xl font-extrabold md:text-5xl">Let&apos;s build something <span className="text-[#78981c]">great.</span></h2>
      <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-[#555d45]">Open to exciting opportunities and collaborations. Reach out and let&apos;s bring your next idea to life.</p>
      <div className="mt-7 flex flex-wrap justify-center gap-3">
        <a className="rounded-lg bg-[#111217] px-6 py-3 text-sm font-semibold !text-white transition hover:bg-[#739414]" href="mailto:ahmedbinshid@gmail.com">Let&apos;s Talk &rarr;</a>
        <a className="rounded-lg border border-[#111217] bg-white px-6 py-3 text-sm font-semibold" href="tel:+971508493690">+971 50 849 3690</a>
      </div>
    </div>
    <div className="section-shell flex flex-col gap-2 py-7 text-center text-xs text-[#737680] sm:flex-row sm:justify-between">
      <span>&copy; {new Date().getFullYear()} Ahammed Binsid. All rights reserved.</span>
      <span>Built with care in the UAE</span>
    </div>
  </footer>;
}
