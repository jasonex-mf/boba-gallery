import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "usa.mollytea.com" },
      { protocol: "https", hostname: "www-test-cos-cdn.test.heytea.com" },
      { protocol: "https", hostname: "prod-us-web.s3.us-west-1.amazonaws.com" },
      { protocol: "https", hostname: "img-official-prod-cn.chagee.com" },
    ],
  },
};

export default nextConfig;
