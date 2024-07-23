// 热门请求，接口
import { http } from "@/utils/http"
import type { HotResult } from "@/pages/hot/types/hot"
// 定义参数类型
interface PageParams {
    subType?: string,
    pageSize: number,
    page: number
}
export const getHotRecommendAPI = (url: string, data?: PageParams) => {
    return http<HotResult>({
        method: "GET",
        url,
        data
    })
}