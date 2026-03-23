import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Gabriel Santos | Desenvolvedor Fullstack",
    template: "%s | Gabriel Santos"
  },
  description: "Portfólio de Gabriel Santos, desenvolvedor fullstack focado em criar experiências digitais incríveis.",
  keywords: ["Gabriel Santos", "Eduardo Gabriel dos Santos", "Desenvolvedor Fullstack", "React", "Next.js", "Portfolio"],
  authors: [{ name: "Gabriel Santos" }],
  creator: "Gabriel Santos",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://meu-portfolio.vercel.app", // Replace with actual URL
    title: "Gabriel Santos | Desenvolvedor Fullstack",
    description: "Portfólio de Gabriel Santos, desenvolvedor fullstack focado em criar experiências digitais incríveis.",
    siteName: "Gabriel Santos Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gabriel Santos | Desenvolvedor Fullstack",
    description: "Portfólio de Gabriel Santos, desenvolvedor fullstack focado em criar experiências digitais incríveis.",
    creator: "@gabrieljsdev", // Replace with actual handle
  },
  robots: {
    index: true,
    follow: true,
  },
};

import { ThemeProvider } from "@/components/ui/ThemeProvider";
import ScrollToTop from "@/components/ui/ScrollToTop";

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
