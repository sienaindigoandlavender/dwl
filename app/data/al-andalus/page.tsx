import type { Metadata } from "next";
import Masthead from "@/components/Masthead";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Al-Andalus atlas",
  description:
    "Places, lineages, and the post-1492 Maghreb diaspora. Mapped and cross-indexed."
};

const PLACES = [
  { name: "Córdoba", note: "Capital of the Umayyad caliphate, 929–1031." },
  { name: "Granada", note: "Last Nasrid emirate, fell 1492." },
  { name: "Sevilla", note: "Almohad capital, 12th century." },
  { name: "Toledo", note: "Translation school, 12th–13th c." },
  { name: "Fes", note: "Andalusi quarter founded by 9th-century émigrés." },
  { name: "Tetouan", note: "Refounded 1485 by Granadan exiles." },
  { name: "Salé", note: "Hornacheros corsair republic, 17th c." },
  { name: "Tlemcen", note: "Zayyanid capital with Andalusi quarter." }
];

export default function AlAndalusPage() {
  const hasMapbox = !!process.env.NEXT_PUBLIC_MAPBOX_TOKEN;
  return (
    <>
      <Masthead />
      <article className="mx-auto max-w-content px-8 md:px-16 lg:px-24 pt-16 md:pt-24 pb-24">
        <div className="mono uppercase-micro text-text-muted mb-6">Data module · Operating</div>
        <h1
          className="serif text-text"
          style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", lineHeight: 1.0, letterSpacing: "-0.03em" }}
        >
          Al-Andalus atlas.
        </h1>
        <p className="mono text-base text-text-secondary mt-8 max-w-2xl leading-relaxed">
          Places, lineages, and the post-1492 Maghreb diaspora. Each place links to a record with
          dates, sources, and onward references, including the Andalusi quarters founded across
          North Africa by exiled families.
        </p>

        <div className="mt-12 aspect-[16/9] w-full bg-light flex items-center justify-center relative overflow-hidden">
          {hasMapbox ? (
            <div className="mono uppercase-micro text-text-muted">
              Mapbox map mounts here at runtime.
            </div>
          ) : (
            <div className="text-center px-8">
              <div className="mono uppercase-micro text-text-muted mb-3">Map</div>
              <p className="serif text-text" style={{ fontSize: "22px", letterSpacing: "-0.01em" }}>
                Set <span className="mono">NEXT_PUBLIC_MAPBOX_TOKEN</span> to render the atlas.
              </p>
            </div>
          )}
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
          {PLACES.map((p) => (
            <div key={p.name} className="border-t border-border pt-4">
              <div className="serif text-text" style={{ fontSize: "22px", letterSpacing: "-0.01em" }}>
                {p.name}
              </div>
              <p className="mono text-sm text-text-secondary mt-1">{p.note}</p>
            </div>
          ))}
        </div>

        <p className="mono text-xs text-text-muted mt-16">
          Cite as: Dancing with Lions, Al-Andalus atlas, dancewithlions.com/data/al-andalus.
        </p>
      </article>
      <Footer />
    </>
  );
}
