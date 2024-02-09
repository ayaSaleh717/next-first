/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        esmExternals: false,
    }
//   webpack: (config, { isServer }) => {
//     config.resolve.alias["@"] = path.resolve(__dirname, ".");
//     return config;
//   },
  
};

export default nextConfig;


