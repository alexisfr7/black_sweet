import type { Metadata } from "next";
import { Toaster } from "sonner";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Black Sweet — Bubble Tea & Waffle · Paris",
    template: "%s | Black Sweet",
  },
  description:
    "Bubble waffles gourmands, bubble tea signature et desserts maison au cœur de Paris. 29 Rue du 4 septembre, 75002.",
  metadataBase: new URL("https://blacksweet.fr"),
  openGraph: {
    title: "Black Sweet — Bubble Tea & Waffle",
    description:
      "L'expérience bubble waffle la plus douce de Paris. À déguster sur place ou à emporter.",
    type: "website",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
  },
  icons: {
    icon: "/favicon.ico",
  },
  other: {
    "theme-color": "#ff4d8d",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,500;0,9..144,700;0,9..144,900;1,9..144,700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        <Toaster position="top-center" richColors closeButton theme="light" />
      </body>
    </html>
  );
}
