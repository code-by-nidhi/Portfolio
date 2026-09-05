import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Render serves this as a Static Site, so the build has to emit real HTML
  // files rather than a server bundle. Every route here is prerendered, so
  // nothing is lost. Note: `next start` does not work alongside this — if the
  // deployment ever moves to a Render Web Service, remove both options below.
  output: "export",

  // Image optimisation needs a server, which a static export has no room for.
  images: { unoptimized: true },
};

export default nextConfig;
