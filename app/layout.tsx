import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sai Harshith Yelamanchili | Full Stack Engineer",
  description:
    "Full Stack Engineer with 3+ years building real-time systems for 50K+ users using React Native, Node.js, and Azure cloud architectures.",
  keywords: [
    "Full Stack Developer",
    "React Native",
    "Node.js",
    "TypeScript",
    "Azure",
    "Software Engineer",
  ],
  authors: [{ name: "Sai Harshith Yelamanchili" }],
  openGraph: {
    title: "Sai Harshith Yelamanchili | Full Stack Engineer",
    description:
      "Full Stack Engineer with 3+ years building real-time systems for 50K+ users.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
