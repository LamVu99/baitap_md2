import {Library} from "./library";

export class Book extends Library {
    private _Author: string;
    private _NumberOfPages: number;

    constructor(ID: any, PublishingCompany: string, ReleaseNumber: number, Author: string, NumberOfPages: number) {
        super(ID, PublishingCompany, ReleaseNumber);
        this._Author = Author;
        this._NumberOfPages = NumberOfPages;
    }

    get Author(): string {
        return this._Author;
    }

    set Author(value: string) {
        this._Author = value;
    }

    get NumberOfPages(): number {
        return this._NumberOfPages;
    }

    set NumberOfPages(value: number) {
        this._NumberOfPages = value;
    }
}