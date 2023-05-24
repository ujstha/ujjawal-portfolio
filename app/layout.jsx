import { Montserrat_Alternates } from "next/font/google";
import Nav from "@components/Nav";

const montserratAlternates = Montserrat_Alternates({
  subsets: ["latin"],
  weight: "500",
});

import "@styles/globals.css";

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
      </body>
    </html>
  );
}
