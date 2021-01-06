import Vue, { VueConstructor } from 'vue'
import { Store } from 'vuex'
import { RootState } from '@/types/store/index'
declare module 'vue/types/vue' {
  interface Vue {
    $store: Store<RootState>;
    $setLang(lang: string): Promise<string>;
    $resetData(key: string): void;
  }
  interface VueConstructor {
    install(Vue: VueConstructor<Vue>): void;
  }
}
declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    store?: Store<RootState>;
  }
}
