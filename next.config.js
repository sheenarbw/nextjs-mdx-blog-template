// import { withContentlayer } from "next-contentlayer";

const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = withContentlayer(nextConfig);
// export default withContentlayer(nextConfig);
