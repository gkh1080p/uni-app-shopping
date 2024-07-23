import { http } from "@/utils/http";
import type { CategoryTopItem } from "@/pages/category/types/category"
enum API {
    "/category/top"
}

export const getCategoryTopAPI = () => {
    return http<CategoryTopItem[]>({
        method: "GET",
        url: API[0]
    })
}