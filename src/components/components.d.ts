import xtxSwiper from './xtxSwiper.vue'

// 定义组件的类型
declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    xtxSwiper: typeof xtxSwiper
  }
}
