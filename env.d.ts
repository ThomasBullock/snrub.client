/// <reference types="vite/client" />
/// <reference types="vite/types/importMeta.d.ts" />

declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, never>;
  export default component;
}

// pinia-plugin-persistedstate v2 exports don't include types for bundler resolution
declare module "pinia-plugin-persistedstate" {
  import type { PiniaPlugin } from "pinia";
  const plugin: PiniaPlugin;
  export default plugin;
}
