import { defineConfig, type Plugin } from 'vite';
import { tanstackStart } from '@tanstack/react-start/plugin/vite';
import viteReact from '@vitejs/plugin-react';

// Every page is pre-rendered to static HTML at build time; Netlify serves `dist/apps/barberos-site/client`.
// The pages are listed explicitly: the `running-course-v1/*` policies are linked only from outside the site, so link
// crawling alone would miss them.
const pages = [
  '/',
  '/portfolio',
  '/about',
  '/contact',
  '/legal-mentions',
  '/running-course-v1/privacy-policy',
  '/running-course-v1/terms-and-conditions',
];

// The workspace package.json has no `"type": "module"`, so Vite names the ESM server bundle `server.mjs`, while the
// pre-render step imports `server.js`. Emit `server.js` and mark the server output folder as ESM.
const esmServerOutput = (): Plugin => ({
  name: 'barberos:esm-server-output',
  applyToEnvironment: environment => environment.name === 'ssr',
  config: () => ({ environments: { ssr: { build: { rollupOptions: { output: { entryFileNames: '[name].js' } } } } } }),
  generateBundle() {
    this.emitFile({ type: 'asset', fileName: 'package.json', source: '{ "type": "module" }\n' });
  },
});

export default defineConfig({
  root: import.meta.dirname,
  cacheDir: '../../node_modules/.vite/apps/barberos-site',
  server: { port: 3000, strictPort: true },
  build: { outDir: '../../dist/apps/barberos-site', emptyOutDir: true },
  resolve: { tsconfigPaths: true },
  // react-icons 4 ships ESM files with directory imports, which Node refuses: bundle it into the server build.
  ssr: { noExternal: ['react-icons'] },
  plugins: [
    tanstackStart({
      // `/404` is written to `404.html`, which Netlify serves for any missing path.
      pages: [...pages.map(path => ({ path })), { path: '/404', prerender: { outputPath: '/404.html' } }],
      prerender: { enabled: true, crawlLinks: true, failOnError: true },
    }),
    viteReact(),
    esmServerOutput(),
  ],
});
