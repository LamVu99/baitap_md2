import {Street} from "./Street";
import {Family} from "./Families";
import {Person} from "./Person";

let input = require('readline-sync');

let street = new Street(1, 'Hà Nội');

function main() {
    let choice = -1;
    do {
        console.log(`
    --------- Menu Khu Phố ~ Quản lý Hộ Gia Đình ------------
    1. Thêm hộ gia đình
    2. Danh sách các hộ gia đình
    3. Tìm người 
    0. Thoát
    `)
        choice = +input.question('Enter choice: ');
        switch (choice) {
            case 1:
                break;
            case 2:
                showFamily()
                break;
            case 3:
                searchPerson();
                break;
        }
    } while (choice !== 0);
}


function showFamily() {
    console.log(`
     —-------- Menu danh sách hộ gia đình —-------
    `)
    let families = street.getFamilies();
    let menu = ''
    for (let i = 0; i < families.length; i++) {
        menu += `${i + 1}. Số nhà ${families[i].id}\n`
    }
    menu += '0.Thoát'
    console.log(menu);
    let choice = +input.question('Enter choice : ');
    if (choice === 0) {
        main();
    } else {
        let familyChoice = families[choice - 1];
        showMenuPerson(familyChoice);
    }
}

function showMenuPerson(family: Family) {
    let choice = -1;
    do {
        console.log(
            ` ---------- Menu quản lý người của gia đình ${family.id} ---------
        1.Thêm người
        2.Hiển thị người
        3.Xóa người
        0.Thoát`
        )
        choice = +input.question('Enter choice: ');
        switch (choice) {
            case 1:
                addPerson(family);
                break;
            case 2:
                showPeople(family)
                break;
            case 3:
                break;
        }
    } while (choice !== 0);

}


function addPerson(family: Family) {
    let id = +input.question('Enter Id : ')
    let fullName = input.question('Enter Full Name: ')
    let age = +input.question('Enter Age : ')
    let person = new Person(id, fullName, age);
    family.addPerson(person);
}

function showPeople(family: Family) {
    let people = family.getPerson();
    for (let i = 0; i < people.length; i++) {
        console.log(people[i].getInfo());
    }
}

function searchPerson() {
    console.log('------- Tìm trẻ lạc --------')
    let idPerson = +input.question('Enter Id Find : ');
    let families = street.getFamilies();
    let check = false;

    for (let i = 0; i < families.length; i++) {
        let currentFamily = families[i];
        let people = currentFamily.getPerson()
        for (let j = 0; j < people.length; j++) {
            if (people[j].id === idPerson) {
                console.log(`${people[j].getInfo()} số nhà: ${currentFamily.id} ` )
                check = true;
            }
        }
    }

    if (!check) {
        console.log('Không tìm thấy')
    }
}

main();