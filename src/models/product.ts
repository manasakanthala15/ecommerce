export class Product {
    id: number;
    src: string;
    productName: string;
    description: string;
    cost: number;
    addedToCart: boolean;
    addedToFavourites: boolean;
    specifications: ProductSpecification
    constructor(args: any) {
        this.id = args.id
        this.src = args.src
        this.description = args.description
        this.productName = args.productName
        this.cost = args.cost
        this.addedToCart = args.addedToCart
        this.addedToFavourites = args.addedToFavourites
        this.specifications = args.specifications
    }
}
export class ProductSpecification {
    details: Object
    constructor(args: any) {
        this.details = args.details
    }
}
