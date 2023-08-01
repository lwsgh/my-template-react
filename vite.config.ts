import { defineConfig, loadEnv } from 'vite';
import mkcert from 'vite-plugin-mkcert';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

import react from '@vitejs/plugin-react';
import AutoImport from 'unplugin-auto-import/vite';

export default defineConfig(({ mode }) => {
  // 项目根路径
  const root = process.cwd();

  // 加载相应环境的配置
  const { VITE_PUBLIC_PATH } = loadEnv(mode, root);

  return {
    base: VITE_PUBLIC_PATH,
    build: {
      // 我们的构建产物需要兼容到es6
      target: 'es2015',
      // 假如要兼容安卓微信的webview
      cssTarget: 'chrome61',
      // 非生产环境下生成sourcemap
      sourcemap: mode !== 'prod',
      // 禁用gzip 压缩大小报告，因为压缩大型文件可能会很慢
      reportCompressedSize: false,
      // chunk大小超过1500kb是触发警告
      chunkSizeWarningLimit: 1500,
    },
    plugins: [
      react(),
      AutoImport({
        include: [/\.[tj]sx?$/], // .ts, .tsx, .js, .jsx
        imports: ['react'],
        dts: './src/types/auto-imports.d.ts',
      }),
      mkcert(),
      svgr(),
      tsconfigPaths()
    ],
    server: {
      // 开启https
      https: true,
      // 监听所有ip地址
      host: true,
      // 端口默认是5173
      port: 9527,
      // 配置代理转发请求，解决跨域问题
      proxy: {
        // api/开头的请求将被转发到下面的target的地址
        'api/': {
          target: 'https://localhost:9527',
          // 改变请求头的origin
          changeOrigin: true,
          secure: false,
          // 支持代理websocket
          ws: true,
          // 路径重写 相当于把api/去掉
          rewrite: (path) => path.replace(/^api\//, ''),
        },
      },
    },
  };
});
