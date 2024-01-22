import { BASE_URL } from "../constants/app";
export const getImageProduct = (ImageName) => {
    return `${BASE_URL}assets/uploads/products/${ImageName}`;
};