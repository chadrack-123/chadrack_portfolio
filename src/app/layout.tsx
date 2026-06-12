import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio.chadrack.dev"),
  title: "Chadrack Kavula Mulamba | Software Developer & Data Scientist",
  description:
    "Portfolio of Chadrack Kavula Mulamba — Software Developer and Data Scientist specializing in full-stack web development and data-driven solutions.",
  keywords: [
    "Chadrack Kavula Mulamba",
    "Chadrack Mulamba",
    "Software Developer",
    "Data Scientist",
    "Full Stack Developer",
    "Portfolio",
  ],
  authors: [{ name: "Chadrack Kavula Mulamba" }],
  creator: "Chadrack Kavula Mulamba",
  openGraph: {
    type: "website",
    url: "https://portfolio.chadrack.dev",
    siteName: "Chadrack Kavula Mulamba",
    title: "Chadrack Kavula Mulamba | Software Developer & Data Scientist",
    description:
      "Portfolio of Chadrack Kavula Mulamba — Software Developer and Data Scientist specializing in full-stack web development and data-driven solutions.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chadrack Kavula Mulamba | Software Developer & Data Scientist",
    description:
      "Portfolio of Chadrack Kavula Mulamba — Software Developer and Data Scientist specializing in full-stack web development and data-driven solutions.",
  },
  alternates: {
    canonical: "https://portfolio.chadrack.dev",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Chadrack Kavula Mulamba",
  url: "https://portfolio.chadrack.dev",
  jobTitle: "Software Developer & Data Scientist",
  sameAs: [
    "https://github.com/chadrack-123",
    "https://www.linkedin.com/in/chadrack-kavula-mulamba-67457318b/",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
