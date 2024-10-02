import { Inconsolata } from "next/font/google";
import ThemeProvider from "@/app/_providers/ThemeProvider";
import "./globals.css";

const inconsolata = Inconsolata({ subsets: ["latin"] });

export const metadata = {
  title: "Nicholas Ong",
  description:
    "Hi, I am Nick, a writer currently working at Hoods Inc. Productions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`bg-background text-foreground ${inconsolata.className}`}
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
