import "./globals.css";
import "./print.css";

import type { Metadata } from "next";

import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Rasid Agac",
  description: "Rasid Agac's Resume",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main
          className={cn(
            "mx-auto max-w-3xl py-10 px-6",
            "prose prose-sm prose-stale dark:prose-invert",
            "prose-headings:mb-1 prose-headings:mt-2",
            "prose-h2:border-b",
            "prose-table:my-2",
            "prose-tr:border-none prose-td:py-1",
            "prose-p:m-0",
            "prose-ul:m-0 prose-li:m-0",
          )}
        >
          {children}
        </main>
      </body>
    </html>
  );
}
