export interface Dao {

    consultAll (): any;

    add (item: Object): any;

    delete (id: number): any;

    update (item: any): any;
}