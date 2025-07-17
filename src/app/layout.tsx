import TopBar from "@/components/Header/TopBar";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

type RootLayoutProvideProps = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: RootLayoutProvideProps) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute={"class"}
          defaultTheme="light"
          enableSystem={false}
        >
          <TopBar />
          <main className="mx-auto max-w-7xl px-6 py-4">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
