// next.config.mjs

import {
  getLegacyPublicRedirects,
  redirectIncorrectPublic,
} from "./config/publicRedirects.mjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  basePath: "", // Add the base path if your app is hosted in a subpath

  async headers() {
    return [
      // Security headers applied to all routes
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains",
          },
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com data:",
              "img-src 'self' data: blob: https://cdn.chornplanet.com https://assets.chornplanet.com https://scdn.line-apps.com https://www.google-analytics.com",
              "connect-src 'self' https://vitals.vercel-insights.com https://www.google-analytics.com",
              "frame-src 'self' https://www.google.com",
              "frame-ancestors 'none'",
              "base-uri 'self'",
              "form-action 'self'",
            ].join("; "),
          },
        ],
      },
      // Headers for locale-specific routes
      {
        source: "/:locale(en|th|zh|ja|ko|id|de|fr|ru|vi)/:path*",
        locale: false,
        headers: [
          {
            key: "Content-Language",
            value: ":locale",
          },
          {
            key: "Vary",
            value: "Accept-Language, Cookie",
          },
        ],
      },
      // Headers for static assets
      {
        source: "/assets/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/open_graph/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400, s-maxage=86400",
          },
        ],
      },
    ];
  },

  images: {
    // Images are pre-optimized WebP files served from CDN via redirects.
    // Next.js optimizer cannot follow those redirects, so optimization is bypassed.
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.chornplanet.com",
      },
      {
        protocol: "https",
        hostname: "scdn.line-apps.com",
      },
      // Keep this for legacy support of old image URLs
      {
        protocol: "https",
        hostname: "cdn.chornplanet.com",
      },
    ],
    minimumCacheTTL: 31536000,
    qualities: [80],
  },

  // Use rewrite for OpenGraph images only
  async rewrites() {
    return [
      {
        source: "/open_graph/:path*",
        destination: "https://assets.chornplanet.com/:path*",
      },
      // Keep this for legacy support of old OpenGraph image URLs
      {
        source: "/images-opengraph/:path*",
        destination: "https://assets.chornplanet.com/:path*",
      },
    ];
  },

  // Use redirects for general images
  async redirects() {
    return [
      {
        source: "/:locale(en|th|zh|ja|ko|id|de|fr|ru|vi)/assets/smart-mobility/",
        destination: "/:locale/smart-mobility/",
        permanent: true,
      },
      {
        source: "/:locale(en|th|zh|ja|ko|id|de|fr|ru|vi)/assets/smart-mobility/mts/:slug/",
        destination: "/:locale/smart-mobility/mts/:slug/",
        permanent: true,
      },
      {
        source: "/:locale(en|th|zh|ja|ko|id|de|fr|ru|vi)/assets/smart-mobility/chiang-mai/:slug/",
        destination: "/:locale/smart-mobility/chiang-mai/:slug/",
        permanent: true,
      },
      {
        source: "/assets/:path*",
        destination: "https://assets.chornplanet.com/:path*",
        permanent: true,
      },

      ...getLegacyPublicRedirects(),
      ...(await redirectIncorrectPublic()),
    ];
  },
};

export default nextConfig;
