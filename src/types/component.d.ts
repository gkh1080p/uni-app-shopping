import type XtxGuess from './xtxGuess.vue'
import xtxSwiper from './xtxSwiper.vue'

// 定义组件的类型
declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    xtxSwiper: typeof xtxSwiper
    xtxGuess: typeof XtxGuess
  }
}

// 组件实例类型
export type xtxGuessInstance = InstanceType<typeof XtxGuess>