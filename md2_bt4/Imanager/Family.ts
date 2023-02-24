import {Person} from "../model/Person";


export class Family {
    private _familyMembers: number = 0;
    private _addressNumber: number;
    person: Person[];

    constructor(addressNumber: number) {
        this._addressNumber = addressNumber;
        this.person = []
        this._familyMembers = 0
    }
    get addressNumber(): number {
        return this._addressNumber;
    }

    set addressNumber(value: number) {
        this._addressNumber = value;
    }
    get familyMembers(): number {
        return this._familyMembers;
    }

    set familyMembers(value: number) {
        this._familyMembers = value;
    }

    add(t: Person): void {
        this.person.push(t)
        this.familyMembers++
    }

    getList() {
            return this.person
    }

    delete(ID: number) {
        if (this.findIndexByID(ID) != -1) {
            this.person.splice(this.findIndexByID(ID), 1);
        } else {
            console.log('Error!')
        }
    }

    edit(ID: number, t: Person) {
        if (this.findIndexByID(ID) != -1) {
            this.person[this.findIndexByID(ID)] = t;
        } else {
            return 'error!'
        }
    }

    findIndexByID(ID: number) {
        let index = -1
        for (let i = 0; i < this.person.length; i++) {
            if (this.person[i].ID == ID) {
                index = i;
            }
        }
        return index;
    }

}