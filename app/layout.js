import "./globals.css";
import FooterComponent from "./components/FooterComponent";
import NavbarComponent from "./components/NavbarComponent";
import { Rubik } from "next/font/google"; 


const rubik = Rubik({
  subsets: ["latin"],
  variable: "--font-rubik",
});

export const metadata = {
  title: "Hcare",
  description: "Health Care App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${rubik.className} antialiased`}>
        <NavbarComponent />
        {children}
        <FooterComponent />
      </body>
    </html>
  );
}
