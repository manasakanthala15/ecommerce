export class Collection {
    collection:Array<Collections>
    constructor(args: any) {
        this.collection = args.collection
    }
}
export class Collections {
    id: string;
    src: string;
    name: string;
    quantity:number;
    constructor(args: any) {
        this.id = args.id
        this.src = args.src
        this.name = args.name
        this.quantity = args.quantity
    }
}
