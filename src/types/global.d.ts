export interface GuessItem {
    desc: string,
    id: string,
    name: string,
    orderNum: number,
    picture: string,
    price: string
}

export interface PageResult<T> {
    counts: number,
    items: T[],
    page: number,
    pageSize: number,
    pages: 35
}

export interface PageParams {
    page?: number,
    pageSize?: number
}