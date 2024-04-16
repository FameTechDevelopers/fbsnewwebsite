import { Inter } from "next/font/google";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "../Components/Navbar";
import Footer from "../Sections/Footer";
import RequestCallback from "../Components/RequestCallback";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Welcome to Fame Business Solutions",
  description:
    "Discover innovative software solutions tailored for your business needs in Pakistan. Our cutting-edge technology transforms ideas into reality, providing seamless digital experiences. Explore our comprehensive services and unlock the potential for growth and success with our trusted software company.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <div className="absolute top-[50%] left-[-131px]">
          <RequestCallback />
        </div>
        <Footer />
      </body>
    </html>
  );
}
