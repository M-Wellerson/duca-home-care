import { Inter, DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Duca Home Care",
  description: "HomeCare",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-[#E4EBF1]">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
