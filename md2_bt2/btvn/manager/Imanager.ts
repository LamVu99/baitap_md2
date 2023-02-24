import {Library} from "../../model/library";

export interface Imanager<T> {
    add(t: T);
    findindexbyID(ID: any);
    edit(ID: any, t: T);
    delete(ID: any);
    getList(): T[];
    findByTypeBook();
    findByTypeMagazine();
    findByTypeNewspaper();
}