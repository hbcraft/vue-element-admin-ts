import { RowLocation, Route, Location, RouteConfig, _RouteConfigBase } from 'vue-router'

declare module 'vue-router/types/router' {
  interface VueRouter {
    matcher: {
      match: (raw: RowLocation, current?: Route, redirectedFrom?: Location) => Route;
      addRoutes: (routes: Array<RouteConfig>) => void;
    };
  }
  // eslint-disable-next-line @typescript-eslint/class-name-casing
  interface _RouteConfigBase {
    hidden?: boolean; // 在菜单中隐藏
    meta?: RouteMeta; // 元数据
    noShowingChildren?: boolean;
    alwaysShow?: boolean;
  }
}

interface RouteMeta {
  title?: string; // 标题的国际化字段
  icon?: string; // 菜单图标
  affix?: boolean; // 显示在tags-view中
  breadcrumb?: boolean; // 显示在面包屑中
  activeMenu?: string;
}
