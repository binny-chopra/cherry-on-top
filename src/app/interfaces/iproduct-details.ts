export interface IProductDetails {
    product_id: string,
    name: string,
    price: number,
    image: string,
    description?: string
}

export interface IProductDetailsList {
    products: IProductDetails[];
}