import Vue, { VueConstructor } from 'vue'
declare module 'vue/types/vue' {
  interface Vue {
    $setLang(lang: string): Promise<string>;
  }
  interface VueConstructor {
    install(Vue: VueConstructor<Vue>): void;
  }
}
