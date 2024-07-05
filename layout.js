import { Inter } from "next/font/google";
import Navbar from '@/component/navbar'; // ตรวจสอบเส้นทางนี้
import Footer from '@/component/footer'; // ตรวจสอบเส้นทางนี้
import '@/styles/globals.css'; // ตรวจสอบเส้นทางนี้

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
