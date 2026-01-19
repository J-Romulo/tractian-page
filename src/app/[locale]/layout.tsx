import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "../../i18n/routing";
import { Inter, Inter_Tight } from "next/font/google";
import { Metadata } from "next";
import { Header } from "../../components/layout/Header";
import "./globals.css";
import Footer from "../../components/layout/Footer/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tractian para Gerentes Industriais",
  description:
    "Otimize a performance dos seus ativos com as melhores ferramentas de Asset Performance Management (APM) para garantir máxima disponibilidade e reduzir paradas inesperadas com inteligência artificial.",
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "en" | "es" | "pt")) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${inter.variable} ${interTight.variable} antialiased`}>
        <NextIntlClientProvider messages={messages}>
        <Header />
          {children}
        <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
