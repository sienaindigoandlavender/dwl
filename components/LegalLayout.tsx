import Masthead from "@/components/Masthead";
import Footer from "@/components/Footer";
import type { LegalDoc } from "@/lib/legal";

export default function LegalLayout({ doc }: { doc: LegalDoc }) {
  const blocks = doc.body.split(/\n\n+/);
  return (
    <>
      <Masthead />
      <article className="mx-auto max-w-3xl px-6 md:px-10 pt-16 md:pt-24 pb-24">
        <div className="mono uppercase-micro text-text-muted mb-6">Legal — Updated {doc.updated}</div>
        <h1
          className="serif text-text mb-12"
          style={{ fontSize: "clamp(2.25rem, 5vw, 3.5rem)", lineHeight: 1.05, letterSpacing: "-0.02em" }}
        >
          {doc.title}.
        </h1>
        <div className="space-y-6">
          {blocks.map((block, i) => {
            if (block.startsWith("## ")) {
              return (
                <h2
                  key={i}
                  className="serif text-text pt-6"
                  style={{ fontSize: "26px", letterSpacing: "-0.01em" }}
                >
                  {block.replace(/^##\s+/, "")}
                </h2>
              );
            }
            return (
              <p key={i} className="text-body text-text-body">
                {block}
              </p>
            );
          })}
        </div>
      </article>
      <Footer />
    </>
  );
}
