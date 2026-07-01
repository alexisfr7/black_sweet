import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative bg-ink px-5 pb-32 pt-16 text-white/50">
      <div className="mx-auto max-w-5xl">
        <Link href="/" className="font-display text-5xl font-black italic text-hotpink">Black Sweet.</Link>
        <p className="mt-3 max-w-md text-sm text-white/70">
          Bubble Tea &amp; Waffle · 29 Rue du 4 septembre, 75002 Paris · Ouvert tous les jours jusqu&apos;à 23:30.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row sm:items-center justify-between gap-y-3 border-t border-white/10 pt-6 text-xs uppercase tracking-wider">
          <div className="flex flex-wrap justify-center sm:justify-start gap-x-6 gap-y-2">
            <span className="text-white/70">© {new Date().getFullYear()} Black Sweet</span>
            <span>Tous droits réservés</span>
          </div>
          <span className="text-center sm:text-right">
            Fait par{" "}
            <a
              href="https://aureon-digital.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-white/70 hover:text-hotpink transition-colors font-bold"
            >
              Aureon digital
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}

