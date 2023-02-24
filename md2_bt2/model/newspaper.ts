import {Library} from "./library";

export class Newspaper extends Library {
    private _DayNewspaper: number;

    constructor(ID: any, PublishingCompany: string, ReleaseNumber: number, DayNewspaper: number) {
        super(ID, PublishingCompany, ReleaseNumber);
        this._DayNewspaper = DayNewspaper;
    }
    get DayNewspaper(): number {
        return this._DayNewspaper;
    }
    set DayNewspaper(value: number) {
        this._DayNewspaper = value;
    }
}