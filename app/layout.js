import Body from "./components/layout/body";
import "./globals.css";

export const metadata = {
  title: "Zeyad Maher | Front-end Developer",
  description: "zeyad maher portfolio v3 || front-end web devoloper",
  icons: {
    icon: "/favicon.ico",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Zeyad Portfolio</title>
        <meta
          name="google-site-verification"
          content="mCnco6G-xw_EaoqaPd0wPfOjlbZwurZqVwUfEA28kUo"
        />
      </head>
      <Body children={children}/>
    </html>
  );
}
