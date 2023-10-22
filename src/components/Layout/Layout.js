import Header from 'src/components/Header/Header';
import Footer from 'src/components/Footer/Footer';

export default function Layout({ children }) {
  return (
    <>
      <Header />

      <main>{children}</main>

      <Footer />
    </>
  );
}
