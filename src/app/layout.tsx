import "./globals.css";

type RootLayoutProvideProps = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: RootLayoutProvideProps) => {
  return (
    <html lang="en">
      <body>
        <main className="">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
