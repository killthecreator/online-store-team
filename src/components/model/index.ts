import { Category, Brand, products, Product } from './data.js';

export class Model {
    categories: Category[];
    brands: Brand[];
    products: Product[];
    activeCategories: Category[];
    activeBrands: Brand[];
    cartState: number;
    pricesRange: [number, number];
    stockRange: [0, number];

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
            Math.max(...this.products.map((item) => item.price)),
            Math.min(...this.products.map((item) => item.price)),
        ];
        this.stockRange = [0, Math.max(...this.products.map((item) => item.amount))];
    }
}
