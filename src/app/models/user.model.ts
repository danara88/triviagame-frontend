export class User {
    constructor(
        public uid: string,
        public fullName: string,
        public email: string,
        public role: string,
        public status: boolean,
        public createdAt: string
    ) {}
}