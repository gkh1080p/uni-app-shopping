import type { GuessItem } from "@/types/global";
// result响应一级类型
export interface CategoryTopItem {
    children: CategoryChildItem[],
    id: string,
    imageBanners: string[],
    name: string,
    picture: string
}

// children子类型
export interface CategoryChildItem {
    brands?: null,
    categories?: null,
    goods: GuessItem[],
    id: string,
    name: string,
    parentId?: number | null,
    parentName?: string | null,
    picture: string,
    saleProperties?: null
}