
export interface IProductItem  {
    _id: string;
    name: string;
    imagePath: string;
    price: number;
    count: number;
}

export interface ICartItem extends IProductItem {
    count: number;
}

export interface ILayout {
    _id: string;
    name: string;
    imagePath: string;
}

export  interface IMacItem extends IProductItem {
    category: string;
}