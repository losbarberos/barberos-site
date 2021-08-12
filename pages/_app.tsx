import '../styles/globals.scss';
import type { AppProps } from 'next/app';

function BarberosApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
export default BarberosApp;
