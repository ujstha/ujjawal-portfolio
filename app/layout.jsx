import { Montserrat_Alternates } from "next/font/google";
import Nav from "@components/Nav";
import Footer from "@components/Footer";

const montserratAlternates = Montserrat_Alternates({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

import "@styles/globals.css";

export const metadata = {
  title: "Ujjawal Shrestha",
  description: "A portfolio of Ujjawal Shrestha",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark">
      <body className={montserratAlternates.className}>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
