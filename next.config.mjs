
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Workaround to get citation-js to work at build time
  // https://github.com/citation-js/citation-js/issues/233#issuecomment-2302421797
  swcMinify: false,
}

export default nextConfig;