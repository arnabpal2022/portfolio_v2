import type { Metadata } from "next";
// import { Montserrat as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import AnimatedBackground from "@/components/background/AnimatedBackground";

export const metadata: Metadata = {
  title: "Arnab Pal",
  description: "A Personal Portfolio",
};

// const fontSans = FontSans({
//   subsets: ["latin"],
//   variable: "--font-sans",
//   weight: "variable",
//   display: "swap",
//   adjustFontFallback: false,
// });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased dark montserrat",
          // fontSans.variable
        )}
      >
        <AnimatedBackground />
        {children}
      </body>
    </html>
  );
}