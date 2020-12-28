import { RowLocation, Route, Location, RouteConfig } from 'vue-router'

declare module 'vue-router/types/router' {
  interface VueRouter {
    matcher: {
      match: (raw: RowLocation, current?: Route, redirectedFrom?: Location) => Route;
      addRoutes: (routes: Array<RouteConfig>) => void;
    };
  }
}
