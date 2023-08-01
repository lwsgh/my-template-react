import AutoImport from 'unplugin-auto-import/vite';

export default function AutoImportPlugin() {
  return AutoImport({
    include: [/\.[tj]sx?$/], // .ts, .tsx, .js, .jsx
    imports: ['react'],
    dts: './src/types/auto-imports.d.ts',
  });
}
