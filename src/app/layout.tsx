import "~/styles/globals.css";

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

function TopNav() {
  return (
    <nav className="mx-auto flex w-full items-center justify-between border-b p-4 text-xl font-semibold">
      <div className="">Gallery</div>
      <div className="">SignIn</div>
    </nav>
  );
}

export const metadata = {
  title: "Gallery",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable} flex flex-col gap-4`}>
        <TopNav />
        {children}
      </body>
    </html>
  );
}