export class Product {
    id: string;
    src: string;
    productName: string;
    description: string;
    cost: number;
    quantity:number;
    isAddedToCart:boolean;
    constructor(args: any) {
        this.id = args.id
        this.src = args.src
        this.description = args.description
        this.productName = args.productName
        this.cost = args.cost
        this.quantity = args.quantity
        this.isAddedToCart=args.isAddedToCart
    }
}
export class ProductSpecification {
    details: Object
    constructor(args: any) {
        this.details = args.details
    }
}
