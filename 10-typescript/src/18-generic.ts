// A generic can be used to generate type 1, type 2, type which are all similar interfaces
// A generic interface is not an actual type
interface Product<T1, T2> {
    name: T1,
    price: T2
}

// type 1
type IProduct = Product<string, number>

const chips : IProduct = {
    name: 'Lays Classic Salted',
    price: 30
};

const biscuits : IProduct = {
    name: 'Parle Monaco',
    price: 10
};

interface DetailedName {
    manufacturer: string, 
    productName: string
}

// type 2
// interface IProductDetailed {
//     name: DetailedName,
//     price: number
// }

// const iPhone13 : IProductDetailed = {
//     name: {
//         manufacturer: 'Apple',
//         productName: 'iPhone 13'
//     },
//     price: 65000
// };

const iPhone13 : Product<DetailedName, number> = {
    name: {
        manufacturer: 'Apple',
        productName: 'iPhone 13'
    },
    price: 65000
};

// type 3
interface TaxedPrice {
    basePrice: number,
    tax: number
};

// interface IProductTaxed {
//     name: string,
//     price: TaxedPrice
// };

// const prestigeMixer : IProductTaxed = {
//     name: 'Prestige Awesome Mixer',
//     price: {
//         basePrice: 2500,
//         tax: 500
//     }
// }

const prestigeMixer : Product<string, TaxedPrice> = {
    name: 'Prestige Awesome Mixer',
    price: {
        basePrice: 2500,
        tax: 500
    }
};

const javaScriptNinja : Product<DetailedName, TaxedPrice> = {
    name: {
        manufacturer: 'Manning',
        productName: 'Secrets of the JavaScript Ninja'
    },
    price: {
        basePrice: 500,
        tax: 100
    }
};

// Generics can be used with classes, function etc.