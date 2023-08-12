/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: (() => {
    let config = {
      styledComponents: true,
    }
    if (process.env.NODE_ENV === 'production') {
      config = {
        ...config,
        reactRemoveProperties: { properties: ['^data-testid$'] },
      }
    }
    return config
  })(),
  rewrites: () => {
    return [
      {
        source: `${process.env.NEXT_PUBLIC_API_PROXY_PATH}/:match*`,
        destination: `${process.env.API_BASE_URL}/:match*`,
      },
    ]
  },
}

module.exports = nextConfig
