import { TooltipProvider } from "@/components/ui/tooltip";
import { ScrollToTop } from "@/components/scroll-to-top";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Inter, JetBrains_Mono, Antonio } from "next/font/google";
import { LanguageProvider } from "@/context/language-context";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const antonio = Antonio({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rifqi Ardian | Web Developer",
  description: "Web Developer specializing in modern web technologies. Building scalable applications with Next.js, React, Laravel, and more.",
  keywords: ["Rifqi Ardian", "Web Developer", "Web Developer", "Next.js", "React", "Laravel", "Portfolio"],
  authors: [{ name: "Rifqi Ardian" }],
  creator: "Rifqi Ardian",
  openGraph: {
    type: "website",
    siteName: "Rifqi Ardian Portfolio",
    title: "Rifqi Ardian | Web Developer",
    description: "Web Developer specializing in modern web technologies",
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
      <body className={`${inter.variable} ${antonio.variable} ${jetbrainsMono.variable} font-sans antialiased bg-background text-foreground selection:bg-accent selection:text-accent-foreground`} suppressHydrationWarning={true}>
        <LanguageProvider>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
            <TooltipProvider>
              <div className="min-h-screen relative overflow-x-hidden">
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
