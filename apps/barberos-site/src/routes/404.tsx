import { createFileRoute } from '@tanstack/react-router';
import BarNotFound from '@/components/bar-not-found';

// Pre-rendered to `404.html` (see `vite.config.mts`), which Netlify serves for any missing path.
export const Route = createFileRoute('/404')({
  head: () => ({ meta: [{ title: 'Barberos — Page introuvable' }, { name: 'robots', content: 'noindex' }] }),
  component: BarNotFound,
});
