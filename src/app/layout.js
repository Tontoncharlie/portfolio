import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/footer/Footer"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  metadataBase: new URL("https://tonton-charlie.name.ng"),
  title: "Tonton | Web Developer Portfolio",
  description: "Welcome to the portfolio of Tonton, a passionate full stack developer skilled in React, Next.js, and Tailwind CSS.",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "Tonton | Web Developer Portfolio",
    description: "Welcome to the portfolio of Tonton, a passionate full stack developer skilled in React, Next.js, and Tailwind CSS.",
    url: "https://tonton-charlie.name.ng",
    siteName: "Tonton Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
           name="google-site-verification"
            content="UelCrGoq7hIpQmIlGK39d6kNxfP1T8cK1qNENMC2k_g" />
      </head>
     <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
