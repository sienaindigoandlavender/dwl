import type { Metadata } from "next";
import Masthead from "@/components/Masthead";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Maghreb, compared",
  description:
    "Comparative regional data across Morocco, Algeria, Tunisia, Libya, and Mauritania."
};

const PALETTE = [
  "#E63946",
  "#F77F00",
  "#FCBF49",
  "#EAE2B7",
  "#F4845F",
  "#48BFE3",
  "#72EFDD",
  "#64DFDF",
  "#5E60CE",
  "#7B2D8E",
  "#3A0CA3",
  "#1B1B3A"
];

const COUNTRIES = [
  { name: "Morocco", population: "37.8M", area: "446,550", capital: "Rabat", indep: "1956" },
  { name: "Algeria", population: "45.6M", area: "2,381,741", capital: "Algiers", indep: "1962" },
  { name: "Tunisia", population: "12.4M", area: "163,610", capital: "Tunis", indep: "1956" },
  { name: "Libya", population: "7.0M", area: "1,759,540", capital: "Tripoli", indep: "1951" },
  { name: "Mauritania", population: "4.9M", area: "1,030,700", capital: "Nouakchott", indep: "1960" }
];

export default function MaghrebComparedPage() {
  return (
    <>
      <Masthead />
      <article className="mx-auto max-w-content px-8 md:px-16 lg:px-24 pt-16 md:pt-24 pb-24">
        <div className="mono uppercase-micro text-text-muted mb-6">Data module — Operating</div>
        <h1
          className="serif text-text"
          style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", lineHeight: 1.0, letterSpacing: "-0.03em" }}
        >
          Maghreb, compared.
        </h1>
        <p className="mono text-base text-text-secondary mt-8 max-w-2xl leading-relaxed">
          Comparative regional data across the five Maghreb states — population, area, capitals,
          independence dates. The full module exposes time-series and reference cross-links via the
          Knowledge API.
        </p>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-5 gap-3">
          {COUNTRIES.map((c, i) => (
            <div
              key={c.name}
              className="aspect-square flex items-end p-4"
              style={{ background: PALETTE[i % PALETTE.length] }}
            >
              <div className="mono uppercase-micro text-white drop-shadow">{c.name}</div>
            </div>
          ))}
        </div>

        <div className="mt-16 overflow-x-auto">
          <table className="w-full mono text-sm border-collapse">
            <thead>
              <tr className="border-b border-text">
                <th className="text-left py-3 pr-6 uppercase-micro text-text-muted">Country</th>
                <th className="text-left py-3 pr-6 uppercase-micro text-text-muted">Population</th>
                <th className="text-left py-3 pr-6 uppercase-micro text-text-muted">Area (km²)</th>
                <th className="text-left py-3 pr-6 uppercase-micro text-text-muted">Capital</th>
                <th className="text-left py-3 pr-6 uppercase-micro text-text-muted">Independence</th>
              </tr>
            </thead>
            <tbody>
              {COUNTRIES.map((c) => (
                <tr key={c.name} className="border-b border-border">
                  <td className="py-4 pr-6 text-text">{c.name}</td>
                  <td className="py-4 pr-6 text-text-body">{c.population}</td>
                  <td className="py-4 pr-6 text-text-body">{c.area}</td>
                  <td className="py-4 pr-6 text-text-body">{c.capital}</td>
                  <td className="py-4 pr-6 text-text-body">{c.indep}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mono text-xs text-text-muted mt-12">
          Sources: national statistics offices, UN demographic estimates 2024. Cite as: Dancing
          with Lions, Maghreb compared, dancewithlions.com/data/maghreb-compared.
        </p>
      </article>
      <Footer />
    </>
  );
}
