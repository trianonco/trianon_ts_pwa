export const IVA = 0.19;
export const CATEGORIAS_SIN_IVA = ["CINTURONES","LLAVERO"]; // []
export function getPrice(product: any){
    //const hasIVA = CATEGORIAS_SIN_IVA.includes(product.category) || true;
    const hasIVA = CATEGORIAS_SIN_IVA.includes(product.category);
    return hasIVA ? product.price_cop : (product.price_cop*(1 - IVA));
}