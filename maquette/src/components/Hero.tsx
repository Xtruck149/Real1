import Link from "next/link";
import { DemoImage } from "./DemoImage";
import { FactText } from "./FactBadge";
import { heroImage } from "@/content/gallery";
import { copy, site } from "@/content/site";

function Actions() {
  return (
    <>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link href={site.primaryCta.href} className="btn btn-primary">
          {site.primaryCta.label}
        </Link>
        <Link href="/menu" className="btn btn-ghost">
          Découvrir le menu
        </Link>
      </div>
      <p className="mt-8 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted">
        <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 shrink-0 text-accent" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21Z" />
          <circle cx="12" cy="9.5" r="2.5" />
        </svg>
        <FactText fact={site.contact.address} />
      </p>
    </>
  );
}

const DemoLabel = () => (
  <p className="absolute right-4 top-4 rounded-full bg-black/60 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-wide text-white/90">
    Visuel de démonstration
  </p>
);

/** "full": text over a full-bleed image (night venues). "split": text beside a framed image (daytime venues). */
export function Hero() {
  if (copy.heroLayout === "split") {
    return (
      <section aria-labelledby="hero-title" className="container-site grid items-center overflow-x-clip gap-10 pb-16 pt-10 md:pt-16 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:pb-24">
        <div>
          <p className="eyebrow">{copy.heroEyebrow}</p>
          <h1 id="hero-title" className="mt-4 text-5xl sm:text-6xl md:text-7xl">
            {copy.heroTitle}
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted">{copy.heroText}</p>
          <Actions />
        </div>
        <div className="relative">
          <div aria-hidden="true" className="absolute -inset-3 -z-10 rotate-2 rounded-[2rem] bg-surface-2 md:-inset-5" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] sm:aspect-[4/3] lg:aspect-[4/5]">
            <DemoImage file={heroImage.file} alt={heroImage.alt} sizes="(min-width: 1024px) 50vw, 100vw" priority fill className="object-cover" />
            <DemoLabel />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section aria-labelledby="hero-title" className="relative isolate overflow-hidden">
      <DemoImage file={heroImage.file} alt={heroImage.alt} sizes="100vw" priority fill className="-z-10 object-cover opacity-70" />
      <div aria-hidden="true" className="hero-glow" />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-t from-bg via-bg/70 to-bg/20" />
      <div aria-hidden="true" className="hero-grain" />
      <DemoLabel />
      <div className="container-site flex min-h-[78svh] flex-col justify-end pb-14 pt-24 md:min-h-[86svh] md:pb-20">
        <p className="eyebrow">{copy.heroEyebrow}</p>
        <h1 id="hero-title" className="mt-4 max-w-4xl text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
          {copy.heroTitle}
        </h1>
        <span className="rule-gold" aria-hidden="true" />
        <p className="mt-6 max-w-xl text-lg text-ink/85">{copy.heroText}</p>
        <Actions />
        <a href="#intro-title" aria-label="Descendre vers la présentation" className="scroll-cue mt-10 hidden w-fit items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted hover:text-ink md:inline-flex">
          Découvrir
          <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14m0 0-6-6m6 6 6-6" />
          </svg>
        </a>
      </div>
    </section>
  );
}
