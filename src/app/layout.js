import { Inter } from "next/font/google";
import "./globals.css";
import GlobalState from "@/context";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FixedContact from "./components/FixedContact";
import { Suspense } from "react";
import { PulseLoader } from "react-spinners";

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
        <Suspense
          fallback={
            <div className="h-screen w-full flex items-center justify-center">
              <PulseLoader color="#000" loading={true} size={10} />
            </div>
          }
        >
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
