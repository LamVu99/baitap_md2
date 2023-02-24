export class Library {
    private _ID: any;
    private _PublishingCompany: string;
    private _ReleaseNumber: number;

    constructor(ID: any, PublishingCompany: string, ReleaseNumber: number) {
        this._ID = ID;
        this._PublishingCompany = PublishingCompany;
        this._ReleaseNumber = ReleaseNumber;
    }

    get ID(): number {
        return this._ID;
    }

    set ID(value: number) {
        this._ID = value;
    }

    get PublishingCompany(): string {
        return this._PublishingCompany;
    }

    set PublishingCompany(value: string) {
        this._PublishingCompany = value;
    }

    get ReleaseNumber(): number {
        return this._ReleaseNumber;
    }

    set ReleaseNumber(value: number) {
        this._ReleaseNumber = value;
    }
}
