import appCss from '../styles/globals.scss?url';
import BarHeader from '@/components/bar-header';
import BarSeparator from '@/components/bar-separator';
import BarFooter from '@/components/bar-footer';
import { BarMain } from '@/components/bar-main';
import BarNotFound from '@/components/bar-not-found';
import { StickyLayoutProvider } from '@/providers/sticky-layout';
import { createRootRoute, HeadContent, Outlet, Scripts } from '@tanstack/react-router';

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'Barberos' },
      {
        name: 'description',
        content:
          'Barberos est une société de développement informatique spécialisée dans la conception d’applications Web complexes et performantes.',
      },
    ],
    links: [{ rel: 'stylesheet', href: appCss }],
  }),
  component: RootLayout,
  notFoundComponent: BarNotFound,
});

function RootLayout() {
  return (
    <html lang="fr" className="h-full">
      <head>
        <HeadContent />
      </head>
      <body className="h-full flex flex-col">
        <StickyLayoutProvider>
          <BarHeader />
          <BarSeparator />
          <BarMain>
            <Outlet />
          </BarMain>
          <BarFooter />
        </StickyLayoutProvider>
        <Scripts />
      </body>
    </html>
  );
}
