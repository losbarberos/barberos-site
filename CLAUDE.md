# Barberos — public site

The public website of Barberos SARL, a French software development and consulting company (https://barberos.fr):
a handful of static pages presenting the services, the portfolio, the company and a contact form.

## Language rules

- **Code, identifiers, comments, commit messages and technical docs are in English.**
- The **site content is in French**, written with French typography (curly apostrophe `’`, `« »`, `—`). Keep it so.
- Exception: the `running-course-v1/*` pages are in English (policies of a separate app, see below).

## Stack & layout

Nx 24 workspace, pnpm 12 (version pinned by `packageManager`; settings in `pnpm-workspace.yaml`, `.npmrc` only holds the
registry), Node 20 in CI.

- `apps/barberos-site` — the site: Next.js 14 **App Router**, React 18, Tailwind 3 + one global Sass file
  (`styles/globals.scss`). Every page is pre-rendered as static content at build time.
  - `app/` — one folder per route: `/` (services), `/portfolio`, `/about`, `/contact`, `/legal-mentions`, and
    `/running-course-v1/privacy-policy` + `/running-course-v1/terms-and-conditions` (policies of a separate app,
    linked from outside the site: **never move or rename them**).
  - `app/layout.tsx` — root layout: header, separator, main, footer, inside `StickyLayoutProvider`
    (`providers/sticky-layout.tsx`, the header turns sticky after 100 px of scroll).
  - `components/` — shared UI, one component per file named `bar-*.tsx` (`BarHeader`, `BarMenu`, `BarButton`…).
    The menu is `bar-menu.tsx`, the footer links are in `bar-footer.tsx`: update both when adding a page.
  - `services/contact.ts` — the contact form sends the message from the browser through EmailJS. Its IDs are
    public client identifiers; do not copy them elsewhere.
  - `public/images`, `public/icons` — SVG assets, imported as modules and rendered with `next/image`.
  - `specs/` — Jest + Testing Library tests; `specs/mocks/` holds Jest stand-ins (static images).
- `apps/barberos-site-e2e` — legacy Cypress e2e project; it has no runnable e2e target.
- Leftovers, not used: `firebase.json` / `.firebaserc` (the site is hosted on Netlify).

## Conventions

- Import shared code with the `@/components/*` and `@/services/*` aliases (`apps/barberos-site/tsconfig.json`).
- Server components by default; add `'use client'` only to components that need state, effects or browser APIs.
- Every page exports `metadata` with a `title` of the form `Barberos — <Page>` (`app/layout.tsx` sets the default
  title and description).
- Layout with Tailwind utilities, mobile first (`md:` breakpoint for desktop); the content column is
  `max-w-screen-md`. Check a new or changed page at 360 px and at desktop width.
- Images need a meaningful French `alt`. Form fields need a label.
- Prettier: `.prettierrc.json` (140 columns, single quotes).

## Commands

Run tasks through Nx (`pnpm nx …`, or the root scripts that wrap it).

```sh
pnpm start                           # dev server (nx dev barberos-site), http://localhost:3000
pnpm nx build barberos-site          # production build (also type-checks; does not lint)
pnpm nx test barberos-site           # Jest + Testing Library
pnpm nx lint barberos-site           # ESLint
pnpm nx format:check                 # Prettier, changed files only (format:write to fix)
pnpm nx run-many -t lint test build  # everything
```

In Jest, static image imports resolve to `specs/mocks/static-image.js` (see `jest.config.ts`), so components
using `next/image` render in tests.

`next dev` and `next build` share `apps/barberos-site/.next`: never run `build` while the dev server runs (port
3000), it breaks the dev session.

Most tracked files are not Prettier-formatted yet. `format:check` / `format:write` only look at changed files:
never pass `--all`, and expect `format:write` to reformat a whole legacy file once you touch it (keep such
reformatting in its own commit when it makes the diff hard to read).

### Known issues (remove an entry once fixed)

- An untracked `.nuxt/` folder (generated on another branch) makes `lint` crash and `format:check` fail; it is
  build output and can be deleted. Do not report these failures as caused by a change.
- `barberos-site-e2e` is a legacy Cypress project with no e2e target; its lint only gives warnings.

## Deployment

The site is hosted on Netlify (`netlify.toml`, `@netlify/plugin-nextjs`). The **Deploy to Production** workflow
(`.github/workflows/deploy.yml`, manual `workflow_dispatch`) builds the selected ref and force-pushes it to the
`netlify` branch, which Netlify deploys. Never run that workflow, push to `netlify` or run a Netlify CLI command
without the user's explicit request.

## Workflow

- Branch from `main`: `feat/<topic>`, `fix/<topic>`.
- Conventional commits, as in the history: `feat(header): …`, `fix: …`, `chore: …`, `build: …`, `ci: …`.
- Commit messages have no `Co-Authored-By` trailer.
- GitHub issues (title and body) are written in French.
- Keep `lint`, `test`, `build` and `format:check` green before proposing a commit.
- Update a PR branch by rebasing on `origin/main` and `git push --force-with-lease`; never merge `main` into it.
- Delegate to the subagents of `.claude/agents/` to keep the main context small:
  - **Run the checks** — the `check-runner` agent runs the Nx targets and returns only the failures, telling new
    ones from the known issues above.
  - **Review** — at the end of a development, once the checks are green, the `code-reviewer` agent reviews the
    branch against `main`. Brief it with the intent of the change. Fix its `blocking` and `should-fix` findings
    or tell the user why not. Skip it for a typo or a pure copy change, and say so.

<!-- nx configuration start-->
<!-- Leave the start & end comments to automatically receive updates. -->

## General Guidelines for working with Nx

- For navigating/exploring the workspace, invoke the `nx-workspace` skill first - it has patterns for querying projects, targets, and dependencies
- When running tasks (for example build, lint, test, e2e, etc.), always prefer running the task through `nx` (i.e. `nx run`, `nx run-many`, `nx affected`) instead of using the underlying tooling directly
- Prefix nx commands with the workspace's package manager (e.g., `pnpm nx build`, `npm exec nx test`) - avoids using globally installed CLI
- You have access to the Nx MCP server and its tools, use them to help the user
- For Nx plugin best practices, check `node_modules/@nx/<plugin>/PLUGIN.md`. Not all plugins have this file - proceed without it if unavailable.
- NEVER guess CLI flags - always check nx_docs or `--help` first when unsure

## Scaffolding & Generators

- For scaffolding tasks (creating apps, libs, project structure, setup), ALWAYS invoke the `nx-generate` skill FIRST before exploring or calling MCP tools

## When to use nx_docs

- USE for: advanced config options, unfamiliar flags, migration guides, plugin configuration, edge cases
- DON'T USE for: basic generator syntax (`nx g @nx/react:app`), standard commands, things you already know
- The `nx-generate` skill handles generator discovery internally - don't call nx_docs just to look up generator syntax

<!-- nx configuration end-->
