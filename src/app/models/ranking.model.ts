
export class Ranking {
    constructor(
        public _id: string,
        public user: UserRanking,
        public totalScore: number,
        public createdAt: string,
        public updateAt: string,
    ) {}
}

export interface UserRanking {
    _id: string,
    fullName: string
}