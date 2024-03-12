import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Three Phase Electric",
  description: "Safe, Reliable, Professional Electrical Contractor in Lorem ipsum",
  image: "/logo.png",
  robots: "follow, index",
  locale: "en_US",
  site_name: "Three Phase Electric",
  type: "website",
  url: "https://threephaseelectricllc.com",
  phone: "931-345-4664",
  email: "threephaseelectric.tn@gmail.com",
  address: "Clarksville, TN 37040",
  region: "Tennessee",
  country: "United States",

  // Open Graph
  og: {
    title: "Three Phase Electric",
    description: "Safe, Reliable, Professional Electrical Contractor in Clarksville, TN",
    image: "/logo.png",
    url: "https://threephaseelectricllc.com",
    type: "website",
    site_name: "Three Phase Electric",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
