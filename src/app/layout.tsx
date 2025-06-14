import TopBar from "@/components/Header/TopBar";
import "./globals.css";

type RootLayoutProvideProps = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: RootLayoutProvideProps) => {
  return (
    <html lang="en">
      <body>
        <TopBar />
        <main className="mx-auto max-w-7xl px-6 py-4">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
