import {Person} from "./Person";

export class Family {
    private _id: number;
    private numberOfMember: number;
    private people: Person[];

    constructor(id: number) {
        this._id = id;
        this.numberOfMember = 0;
        this.people = [];
    }

    addPerson(person: Person) {
        this.people.push(person)
        this.numberOfMember++;
    }

    getPerson(): Person[] {
        return this.people;
    }


    get id(): number {
        return this._id;
    }
}