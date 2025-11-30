import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/theme/theme_provider";
import { LoadingProvider } from "./context/loading_context";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Alvino Wijaya - FullStack Developer",
  description:
    "Portfolio website of Alvino Dwi Nengku Wijaya, a passionate Full-Stack Website Developer from Indonesia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} font-sans antialiased`}>
        <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
          <LoadingProvider>{children}</LoadingProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
