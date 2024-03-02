import path from "path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Adiciona um alias para o diretório raiz do projeto
    config.resolve.alias['@'] = path.resolve(__dirname);

    return config;
 },
};

export default nextConfig;
