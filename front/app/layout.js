import { Nerko_One} from "next/font/google";
import "./globals.css";
import Header from "@/app/components/header/header";

const rubik = Nerko_One({
      subsets: ["latin"],
      weight: ["400"]
    }
);

export const metadata = {
  title: "Next + Node",
  description: "My app with Next and Node",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={rubik.className}>
          <Header/>
          {children}
      </body>
    </html>
  );
}
