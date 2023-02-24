export class Person {
    private _ID: any;
    private _fullname: string;
    private _age: number;
    private _job: string;

    constructor(ID: any, fullname: string, age: number, job: string) {
        this._ID = ID;
        this._fullname = fullname;
        this._age = age;
        this._job = job;
    }
    get ID(): any {
        return this._ID;
    }

    set ID(value: any) {
        this._ID = value;
    }

    get fullname(): string {
        return this._fullname;
    }

    set fullname(value: string) {
        this._fullname = value;
    }

    get age(): number {
        return this._age;
    }

    set age(value: number) {
        this._age = value;
    }

    get job(): string {
        return this._job;
    }

    set job(value: string) {
        this._job = value;
    }
    getInfo() {
        return `CCCD: ${this.ID} ho ten: ${this.fullname} tuoi: ${this.age} nghe nghiep: ${this.job}`
    }
}