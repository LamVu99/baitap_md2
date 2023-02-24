import {Library} from "./library";

export class Magazine extends Library {
    NumberMagazine: number;
    MonthMagazine: string;

    constructor(ID: any, PublishingCompany: string, ReleaseNumber: number, NumberMagazine: number, MonthMagazine: string) {
        super(ID, PublishingCompany, ReleaseNumber);
        this.NumberMagazine = NumberMagazine;
        this.MonthMagazine = MonthMagazine;
    }

}