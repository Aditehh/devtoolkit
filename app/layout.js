import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navabr from "@/Components/Navabr";
import { ThemeProvider } from "./contexts/ThemeContext";






const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "DevToolkit ⚙️",
  description: "All-in-one developer utility hub built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-50 text-slate-800`}
      >
        <Navabr />
        <ThemeProvider>
          <main className="min-h-screen">
            {children}
          </main>
        </ThemeProvider>

      </body>
    </html>
  );
}
