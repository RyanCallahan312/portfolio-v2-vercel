/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	async redirects() {
		return [
			{
				source: "/blog",
				destination: "https://blog.devryan.io/",
				permanent: true,
				basePath: false
			}
		];
	}
};

module.exports = nextConfig;
