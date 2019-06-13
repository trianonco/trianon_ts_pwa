import IShopProductPhoto from './IShopProductPhoto.model';
export default interface IShopProduct {
    ref: string;
    ref_code: string;
    ref_color_code: string;
    ref_size_code: string;
    ref_photo_code: string;
    discount: number;
    description: string;
    gender: string;
    category: string;
    short_name: string;
    barcode: string;
    price_cop: number;
    price_usd: number;
    line: string;
    color: string;
    height: string;
    width: string;
    depth: string;
}