import '../styles/globals.css';
import type { AppProps } from 'next/app';

function BarberosApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
export default BarberosApp;
