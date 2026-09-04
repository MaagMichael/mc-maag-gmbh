// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   output: 'standalone',
// };

// export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true, // required: Next's Image Optimization needs a server
  },
  // Optional but recommended for shared webspace hosting:
  trailingSlash: true, // /about -> /about/index.html (plays nicer with Apache)
};

export default nextConfig;
