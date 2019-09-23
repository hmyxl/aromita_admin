import { get, post ,deletes, put} from "../http.js";

//上传图片
export const uploadUrl = `${process.env.API_ROOT}/backend/upload`

//sku列表
export const skuList = params =>get("backend/product/sku",params);

//spu列表
export const spuList = params =>get("backend/product/",params)

//批量删除sku
export const deleteSkuBatch = params =>deletes("/backend/product/sku/ajaxBatchDelete",params)

//批量删除spu
export const deleteSpuBatch = params =>deletes("/backend/product/ajaxBatchDelete",params)

//spu单个上货和批量上货
export const spuGoods = params =>put("/backend/product/ajaxUpdateStatus",params)

//sku上下架
export const skuGoods = params =>put("/backend/product/sku/ajaxUpdateStatus",params)

//输入sku后获取erp信息
export const skuerp = params =>get("backend/product/sku/skuQuery",params)

//sku_no 智能匹配
export const skunoList = params =>get("backend/product/sku/skuNoQuery",params)

//获取属性属性值列表 （sku创建用）
export const attrEdition = params =>get("/backend/product/attr/skuAttributeList",params)

//新建spu
export const addSpuList = params =>post("/backend/product",params)