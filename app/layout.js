import { Geist, Geist_Mono, Sigmar, Bebas_Neue } from "next/font/google";
import "./globals.css";
import NavigationBar from "@/components/NavigationBar/NavigationBar";
import Footer from "@/components/Footer/Footer";
import { ToastWrapper } from "keep-react";
import { AuthProvider } from "@/components/Provider/Provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const bebas = Bebas_Neue({
  variable: "--font-sigmar",
  subsets: ["latin"],
  weight: ["400"]
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${bebas.variable} antialiased`}
      >
        <AuthProvider>
          <NavigationBar></NavigationBar>
          <div className=" mx-2 lg:mx-10 px-1 lg:px-5">
            {children}
            <ToastWrapper
              richColors={true}
              toastOptions={{
                classNames: {
                  title: 'text-body-3 font-medium',
                  toast: 'rounded-xl shadow-large',
                  description: 'text-body-4 font-normal',
                },
              }}
            />
          </div>
        </AuthProvider>
        <Footer></Footer>
      </body>
    </html>
  );
}
