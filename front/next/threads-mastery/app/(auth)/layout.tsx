import { ClerkProvider } from "@clerk/nextjs";

import { cn } from "@/lib/utils";
import { Inter as FontSans } from "next/font/google";

import "../globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Threads clone",
  description: "A next.js and clerk clone of threads.com",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          <div>layout</div>
        </body>
      </html>
    </ClerkProvider>
  );
}