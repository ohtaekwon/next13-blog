import NavBar from "./(shared)/NavBar";
import "./globals.css";
import fonts from "@/app/fonts";

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
      </body>
    </html>
  );
}
