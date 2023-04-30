/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      'raw.githubusercontent.com',
      'projectpokemon.org',
      'img.pokemondb.net',
    ],
  },
};

module.exports = nextConfig;
