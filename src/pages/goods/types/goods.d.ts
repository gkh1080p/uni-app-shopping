

// 商品信息 
export interface GoodsResult {
    id: string,
    name: string,
    spuCode: string,
    desc: string,
    price: string,
    oldPrice: string,
    discount: string,
    inventory: bigint,
    brand: GoodsBrand | null,
    saleCount: bigint,
    commentCount: bigint,
    collectCount: bigint,
    mainPictures: string[],
    videoScale: number,
    mainVideos: string[],
    specs: GoodsSpecs[],
    SKUS: GoodsSku[],
    categories: GoodsCategories[],
    details: GoodsDetails,
    isPerSale: boolean,
    isCollect: null,
    userAddresses: null,
    evaluationinfo: null,
    similarProducts: GoodsSimilarProducts[],
    hotByDay: GoodsHotByDay[]

}

// 品牌信息
interface GoodsBrand {
    id: string,
    name: string,
    nameEn: string,
    picture: string,
    logo: string,
    type: null,
    desc: null,
    place: null
}

// 可选规格集合备注
interface GoodsSpecs {
    id: string,
    name: string,
    values: GoodsSpecsValue[]
}
interface GoodsSpecsValue {
    name: string,
    picture: string | null,
    available: boolean,
    desc: string
}

// sku集合
interface GoodsSku {
    id: string,
    skuCode: string,
    price: string,
    oldPrice: string,
    inventory: bigint,
    picture: string,
    specs: GoodsSkuSpecs[]
}
interface GoodsSkuSpecs {
    name: string,
    valueName: string
}

// 所属分类
interface GoodsCategories {
    id: string,
    name: string,
    layer: number,
    parent: GoodsCategories | null
}


// 商品详情
interface GoodsDetails {
    pictures: string[],
    properties: GoodsDetailsProperties[]
}
// 商品属性集合
interface GoodsDetailsProperties {
    name: string,
    value: string
}


// 同类商品
interface GoodsSimilarProducts {
    id: string,
    picture: string,
    name: string,
    price: string,
    desc: string,
    orderNum: bigint,
    discount: null
}

// 24小时热销
interface GoodsHotByDay {
    id: string,
    picture: string,
    name: string,
    price: string,
    desc: string,
    orderNum: bigint,
    discount: null
}