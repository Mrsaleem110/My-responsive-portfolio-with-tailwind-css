
import "./globals.css";
import Header from '@/components/header/page';
import Footer from '@/components/footer/page';

export default function RootLayout({children}:{children:React.ReactNode}) {
  return (
    <html lang="en" dir="ltr">
      <body className="root-body">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
