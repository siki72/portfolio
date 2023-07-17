import "./globals.css";
import "../scss/index.css";
import { Raleway, Fira_Code } from "next/font/google";

const fira = Fira_Code({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-fira",
});
const raleway = Raleway({ subsets: ["latin"], variable: "--font-raleway" });
export const metadata = {
  title: "Développeur front-end freelance React | Ali Missoum",
  description:
    "Développeur React freelance sur le mans, développeur next.js, dévéloppeur node js",
  keywords:
    "Développeur front-end, le mans, back-end, Javascript,React, Next.js, Node.js, freelance, portfolio, SQL, Mongodb",
  author: "Ali Missoum",
  robots: "index, follow",
  og: {
    title: "portfolio ali missoum",
    image: "/og.webp",
    description: "Développeur front-end | React / Nextjs",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={`${fira.variable} ${raleway.variable}`}>{children}</body>
    </html>
  );
}
