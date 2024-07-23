import { http } from "@/utils/http";
import type { GoodsResult } from '@/pages/goods/types/goods'
enum API {
    "/goods"
}

export const getGoodsAPI = (id: string) => {
    return http<GoodsResult>({
        method: "GET",
        url: API[0],
        data: {
            id
        }
    })
}