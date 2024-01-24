import { ReactNode } from "react";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import PageContent from "@app/_components/UI/PageContent/PageContent";
import Navigation from "@app/_components/Navigation/Navigation";
import Footer from "@app/_components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "portfolio-md",
  description: "description of portfolio-md"
};

export default async function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <nav>
          <PageContent>
            <Navigation />
          </PageContent>
        </nav>

        {children}

        <footer>
          <PageContent>
            <Footer />
          </PageContent>
        </footer>
      </body>
    </html>
  );
}
