/** @type {import('next').NextConfig} */
const nextConfig = {
  // Настройка порта для production
  env: {
    PORT: '3035'
  },
  // Отключаем все оптимизации для совместимости
  output: 'standalone',
  experimental: {
    outputFileTracingRoot: undefined,
  },
  // Настройки для статических файлов
  assetPrefix: '',
  trailingSlash: false,
  // Отключаем оптимизацию изображений
  images: {
    unoptimized: true
  },
  // Отключаем минификацию JS
  swcMinify: false,
  // Отключаем сжатие
  compress: false,
  // Настройки для production
  poweredByHeader: false,
  generateEtags: false
};

export default nextConfig;
