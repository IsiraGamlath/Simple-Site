import BeanDivider from "./components/BeanDivider";
import MenuList from "./components/MenuList";

const hours = [
  { day: "Monday — Friday", time: "6:00 – 15:00" },
  { day: "Saturday", time: "7:00 – 15:00" },
  { day: "Sunday", time: "7:00 – 13:00" },
];

export default function Home() {
  return (
    <>
      <header className="border-b border-line/60">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-1 px-6 py-8 text-center">
          <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-muted">
            Est. corner of 5th &amp; Alder
          </span>
          <span className="font-[family-name:var(--font-display)] text-2xl italic text-paper">
            Ember Coffee Co.
          </span>
          <nav className="mt-4 flex items-center gap-8 font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
            <a href="#menu" className="transition-colors hover:text-ember">
              Menu
            </a>
            <a href="#visit" className="transition-colors hover:text-ember">
              Hours
            </a>
            <a href="#visit" className="transition-colors hover:text-ember">
              Location
            </a>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <section className="mx-auto max-w-3xl px-6 py-24 text-center md:py-32">
          <p className="rise font-mono text-xs uppercase tracking-[0.3em] text-ember">
            Open six mornings a week
          </p>
          <h1 className="rise mt-6 font-[family-name:var(--font-display)] text-6xl leading-[1.02] text-paper md:text-7xl">
            Slow coffee,
            <br />
            <span className="italic text-muted">poured on purpose.</span>
          </h1>
          <p
            className="rise mx-auto mt-7 max-w-md text-base leading-relaxed text-muted"
            style={{ animationDelay: "80ms" }}
          >
            A small bar doing one thing well — dark, patient roasts, pulled
            and poured by hand.
          </p>

          <div
            className="rise mt-10"
            style={{ animationDelay: "140ms" }}
          >
            <BeanDivider />
          </div>

          <div
            className="rise mt-10 flex flex-wrap items-center justify-center gap-6"
            style={{ animationDelay: "200ms" }}
          >
            <a
              href="#menu"
              className="rounded-full bg-ember px-7 py-3 font-mono text-xs uppercase tracking-[0.15em] text-ink transition-transform hover:scale-[1.03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ember"
            >
              See the menu
            </a>
            <a
              href="#visit"
              className="font-mono text-xs uppercase tracking-[0.15em] text-muted transition-colors hover:text-paper"
            >
              Hours &amp; location
            </a>
          </div>
        </section>

        <section id="menu" className="border-t border-line/60 bg-surface/40">
          <div className="mx-auto max-w-3xl px-6 py-24 text-center">
            <h2 className="font-[family-name:var(--font-display)] text-4xl text-paper">
              What we pour
            </h2>
            <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-muted">
              Beans rotate with the season — the board out front is always a
              day behind what's brewing.
            </p>
            <div className="mt-16">
              <MenuList />
            </div>
          </div>
        </section>

        <section id="visit" className="border-t border-line/60">
          <div className="mx-auto max-w-3xl px-6 py-24 text-center">
            <h2 className="font-[family-name:var(--font-display)] text-4xl text-paper">
              Find us
            </h2>
            <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-muted">
              412 Alder Street, ground floor. Street parking after 9am, bike
              racks out front.
            </p>

            <div className="mx-auto mt-12 max-w-xs rounded-2xl border border-line px-8 py-8">
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-ember">
                Hours
              </span>
              <ul className="mt-5 flex flex-col gap-3">
                {hours.map((h) => (
                  <li key={h.day} className="text-sm">
                    <span className="block text-paper">{h.day}</span>
                    <span className="font-mono text-xs text-muted">
                      {h.time}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="#"
              className="mt-10 inline-block rounded-full border border-ember-dim px-6 py-2.5 font-mono text-xs uppercase tracking-[0.15em] text-ember transition-colors hover:border-ember hover:bg-ember/10"
            >
              Get directions
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-line/60">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-2 px-6 py-10 text-center">
          <span className="font-[family-name:var(--font-display)] italic text-paper">
            Ember Coffee Co.
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted">
            412 Alder Street
          </span>
        </div>
      </footer>
    </>
  );
}
