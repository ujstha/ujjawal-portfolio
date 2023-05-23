import Nav from "@components/Nav";

export const metadata = {
  title: "Ujjawal Shrestha",
  description: "A portfolio of Ujjawal Shrestha",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main>{children}</main>
      </body>
    </html>
  );
}
