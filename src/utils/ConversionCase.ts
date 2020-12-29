/**
 * 大驼峰命名法转短横线命名法
 * @param name 需要转换的变量名
 */
export function BigHump2Kebab (name: string) {
  return name[0].toLocaleLowerCase() + name.slice(1).replace(/[A-Z]/g, (str) => {
    return '-' + str.toLocaleLowerCase()
  }).replace(/[0-9]+/g, (str) => {
    return '-' + str
  })
}

/**
 * 小驼峰命名法转短横线命名法
 * @param name 需要转换的变量名
 */
export function SmallHump2Kebab (name: string) {
  return name.replace(/[A-Z]/g, (str) => {
    return '-' + str.toLocaleLowerCase()
  }).replace(/[0-9]+/g, (str) => {
    return '-' + str
  })
}

/**
 * 短横线命名法转大驼峰命名法
 * @param name 需要转换的变量名
 */
export function Kebab2BigHump (name: string) {
  return name[0].toLocaleUpperCase() + name.slice(1).replace(/-[a-z0-9]/g, (str) => {
    return str[1].toLocaleUpperCase()
  })
}

/**
 * 短横线命名法转小驼峰命名法
 * @param name 需要转换的变量名
 */
export function Kebab2SmallHump (name: string) {
  return name.replace(/-[a-z0-9]/g, (str) => {
    return str[1].toLocaleUpperCase()
  })
}
