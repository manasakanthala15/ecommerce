export class User {
    firstName:string;
    lastName:string;
    email:string;
    password:string;
    constructor(args:any) {
        this.firstName = args.firstName
        this.lastName = args.lastName
        this.email = args.email     
        this.password = args.password
    }
}

export class LoginRequest {
    userName:string;
    password:string;
    constructor(args:any) {
        this.userName = args.userName
        this.password = args.password
    }
}