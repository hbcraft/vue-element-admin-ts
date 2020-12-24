import Vue from 'vue'
declare module 'vue/types/vue' {
  interface Vue {
    $setLang(lang: string): Promise<string>;
  }
}
