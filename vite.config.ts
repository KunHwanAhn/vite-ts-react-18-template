import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
/* eslint-disable import/no-extraneous-dependencies */
import {
  defineConfig,
  splitVendorChunkPlugin,
  UserConfig,
} from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import { esbuildPluginBabel } from 'vite-plugin-babel';
/* eslint-enable import/no-extraneous-dependencies */

const basePath = dirname(fileURLToPath(import.meta.url));

const defaultConfig: UserConfig = {
  plugins: [
    splitVendorChunkPlugin(),
    esbuildPluginBabel(),
    tsconfigPaths(),
  ],
  resolve: {
    alias: {
      '@': resolve(basePath, './src'),
    },
  },
  css: {
    // postcss 설정 경로
    postcss: 'postcss.config.cjs',
    // CSS 전처리기에 전달할 설정
    // preprocessorOptions: {
    //   scss: {
    //     additionalData: '',
    //   },
    // },
  },
  esbuild: {
    // jsxInject: 'import React from \'react\';',
  },
  clearScreen: false,
};

export default defineConfig(({ command /* , mode */ }) => {
  // 로컬 개발용 설정
  if (command === 'serve') {
    return {
      ...defaultConfig,
      css: {
        devSourcemap: true,
      },
      server: {
        host: true,
        port: 8080,
        open: true,
        hmr: true,
      },
    };
  }

  return {
    ...defaultConfig,
    build: {
      target: 'es2015',
      sourcemap: true,
      manifest: true,
      emptyOutDir: true,
    },
  };
});
