import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AuthProvider } from "@/contexts/AuthContext";
import { ThemeProvider } from "@/contexts/ThemeContext";
// import Navigation from "@/components/Navigation";
import { Toaster } from "@/components/ui/sonner";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NGBooks Hotel - Luxury Accommodation & Premium Service",
  description:
    "Experience luxury and comfort at NGBooks Hotel. Book your perfect stay with world-class amenities, exceptional service, and unforgettable experiences.",
  keywords:
    "hotel, luxury accommodation, booking, premium service, hospitality",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <AuthProvider>
            <main className="min-h-screen">{children}</main>
            <Toaster position="top-right" />
          </AuthProvider>
        </ThemeProvider>
        <Footer />
      </body>
    </html>
  );
}
