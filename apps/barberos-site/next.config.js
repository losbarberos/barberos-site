//@ts-check

// Plain Next.js config: `withNx` / `composePlugins` are deprecated no-op stubs in Nx 24 (removed in Nx 25). The former
// `nx.svgr: false` option had no effect (SVGs are imported as static images and rendered with next/image).
/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = nextConfig;
