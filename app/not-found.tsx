import Link from "next/link";
import Masthead from "@/components/Masthead";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Masthead />
      <section className="mx-auto max-w-content px-8 md:px-16 lg:px-24 py-32 md:py-48">
        <div className="mono uppercase-micro text-text-muted mb-6">404</div>
        <h1
          className="serif text-text"
          style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", lineHeight: 1.0, letterSpacing: "-0.03em" }}
        >
          Not here.
        </h1>
        <p className="mono text-base text-text-secondary mt-6 max-w-xl">
          The page you were looking for isn't on this site.
        </p>
        <div className="mt-10">
          <Link href="/" className="mono uppercase-meta arrow-link text-text">
            Back to the start <span className="arrow">↗</span>
          </Link>
        </div>
      </section>
      <Footer />
    </>
  );
}
