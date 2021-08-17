module.exports = {
  reactStrictMode: true,
  env: {
	  ENDPOINT: 'http://localhost:8080/v1/graphql',
	  CDN_ICON: 'http://localhost:4000/',
	  APP_NAME: "ReactPress",
	  API: 'http://127.0.0.1:3000/'
  },
  eslint: {
	ignoreDuringBuilds: true,
  },
}
