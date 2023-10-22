import 'src/styles/globals.css';
import Layout from 'src/components/Layout/Layout';

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
