import Link from "next/link";
import NewsletterForm from "./NewsletterForm";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer-ombre mt-32">
      <div className="mx-auto max-w-content px-6 md:px-10 py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          <div className="md:col-span-5">
            <div className="mono uppercase-meta tracking-wider mb-6 text-white/90">
              DANCING WITH LIONS
            </div>
            <p className="serif text-2xl md:text-3xl leading-snug text-white max-w-md">
              Travel tech for a more legible world.
            </p>
          </div>

          <div className="md:col-span-3">
            <div className="mono uppercase-micro mb-5 text-white/60">Company</div>
            <ul className="space-y-3 mono text-sm">
              <li><Link href="/portfolio">Portfolio</Link></li>
              <li><Link href="/products">Products</Link></li>
              <li><Link href="/about">About</Link></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="mono uppercase-micro mb-5 text-white/60">Newsletter</div>
            <p className="mono text-sm text-white/70 mb-4">
              Occasional notes from the company. No more than once a month.
            </p>
            <NewsletterForm />
          </div>
        </div>

        <div className="mt-20 pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="mono text-xs text-white/50">
            © {year} Dancing with Lions. All rights reserved.
          </div>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 mono text-xs text-white/70">
            <li><Link href="/privacy">Privacy</Link></li>
            <li><Link href="/terms">Terms</Link></li>
            <li><Link href="/disclaimer">Disclaimer</Link></li>
            <li><Link href="/intellectual-property">Intellectual Property</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
