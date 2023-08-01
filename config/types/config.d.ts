declare type Nullable<T> = T | null;
declare type NonNullable<T> = T extends null | undefined ? never : T;
declare type Recordable<T = any> = Record<string, T>;
type ReadonlyRecordable<T = any> = Readonly<Record<string, T>>;

declare interface ViteEnv {
  VITE_PORT: number;
  VITE_PUBLIC_PATH: string;
  VITE_PROXY: [string, string][];
  VITE_DROP_CONSOLE: boolean;
  VITE_USE_HTTPS: boolean;
  VITE_USE_COMPRESS: boolean;
  VITE_USE_AUTOIMPORT: boolean;
  VITE_USE_SVGR: boolean;
}
