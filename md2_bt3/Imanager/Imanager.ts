import {Product} from "../model/Product";

export interface Iproductmanager<T> {
    add(t: T)
    getList()
    edit(ID: any, t: T)
    delete(ID: any)
    findIndexProduct(ID: any)
    findProductByName(ProductName: string)
    findProductByName(ProductName: string)
}