import "./globals.css";
import "./scss/index.css";
import { Inter, Raleway, Fira_Code, Fasthand } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const fasthand = Fasthand({
  subsets: ["latin"],
  variable: ["--font-fast"],
  weight: ["400"],
});
const fira = Fira_Code({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-fira",
});
const raleway = Raleway({ subsets: ["latin"], variable: "--font-raleway" });
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${fira.variable} ${raleway.variable} ${fasthand.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
