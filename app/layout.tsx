import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";

import { Silkscreen, Bebas_Neue, Exo } from "next/font/google";

// subheading
const silkscreen = Silkscreen({
  subsets: ["latin"],
  variable: "--font-Silkscreen",
  display: "swap",
  weight: "400",
});

// Heading
const BebasNeue = Bebas_Neue({
  subsets: ["latin"],
  variable: "--font-BebasNeue",
  display: "swap",
  weight: "400",
});

// paragraph
const exo = Exo({
  subsets: ["latin"],
  variable: "--font-Exo",
  display: "swap",
  weight: "300",
});

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "Sourav Bhunia | B.Tech in CSE",
  description: "Proficient in C, C++, and JavaScript, with hands-on experience in modern web technologies including Next.js, React.js, StrapiJS, Node.js, Express.js, MySQL, TailwindCSS, and Shadcn UI. Skilled in building scalable, responsive, and user-friendly applications, integrating secure backend systems, and optimizing performance for real-world use cases.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <head>
        <link rel="icon" href="/favicon.png" sizes="any" />
      </head> */}
      <body
        className={`${silkscreen.variable} ${BebasNeue.variable} ${exo.variable} antialiased sm:py-8 sm:px-24 p-2`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
