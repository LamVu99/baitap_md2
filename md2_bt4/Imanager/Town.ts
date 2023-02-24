import {Family} from "./family";

export class TownManager {
    private _families: Family[] = []
    private _id: number;
    private _name: string;
    constructor(id: number, name: string) {
        this._id = id;
        this._name = name;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    add(t: Family): void {
        this._families.push(t)
    }
    getfamilies(): Family[] {
        return this._families;
    }

}