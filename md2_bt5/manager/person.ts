export class Person {
    private _id: number;
    private _fullName: string;
    private _age: number;

    constructor(id: number, fullName: string, age: number) {
        this._id = id;
        this._fullName = fullName;
        this._age = age;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get fullName(): string {
        return this._fullName;
    }

    set fullName(value: string) {
        this._fullName = value;
    }

    get age(): number {
        return this._age;
    }

    set age(value: number) {
        this._age = value;
    }

    getInfo() {
        return `id: ${this.id} - Tên: ${this.fullName} - Tuổi: ${this.age}`
    }
}