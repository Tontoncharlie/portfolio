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
  title: "Tonton's Portfolio",
  description: "Portfolio of Chigioke Charles",
  icons: {
    icon: "/favicon.png", // <-- your custom icon
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
