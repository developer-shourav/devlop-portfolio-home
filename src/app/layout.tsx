import type { Metadata } from "next";
import "../styles/globals.css";
import "../styles/fonts.css";
import RootProvider from "@/providers/RootProvider";

export const metadata: Metadata = {
  title: "devlop.me - home",
  description: "developer portfolio website developed by Shourav Raj",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased w-full mx-auto max-w-[1440px] h-[100vh]">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
