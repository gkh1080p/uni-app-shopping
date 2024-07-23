import { http } from "@/utils/http"
import type { bannerImg } from "@/pages/index/types/banner"
import type { categoryItem } from "@/pages/index/types/category"
import type { hotList } from "@/pages/index/types/hotPanel"
import type { GuessItem, PageParams, PageResult } from "@/types/global"
enum API {
    "/home/banner",
    "/home/category/mutli",
    "/home/hot/mutli",
    "/home/goods/guessLike"
}

export const getHomeBannerAPI = (distributionSite = 1) => {
    return http<bannerImg[]>({
        method: 'GET',
        url: API[0],
        data: {
            distributionSite,
        }
    })
}

export const getHomeCategoryAPI = () => {
    return http<categoryItem[]>({
        method: "GET",
        url: API[1],
    })
}

export const getHomeHotAPI = () => {
    return http<hotList[]>({
        method: 'GET',
        url: API[2]
    })
}

export const getHomeguessLike = (data?: PageParams) => {
    return http<PageResult<GuessItem>>({
        method: "GET",
        url: API[3],
        data,
    })
}