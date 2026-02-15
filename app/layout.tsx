import { TooltipProvider } from "@/components/ui/tooltip";
import { ScrollToTop } from "@/components/scroll-to-top";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { GeistSans } from "geist/font/sans";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import { LanguageProvider } from "@/context/language-context";
import "./globals.css";

const geist = GeistSans;

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Rifqi Ardian | Fullstack Developer",
  description: "Fullstack Developer specializing in modern web technologies. Building scalable applications with Next.js, React, Laravel, and more.",
  keywords: ["Rifqi Ardian", "Fullstack Developer", "Web Developer", "Next.js", "React", "Laravel", "Portfolio"],
  authors: [{ name: "Rifqi Ardian" }],
  creator: "Rifqi Ardian",
  openGraph: {
    type: "website",
    siteName: "Rifqi Ardian Portfolio",
    title: "Rifqi Ardian | Fullstack Developer",
    description: "Fullstack Developer specializing in modern web technologies",
    locale: "id_ID",
  },
  icons: {
    icon: [
      { url: '/favicon.svg?v=1', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/apple-icon.svg?v=1', type: 'image/svg+xml' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={`${geist.variable} ${plusJakartaSans.variable} ${jetbrainsMono.variable} font-mono antialiased bg-background text-foreground selection:bg-primary selection:text-primary-foreground`} suppressHydrationWarning={true}>
        <LanguageProvider>
          <ThemeProvider attribute="class" defaultTheme="dark" forcedTheme="dark" disableTransitionOnChange>
            <TooltipProvider>
              <div className="crt min-h-screen relative overflow-x-hidden">
                <div className="noise" />
                {children}
              </div>
              <ScrollToTop />
            </TooltipProvider>
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
