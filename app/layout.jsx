import { Montserrat_Alternates } from "next/font/google";
import Nav from "@components/Nav";
import Footer from "@components/Footer";
import HireMeButton from "@components/Button/HireMeButton";

const montserratAlternates = Montserrat_Alternates({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

import "@styles/globals.css";
import "@styles/animations.css";

export const metadata = {
  title: "Ujjawal Shrestha",
  description: "A portfolio of Ujjawal Shrestha",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserratAlternates.className}>
        <Nav />
        <main>{children}</main>
        <HireMeButton />
        <Footer />
      </body>
    </html>
  );
}
