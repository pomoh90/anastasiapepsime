/** @type {import('next').NextConfig} */
const nextConfig = {
  // Настройка порта для production
  env: {
    PORT: '3035'
  },
  // Настройки для статических файлов
  assetPrefix: '',
  trailingSlash: false,
  // Отключаем оптимизацию изображений если есть проблемы
  images: {
    unoptimized: true
  }
};

export default nextConfig;
