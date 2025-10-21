import Body from "./components/layout/body";
import "./globals.css";
import localFont from "next/font/local";

export const metadata = {
  title: "Zeyad Maher | Front-end Developer",
  description: "Zeyad Maher Portfolio v3 | Front-end Web Developer",
  icons: { icon: "/favicon.ico" },
  verification: {
    google: "mCnco6G-xw_EaoqaPd0wPfOjlbZwurZqVwUfEA28kUo",
  },
};

const geistSans = localFont({
  src: "../public/fonts/Geist/static/Geist-Medium.ttf",
  variable: "--font-geist-sans",
});

const geistMono = localFont({
  src: "../public/fonts/Geist_Mono/GeistMono-VariableFont_wght.ttf",
  variable: "--font-geist-mono",
});

const cairo = localFont({
  src: "../public/fonts/Cairo/Cairo-VariableFont_slnt,wght.ttf",
  variable: "--font-cairo",
});

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${cairo.variable}`}
    >
      <Body geistSans={geistSans} geistMono={geistMono} cairo={cairo}>
        {children}
      </Body>
    </html>
  );
}
