import {Iproductmanager} from "./Imanager";
import {Product} from "../model/Product";

export class ProductManager implements Iproductmanager<Product> {
    products: Product[] = []
    constructor() {
    }

    delete(ID: any) {
        if(this.findIndexProduct(ID) != -1) {
            this.products.splice(this.findIndexProduct(ID), 1)
        } else {
            return console.log(`Delete error!`)
        }
    }

    edit(ID: any, t: Product) {
        if(this.findIndexProduct(ID) != -1) {
            this.products[this.findIndexProduct(ID)] = t
        } else {
            console.log(`edit error!`)
        }
    }

    findIndexProduct(ID: any) {
        let index = -1;
        for (let i = 0; i < this.products.length; i++) {
            if(this.products[i].ID == ID) {
                index = i;
            }
        }
        return index
    }

    getList(): any {
        if (this.products.length !== 0) {
            return this.products
        } else {
            return 'Get list Error!'
        }

    }

    add(t: Product) {
        this.products.push(t)
    }

    findIndexProductByName(ProductName: string) {
        let index = -1
        for (let i = 0; i < this.products.length; i++) {
            if(this.products[i].ProductName == ProductName) {
                index = i;
            }
        }
        return index;
    }

    findProductByName(ProductName: string) {
        if (this.findIndexProductByName(ProductName) != -1) {
           return this.products[this.findIndexProductByName(ProductName)].getInfo()
        } else {
            return 'Error!'
        }
    }
}