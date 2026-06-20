import type { Metadata } from "next";
import "./globals.css";
import { PersonaProvider } from "@/lib/persona-context";
import { ThemeProvider } from "@/lib/theme-context";

export const metadata: Metadata = {
  title: "Insight Redefini — Staff Training",
  description: "Internal training platform for company staff.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body text-ink bg-paper transition-colors">
        <ThemeProvider>
          <PersonaProvider>{children}</PersonaProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
