import localFont from "next/font/local";
import { Hedvig_Letters_Serif } from "next/font/google";
import ThemeProvider from "./_providers/ThemeProvider";
import "./globals.css";

const helveticaNeue = localFont({
  src: [
    {
      path: "../public/fonts/HelveticaNeue-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/HelveticaNeue-Roman.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/HelveticaNeue-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/HelveticaNeue-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});

const hedvigLettersSerif = Hedvig_Letters_Serif({
  subsets: ["latin"],
  variable: "--font-hedvig-letters-serif",
  display: "swap",
});

export const metadata = {
  title: "Nicholas Ong",
  description:
    "Hey, I'm Nicholas, a writer currently looking for a full time role.",
  openGraph: {
    images: ["/profile.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${helveticaNeue.className} ${hedvigLettersSerif.variable} tracking-[-0.02em] antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
