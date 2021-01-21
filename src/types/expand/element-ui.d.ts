import { ElementUIComponent } from 'element-ui/types/component'

declare module 'element-ui/types' {
  export declare class Scrollbar extends ElementUIComponent {
    native: boolean;
    wrapStyle: any;
    wrapClass: any;
    viewClass: any;
    viewStyle: any;
    noresize: boolean; // 如果 container 尺寸不会发生变化，最好设置它可以优化性能
    tag: string
  }
}
