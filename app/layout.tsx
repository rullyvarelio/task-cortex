import "./globals.css";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";

const inter = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TaskCortex",
  description: "Your AI-driven brain for smarter, seamless task management.",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link rel="icon" href="/icon.svg" sizes="any" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
