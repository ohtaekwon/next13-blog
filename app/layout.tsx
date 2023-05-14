import "./globals.css";
import fonts from "@/app/fonts";
import NavBar from "app/(shared)/NavBar";
import Footer from "app/(shared)/Footer";

export const metadata = {
  title: "Blog AI App",
  description: "Blog built in NEXT JS ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={fonts.openSans.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
