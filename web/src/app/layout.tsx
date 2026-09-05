import type { Metadata, Viewport } from "next";
import { DM_Sans, DM_Serif_Display, Figtree } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MobileCTA } from "@/components/MobileCTA";
import { brand } from "@/lib/content";
import { media } from "@/lib/media";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#2C3A35",
  viewportFit: "cover",
};

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: ["400"],
});

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://novimid.com"),
  title: {
    default: `${brand.displayName} — ${brand.positioning}`,
    template: `%s · ${brand.displayName}`,
  },
  description:
    "novimid connects eligible patients with independent U.S.-licensed clinicians for Semaglutide and Tirzepatide weight-management programs when clinically appropriate. Fulfillment through licensed pharmacy partners when prescribed.",
  applicationName: brand.displayName,
  robots: { index: true, follow: true },
  openGraph: {
    title: `${brand.displayName} — ${brand.positioning}`,
    description: brand.tagline,
    siteName: brand.displayName,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: media.og.src,
        width: media.og.width,
        height: media.og.height,
        alt: media.og.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${brand.displayName} — ${brand.positioning}`,
    description: brand.tagline,
    images: [media.og.src],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/brand/Novimid_ICON-DARK.svg", type: "image/svg+xml" },
      { url: "/brand/Novimid_ICON-DARK_512.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/brand/Novimid_ICON-LT.png", sizes: "180x180", type: "image/png" }],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${dmSerif.variable} ${figtree.variable} h-full`}
    >
      <body className="flex min-h-full flex-col bg-white text-midnight antialiased">
        {/* Site chrome: nav → page */}
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileCTA />
      </body>
    </html>
  );
}
