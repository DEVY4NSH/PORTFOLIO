import { Inter } from "next/font/google";
import "./globals.css";
import TransitPages from "@/components/TransitPages";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Divyansh Portfolio App",
  description: "NCS, DIVYANSH SAHU, SKILLS, PORTFOLIO, IIT BHU, RESUME, DIVYANSH PROJECTS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TransitPages>{children}</TransitPages>
      </body>
    </html>
  );
}
