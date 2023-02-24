import {Family} from "./Families";

export class Street {
    private _id: number;
    private _name: string;
    private families: Family[] = [];

    constructor(id: number, name: string) {
        this._id = id;
        this._name = name;

        let family = new Family(1);
        let family2 = new Family(2);
        let family3 = new Family(3);

        this.families.push(family);
        this.families.push(family2);
        this.families.push(family3);
    }

    addFamily(family: Family) {
        this.families.push(family);
    }

    getFamilies(): Family[] {
        return this.families;
    }
}