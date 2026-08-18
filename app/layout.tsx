import type { Metadata } from "next";
import "./globals.css";

// NOTE : les polices sont chargées via une balise <link> Google Fonts
// classique (plutôt que `next/font/google`) afin que le build statique
// (`next build` / `output: export`) ne dépende d'aucun accès réseau au
// moment de la compilation. Elles se chargent normalement au runtime.

export const metadata: Metadata = {
  title: "Ibrahima Sory Barry — Juillet 2027",
  description:
    "Chaque grande histoire commence par une rencontre. La mienne est encore en cours d'écriture... Rendez-vous en juillet 2027.",
  openGraph: {
    title: "Ibrahima Sory Barry — Juillet 2027",
    description:
      "Chaque grande histoire commence par une rencontre. La mienne est encore en cours d'écriture...",
    locale: "fr_FR",
    type: "website",
  },
  metadataBase: new URL("https://example.com"),
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
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Manrope:wght@500;600;700;800&family=Caveat:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-cream-50 text-ink font-body antialiased">
        {children}
      </body>
    </html>
  );
}
