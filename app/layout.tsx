import "./globals.css";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import iconLight from "@/public/icon.svg";
import iconDark from "@/public/icon-dark.svg";

const inter = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TaskCortex",
  description: "Your AI-driven brain for smarter, seamless task management.",
  icons: [
    {
      media: "(prefers-color-scheme: light)",
      url: iconLight.src,
      type: "image/svg+xml",
    },
    {
      media: "(prefers-color-scheme: dark)",
      url: iconDark.src,
      type: "image/svg+xml",
    },
  ],
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scrollbar-hidden" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
