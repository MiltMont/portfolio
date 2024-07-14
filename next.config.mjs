/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "localhost"
            }, 
            {
                hostname: "portfolio-cms-zmpgeoiema-uc.a.run.app"
            }
        ]
    }
};

export default nextConfig;
