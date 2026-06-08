import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { getDictionary } from "../../lib/dictionaries";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bruno Rhis | Cybersecurity Portfolio",
  description: "Portfólio de Bruno Rhis - Consultor de TI, Pentester, Programador e Hacker Ético.",
};

export async function generateStaticParams() {
  return [{ lang: "pt" }, { lang: "en" }];
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;
  const dict = getDictionary(lang);

  return (
    <html
      lang={lang}
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Header dict={dict} lang={lang} />
        <main className="flex-1">
          {children}
        </main>
        <Footer dict={dict} />
      </body>
    </html>
  );
}
