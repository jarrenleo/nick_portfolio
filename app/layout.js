import { GeistSans } from "geist/font/sans";
import ThemeProvider from "@/app/_providers/ThemeProvider";
import "./globals.css";

export const metadata = {
  title: "Nicholas Ong",
  description:
    "Hi, I am Nick, a writer currently working at Hoods Inc. Productions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`bg-background text-foreground ${GeistSans.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
