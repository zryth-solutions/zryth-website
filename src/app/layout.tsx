import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";
import "../styles/index.css";
import "../styles/prism-vsc-dark-plus.css";
import ToasterContext from "./api/contex/ToasetContex";
import ClientLayout from "./client-layout";
import { generateMetadata, pageSEOConfigs, generateStructuredData } from "@/utils/metadata";

// Generate metadata for the root layout
export const metadata = generateMetadata(pageSEOConfigs.home);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://zryth.com";
  const organizationSchema = generateStructuredData.organization(siteUrl);
  const websiteSchema = generateStructuredData.website(siteUrl);

  return (
    <html suppressHydrationWarning={true} className="!scroll-smooth" lang="en">
      <head>
        {/* Structured Data for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema)
          }}
        />
        {/* Structured Data for Website */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema)
          }}
        />
      </head>
      <body>
        <ClientLayout>
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
          <WhatsAppFloat />
        </ClientLayout>
      </body>
    </html>
  );
}
