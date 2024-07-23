import type { GuessItem, PageResult } from "@/types/global";

// 热门商品，商品信息
// 热门推荐子类
export interface SubTypeItem {
    goodsItems: PageResult<GuessItem>,
    id: string,
    title: string
}
// 热门返回result类型
export interface HotResult {
    bannerPicture: string,
    id: string,
    subTypes: SubTypeItem[],
    title: string
}