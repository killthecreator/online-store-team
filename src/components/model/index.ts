import { PromoCode } from './data.js';
import { Category, Brand, products, Product } from './data.js';

export class Model {
    cart: { product: Product; amount: number }[];
    categories: Category[];
    brands: Brand[];
    products: Product[];
    cartState: number;
    pricesRange: [number, number];
    stockRange: [number, number];
    promoCodes: PromoCode[];
    appliedPromo: HTMLDivElement[];
    activeProducts: Product[];

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

        this.cartState = 0;
        this.cart = [];
        (this.promoCodes = [
            {
                name: 'Rolling Scopes School',
                id: 'RS',
                percent: 10,
            },
            {
                name: 'Cadence Musical Instruments',
                id: 'CADENCE',
                percent: 20,
            },
            {
                name: 'Happy New Year',
                id: 'NEW YEAR',
                percent: 5,
            },
            {
                name: 'Black Friday Sale',
                id: 'BLACK FRIDAY',
                percent: 15,
            },
        ]),
            (this.appliedPromo = []);
        this.activeProducts = this.products;
        this.stockRange = [
            Math.min(...this.activeProducts.map((item) => item.amount)),
            Math.max(...this.activeProducts.map((item) => item.amount)),
        ];
        this.pricesRange = [
            Math.min(...this.activeProducts.map((item) => item.price)),
            Math.max(...this.activeProducts.map((item) => item.price)),
        ];
    }
}
