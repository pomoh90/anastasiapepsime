/** @type {import('next').NextConfig} */
const nextConfig = {
  // Настройка порта для production
  env: {
    PORT: '3035'
  },
  // Простая конфигурация без оптимизаций
  trailingSlash: false,
  // Отключаем оптимизацию изображений
  images: {
    unoptimized: true
  },
  // Отключаем минификацию
  swcMinify: false,
  // Отключаем сжатие
  compress: false,
  // Настройки для production
  poweredByHeader: false,
  generateEtags: false,
  // Отключаем статическую оптимизацию
  experimental: {
    staticGenerationRetryCount: 0,
  }
};

export default nextConfig;
