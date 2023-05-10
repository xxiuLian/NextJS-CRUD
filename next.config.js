/** @type {import('next').NextConfig} */
const API_KEY = "37becec203385ee3cdf8f3360d7fd8a0";

const nextConfig = {
  reactStrictMode: true,

  async redirects() {
    return [
      {
        source: "/old-blog/:path",
        destination: "/new-blog/:path*",
        permanent: false,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/api/movies",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
      },
      {
        source: "/api/movies/:id",
        destination: `https://api.themoviedb.org/3/movie/:id?api_key=${API_KEY}`,
      },
      // {
      //   source: "/board/:path*",
      //   destination: "http://localhost:9000/board/:path*",
      // },
    ];
  },
};
module.exports = nextConfig;
