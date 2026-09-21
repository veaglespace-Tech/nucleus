import type { Metadata } from "next";
import "./globals.css";
import { StoreProvider } from "../StoreProvider";
import LayoutWrapper from "@/components/layout/LayoutWrapper";

export const metadata: Metadata = {
  title: "Nucleus Hospital | Multispecialty Healthcare",
  description: "Providing world-class healthcare services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="emerald">
      <body
        className={`font-sans antialiased min-h-screen flex flex-col`}
      >
        <StoreProvider>
          <LayoutWrapper>{children}</LayoutWrapper>
        </StoreProvider>
      </body>
    </html>
  );
}

