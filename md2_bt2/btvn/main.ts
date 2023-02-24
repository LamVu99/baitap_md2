import {Librarymanager} from "./manager/librarymanager";
import {Book} from "../model/book";
import {Magazine} from "../model/magazine";
import {Newspaper} from "../model/newspaper";

let input = require('readline-sync');
let libraryManager = new Librarymanager();

function ShowMainMenu() {
    let choice = -1
    do {
        console.log(
            `
        ---- Main Menu ----
        1.New add
        2.GetAllList
        3.Delete
        4.Get List Of Book
        5.Get List Of Magazine
        6.Get List Of Newspaper
        0.Exit
        `)
        choice = +input.question('Enter Choice: ')
        switch (choice) {
            case 1:
                ShowAddMenu()
                break;
            case 2:
                getAllList()
                break;
            case 3:
                deteleByID()
                break;
            case 4:
                ShowBook()
                break;
            case 5:
                ShowMagazine()
                break;
            case 6:
                ShowNewspaper()
                break;
            case 7:

                break;
        }
    } while (choice !== 0);
}

function ShowAddMenu() {
    let choice = -1
    do {
        console.log(
            `
        ---- Add Menu ----
        1.Add Book
        2.Add Magazine
        3.Add Newspaper
        0.Back To Main Menu
        `
        )
        choice = +input.question('Enter Choice: ')
        switch (choice) {
            case 1:
                addBook()
                break;
            case 2:
                addMagazine()
                break;
            case 3:
                addNewspaper()
                break;
            case 4:

                break;
            case 5:

                break;
        }
    } while (choice !== 0);
}

let ID = 1

function addBook() {
    console.log('-----Menu add Book------')
    let id = 'B' + ID;
    let PublishingCompany = input.question('Enter PublishingCompany: ')
    let ReleaseNumber = +input.question('ReleaseNumber: ')
    let Author = input.question('Author: ')
    let NumberOfPages = +input.question('NumberOfPages: ')
    let book: Book = new Book(id, PublishingCompany, ReleaseNumber, Author, NumberOfPages)
    libraryManager.add(book)
    console.log('Add finish !');
    return ID++
}

function addMagazine() {
    console.log('-----Menu add Magazine------')
    let id = 'M' + ID
    let PublishingCompany = input.question('Enter PublishingCompany: ')
    let ReleaseNumber = +input.question('ReleaseNumber: ')
    let NumberMagazine = +input.question('NumberMagazine: ')
    let MonthMagazine = input.question('MonthMagazine: ')
    let magazine: Magazine = new Magazine(id, PublishingCompany, ReleaseNumber, NumberMagazine, MonthMagazine)
    libraryManager.add(magazine)
    console.log('Add finish !');
    return ID++;
}

function addNewspaper() {
    console.log('-----Menu add Newspaper------')
    let id = 'N' + ID;
    let PublishingCompany = input.question('Enter PublishingCompany: ')
    let ReleaseNumber = +input.question('ReleaseNumber: ')
    let DayNewspaper = +input.question('DayNewspaper: ')
    let newspaper: Newspaper = new Newspaper(id, PublishingCompany, ReleaseNumber, DayNewspaper)
    libraryManager.add(newspaper)
    console.log('Add finish !');
    return ID++
}

function getAllList() {
    console.table(libraryManager.getList())
}

function deteleByID() {
    console.log('-----Delete By ID-----')
    let id = input.question('Enter ID: ')
    libraryManager.delete(id)
    console.log('Delete finish !')
}

function ShowBook() {
    console.table(libraryManager.findByTypeBook())
}

function ShowMagazine() {
    console.table(libraryManager.findByTypeMagazine())
}

function ShowNewspaper() {
    console.table(libraryManager.findByTypeNewspaper())
}

ShowMainMenu()