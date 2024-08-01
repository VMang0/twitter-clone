import path from 'path';

import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [svgr(), react()],
  server: {
    host: true,
    port: 3000,
  },
  resolve: {
    alias: {
      '@api': path.resolve(__dirname, 'src/api'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@constants': path.resolve(__dirname, 'src/constants'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@redux': path.resolve(__dirname, 'src/redux'),
      '@type': path.resolve(__dirname, 'src/type'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@styled': path.resolve(__dirname, 'src/styled'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@theme': path.resolve(__dirname, 'src/theme'),
      '@services': path.resolve(__dirname, 'src/services'),
    },
  },
});
