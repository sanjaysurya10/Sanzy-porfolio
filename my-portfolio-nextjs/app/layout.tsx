import type { Metadata } from "next";
import type { ReactNode } from "react";
import Script from "next/script";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageScripts from "@/components/PageScripts";
import VideoBackground from "@/components/VideoBackground";

export const metadata: Metadata = {
  title: {
    template: "Sanjay Surya - %s",
    default: "Sanjay Surya",
  },
  description:
    "Sanjay Surya — AI/ML Engineer & Full-Stack Developer. Portfolio showcasing projects in deep learning, NLP, Spring Boot, and React.",
  authors: [{ name: "Sanjay Surya" }],
};

export default function RootLayout({ children }: { children: ReactNode }): JSX.Element {
  return (
    <html lang="en">
      <head>
        {/* Custom Google fonts*/}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@100;200;300;400;500;600;700;800;900&family=Space+Grotesk:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        {/* Bootstrap icons*/}
        <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css" rel="stylesheet" />
        {/* Core theme CSS (includes Bootstrap)*/}
        <link href="/assets/css/styles.css" rel="stylesheet" />
      </head>
      <body className="d-flex flex-column h-100">
        <VideoBackground />
        <main className="flex-shrink-0">
          {/* Navigation*/}
          <div>
            <Navbar />
          </div>
          <div>
            <div>{children}</div>
          </div>
        </main>
        {/* Footer*/}
        <div>
          <Footer />
        </div>
        {/* Bootstrap core JS*/}
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" strategy="afterInteractive" />
        {/* Core theme JS*/}
        <Script src="/assets/js/scripts.js" strategy="afterInteractive" />
        <PageScripts />
      </body>
    </html>
  );
}
