import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative bg-ink px-5 pb-28 pt-16 text-white/70">
      <div className="mx-auto max-w-5xl">
        <Link href="/" className="font-display text-5xl font-black italic text-hotpink">Black Sweet.</Link>
        <p className="mt-3 max-w-md text-sm">
          Bubble Tea &amp; Waffle · 29 Rue du 4 septembre, 75002 Paris · Ouvert tous les jours jusqu&apos;à 23:30.
        </p>
        <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 border-t border-white/10 pt-6 text-xs uppercase tracking-wider">
          <span>© {new Date().getFullYear()} Black Sweet</span>
          <span className="opacity-50">Tous droits réservés</span>
          <span className="ml-auto opacity-50">
            Fait avec ♥ par{" "}
            <a
              href="https://aureon-digital.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-hotpink transition-colors"
            >
              Aureon
            </a>{" "}
            à Paris
          </span>
        </div>
      </div>
    </footer>
  );
}

