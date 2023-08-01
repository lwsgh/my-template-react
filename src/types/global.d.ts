interface ImportMetaEnv {
  readonly VITE_PUBLIC_PAHT: string;
  readonly VITE_API_PATH: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
