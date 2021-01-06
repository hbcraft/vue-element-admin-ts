export type SearchPool = SearchPoolItem[]
interface SearchPoolItem {
  path: string;
  title: string[];
  pinyinTitle?: string;
}
