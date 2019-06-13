import IShopProduct from './IShopProduct.model';
import TrianonDB from '../database/db';
import StringHelper from './../helpers/string.helper';

export async function toIShopProduct($product: any): Promise<IShopProduct> {
    return new Promise(async resolve => {
        const _ref = getRef($product);
        const _ref_code = getRefCode($product);
        const _ref_color_code = getRefColorCode($product);
        const _ref_size_code = getRefSizeCode($product);
        const _ref_photo_code = getRefPhotoCode($product);
        const _gender = getGender($product);
        const _category = await getCategory($product);
        const _description = getDescription($product);
        const _short_name = getShortName($product);
        const _barcode = getBarcode($product);
        const _price_cop = getPriceCOP($product);
        const _price_usd = getPriceUSD($product);
        const _line = getLine($product);
        const _color = getColor($product);
        const _height = getHeight($product);
        const _width = getWidth($product);
        const _depth = getDepth($product);
        const _discount = getDiscount($product);

        const product: IShopProduct = {
            ref: _ref,
            ref_code: _ref_code,
            ref_color_code: _ref_color_code,
            ref_size_code: _ref_size_code,
            ref_photo_code: _ref_photo_code,
            gender: _gender,
            category: _category,
            description: _description,
            short_name: _short_name,
            barcode: _barcode,
            price_cop: _price_cop,
            price_usd: _price_usd,
            line: _line,
            color: _color,
            height: _height,
            width: _width,
            depth: _depth,
            discount: _discount
        };

        resolve(product)

    })
}

export async function toIShopProducts($products: any[]): Promise<IShopProduct[]> {
    return new Promise(async resolve => {
        const toShopProducts: IShopProduct[] = [];
        for (let k = 0; k < $products.length - 1; k++) {
            const toShopProductObj: IShopProduct = await toIShopProduct($products[k]);
            toShopProducts.push(toShopProductObj);
        }
        resolve(toShopProducts);
    });

}

function getRef(product: any) {
    return product.ref || product.Referencia || product.REFERENCIA || "NA";
}


function getRefCode(product: any) {
    const ref = getRef(product);
    const ref_code = `${ref.split("-")[0]}`;
    const ref_color_code = `${ref.split("-")[1].slice(0, 2)}`;
    const ref_size_code = `${ref.split("-")[1].slice(2, 4)}`
    const _ref_code = ref_code;
    return _ref_code;
}

function getRefColorCode(product: any) {
    const ref = getRef(product);
    const ref_code = `${ref.split("-")[0]}`;
    const ref_color_code = `${ref.split("-")[1].slice(0, 2)}`;
    const ref_size_code = `${ref.split("-")[1].slice(2, 4)}`
    const _ref_code = ref_color_code;
    return _ref_code;
}

function getRefSizeCode(product: any) {
    const ref = getRef(product);
    const ref_code = `${ref.split("-")[0]}`;
    const ref_color_code = `${ref.split("-")[1].slice(0, 2)}`;
    const ref_size_code = `${ref.split("-")[1].slice(2, 4)}`
    const _ref_code = ref_size_code;
    return _ref_code;
}

function getRefPhotoCode(product: any) {
    const ref_code = getRefCode(product);
    const ref_color_code = getRefColorCode(product);
    return `${ref_code}-${ref_color_code}`;
}


function getName(product: any) {
    return product.name || product.description || product["Nombre Largo"] || product["NOMBRE LARGO"] || product["Nombre"] || "NA";
}

function getGender(product: any) {
    const ref: string = getRef(product).toUpperCase();
    const genderCharCode: string = ref.charAt(0);
    const genderStringCode: string = (genderCharCode === 'D') ? 'DAMA' : 'HOMBRE';
    return genderStringCode;
}

function getCategory(product: any): Promise<string> {
    return new Promise((resolve) => {
        const db = new TrianonDB();
        const strHelper = new StringHelper();
        const name: string = getName(product).toUpperCase();
        db.getHomeGenderButtonsGategories()
            .then(categories_obj => {

                const categories = categories_obj.map($obj => $obj.title);
                strHelper.setWordsList(categories);
                strHelper.setWordToMatch(name);

                strHelper.getMatch().then(name_match => {
                    resolve(name_match);
                })
            }).catch(error => {
                resolve('NA')
            })
    });

}

function getDescription(product: any) {
    return product.description || product.name || product["Nombre Largo"] || product["NOMBRE LARGO"] || product["Nombre"] || "NA";

}
function getShortName(product: any) {
    return product.short_name || product["Nombre Corto"] || product["Nombre corto"] || product["Nombre Corto"] || product["NOMBRE CORTO"] || product["Nombre"] || "NA";

}

function getBarcode(product: any) {
    return product.barcode || product.codebar || product["Codigo Barras "] || product["Codigo Barras"] || product["CODIGO BARRAS"] || "NA";
}

function getPriceCOP(product: any) {
    return product.price_cop || product["Precio COP"] || -1;
}
function getPriceUSD(product: any) {
    return product.price_usd || product["Precio USD"] || -1;
}

function getLine(product: any) {
    return product.line || product["Linea"] || product["LINEA"] || "NA";
}

function getColor(product: any) {
    return product.color || product["Color"] || product["COLOR"] || 'NA';
}

function getHeight(product: any) {
    return product.height || product["ALTO"] || product["Alto"] || -1;
}

function getWidth(product: any) {
    return product.width || product["Ancho"] || product["ANCHO"] || -1;
}

function getDepth(product: any) {
    return product.depth || product["PROFUNDO"] || product["Profundo"] || -1;
}

function getDiscount(product: any) {
    return product.discount || product.Discount || product.DESCUENTO || product["Descuento"] || product["DESCUENTO"] || 0;
}