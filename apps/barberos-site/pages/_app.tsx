import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { analytics } from '../utils/firebase';

function BarberosApp({ Component, pageProps }: AppProps) {
  const routers = useRouter();

  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      const logEvent = (url: string) => {
        analytics().setCurrentScreen(url);
        analytics().logEvent('screen_view');
      };

      routers.events.on('routeChangeComplete', logEvent);
      // for First Page
      logEvent(window.location.pathname);

      // remvove Event Listener after un-mount
      return () => {
        routers.events.off('routeChangeComplete', logEvent);
      };
    }
  }, []);

  return <Component {...pageProps} />;
}
export default BarberosApp;
