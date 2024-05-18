import { Inter } from "next/font/google";
import "./globals.css";
import GlobalState from "@/context";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FixedContact from "./components/FixedContact";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "تهاني السعيدي | العباية",
  description:
    "تصميم العباية هو فن يحتاج إلى ذوق رفيع لذلك نحاول دائمًا تقديم الأفضل لعملائنا.  ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body className={inter.className}>
        <Suspense fallback={<div>تحميل ...</div>}>
          <GlobalState>
            <Navbar />
            {children}
            <Footer />
            <FixedContact />
          </GlobalState>
        </Suspense>
      </body>
    </html>
  );
}
