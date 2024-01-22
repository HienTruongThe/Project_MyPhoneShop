import Http from "./Http";
//Tau chưa dùng cái Http này bao giờ


export const getProducts = (config) => {
    return Http.get("products", config);
}

export const getCategories = (config) => {
    return Http.get("categories", config);
}

export const getProductsCategories = (id, config) => {
    return Http.get(`categories/${id}/products`, config);
}

export const getProduct = (id, config) => {
    return Http.get(`products/${id}`, config);
}

export const getCommentsProduct = (id, config) => {
    return Http.get(`products/${id}/comments`, config);
}

export const createCommentProduct = (id, data, config) => {
    return Http.post(`products/${id}/comments`, data, config);
}