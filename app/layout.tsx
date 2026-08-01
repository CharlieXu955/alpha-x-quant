import type { Metadata, Viewport } from "next";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://alphaxquant.com"),
  title: {
    default: "Alpha X Quant | Quantitative Research",
    template: "%s | Alpha X Quant",
  },
  description:
    "Alpha X Quant is a quantitative research company focused on systematic research frameworks, statistical modeling, machine learning, and financial data analysis.",
  applicationName: "Alpha X Quant",
  authors: [{ name: "Alpha X Quant LLC" }],
  creator: "Alpha X Quant LLC",
  publisher: "Alpha X Quant LLC",
  keywords: [
    "quantitative research",
    "alpha research",
    "empirical asset pricing",
    "systematic strategies",
    "financial machine learning",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Alpha X Quant",
    title: "Alpha X Quant | Quantitative Research",
    description:
      "Quantitative Research. Systematic Alpha Discovery. Data-Driven Insights.",
    images: [
      {
        url: "/og.png",
        width: 1728,
        height: 910,
        alt: "Alpha X Quant quantitative research",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alpha X Quant | Quantitative Research",
    description:
      "Quantitative Research. Systematic Alpha Discovery. Data-Driven Insights.",
    images: ["/og.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#071522",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Alpha X Quant LLC",
    url: "https://alphaxquant.com",
    description:
      "A quantitative research and technology company focused on systematic investment research frameworks.",
    founder: {
      "@type": "Person",
      name: "Jialu Xu",
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "Cornell University",
      },
    },
  };

  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">
          Skip to main content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </body>
    </html>
  );
}
