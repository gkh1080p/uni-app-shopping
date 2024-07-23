import { http } from "@/utils/http"

enum API {
    "/login/wxMin"
}

// 请求参数的类型定义
interface loginParams {
    code: string,
    encryptedData: string,
    iv: string
}
// 微信快捷登录模块
export const postLoginWxMin = (data: loginParams) => {
    return http({
        method: "POST",
        url: "/login/wxMin",
        data,
    })
}