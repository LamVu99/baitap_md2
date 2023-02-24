import {Library} from "../../model/library";
import {Imanager} from "./Imanager";
import {Book} from "../../model/book";
import {Magazine} from "../../model/magazine";
import {Newspaper} from "../../model/newspaper";

export class Librarymanager implements Imanager <Library> {
    library: Library[] = [];

    constructor() {
    }

    add(t: Library) {
        this.library.push(t);
    }

    delete(ID: any) {
        if (this.findindexbyID(ID) != -1) {
            this.library.splice(this.findindexbyID(ID), 1)
        } else {
            return console.log('Error!')
        }
    }

    edit(ID: any, t: Library) {
        if (this.findindexbyID(ID) != -1) {
            this.library[this.findindexbyID(ID)] = t
        } else {
            return console.log('Error!')
        }
    }

    findindexbyID(ID: any) {
        let index = -1;
        for (let i = 0; i < this.library.length; i++) {
            if (this.library[i].ID === ID) {
                index = i
            }
        }
        return index;
    }

    getList(): Library[] {
        return this.library;
    }

    findByTypeBook() {
      return this.library.filter((value) => {
            return value instanceof Book
        })
    }
    findByTypeMagazine() {
        return this.library.filter((value) => {
            return value instanceof Magazine
        })
    }
    findByTypeNewspaper() {
        return this.library.filter((value) => {
            return value instanceof Newspaper
        })
    }
}
