import { ProductController } from '../controller/product/index.js';
import { Category, Brand, products, Product } from './data.js';

export class Model {
    cart: { product: Product; amount: 1 }[];
    categories: Category[];
    brands: Brand[];
    products: Product[];
    activeCategories: Category[];
    activeBrands: Brand[];
    cartState: number;
    pricesRange: [number, number];
    stockRange: [0, number];
    cart: Product[];

    constructor() {
        this.categories = ['guitars', 'basses', 'drums', 'keyboards', 'microphones'];
        this.brands = [
            'Novation',
            'Moog',
            'Korg',
            'Roland',
            'Yamaha',
            'DW',
            'Tama',
            'Ludwig',
            'Pearl',
            'Mapex',
            'Schecter',
            'Jackson',
            'Fender',
            'Gibson',
            'Ibanez',
            'B.C.Rich',
            'Epiphone',
            'AKG',
            'Shure',
            'Rode',
            'Sennheiser',
            'Neumann',
        ];
        this.products = products;
        this.activeCategories = this.categories;
        this.activeBrands = this.brands;
        this.cartState = 0;
        this.pricesRange = [
            Math.min(...this.products.map((item) => item.price)),
            Math.max(...this.products.map((item) => item.price)),
        ];
        this.stockRange = [0, Math.max(...this.products.map((item) => item.amount))];
        this.cart = [];
    }
}
