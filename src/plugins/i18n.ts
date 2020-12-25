import Vue from 'vue'
import VueI18n from 'vue-i18n'
import zhCN from '@/lang/zh-cn'

Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: 'zh-cn',
  fallbackLocale: 'zh-cn',
  messages: {
    'zh-cn': zhCN
  }
})

export default i18n

// 已加载的语言
const loadedLanguages: string[] = ['zh-cn']

// 设置页面语言
function setLanguage (lang: string) {
  i18n.locale = lang
  document.querySelector('html')!.setAttribute('lang', lang)
  localStorage.setItem('lang', lang)
  return lang
}

// 异步加载语言
function loadLanguageAsync (lang: string) {
  if (i18n.locale !== lang) {
    if (!loadedLanguages.includes(lang)) {
      return import(/* webpackChunkName: "lang-[request]" */ `@/lang/${lang}`)
        .then((msg) => {
          i18n.setLocaleMessage(lang, msg.default)
          loadedLanguages.push(lang)
          return setLanguage(lang)
        })
    } else {
      return Promise.resolve(setLanguage(lang))
    }
  } else {
    return Promise.resolve(lang)
  }
}

Vue.prototype.$setLang = loadLanguageAsync

// 获取localstorage中的语言，如果不存在，获取浏览器的当前语言
const locale = localStorage.getItem('lang') || navigator.language.toLocaleLowerCase()

// 设置语言，如果失败则设置为默认的zh-cn
// 也可以在这里放一个请求，把没有的语言发送到后台统计
// 如果需求量大的话就翻译一份语言文件
loadLanguageAsync(locale)
  .catch(() => {
    setLanguage('zh-cn')
  })
