import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Next.js now defaults optimized images to Content-Disposition: attachment,
    // which makes some browsers treat logo/company images as downloads instead
    // of rendering them inline (seen as random "broken image" icons). Restore
    // the inline behaviour needed for on-page images like the company logos.
    contentDispositionType: "inline",
  },
};

export default nextConfig;
