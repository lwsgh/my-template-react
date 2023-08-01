import { PluginOption } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

import react from '@vitejs/plugin-react';

import AutoImportPlugin from './autoImport';
import CompressionPlugin from './compression';
import MKCertPlugin from './mkcert';
import SvgrPlugin from './svgr';

export default function configVitePlugins(viteEnv: ViteEnv, isProd: boolean) {
  const { VITE_USE_HTTPS, VITE_USE_COMPRESS, VITE_USE_AUTOIMPORT, VITE_USE_SVGR } = viteEnv;

  const vitePlugins: (PluginOption | PluginOption[])[] = [
    // have to
    react(),
    // have to
    tsconfigPaths(),
  ];

  // unplugin-auto-import/vite
  VITE_USE_AUTOIMPORT && vitePlugins.push(AutoImportPlugin());

  // vite-plugin-mkcert
  VITE_USE_HTTPS && vitePlugins.push(MKCertPlugin());

  // vite-plugin-svgr
  VITE_USE_SVGR && vitePlugins.push(SvgrPlugin());

  // The following plugins only work in the production environment
  if (isProd) {
    // vite-plugin-compression
    VITE_USE_COMPRESS &&
      vitePlugins.push(
        CompressionPlugin({
          verbose: true,
          ext: '.gz',
          deleteOriginFile: false,
        }),
      );
  }

  return vitePlugins;
}
