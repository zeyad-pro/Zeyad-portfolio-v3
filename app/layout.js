import Body from "./components/layout/body";
import "./globals.css";

export const metadata = {
  title: "Zeyad Maher | Front-end Developer",
  description: "zeyad maher portfolio v3 || front-end web devoloper",
  icons: {
    icon: "/favicon.ico",
  },
  verification: {
    google: "mCnco6G-xw_EaoqaPd0wPfOjlbZwurZqVwUfEA28kUo",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Body>{children}</Body>
      </body>
    </html>
  );
}
