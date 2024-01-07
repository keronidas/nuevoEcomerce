export interface ArticleModel {
    id?:string;
    name: string;
    imageUrl: string;
    price: number;
    isOnSale: boolean;
    quantityInCart: number;
    cantidadEnStock: number;
}
