<template>
  <!-- 导航栏 -->
  <CustomNavbar></CustomNavbar>
  <scroll-view scroll-y class="scroll-view" @scrolltolower="onScrollttolower" @refresherrefresh="onRefresherrefresh"
    refresher-enabled="true" :refresher-triggered="isTriggered">
    <PageSkelete v-if="isLoading"></PageSkelete>
    <template v-else>
      <!-- 轮播图 -->
      <xtxSwiper :list="banner"></xtxSwiper>
      <!-- 推荐 -->
      <Category :list="category"></Category>
      <!-- 热门 -->
      <HotPanel :list="hotpanel"></HotPanel>
      <!-- 猜你喜欢 -->
      <xtxGuess ref="guessRef"></xtxGuess>
    </template>

  </scroll-view>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
// 引入组件
import CustomNavbar from './components/CustomNavbar.vue'
import Category from './components/CategoryPanel.vue'
import HotPanel from './components/HotPanel.vue'
import PageSkelete from './components/PageSkeleton.vue'
// 引入请求以及类型
import { getHomeBannerAPI, getHomeCategoryAPI, getHomeHotAPI } from '@/services/home';
import type { bannerImg } from "@/pages/index/types/banner"
import type { categoryItem } from "@/pages/index/types/category"
import type { hotList } from "./types/hotPanel"
import type { xtxGuessInstance } from '@/types/component'
const banner = ref<bannerImg[]>([])
const category = ref<categoryItem[]>([])
const hotpanel = ref<hotList[]>([])
// 获取猜你喜欢组件实例
const guessRef = ref<xtxGuessInstance>()
// 下拉菜单隐藏标志
const isTriggered = ref<boolean>(false)
// 骨架屏标志
const isLoading = ref<boolean>(false)
// 发送请求
const getHomeBannerData = async () => {
  let res = await getHomeBannerAPI()
  // 接收数据
  banner.value = res.result
}
const getHomeCategoryData = async () => {
  let res = await getHomeCategoryAPI()
  category.value = res.result
}
const getHomeHotData = async () => {
  let res = await getHomeHotAPI()
  hotpanel.value = res.result
}
// 下拉刷新触发函数
const onRefresherrefresh = async () => {
  isTriggered.value = true
  await guessRef.value.reseData()
  isTriggered.value = false

}
onLoad(async () => {
  isLoading.value = true
  await Promise.all([getHomeBannerData(), getHomeCategoryData(), getHomeHotData()])
  isLoading.value = false
})
// 滚动视口触底

const onScrollttolower = () => {
  guessRef.value?.getHomeGuessLikeData()
}

</script>
<style lang="scss">
page {
  background-color: #f7f7f7;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.scroll-view {
  flex: 1;
}
</style>
