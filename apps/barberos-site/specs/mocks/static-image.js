// Stands for a static image import (`import logo from '…/logo.svg'`) in Jest: Next.js resolves it to this shape at
// build time, and `next/image` needs its width and height.
module.exports = { src: '/static-image.svg', width: 24, height: 24 };
